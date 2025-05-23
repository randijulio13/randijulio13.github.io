import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react';
const SplashScreen = () => {
    const [showSplashScreen, setShowSplashScreen] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowSplashScreen(false), 1000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <div className="lg:hidden grid-cols-4 w-full h-screen overflow-hidden absolute top-0 start-0 z-50 pointer-events-none grid">
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="bg-secondary w-full h-full"
                        variants={{
                            hidden: {
                                y: '100%',
                            },
                            visible: {
                                y: 0,
                            },
                        }}
                        transition={{
                            duration: 0.7,
                            delay: (i * 0.05) + 1,
                        }}
                        initial="visible"
                        animate="hidden"
                    />
                ))}
            </div>
            <div className="lg:grid grid-cols-12 w-full h-screen overflow-hidden absolute top-0 start-0 z-50 pointer-events-none hidden">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="bg-secondary w-full h-full"
                        variants={{
                            hidden: {
                                y: '100%',
                            },
                            visible: {
                                y: 0,
                            },
                        }}
                        transition={{
                            duration: 0.7,
                            delay: (i * 0.05) + 1,
                        }}
                        initial="visible"
                        animate="hidden"
                    />
                ))}
            </div>
            <AnimatePresence>
                {showSplashScreen &&
                    <motion.div
                        transition={{
                            duration: 0.5,
                        }}
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                            y: -50,
                        }}
                        className="overflow-hidden absolute flex items-center justify-center z-100 w-dvw h-dvh font-[Anton] uppercase text-8xl bg-primary text-center">
                        Randi Yulio Fajri
                    </motion.div>
                }
            </AnimatePresence >
        </>
    )
}

export default SplashScreen