
interface ScrollIndicatorProps {
    progress: number
}

const ScrollIndicator = ({ progress }: ScrollIndicatorProps) => {

    return (
        <div className="absolute top-[50%] translate-y-[-50%] end-10 z-40 hidden lg:block">
            <div className="w-1.5 bg-white/10 rounded-full h-24 mb-4 overflow-hidden">
                <div className={`bg-accent w-1.5 rounded-full`} style={{ height: progress + '%' }}></div>
            </div>
        </div>
    )
}

export default ScrollIndicator