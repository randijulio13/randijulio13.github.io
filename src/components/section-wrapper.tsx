
interface SectionWrapperProps {
    children: React.ReactNode
}

const SectionWrapper = ({ children }: SectionWrapperProps) => {
    return (
        <div className="px-4 lg:px-52 snap-start min-h-dvh relative">
            {children}
        </div>
    )
}

export default SectionWrapper