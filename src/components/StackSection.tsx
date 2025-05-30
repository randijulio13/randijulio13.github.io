import { BiLogoPostgresql } from "react-icons/bi";
import { BsBootstrapFill } from "react-icons/bs";
import { DiMysql, DiRedis } from "react-icons/di";
import { FaLaravel, FaReact, FaVuejs } from "react-icons/fa";
import { RiSvelteFill, RiTailwindCssFill } from "react-icons/ri";
import { SiAdonisjs, SiDocker, SiExpress, SiGit, SiGrafana, SiJavascript, SiMinio, SiMongodb, SiNestjs, SiNextdotjs, SiNodedotjs, SiNuxtdotjs, SiPhp, SiRabbitmq, SiTypescript } from "react-icons/si";
import RevealAnimation from "./RevealAnimation";
import { FaGolang } from "react-icons/fa6";

const stacks = [{
    title: 'frontend',
    items: [
        {
            label: "Javascript",
            logo: <SiJavascript className="text-5xl text-[#f7df1e]" />
        },
        {
            label: "Typescript",
            logo: <SiTypescript className="text-5xl text-[#007acc]" />
        },
        {
            label: "React",
            logo: <FaReact className="text-5xl text-[#58c4dc]" />
        },
        {
            label: "Vue",
            logo: <FaVuejs className="text-5xl text-[#41b883]" />
        },
        {
            label: "NextJs",
            logo: <SiNextdotjs className="text-5xl text-white" />
        },
        {
            label: "NuxtJs",
            logo: <SiNuxtdotjs className="text-5xl text-[#41b883]" />
        },
        {
            label: "Svelte",
            logo: <RiSvelteFill className="text-5xl text-[#ff3e00]" />
        },
        {
            label: "Bootstrap",
            logo: <BsBootstrapFill className="text-5xl text-[#6610f2]" />
        },
        {
            label: "TailwindCSS",
            logo: <RiTailwindCssFill className="text-5xl text-[#38bdf8]" />
        },
    ]
}, {
    title: 'backend',
    items: [
        {
            label: 'PHP',
            logo: <SiPhp className="text-5xl text-[#474a8a]" />
        },
        {
            label: 'Laravel',
            logo: <FaLaravel className="text-5xl text-[#ff2d20]" />
        },
        {
            label: 'NodeJs',
            logo: <SiNodedotjs className="text-5xl text-[#3c873a]" />
        },
        {
            label: 'Express.js',
            logo: <SiExpress className="text-5xl text-white" />
        },
        {
            label: 'AdonisJs',
            logo: <SiAdonisjs className="text-5xl text-[#5a46ff]" />
        },
        {
            label: 'NestJs',
            logo: <SiNestjs className="text-5xl text-[#e0234e]" />
        },
        {
            label: "GoLang",
            logo: <FaGolang className="text-5xl text-[#00add8]" />
        },
    ]
}, {
    title: 'database',
    items: [
        {
            label: "MySQL",
            logo: <DiMysql className="text-5xl text-[#00758f]" />
        },
        {
            label: "MongoDB",
            logo: <SiMongodb className="text-5xl text-[#00de64]" />
        },
        {
            label: "PostgreSQL",
            logo: <BiLogoPostgresql className="text-5xl text-[#0064a5]" />
        },
    ]
}, {
    title: 'tools',
    items: [
        {
            label: "Git",
            logo: <SiGit className="text-5xl text-[#f1502f]" />
        },
        {
            label: "Docker",
            logo: <SiDocker className="text-5xl" />
        },
        {
            label: "RabbitMQ",
            logo: <SiRabbitmq className="text-5xl text-[#f60]" />
        },
        {
            label: "Redis",
            logo: <DiRedis className="text-5xl text-[#a41e11]" />
        },
        {
            label: "Min.io",
            logo: <SiMinio className="text-5xl" />
        },
        {
            label: "Grafana",
            logo: <SiGrafana className="text-5xl text-[#f60]" />
        },
    ]
}]

const StackSection = () => {
    return (
        <div className="py-16 space-y-16">
            <RevealAnimation slide>

                <div className="flex items-center gap-2">
                    <FaReact className="animate-spin [animation-duration:10s] text-4xl" /><h4 className="uppercase text-xl text-surface">Technical Skill & Knowledge</h4>
                </div>
            </RevealAnimation>
            <div className="flex flex-col space-y-32 lg:space-y-32">
                {stacks.map((stack, index) =>
                    <div className="grid grid-cols-5 space-y-16 lg:space-y-0" key={index}>
                        <div className="col-span-5 lg:col-span-2">

                            <div className="flex">
                                <RevealAnimation slide>
                                    <span className="uppercase font-[Anton] text-5xl text-surface">{stack.title}</span>
                                </RevealAnimation>
                            </div>
                        </div>
                        <div className="col-span-5 lg:col-span-3">
                            <div className="flex gap-12 flex-wrap">
                                {stack.items.map((item, index) => {
                                    return <RevealAnimation slide>
                                        <div className="flex gap-2 items-center" key={index}>
                                            {item.logo}
                                            <span className="text-2xl lg:text-3xl">{item.label}</span>
                                        </div>
                                    </RevealAnimation>
                                })}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default StackSection