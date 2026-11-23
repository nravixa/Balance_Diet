"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const isTouchDevice =
      typeof window !== "undefined" &&
      ("ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches);

    // Initialize Lenis: smooth wheel scrolling for desktop, native touch for mobile/tablet
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      syncTouch: false, // DO NOT hijack native touch scrolling on mobile/tablet
    });

    window.__lenis = lenis;

    // Manual scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    window.scrollTo(0, 0);
    lenis.scrollTo(0, { immediate: true });

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Synchronize Lenis scroll updates directly with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Frame-perfect render tick using GSAP ticker
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    // Restore proper lag smoothing to prevent stutter cascades
    gsap.ticker.lagSmoothing(500, 33);

    // Smooth Anchor Scroll Interceptor for Lenis
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]');
      if (target) {
        const href = target.getAttribute("href");
        if (href && href.length > 1) {
          const dest = document.querySelector(href);
          if (dest) {
            e.preventDefault();
            lenis.scrollTo(dest as HTMLElement, { offset: -70, duration: 1.0 });
          }
        }
      }
    };
    document.addEventListener("click", handleAnchorClick);

    // =========================================================================
    // PERFORMANCE-OPTIMIZED ANIMATION & REVEAL ENGINE
    // Runs after hydration; uses once: true and lightweight transforms
    // =========================================================================
    let ctx: gsap.Context | undefined;
    const initTimer = setTimeout(() => {
      ctx = gsap.context(() => {
        // 1. Multi-Plane Background Parallax (Desktop Only)
        if (!isTouchDevice && window.innerWidth >= 1024) {
          const parallaxEls = document.querySelectorAll<HTMLElement>("[data-parallax]");
          parallaxEls.forEach((el) => {
            const speed = parseFloat(el.dataset.parallaxSpeed || "0.15");

            gsap.fromTo(
              el,
              { yPercent: -speed * 20 },
              {
                yPercent: speed * 20,
                ease: "none",
                scrollTrigger: {
                  trigger: el.parentElement || el,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              }
            );
          });
        }

        // 2. Editorial Text & Heading Entrance (play once, clean 2D fade-up)
        const headingEls = document.querySelectorAll<HTMLElement>("[data-reveal-heading]");
        headingEls.forEach((heading) => {
          const lines = heading.querySelectorAll<HTMLElement>(".reveal-line");
          const targets = lines.length > 0 ? lines : [heading];

          gsap.fromTo(
            targets,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              stagger: 0.06,
              ease: "power2.out",
              scrollTrigger: {
                trigger: heading,
                start: "top 92%",
                once: true,
              },
            }
          );
        });

        // 3. Subtitles & Paragraph Entrance (play once)
        const textEls = document.querySelectorAll<HTMLElement>("[data-reveal-text]");
        textEls.forEach((text) => {
          gsap.fromTo(
            text,
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: text,
                start: "top 92%",
                once: true,
              },
            }
          );
        });

        // 4. Staggered Bento Cards Entrance (play once)
        const groups = document.querySelectorAll<HTMLElement>("[data-reveal-group]");
        groups.forEach((group) => {
          const cards = group.querySelectorAll<HTMLElement>("[data-reveal-card]");
          if (cards.length > 0) {
            gsap.fromTo(
              cards,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.05,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: group,
                  start: "top 90%",
                  once: true,
                },
              }
            );
          }
        });

        // Standalone cards not inside a group (play once)
        const standaloneCards = document.querySelectorAll<HTMLElement>(
          "[data-reveal-card]:not([data-reveal-group] [data-reveal-card])"
        );
        standaloneCards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 25 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 92%",
                once: true,
              },
            }
          );
        });

        // Refresh triggers once all DOM is hydrated
        ScrollTrigger.refresh();
      });
    }, 120);

    return () => {
      clearTimeout(initTimer);
      document.removeEventListener("click", handleAnchorClick);
      if (ctx) ctx.revert();
      gsap.ticker.remove(tickerCallback);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
