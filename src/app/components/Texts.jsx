"use client";
import { useRef, useState, useEffect } from "react";
import items from "../data";

export default function Tabs() {
  const sectionRefs = useRef({});
  const tabsRef = useRef(null);
  const tabRefs = useRef({});
  const [active, setActive] = useState(items[0].id);

  // -------------------------------
  //   Scroll to a section when clicking tab
  // -------------------------------
  const handleClick = (id) => {
    setActive(id);

    const el = sectionRefs.current[id];
    if (!el) return;

    const y = window.scrollY + el.getBoundingClientRect().top - 120;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  // --------------------------------
  //   Detect active tab on scroll
  // --------------------------------
  useEffect(() => {
    const handleScroll = () => {
      let current = active;

      items.forEach((item) => {
        const el = sectionRefs.current[item.id];
        if (!el) return;

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight / 2) {
          current = item.id;
        }
      });

      if (current !== active) {
        setActive(current);

        // bring tab smoothly into view (NO JUMP!)
        const tabEl = tabRefs.current[current];
        if (tabEl && tabsRef.current) {
          const container = tabsRef.current;
          const left =
            tabEl.offsetLeft -
            (container.clientWidth / 2 - tabEl.clientWidth / 2);

          container.scrollTo({
            left,
            behavior: "smooth",
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  return (
    <div className="w-full">
      {/* Tabs */}
      <div
        ref={tabsRef}
        className="flex overflow-x-auto hide-scrollbar gap-10 px-5 py-3 sticky top-5 bg-white z-20"
      >
        {items.map((item) => (
          <button
            key={item.id}
            ref={(el) => (tabRefs.current[item.id] = el)}
            onClick={() => handleClick(item.id)}
            className={`whitespace-nowrap border-b-2 pb-2 text-lg font-medium transition-all ${
              active === item.id
                ? "text-blue-600 border-blue-600"
                : "text-gray-600 border-transparent"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-10 space-y-24">
        {items.map((item) => (
          <div
            key={item.id}
            ref={(el) => (sectionRefs.current[item.id] = el)}
            className="scroll-mt-24"
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
