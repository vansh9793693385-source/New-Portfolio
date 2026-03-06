"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();

    // Spring physics make the scroll bar feel incredibly smooth and native
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Animate the SVG stroke dash array offset to act as a radial progress ring
    // 100 is the circumference (empty), 0 is completely full.
    const pathLength = useTransform(smoothProgress, [0, 1], [0, 1]);

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex items-center justify-center mix-blend-difference">
            {/* The SVG Container */}
            <svg
                width="48"
                height="48"
                viewBox="0 0 100 100"
                className="-rotate-90 drop-shadow-[0_0_8px_rgba(0,255,136,0.3)]"
            >
                {/* Background Ring */}
                <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    className="stroke-white/10"
                    strokeWidth="6"
                />
                {/* Animated Glowing Foreground Ring */}
                <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    className="stroke-[#00ff88]"
                    strokeWidth="6"
                    strokeLinecap="round"
                    style={{ pathLength }}
                />
            </svg>

            {/* Inner Icon / Arrow */}
            <div className="absolute inset-0 flex items-center justify-center text-[#00ff88]/50">
                <ArrowDown size={14} className="animate-pulse" />
            </div>
        </div>
    );
}
