import { FaReact } from "react-icons/fa"
import RevealAnimation from "./RevealAnimation"


const experiences = [
    {
        "title": "Frontend",
        "status": "Fulltime",
        "company": "OXY Creative",
        "location": "South Jakarta, Indonesia",
        "description": "Led the development of a web-based inventory management interface using Next.js, ensuring usability and responsiveness. Collaborated with QA and stakeholders for iterative feature improvements. Implemented a complete infrastructure observability system using modern monitoring tools and containerized deployment.",
        "startDate": "Sep 2024",
        "endDate": "Present"
    },
    {
        "title": "Fullstack Developer",
        "status": "Fulltime",
        "company": "PT. Immobi Solusi Prima",
        "location": "South Jakarta, Indonesia",
        "description": "Built dynamic, component-based user interfaces for an internal dashboard platform using Next.js and Ant Design. Translated UI/UX mockups into responsive implementations. Developed features including iframe integration, SSO, and access control mechanisms for secure and seamless user experience.",
        "startDate": "Mar 2024",
        "endDate": "Jun 2025"
    },
    {
        "title": "Web Developer",
        "status": "Fulltime",
        "company": "PT. Trisan Esa Cipta",
        "location": "Palembang, Indonesia",
        "description": "Developed an internal system for managing property development workflows, covering catalogs, construction progress, and sales. Built modules for inventory tracking, payroll scheduling, and procurement. Ensured consistency and integrity across multiple departments through well-defined backend logic.",
        "startDate": "Mar 2024",
        "endDate": "Apr 2025"
    },
    {
        "title": "Web Engineer",
        "status": "Fulltime",
        "company": "OXY Creative",
        "location": "South Jakarta, Indonesia",
        "description": "Engineered identity verification and onboarding solutions with civil registry and credit checking integrations. Designed asynchronous microservices for large-scale data processing and duplication detection. Prioritized scalability and fault tolerance in high-volume environments.",
        "startDate": "Feb 2022",
        "endDate": "Mar 2024"
    },
    {
        "title": "Fullstack Developer",
        "status": "Fulltime",
        "company": "PT. Hedo Global Technology",
        "location": "Palembang, Indonesia",
        "description": "Built and maintained a warehouse management system with features like inventory tracking, order processing, and reporting. Synchronized stock data in real-time with external sales platforms. Optimized legacy backend systems for better performance and maintainability.",
        "startDate": "Feb 2021",
        "endDate": "Feb 2022"
    }
]




const ExperienceSection = () => {
    return (
        <div className="py-16 space-y-16">
            <RevealAnimation slide>
                <div className="flex items-center gap-2">
                    <FaReact className="animate-spin [animation-duration:10s] text-4xl" /><h4 className="uppercase text-xl text-surface">
                        Work Experience
                    </h4>
                </div>
            </RevealAnimation>
            <div className="flex flex-col space-y-32">
                {experiences.map((experience, index) => {
                    return <div className="grid grid-cols-5 space-y-8 lg:space-y-0" key={index}>
                        <div className="text-surface space-y-2 flex flex-col col-span-5 lg:col-span-2">
                            <RevealAnimation slide>
                                <span className="text-surface">{experience.company}</span>
                                <h1 className="uppercase font-[Anton] text-5xl text-surface">{experience.title}</h1>
                                <span className="text-surface">{experience.location}</span>
                            </RevealAnimation>
                        </div>
                        <div className="col-span-5 lg:col-span-3 flex flex-col gap-2">
                            <RevealAnimation slide>
                                <div>
                                    <span className="font-semibold text-surface ">{experience.status} | {experience.startDate} - {experience.endDate}</span>
                                </div>
                                <p className="text-surface tracking-wider text-xl">{experience.description}</p>
                            </RevealAnimation>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default ExperienceSection