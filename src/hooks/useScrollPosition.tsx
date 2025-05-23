import { useEffect, useState } from "react";

export function useScrollPosition(ref: React.RefObject<HTMLElement | null>) {
    const [scrollPosition, setScrollPosition] = useState({
        x: 0,
        y: 0,
        isOnTop: true,
    });

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const handleScroll = () => {
            const x = element.scrollLeft;
            const y = element.scrollTop;
            setScrollPosition({
                x,
                y,
                isOnTop: y < 40,
            });
        };

        element.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Initial call

        return () => {
            element.removeEventListener("scroll", handleScroll);
        };
    }, [ref]);

    return scrollPosition;
}
