import RevealAnimation from "./RevealAnimation"

const QuotesSection = () => {
    return (
        <div className="flex justify-center items-center h-dvh font-light font-roboto text-2xl text-center lg:text-6xl text-surface">
            <RevealAnimation slide>
                I believe in a user-centered design and engineering approach, ensuring that every solution I build—frontend to backend—is crafted to meet the real needs of its users.
            </RevealAnimation>
        </div>
    )
}

export default QuotesSection