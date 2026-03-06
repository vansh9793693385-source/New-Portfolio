"use client";

import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";

export default function GithubActivity() {
    // Explicit color theme to match the custom matrix-aesthetic exactly. 
    // From dark gray up to bright cyan/green.
    const explicitTheme = {
        light: ['#1a1a1a', '#00bfff40', '#00bfff80', '#00bfffc0', '#00ff88'],
        dark: ['#1a1a1a', '#00bfff40', '#00bfff80', '#00bfffc0', '#00ff88'],
    };

    return (
        <section id="github" className="relative w-full py-24 flex flex-col items-center justify-center bg-[#121212] z-20 overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#00bfff] rounded-full blur-[150px] opacity-[0.03] pointer-events-none mix-blend-screen" />

            <div className="max-w-[85rem] mx-auto w-full px-6 md:px-16 lg:px-24 flex flex-col items-center">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] mb-6">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" className="text-white/60">
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                        </svg>
                        <span className="text-xs font-mono tracking-widest text-white/50 uppercase">Open Source</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-sans font-medium tracking-tight text-[#f2ede4] leading-[1.1] relative z-10">
                        Code <span className="font-cormorant italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00bfff] to-[#00ff88]">Activity.</span>
                    </h2>
                </motion.div>

                {/* Calendar Heatmap */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full flex justify-center p-6 sm:p-10 rounded-3xl border border-white/5 bg-white/[0.01] backdrop-blur-sm group hover:border-white/10 transition-all duration-500 overflow-x-auto"
                >
                    <div className="min-w-fit">
                        <GitHubCalendar
                            username="vansh9793693385-source"
                            colorScheme="dark"
                            theme={explicitTheme}
                            fontSize={14}
                            blockSize={14}
                            blockMargin={5}
                            blockRadius={3}
                            hideColorLegend={false}
                            hideTotalCount={false}
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
