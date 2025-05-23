import { FaReact } from "react-icons/fa"
import RevealAnimation from "./RevealAnimation"


const experiences = [
    {
        "title": "Frontend",
        "status": "Fulltime",
        "company": "OXY Creative",
        "location": "South Jakarta, Indonesia",
        "description": "Led frontend development for Boyer Inc., a US-based heavy equipment company, by building a web-based inventory management system using Next.js. Collaborated with QA teams and stakeholders for iterative feature improvements and bug resolution. Designed and implemented a server observability suite using Grafana, Alloy, Loki, and Wazuh Stack containerized with Docker for infrastructure monitoring.",
        "startDate": "Sep 2024",
        "endDate": "Present"
    },
    {
        "title": "Fullstack Developer",
        "status": "Fulltime",
        "company": "PT. Immobi Solusi Prima",
        "location": "South Jakarta, Indonesia",
        "description": "Developed the frontend of AVP, a centralized dashboard platform used by Telkomsel, utilizing Next.js and Ant Design. Built reusable components for iframe embedding with dynamic behavior. Worked with designers and product owners to translate mockups into responsive, accessible UI and integrated backend services for SSO and access control features.",
        "startDate": "Mar 2024",
        "endDate": "Jun 2025"
    },
    {
        "title": "Web Developer",
        "status": "Fulltime",
        "company": "PT. Trisan Esa Cipta",
        "location": "Palembang, Indonesia",
        "description": "Developed an internal management system for a property development company, covering housing catalog, construction tracking, and sales processing. Automated workflows for payroll, material inventory management, and order processing. Implemented complex backend logic to maintain data integrity across departments.",
        "startDate": "Mar 2024",
        "endDate": "Apr 2025"
    },
    {
        "title": "Web Engineer",
        "status": "Fulltime",
        "company": "OXY Creative",
        "location": "South Jakarta, Indonesia",
        "description": "Developed onboarding and identity verification applications such as NeoDigi and Seken, integrating with Indonesia’s civil registry (Dukcapil) and BI credit checking. Designed an event-driven microservice data cleansing system using RabbitMQ to detect and flag duplicates. Focused on scalability and fault tolerance in handling millions of records.",
        "startDate": "Feb 2022",
        "endDate": "Mar 2024"
    },
    {
        "title": "Fullstack Developer",
        "status": "Fulltime",
        "company": "PT. Hedo Global Technology",
        "location": "Palembang, Indonesia",
        "description": "Developed and maintained a warehouse inventory system including stock tracking, item movement, order management, and reporting. Integrated real-time stock synchronization with an external e-commerce platform. Contributed to backend optimization and refactoring to improve performance and maintainability.",
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