import Lottie from "lottie-react"
import SectionWrapper from "./components/section-wrapper"
import LottieScroll from "./assets/lottie-scroll.json"
import { useRef } from "react"
import Snowfall from 'react-snowfall'
import HeroSection from "./components/HeroSection"
import QuotesSection from "./components/QuotesSection"
import StackSection from "./components/StackSection"
import ExperienceSection from "./components/ExperienceSection"
import ScrollIndicator from "./components/ScrollIndicator"
import FooterSection from "./components/FooterSection"


const Home = () => {
    const mainRef = useRef<HTMLDivElement>(null);



    return (
        <div ref={mainRef} className="scroll-smooth snap-y snap-mandatory h-screen overflow-y-auto bg-primary text-foreground no-scrollbar">
            <ScrollIndicator mainRef={mainRef} />
            <Snowfall
                color="white"
                snowflakeCount={10}
            />
            <Lottie animationData={LottieScroll} loop={true} className='absolute z-10 opacity-1 top-[50%] start-[50%] translate-[-50%] h-[100vh] pointer-events-none' />
            <SectionWrapper>
                <HeroSection />
            </SectionWrapper>
            <SectionWrapper>
                <QuotesSection />
            </SectionWrapper>
            <SectionWrapper>
                <StackSection />
            </SectionWrapper>
            <SectionWrapper>
                <ExperienceSection />
            </SectionWrapper>
            <FooterSection />
        </div>
    )
}

export default Home