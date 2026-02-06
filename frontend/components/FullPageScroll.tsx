"use client";

import React, { useRef, useState, useEffect } from "react";
import "./FullPageScroll.css";

type Slide = {
  id: string;
  color: string;
  title: string;
  content: React.ReactNode;
};

type FullPageScrollProps = {
  slides: Slide[];
};

const FullPageScroll = ({ slides }: FullPageScrollProps) => {
  const containerRef = useRef(null);
  const [activeSlideId, setActiveSlideId] = useState<string>(
    slides[0]?.id || "",
  );

  const scrollToSlide = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current as HTMLElement;
      const sections = container.querySelectorAll(".snap-section");

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          setActiveSlideId(section.id);
        }
      });
    };

    const container = containerRef.current as HTMLElement | null;
    container?.addEventListener("scroll", handleScroll);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-wrapper">
      {/* Navigációs pöttyök */}
      <nav className="dot-navigation">
        {slides.map((slide) => (
          <button
            key={`nav-${slide.id}`}
            className="nav-dot"
            onClick={() => scrollToSlide(slide.id)}
            title={`Go to ${slide.title}`}
            aria-label={`Go to ${slide.title}`}
          />
        ))}
      </nav>

      {/* Görgethető konténer */}
      <main className="snap-container" ref={containerRef}>
        {slides.map((slide) => (
          <section
            key={slide.id}
            id={slide.id}
            className="snap-section"
            // style={{ backgroundColor: slide.color }}
          >
            {slide.content}
          </section>
        ))}
      </main>
    </div>
  );
};

export default FullPageScroll;
