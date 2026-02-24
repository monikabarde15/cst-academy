import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(() => {
        // Only show preloader on first visit in session
        return !sessionStorage.getItem('preloaderShown');
    });
    const [progress, setProgress] = useState(() => {
        return sessionStorage.getItem('preloaderShown') ? 100 : 0;
    });

    useEffect(() => {
        // Skip if already shown this session
        if (sessionStorage.getItem('preloaderShown')) {
            return;
        }

        // Simulate loading sequence
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => {
                        setIsLoading(false);
                        sessionStorage.setItem('preloaderShown', 'true');
                    }, 800);
                    return 100;
                }
                return prev + Math.random() * 10;
            });
        }, 100);

        return () => clearInterval(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                    className="fixed inset-0 z-[100] bg-wrlds-dark flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Ambient Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-wrlds-blue/5 rounded-full blur-[100px] animate-pulse-slow"></div>

                    <div className="relative z-10 w-64">
                        {/* Glitchy Text Effect */}
                        <div className="overflow-hidden mb-4 flex justify-between items-end">
                            <span className="font-space font-bold text-4xl text-white tracking-tighter">
                                CST <span className="text-wrlds-blue">Academy</span>
                                {/* CST AcADMAY<span className="text-wrlds-blue">.</span> */}
                            </span>
                            <span className="font-mono text-xs text-wrlds-muted">{Math.min(100, Math.floor(progress))}%</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="h-0.5 w-full bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-wrlds-blue"
                                style={{ width: `${progress}%` }}
                            />
                        </div>

                        {/* Tech Specs / Decor */}
                        <div className="mt-2 flex justify-between text-[10px] font-mono text-white/30 uppercase tracking-widest">
                            <span>Sys.Boot</span>
                            <span>v2.5.0</span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
