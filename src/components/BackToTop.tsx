"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Reveal button after user has scrolled 500px down
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility, { passive: true });
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-[90] p-4 rounded-full bg-[#161616] border border-white/10 backdrop-blur-md group hover:border-[#00bfff]/50 transition-all duration-300"
                    aria-label="Scroll back to top"
                    data-hoverable="true"
                    style={{
                        boxShadow: "0 4px 20px rgba(0,0,0,0.5)"
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = "0 0 25px rgba(0,191,255,0.3)";
                        e.currentTarget.style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.5)";
                        e.currentTarget.style.transform = "translateY(0)";
                    }}
                >
                    <svg
                        width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        className="text-white/60 group-hover:text-[#00bfff] group-hover:-translate-y-1 transition-all duration-300"
                    >
                        <line x1="12" y1="19" x2="12" y2="5"></line>
                        <polyline points="5 12 12 5 19 12"></polyline>
                    </svg>

                    {/* Ghost Ring Pulse on Hover */}
                    <div className="absolute inset-0 rounded-full border border-[#00bfff]/0 group-hover:border-[#00bfff]/100 group-hover:animate-ping opacity-0 group-hover:opacity-30 pointer-events-none" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
