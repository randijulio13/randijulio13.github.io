import { FaDownload } from "react-icons/fa"
import RevealAnimation from "./RevealAnimation"

const yearOfExperience = new Date().getFullYear() - 2021

const profile = {
    name: "Randi Yulio Fajri",
    email: "randijulio13@gmail.com",
    info: [
        { value: yearOfExperience, label: "Years of Experience" },
        { value: 10, label: "Completed Projects" },
    ]
}

const HeroSection = () => {



    return (

        <div className="grid lg:grid-cols-2 h-dvh gap-4">
            <div className="flex items-end lg:items-center">
                <div>
                    <div className="flex">
                        <RevealAnimation color="danger" slide>
                            <h1 className="uppercase font-black text-7xl font-[Anton] tracking-wide text-accent">Backend</h1>
                        </RevealAnimation>
                    </div>
                    <div className="flex">
                        <RevealAnimation color="danger" slide>
                            <h1 className="uppercase font-black text-7xl font-[Anton] tracking-wide text-surface ms-8">Engineer</h1>
                        </RevealAnimation>
                    </div>
                    <RevealAnimation slide>
                        <p className="my-4">
                            Hi! I'm <strong>{profile.name}</strong>. A product-oriented Backend Engineer / Fullstack Developer with {yearOfExperience}+ years of experience architecting scalable backend services, event-driven distributed systems, and high-throughput microservices — adept at translating complex business requirements into high-performance, fault-tolerant technical architectures.
                        </p>
                    </RevealAnimation>
                    <RevealAnimation slide>
                        <div className="h-10 flex items-center">
                            <a href="./cv.pdf" download="CV_RANDI_YULIO_FAJRI.pdf" className="bg-accent text-surface text-lg ps-7 pe-8 py-2 cursor-pointer duration-200 hover:pe-14 hover:ps-12 uppercase font-[Anton] flex items-center justify-center gap-2">
                                <FaDownload />
                                resume
                            </a>
                        </div>
                    </RevealAnimation>

                </div>
            </div>
            <div>
                <div className="flex flex-col items-start lg:items-end lg:h-full w-full gap-8 justify-center">
                    {profile.info.map((info, index) => (
                        <div key={index} className="flex flex-col items-center lg:items-end duration-200 hover:scale-105">
                            <RevealAnimation slide>
                                <h1 className="text-accent text-3xl font-bold font-[Anton]">{info.value}+</h1>
                                <p className="text-surface font-light">{info.label}</p>
                            </RevealAnimation>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default HeroSection