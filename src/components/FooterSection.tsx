import { FaEnvelope } from "react-icons/fa"
import RevealAnimation from "./RevealAnimation"

const FooterSection = () => {
    return (

        <div className="snap-end relative">
            <div className="w-full py-16 text-surface tracking-wide gap-6 flex flex-col items-center justify-center">
                <RevealAnimation slide>
                    <span className="gap-2 flex items-center justify-center">Want to reach me out? <FaEnvelope />  email me at:</span>
                </RevealAnimation>
                <RevealAnimation slide>
                    <a className="font-[Anton] text-4xl text-surface" href="mailto:randijulio13@gmail.com">randijulio13@gmail.com</a>
                </RevealAnimation>
                <RevealAnimation slide>
                    <div className="flex gap-4">
                        <a href="https://github.com/randijulio13" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
                        </a>
                        <a href="https://www.linkedin.com/in/randi-yulio-fajri/" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
                        </a>
                    </div>
                </RevealAnimation>
            </div>
        </div>
    )
}

export default FooterSection