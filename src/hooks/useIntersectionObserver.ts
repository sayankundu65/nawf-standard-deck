"use client";
import { useEffect, useRef, useState, RefObject } from "react";

/**
 * Returns [ref, isIntersecting].
 * The element referenced by `ref` is observed; `isIntersecting` becomes true
 * once it enters the viewport (and optionally stays false after it leaves).
 */
export function useIntersectionObserver<T extends Element>(
  options: IntersectionObserverInit = {}
): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, { threshold: 0.3, ...options });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, isIntersecting];
}
