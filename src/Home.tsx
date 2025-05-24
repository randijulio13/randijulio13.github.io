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
import SplashScreen from "./components/SplashScreen"

const Home = () => {
    const mainRef = useRef<HTMLDivElement>(null);



    return (
        <>
            <SplashScreen />
            <div ref={mainRef} className="scroll-smooth snap-y snap-mandatory h-screen overflow-y-auto bg-primary text-foreground no-scrollbar">
                <ScrollIndicator mainRef={mainRef} />
                <Snowfall
                    color="white"
                    snowflakeCount={10}
                />
                <Lottie animationData={LottieScroll} loop={true} className='absolute z-10 opacity-1 inset-0 h-dvh pointer-events-none' />
                <SectionWrapper>
                    <HeroSection />
                </SectionWrapper>
                <SectionWrapper>
                    <QuotesSection />
                </SectionWrapper>
                <SectionWrapper>
                    <StackSection />
                    <ExperienceSection />
                </SectionWrapper>
                <FooterSection />
            </div>
        </>
    )
}

export default Home