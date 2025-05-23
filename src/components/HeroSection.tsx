import RevealAnimation from "./RevealAnimation"

const HeroSection = () => {


    const profile = {
        name: "Randi Yulio Fajri",
        email: "randijulio13@gmail.com",
        info: [
            { value: 4, label: "Years of Experience" },
            { value: 10, label: "Completed Projects" },
        ]
    }

    return (

        <div className="grid lg:grid-cols-2 h-dvh gap-4">
            <div className="flex items-center">
                <div>
                    <div className="flex">
                        <RevealAnimation color="danger" slide>
                            <h1 className="uppercase font-black text-7xl font-[Anton] tracking-wide text-danger">FullStack</h1>
                        </RevealAnimation>
                    </div>
                    <div className="flex">
                        <RevealAnimation color="danger" slide>
                            <h1 className="uppercase font-black text-7xl font-[Anton] tracking-wide text-surface ms-8">Developer</h1>
                        </RevealAnimation>
                    </div>
                    <RevealAnimation slide>
                        <p className="my-4">
                            Hi! I'm <strong>Randi</strong>. A passionate Fullstack Developer with 4+ years of experience in building scalable, high-performance, and user-centric web applications — from crafting seamless frontend interfaces to developing robust backend systems.
                        </p>
                    </RevealAnimation>
                    <RevealAnimation slide>
                        <div className="h-10 flex items-center">
                            <a href="../../public/cv.pdf" download="CV_RANDI_YULIO_FAJRI.pdf" className="bg-danger text-surface text-lg px-8 py-2 cursor-pointer duration-200 hover:px-14 uppercase font-[Anton]">resume</a>
                        </div>
                    </RevealAnimation>

                </div>
            </div>
            <div>
                <div className="flex flex-col items-start lg:items-end lg:h-full w-full gap-8 justify-center">
                    {profile.info.map((info, index) => (
                        <RevealAnimation slide>
                            <div key={index} className="flex flex-col items-center lg:items-end duration-200 hover:scale-105">
                                <h1 className="text-danger text-3xl font-bold font-[Anton]">{info.value}+</h1>
                                <p className="text-surface font-light">{info.label}</p>
                            </div>
                        </RevealAnimation>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default HeroSection