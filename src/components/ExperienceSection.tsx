import { FaReact } from "react-icons/fa";
import RevealAnimation from "./RevealAnimation";

const experiences = [
    {
        title: "Fullstack Web Developer",
        status: "Full-time",
        company: "PT. Trisan Esa Cipta",
        location: "Palembang, Indonesia",
        descriptions: [
            "Architected scalable backend microservices using Fastify (Node.js) and Go to power enterprise HR management and attendance tracking platforms.",
            "Engineered an ML/AI verification pipeline combining Python (FastAPI) face recognition models with Vector Databases for sub-second biometric embedding matching.",
            "Integrated LLM APIs via LangChain to build an automated policy assistant, allowing employees to query internal HR documentation via natural language.",
            "Designed high-throughput RESTful endpoints and implemented Redis for distributed caching and session management, reducing API latency for concurrent clock-in requests.",
            "Conducted database performance tuning and SQL query optimization on MySQL, leveraging indexes and query plan analysis (EXPLAIN ANALYZE) to maintain rapid execution times.",
            "Containerized multi-tier backend services using Docker and established structured Git workflows for reliable cross-platform CI/CD deployments.",
        ],
        startDate: "Jan 2026",
        endDate: "Present",
    },
    {
        title: "Distributed Systems Engineer",
        status: "Full-time",
        company: "OXY Creative",
        location: "Jakarta Selatan, Indonesia",
        descriptions: [
            "Developed highly scalable distributed backend architectures using Go and Node.js (Express.js) to handle heavy inventory transactional flows.",
            "Implemented inter-service communication using gRPC with Protocol Buffers, cutting inter-service latency and network overhead across internal microservices.",
            "Orchestrated event streaming and asynchronous queue processing using RabbitMQ as a message broker to decouple service communications and real-time alerts.",
            "Managed complex relational schemas on MySQL and PostgreSQL; resolved deadlocks and optimized query execution paths for high-frequency inventory write operations.",
            "Leveraged Go's native concurrency primitives (goroutines, channels, and worker pools) to parallelize bulk inventory reconciliation workflows.",
            "Collaborated with DevOps to deploy microservices on Kubernetes, configuring comprehensive observability through Prometheus, Grafana, Loki, and Grafana Alloy.",
        ],
        startDate: "Sep 2024",
        endDate: "Dec 2025",
    },
    {
        title: "Fullstack Developer",
        status: "Contract / Full-time",
        company: "PT. Immobi Solusi Prima",
        location: "Jakarta Selatan, Indonesia",
        descriptions: [
            "Delivered enterprise-grade fullstack web services for Telkomsel's centralized dashboard platform (AVP), integrating React, Next.js, and backend authentication microservices.",
            "Built performant backend aggregation APIs connecting diverse data sources (PowerBI, Grafana, and relational datastores) with single sign-on (SSO) and RBAC security.",
            "Employed a product-oriented mindset to translate stakeholder and enterprise client requirements into resilient backend pipelines capable of exporting large-scale datasets.",
        ],
        startDate: "Mar 2024",
        endDate: "Jun 2025",
    },
    {
        title: "Software Engineer",
        status: "Full-time",
        company: "OXY Creative",
        location: "Jakarta Selatan, Indonesia",
        descriptions: [
            "Architected an event-driven microservices architecture processing millions of onboarding records across banking and rental identity validation platforms.",
            "Engineered asynchronous pipeline workflows with RabbitMQ, guaranteeing fault-tolerant messaging, retry policies, and dead-letter queues.",
            "Integrated national identity APIs (Dukcapil), credit assessment systems, and facial biometric verification pipelines using Python (Django / FastAPI).",
            "Optimized high-volume transactional queries on PostgreSQL, implementing connection pooling, composite indexing, and database tuning to sustain heavy write loads.",
        ],
        startDate: "Feb 2022",
        endDate: "Mar 2024",
    },
    {
        title: "Fullstack Developer",
        status: "Full-time",
        company: "PT. Hedo Global Technology",
        location: "Palembang, Indonesia",
        descriptions: [
            "Developed and maintained core warehouse management APIs, processing inventory movements, damaged goods returns, and automated e-commerce stock syncing.",
            "Refactored legacy SQL queries and backend services, improving database throughput and minimizing data inconsistency across concurrent sales channels.",
        ],
        startDate: "Feb 2021",
        endDate: "Feb 2022",
    },
];

const ExperienceSection = () => {
    return (
        <div className="py-16 space-y-16">
            <RevealAnimation slide>
                <div className="flex items-center gap-2">
                    <FaReact className="animate-spin [animation-duration:10s] text-4xl" />
                    <h4 className="uppercase text-xl text-surface">
                        Work Experience
                    </h4>
                </div>
            </RevealAnimation>
            <div className="flex flex-col space-y-32">
                {experiences.map((experience, index) => {
                    return (
                        <div
                            className="grid grid-cols-5 space-y-8 lg:space-y-0"
                            key={index}
                        >
                            <div className="text-surface space-y-2 flex flex-col col-span-5 lg:col-span-2">
                                <RevealAnimation slide>
                                    <span className="text-surface">
                                        {experience.company}
                                    </span>
                                    <h1 className="uppercase font-[Anton] text-5xl text-surface">
                                        {experience.title}
                                    </h1>
                                    <span className="text-surface">
                                        {experience.location}
                                    </span>
                                </RevealAnimation>
                            </div>
                            <div className="col-span-5 lg:col-span-3 flex flex-col gap-2">
                                <RevealAnimation slide>
                                    <div>
                                        <span className="font-semibold text-surface ">
                                            {experience.status} |{" "}
                                            {experience.startDate} -{" "}
                                            {experience.endDate}
                                        </span>
                                    </div>
                                    <ul className="text-surface tracking-wider text-xl list-disc list-outside ms-4 space-y-2">
                                        {experience.descriptions.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                </RevealAnimation>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ExperienceSection;
