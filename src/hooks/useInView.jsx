import { useState, useEffect, useRef } from "react";

export const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

    useEffect(() => {
      console.log("running useEffect");
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2, ...options } 
    );

    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [options]);

  return [ref, isInView];
};
