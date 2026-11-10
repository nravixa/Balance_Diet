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

    // Initialize Butter-Smooth Lenis Inertial Scrolling (like horeca-social.com)
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.5,
    });

    window.__lenis = lenis;

    // Enforce manual scroll restoration and guarantee fresh top landing on reload
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

    const resetToHero = () => {
      window.scrollTo(0, 0);
      lenis.scrollTo(0, { immediate: true });
      const hero = document.getElementById("hero");
      if (hero) {
        hero.scrollIntoView({ behavior: "instant" });
      }
    };

    resetToHero();
    const timer = setTimeout(resetToHero, 60);

    // Synchronize Lenis scroll updates directly with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Frame-perfect render tick using GSAP ticker
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // Smooth Anchor Scroll Interceptor for Lenis
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]');
      if (target) {
        const href = target.getAttribute("href");
        if (href && href.length > 1) {
          const dest = document.querySelector(href);
          if (dest) {
            e.preventDefault();
            lenis.scrollTo(dest as HTMLElement, { offset: -70, duration: 1.3 });
          }
        }
      }
    };
    document.addEventListener("click", handleAnchorClick);

    // =========================================================================
    // MASTER GSAP + LENIS OVERLOAD PARALLAX & ANIMATION ENGINE (HORECA-SOCIAL)
    // Deferred until after React 19 hydration has fully finished across the tree
    // =========================================================================
    let ctx: gsap.Context | undefined;
    const initTimer = setTimeout(() => {
      ctx = gsap.context(() => {
        // ---------------------------------------------------------------------
        // 1. Multi-Plane Background Parallax ([data-parallax])
        // ---------------------------------------------------------------------
        const parallaxEls = document.querySelectorAll<HTMLElement>("[data-parallax]");
        parallaxEls.forEach((el) => {
          const speed = parseFloat(el.dataset.parallaxSpeed || "0.25");
          const scale = parseFloat(el.dataset.parallaxScale || "1.08");

          gsap.fromTo(
            el,
            { yPercent: -speed * 30, scale: scale },
            {
              yPercent: speed * 30,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement || el,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            }
          );
        });

        // ---------------------------------------------------------------------
        // 2. Floating Multiplane Elements ([data-float] & [data-speed])
        // ---------------------------------------------------------------------
        const floatingEls = document.querySelectorAll<HTMLElement>("[data-float], [data-speed]");
        floatingEls.forEach((el, index) => {
          const speed = parseFloat(el.dataset.speed || (index % 2 === 0 ? "0.35" : "-0.25"));
          const rotateSpeed = parseFloat(el.dataset.rotateSpeed || "8");

          // Scroll-driven scrub parallax
          gsap.to(el, {
            y: speed * 120,
            rotation: rotateSpeed * (speed > 0 ? 1 : -1),
            ease: "none",
            scrollTrigger: {
              trigger: el.closest("section") || el.parentElement || el,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          });

          // Continuous gentle ambient idle breathing float
          if (el.hasAttribute("data-float")) {
            gsap.to(el, {
              y: "+=12",
              rotation: "+=4",
              duration: 3 + (index % 3) * 0.7,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
          }
        });

        // ---------------------------------------------------------------------
        // 3. Editorial Text & Heading In & Out Scroll Animation ([data-reveal-heading])
        // (Text only: purely in/out on scroll, NO hover animation)
        // ---------------------------------------------------------------------
        const headingEls = document.querySelectorAll<HTMLElement>("[data-reveal-heading]");
        headingEls.forEach((heading) => {
          const lines = heading.querySelectorAll<HTMLElement>(".reveal-line");
          const targets = lines.length > 0 ? lines : [heading];

          gsap.fromTo(
            targets,
            {
              y: 45,
              opacity: 0,
              rotateX: 10,
              transformOrigin: "0% 50% -40px",
            },
            {
              y: 0,
              opacity: 1,
              rotateX: 0,
              duration: 0.95,
              stagger: 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: heading,
                start: "top 92%",
                end: "bottom 8%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        });

        // ---------------------------------------------------------------------
        // 4. Subtitles & Paragraph In & Out Scroll Animation ([data-reveal-text])
        // (Text only: purely in/out on scroll, NO hover animation)
        // ---------------------------------------------------------------------
        const textEls = document.querySelectorAll<HTMLElement>("[data-reveal-text]");
        textEls.forEach((text) => {
          gsap.fromTo(
            text,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: text,
                start: "top 92%",
                end: "bottom 8%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        });

        // ---------------------------------------------------------------------
        // 5. Staggered Bento Cards & Grids In & Out Scroll Animation ([data-reveal-group] & [data-reveal-card])
        // ---------------------------------------------------------------------
        const groups = document.querySelectorAll<HTMLElement>("[data-reveal-group]");
        groups.forEach((group) => {
          const cards = group.querySelectorAll<HTMLElement>("[data-reveal-card]");
          if (cards.length > 0) {
            gsap.fromTo(
              cards,
              {
                opacity: 0,
                y: 50,
                scale: 0.95,
              },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.85,
                stagger: 0.08,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: group,
                  start: "top 88%",
                  end: "bottom 10%",
                  toggleActions: "play reverse play reverse",
                },
              }
            );
          }
        });

        // Standalone cards not inside a group
        const standaloneCards = document.querySelectorAll<HTMLElement>(
          "[data-reveal-card]:not([data-reveal-group] [data-reveal-card])"
        );
        standaloneCards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 40, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.85,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        });

        // ---------------------------------------------------------------------
        // 6. Dynamic Column/Card Continuous Scrub Parallax ([data-scrub-y])
        // ---------------------------------------------------------------------
        const scrubEls = document.querySelectorAll<HTMLElement>("[data-scrub-y]");
        scrubEls.forEach((el) => {
          const offset = parseFloat(el.dataset.scrubY || "20");
          gsap.fromTo(
            el,
            { y: -offset },
            {
              y: offset,
              ease: "none",
              scrollTrigger: {
                trigger: el.closest("section") || el.parentElement || el,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            }
          );
        });

        // ---------------------------------------------------------------------
        // 7. Card Image Parallax Window ([data-img-zoom])
        // ---------------------------------------------------------------------
        const zoomImgs = document.querySelectorAll<HTMLElement>("[data-img-zoom]");
        zoomImgs.forEach((img) => {
          gsap.fromTo(
            img,
            { scale: 1.15, yPercent: -8 },
            {
              scale: 1.02,
              yPercent: 8,
              ease: "none",
              scrollTrigger: {
                trigger: img.parentElement || img,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.3,
              },
            }
          );
        });

        // ---------------------------------------------------------------------
        // 8. In & Out Interactive Hover Animation on Every Card ([data-reveal-card], .glass-panel, .glass-strip)
        // ---------------------------------------------------------------------
        const allCards = document.querySelectorAll<HTMLElement>(
          "[data-reveal-card], [data-tilt], .glass-panel, .glass-strip"
        );
        const isTouch = window.matchMedia("(pointer: coarse)").matches;

        if (!isTouch) {
          allCards.forEach((card) => {
            // Stop 3D tilt/rotation/shadows on footer, order form or elements explicitly marked with data-no-tilt
            if (
              card.dataset.tilt === "false" ||
              card.hasAttribute("data-no-tilt") ||
              card.id === "order-form" ||
              card.closest("#order-form") ||
              card.closest("footer")
            ) {
              return;
            }

            const handleMouseEnter = (e: MouseEvent) => {
              e.stopPropagation();
              gsap.to(card, {
                y: -6,
                scale: 1.02,
                boxShadow: "0 25px 45px -10px rgba(0,0,0,0.65), 0 0 25px rgba(131,190,66,0.15)",
                duration: 0.35,
                ease: "power2.out",
              });
            };

            const handleMouseMove = (e: MouseEvent) => {
              e.stopPropagation();
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;
              const deltaX = (x - centerX) / centerX;
              const deltaY = (y - centerY) / centerY;

              gsap.to(card, {
                rotateY: deltaX * 6,
                rotateX: -deltaY * 6,
                transformPerspective: 850,
                duration: 0.3,
                ease: "power2.out",
              });
            };

            const handleMouseLeave = (e: MouseEvent) => {
              e.stopPropagation();
              gsap.to(card, {
                y: 0,
                rotateX: 0,
                rotateY: 0,
                scale: 1,
                boxShadow: "none",
                duration: 0.5,
                ease: "power2.out",
              });
            };

            card.addEventListener("mouseenter", handleMouseEnter);
            card.addEventListener("mousemove", handleMouseMove);
            card.addEventListener("mouseleave", handleMouseLeave);
          });

          // Ensure order form card stops rotating and stays completely stable when user fills it out
          const orderFormEl = document.getElementById("order-form");
          if (orderFormEl) {
            const formCard = orderFormEl.querySelector<HTMLElement>(".glass-panel, [data-reveal-card]");
            if (formCard) {
              const stabilizeForm = () => {
                gsap.to(formCard, {
                  rotateX: 0,
                  rotateY: 0,
                  rotation: 0,
                  scale: 1,
                  duration: 0.2,
                  ease: "power1.out",
                });
              };
              orderFormEl.addEventListener("focusin", stabilizeForm);
              orderFormEl.addEventListener("mouseenter", stabilizeForm);
            }
          }
        }

        // Refresh triggers once all DOM is hydrated
        ScrollTrigger.refresh();
      });
    }, 180);

    return () => {
      clearTimeout(timer);
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
