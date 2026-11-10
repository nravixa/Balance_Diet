"use client";

import { useEffect, useRef } from "react";

/**
 * AutoSectionSnapper
 * 
 * Automatically aligns the viewport to the nearest section when a user stops
 * scrolling at a random position for 3 consecutive seconds (3000ms).
 * 
 * Safety features:
 * - Cancels immediately on any user input (touch, wheel, scroll, keydown, click).
 * - Pauses if user has an input field, textarea, or form control focused.
 * - Pauses if drawer, cart, or modal is open.
 * - Avoids disruptive jumps when user is reading content in tall sections.
 * - Leaves clearance for the floating top navbar pill.
 */
export function AutoSectionSnapper() {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isAutoScrollingRef = useRef<boolean>(false);

  useEffect(() => {
    const NAVBAR_CLEARANCE = 68; // Clearance for top floating pill navbar
    const IDLE_TIME_MS = 3000; // 3 seconds delay requested by user

    const handleUserInteraction = () => {
      // If user starts interacting during auto-scroll, release lock
      if (isAutoScrollingRef.current) {
        isAutoScrollingRef.current = false;
      }

      // Reset the 3-second idle timer
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        performSectionSnap();
      }, IDLE_TIME_MS);
    };

    const performSectionSnap = () => {
      // 1. Safety Check: Active form inputs or text editing
      const activeEl = document.activeElement;
      if (
        activeEl &&
        (activeEl.tagName === "INPUT" ||
          activeEl.tagName === "TEXTAREA" ||
          activeEl.tagName === "SELECT" ||
          activeEl.getAttribute("contenteditable") === "true")
      ) {
        return;
      }

      // 2. Safety Check: Modal or Drawer open (body locked)
      if (
        document.body.style.overflow === "hidden" ||
        document.querySelector('[data-drawer-open="true"]')
      ) {
        return;
      }

      // 3. Find all candidate snap sections
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>('[data-snap-section="true"]')
      );

      if (sections.length === 0) return;

      const viewportHeight = window.innerHeight;
      const currentScrollY = window.scrollY;
      const maxScrollY =
        document.documentElement.scrollHeight - viewportHeight;

      // If already at the very top or very bottom, do not snap
      if (currentScrollY < 40) return;
      if (currentScrollY > maxScrollY - 40) return;

      // 4. Calculate visibility of each section in the viewport
      let dominantSection: HTMLElement | null = null;
      let maxVisibleHeight = -1;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(viewportHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight;
          dominantSection = section;
        }
      }

      if (!dominantSection) return;

      const rect = dominantSection.getBoundingClientRect();

      // If user is comfortably reading deep inside a tall section (not near boundaries), don't disrupt
      if (
        dominantSection.offsetHeight > viewportHeight * 1.35 &&
        rect.top < -300 &&
        rect.bottom > viewportHeight + 200
      ) {
        return;
      }

      // 5. Determine ideal target position
      let targetY: number;

      if (dominantSection.id === "hero") {
        targetY = 0;
      } else {
        // Position section top right beneath the navbar
        const sectionTopDoc =
          dominantSection.getBoundingClientRect().top + window.scrollY;
        targetY = Math.max(0, sectionTopDoc - NAVBAR_CLEARANCE);
      }

      // 6. Only snap if user is off-alignment by more than threshold
      const distance = Math.abs(currentScrollY - targetY);
      if (distance < 28) {
        return; // Already cleanly aligned
      }

      // 7. Smoothly glide to the right place
      isAutoScrollingRef.current = true;
      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });

      // Release lock after smooth scroll settles
      setTimeout(() => {
        isAutoScrollingRef.current = false;
      }, 950);
    };

    // Attach listeners
    window.addEventListener("scroll", handleUserInteraction, { passive: true });
    window.addEventListener("wheel", handleUserInteraction, { passive: true });
    window.addEventListener("touchstart", handleUserInteraction, { passive: true });
    window.addEventListener("touchmove", handleUserInteraction, { passive: true });
    window.addEventListener("keydown", handleUserInteraction, { passive: true });

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      window.removeEventListener("scroll", handleUserInteraction);
      window.removeEventListener("wheel", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
      window.removeEventListener("touchmove", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    };
  }, []);

  return null;
}

