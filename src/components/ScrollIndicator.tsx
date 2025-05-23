import { useEffect, useState, type RefObject } from "react";

interface ScrollIndicatorProps {
    mainRef: RefObject<HTMLDivElement | null>
}

const ScrollIndicator = ({ mainRef }: ScrollIndicatorProps) => {

    const [scrollWidth, setScrollWidth] = useState(0);

    useEffect(() => {
        const element = mainRef.current;
        if (!element) return;

        const handleScroll = () => {
            const scrollTop = element.scrollTop;
            const scrollHeight = element.scrollHeight - element.clientHeight;
            const scrolled = (scrollTop / scrollHeight) * 100;
            setScrollWidth(scrolled);
        };

        element.addEventListener("scroll", handleScroll);
        return () => {
            element.removeEventListener("scroll", handleScroll);
        };
    }, [mainRef]);

    return (
        <div className="absolute top-[50%] translate-y-[-50%] end-10 z-40 hidden lg:block">
            <div className="w-1.5 bg-secondary rounded-full h-24 mb-4 overflow-hidden">
                <div className={`bg-accent w-1.5 rounded-full`} style={{ height: Math.ceil(scrollWidth) + '%' }}></div>
            </div>
        </div>
    )
}

export default ScrollIndicator