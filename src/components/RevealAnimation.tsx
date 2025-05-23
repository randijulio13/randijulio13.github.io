import { motion, useAnimation, useInView } from "motion/react"
import { useEffect, useRef } from "react"

const RevealAnimationDirection = Object.freeze({
    LEFT: 'left' as const,
    RIGHT: 'right' as const,
    UP: 'up' as const,
    DOWN: 'down' as const,
})

type RevealAnimationDirectionType = typeof RevealAnimationDirection[keyof typeof RevealAnimationDirection]


interface RevealAnimationProps { children: React.ReactNode, direction?: RevealAnimationDirectionType, color?: string, slide?: boolean }

const RevealAnimation = ({ children, direction = RevealAnimationDirection.RIGHT, color = "primary", slide = false }: RevealAnimationProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: false })

    const mainControl = useAnimation()
    const slideControl = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControl.start('visible')
            if (slide) {
                slideControl.start(direction === RevealAnimationDirection.RIGHT ? 'visibleRight' : 'visibleLeft')
            }
        } else {
            mainControl.start('hidden')
            if (slide) {
                slideControl.start(direction === RevealAnimationDirection.RIGHT ? 'hiddenRight' : 'hiddenLeft')
            }
        }
    }, [isInView, direction])
    return (
        <div ref={ref} className="relative overflow-hidden h-fit">
            <motion.div
                ref={ref}
                variants={{
                    hidden: {
                        opacity: 0,
                        y: 100,
                    },
                    visible: {
                        opacity: 1,
                        y: 0
                    }
                }}
                transition={{ duration: 0.5 }}
                initial="hidden"
                animate={mainControl}
            >
                {children}
            </motion.div>
            {slide && <motion.div
                className={`absolute top-0 bottom-0 start-0 end-0 bg-${color} z-20`}
                ref={ref}
                variants={{
                    hiddenRight: {
                        left: 0
                    },
                    visibleRight: {
                        left: '100%'
                    },
                    hiddenLeft: {
                        right: 0
                    },
                    visibleLeft: {
                        right: '100%'
                    },
                }}
                transition={{ duration: 0.5, ease: 'easeIn' }}
                initial={direction === RevealAnimationDirection.RIGHT ? 'hiddenRight' : 'hiddenLeft'}
                animate={slideControl}
            />}
        </div>

    )
}

export default RevealAnimation