import { useMotionValueEvent, useScroll } from "motion/react";
import { useState, type RefObject } from "react";

interface ScrollIndicatorProps {
    mainRef: RefObject<HTMLDivElement | null>
}

const ScrollIndicator = ({ mainRef }: ScrollIndicatorProps) => {

    const [scrollWidth, setScrollWidth] = useState(0);

    const scroll = useScroll({
        container: mainRef,
    })

    useMotionValueEvent(scroll.scrollYProgress, "change", (latest) => {
        setScrollWidth(latest * 100)
    })

    return (
        <div className="absolute top-[50%] translate-y-[-50%] end-10 z-40 hidden lg:block">
            <div className="w-1.5 bg-white/10 rounded-full h-24 mb-4 overflow-hidden">
                <div className={`bg-accent w-1.5 rounded-full`} style={{ height: Math.ceil(scrollWidth) + '%' }}></div>
            </div>
        </div>
    )
}

export default ScrollIndicator