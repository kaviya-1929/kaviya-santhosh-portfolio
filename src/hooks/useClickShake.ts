import { useCallback, useRef } from "react";

/**
 * Adds a brief shake animation to the clicked element.
 * Usage: const onClick = useClickShake();  <div onClick={onClick} />
 */
export const useClickShake = () => {
  const lock = useRef(false);
  return useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    if (lock.current) return;
    lock.current = true;
    el.classList.remove("shake");
    // force reflow so the animation can replay
    void el.offsetWidth;
    el.classList.add("shake");
    window.setTimeout(() => {
      el.classList.remove("shake");
      lock.current = false;
    }, 600);
  }, []);
};
