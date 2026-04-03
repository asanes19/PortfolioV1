import { useEffect, useState } from "react";

const useActiveSection = (sectionIds) => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sectionElements = sectionIds
      .map((id) => {
        const el = document.getElementById(id);
        return el ? { id, el } : null;
      })
      .filter(Boolean); // remove nulls

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the entry is intersecting within our rootMargin zone
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        // Detection happens when the section crosses the 30% mark from the top
        rootMargin: "-30% 0px -65% 0px",
        threshold: 0,
      }
    );

    sectionElements.forEach(({ el }) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
};

export default useActiveSection;
