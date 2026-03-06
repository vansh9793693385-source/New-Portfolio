"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#121212] flex flex-col items-center overflow-hidden relative selection:bg-[#00ff88]/30">
            {/* The global Navbar remains accessible so users aren't fully trapped */}
            <Navbar />

            {/* Matrix / Glitch Style Background Elements */}
            <div className="absolute inset-0 pointer-events-none flex justify-center items-center">
                <div className="absolute w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[#00bfff] rounded-full blur-[150px] opacity-[0.03] mix-blend-screen" />
                <div className="absolute w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-[#00ff88] rounded-full blur-[120px] opacity-[0.02] mix-blend-screen translate-x-20 translate-y-20" />
            </div>

            {/* Central Content */}
            <div className="relative z-10 flex flex-col items-center justify-center flex-grow w-full px-6 text-center mt-[-5vh]">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    {/* Stylized 404 Text */}
                    <div className="relative inline-block">
                        <h1 className="text-[8rem] sm:text-[12rem] md:text-[15rem] font-sans font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-white/10 select-none">
                            404
                        </h1>
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
                            className="absolute inset-0 bg-gradient-to-tr from-[#00bfff]/20 to-[#00ff88]/20 mix-blend-overlay blur-md"
                        />
                    </div>

                    {/* Subheading */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-4 md:mt-0 flex items-center flex-col gap-4"
                    >
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-cormorant italic tracking-wide text-[#f2ede4]">
                            Reality Not Found
                        </h2>
                        <p className="font-mono text-sm text-white/40 tracking-widest uppercase max-w-sm">
                            {`// The requested node does not exist in this sector.`}
                        </p>
                    </motion.div>

                    {/* Return Home CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-12"
                    >
                        <Link
                            href="/"
                            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-[100px] font-mono text-xs tracking-[0.15em] transition-all duration-300 ease-in-out uppercase"
                            style={{
                                border: "1px solid rgba(0,191,255,0.4)",
                                color: "#00bfff",
                                background: "rgba(0,191,255,0.03)"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "#00bfff";
                                e.currentTarget.style.color = "#ffffff";
                                e.currentTarget.style.boxShadow = "0 0 25px rgba(0,191,255,0.3)";
                                e.currentTarget.style.transform = "translateY(-2px)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "rgba(0,191,255,0.03)";
                                e.currentTarget.style.color = "#00bfff";
                                e.currentTarget.style.boxShadow = "none";
                                e.currentTarget.style.transform = "translateY(0)";
                            }}
                        >
                            <svg
                                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                className="transition-transform duration-300 group-hover:-translate-x-1"
                            >
                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                <polyline points="12 19 5 12 12 5"></polyline>
                            </svg>
                            Return to Base
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </main>
    );
}
