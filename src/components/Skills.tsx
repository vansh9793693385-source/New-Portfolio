/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";

const skillsData = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind", "Three.js", "Framer"],
    languages: ["JavaScript", "Python", "C++", "Java", "Go", "Bash"],
    backend: ["Node.js", "Express", "Docker", "MongoDB", "PostgreSQL", "Redis"],
    networking: ["TCP/IP", "DNS", "Linux", "Wireshark", "Cloudflare", "VPNs"],
    bugbounty: ["Recon", "OWASP", "HackerOne", "Fuzzing", "PrivEsc", "Web Exploit"],
    offsec: ["Burp Suite", "Kali", "Metasploit", "Nmap", "SQLi/XSS", "Malware"]
};

// SVG Paths connecting the skill nodes
const DesktopSynapses = () => (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden md:block">
        {/* Base Static Lines */}
        <g stroke="rgba(255,255,255,0.06)" strokeWidth="0.2" fill="none" vectorEffect="non-scaling-stroke">
            <path d="M 50 10 L 25 35" />
            <path d="M 50 10 L 75 35" />
            <path d="M 25 35 L 10 65" />
            <path d="M 25 35 L 25 75" />
            <path d="M 25 35 L 40 65" />
            <path d="M 75 35 L 60 65" />
            <path d="M 75 35 L 75 75" />
            <path d="M 75 35 L 90 65" />
        </g>

        {/* Animated Dot Pulses — tiny round dots travelling along each branch */}
        <g className="synapse-flow" strokeWidth="0.4" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke">
            <path d="M 50 10 L 25 35" stroke="#00bfff" />
            <path d="M 50 10 L 75 35" stroke="#00ff88" />
            <path d="M 25 35 L 10 65" stroke="#00bfff" />
            <path d="M 25 35 L 25 75" stroke="#00bfff" />
            <path d="M 25 35 L 40 65" stroke="#00bfff" />
            <path d="M 75 35 L 60 65" stroke="#00ff88" />
            <path d="M 75 35 L 75 75" stroke="#00ff88" />
            <path d="M 75 35 L 90 65" stroke="#00ff88" />
        </g>
    </svg>
);

const MobileSynapses = () => (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none z-10 md:hidden overflow-visible">
        {/* Base Static Lines */}
        <g stroke="rgba(255,255,255,0.06)" strokeWidth="0.3" fill="none" vectorEffect="non-scaling-stroke">
            <path d="M 50 5 L 50 18" />
            <path d="M 50 5 C 105 5, 105 55, 50 55" />
            <path d="M 50 18 L 25 30" />
            <path d="M 50 18 L 75 30" />
            <path d="M 50 18 L 50 42" />
            <path d="M 50 55 L 25 67" />
            <path d="M 50 55 L 75 67" />
            <path d="M 50 55 L 50 79" />
        </g>

        {/* Animated Dot Pulses */}
        <g className="synapse-flow" strokeWidth="0.6" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke">
            <path d="M 50 5 L 50 18" stroke="#00bfff" />
            <path d="M 50 5 C 105 5, 105 55, 50 55" stroke="#00ff88" />
            <path d="M 50 18 L 25 30" stroke="#00bfff" />
            <path d="M 50 18 L 75 30" stroke="#00bfff" />
            <path d="M 50 18 L 50 42" stroke="#00bfff" />
            <path d="M 50 55 L 25 67" stroke="#00ff88" />
            <path d="M 50 55 L 75 67" stroke="#00ff88" />
            <path d="M 50 55 L 50 79" stroke="#00ff88" />
        </g>
    </svg>
);

interface TechDotProps {
    label: string;
    angle: number;
}

const TechDot = ({ label, angle }: TechDotProps) => (
    <div
        className="absolute z-20"
        style={{
            left: `calc(50% + ${Math.cos(angle)} * var(--orbit-radius, 75px))`,
            top: `calc(50% + ${Math.sin(angle)} * var(--orbit-radius, 75px))`,
            transform: 'translate(-50%, -50%)' // Center the dot on the exact coordinate
        }}
    >
        <motion.div
            animate={{ y: [0, -3, 0] }}
            // Use angle for a deterministic duration — avoids SSR/client Math.random() hydration mismatch
            transition={{ duration: 2 + (angle % 2), repeat: Infinity }}
            className="px-2 py-1 bg-[#121212] border border-white/10 rounded-md text-[9px] md:text-[11px] text-white/80 whitespace-nowrap shadow-xl"
        >
            {label}
        </motion.div>
    </div>
);

interface SubNodeProps {
    label: string;
    techs: string[];
    mobileTop: string;
    mobileLeft: string;
    desktopTop: string;
    desktopLeft: string;
    borderClass: string;
    glowClass: string;
}

const SubNode = ({ label, techs, mobileTop, mobileLeft, desktopTop, desktopLeft, borderClass, glowClass }: SubNodeProps) => (
    <div
        className={`absolute -translate-x-1/2 -translate-y-1/2 z-30 ${mobileTop} ${mobileLeft} ${desktopTop} ${desktopLeft}`}
    >
        <div className="relative flex items-center justify-center w-[150px] h-[150px] group">
            {/* Core SubNode Badge */}
            <motion.div whileHover={{ scale: 1.1 }} className="absolute z-30 cursor-default">
                <div className={`px-4 py-2 bg-[#121212] border ${borderClass} rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-md`}>
                    <span className={`text-xs md:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${glowClass}`}>
                        {label}
                    </span>
                </div>
            </motion.div>

            {/* Local Synapse Lines connecting to Tech Dots */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ overflow: "visible" }}>
                {techs.map((_, i) => {
                    const angle = (i * (360 / techs.length)) * (Math.PI / 180);
                    return <line key={i} x1="50%" y1="50%" x2={`calc(50% + ${Math.cos(angle)} * var(--orbit-radius, 75px))`} y2={`calc(50% + ${Math.sin(angle)} * var(--orbit-radius, 75px))`} stroke="rgba(255,255,255,0.15)" strokeDasharray="3 3" />
                })}
            </svg>

            {/* Orbiting Terminal Tech Nodes */}
            {techs.map((tech, i) => {
                const angle = (i * (360 / techs.length)) * (Math.PI / 180);
                return <TechDot key={tech} label={tech} angle={angle} />
            })}
        </div>
    </div>
);

export default function Skills() {
    return (
        <section id="skills" className="relative w-full py-24 bg-[#121212] overflow-hidden z-30">
            {/* Global Animation for Synapse Dot Flow */}
            <style>{`
                .synapse-flow {
                    stroke-dasharray: 2 18;
                    animation: dotFlow 8s linear infinite;
                }
                @keyframes dotFlow {
                    from { stroke-dashoffset: 80; }
                    to { stroke-dashoffset: 0; }
                }
            `}</style>

            {/* Background Ambient Lights */}
            <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#00bfff]/5 rounded-full blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-[#00ff88]/5 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto px-6 w-full flex flex-col pt-12 md:pt-0 pointer-events-none z-40 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 text-center md:text-left px-4 md:px-12"
                >
                    <h3 className="text-4xl md:text-5xl font-sans font-medium text-[#f2ede4] mb-4">
                        Tech <span className="font-cormorant italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00bfff] to-[#00ff88]">Stacks</span>
                    </h3>
                    <p className="text-white/40 font-mono text-sm tracking-widest uppercase">
                        {`// Reactive expertise mapping system`}
                    </p>
                </motion.div>
            </div>

            {/* Neural Network Container (Desktop & Tablet Only) */}
            <div className="hidden md:block relative w-full h-[1000px] max-w-6xl mx-auto mt-8 z-20 [--orbit-radius:45px] sm:[--orbit-radius:55px] md:[--orbit-radius:75px]">
                {/* Global Synapse Lines drawn via absolute SVG */}
                <DesktopSynapses />
                <MobileSynapses />

                {/* 1. Core Brain Node */}
                <div className="absolute -translate-x-1/2 -translate-y-1/2 z-40 top-[5%] left-[50%] md:top-[10%] md:left-[50%]">
                    <div className="relative flex items-center justify-center">
                        <div className="absolute w-28 h-28 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
                        <motion.div whileHover={{ scale: 1.05 }} className="px-6 py-3 bg-[#111] border border-purple-500/50 rounded-full shadow-[0_0_30px_rgba(168,85,247,0.4)] backdrop-blur-xl cursor-default">
                            <span className="text-sm md:text-lg font-bold text-white tracking-widest uppercase">System Core</span>
                        </motion.div>
                    </div>
                </div>

                {/* 2. Full Stack Domain Node */}
                <div className="absolute -translate-x-1/2 -translate-y-1/2 z-40 top-[18%] left-[50%] md:top-[35%] md:left-[25%]">
                    <div className="relative flex items-center justify-center">
                        <div className="absolute w-20 h-20 bg-[#00bfff]/10 rounded-full blur-lg animate-pulse" />
                        <motion.div whileHover={{ scale: 1.05 }} className="px-5 py-2 bg-[#111] border border-[#00bfff] rounded-lg shadow-[0_0_20px_rgba(0,191,255,0.3)] cursor-default">
                            <span className="font-mono text-sm md:text-base font-bold text-[#00bfff]">Full Stack</span>
                        </motion.div>
                    </div>
                </div>

                {/* 3. Cybersecurity Domain Node */}
                <div className="absolute -translate-x-1/2 -translate-y-1/2 z-40 top-[55%] left-[50%] md:top-[35%] md:left-[75%]">
                    <div className="relative flex items-center justify-center">
                        <div className="absolute w-20 h-20 bg-[#00ff88]/10 rounded-full blur-lg animate-pulse" />
                        <motion.div whileHover={{ scale: 1.05 }} className="px-5 py-2 bg-[#111] border border-[#00ff88] rounded-lg shadow-[0_0_20px_rgba(0,255,136,0.3)] cursor-default">
                            <span className="font-mono text-sm md:text-base font-bold text-[#00ff88]">Cybersecurity</span>
                        </motion.div>
                    </div>
                </div>

                {/* --- Terminal Sub Nodes containing Specific Technologies --- */}

                {/* BRANCH: FULL STACK */}
                <SubNode
                    label="Frontend"
                    techs={skillsData.frontend}
                    mobileTop="top-[30%]" mobileLeft="left-[25%]"
                    desktopTop="md:top-[65%]" desktopLeft="md:left-[10%]"
                    borderClass="border-[#00bfff]/40" glowClass="from-[#00bfff] to-[#00ff88]"
                />

                <SubNode
                    label="Languages"
                    techs={skillsData.languages}
                    mobileTop="top-[30%]" mobileLeft="left-[75%]"
                    desktopTop="md:top-[75%]" desktopLeft="md:left-[25%]"
                    borderClass="border-[#00bfff]/40" glowClass="from-[#00bfff] to-[#00ff88]"
                />

                <SubNode
                    label="Backend"
                    techs={skillsData.backend}
                    mobileTop="top-[42%]" mobileLeft="left-[50%]"
                    desktopTop="md:top-[65%]" desktopLeft="md:left-[40%]"
                    borderClass="border-[#00bfff]/40" glowClass="from-[#00bfff] to-[#00ff88]"
                />

                {/* BRANCH: CYBERSECURITY */}
                <SubNode
                    label="Networking"
                    techs={skillsData.networking}
                    mobileTop="top-[67%]" mobileLeft="left-[25%]"
                    desktopTop="md:top-[65%]" desktopLeft="md:left-[60%]"
                    borderClass="border-[#00ff88]/40" glowClass="from-[#00ff88] to-[#00bfff]"
                />

                <SubNode
                    label="Bug Bounty"
                    techs={skillsData.bugbounty}
                    mobileTop="top-[67%]" mobileLeft="left-[75%]"
                    desktopTop="md:top-[75%]" desktopLeft="md:left-[75%]"
                    borderClass="border-[#00ff88]/40" glowClass="from-[#00ff88] to-[#00bfff]"
                />

                <SubNode
                    label="OffSec"
                    techs={skillsData.offsec}
                    mobileTop="top-[79%]" mobileLeft="left-[50%]"
                    desktopTop="md:top-[65%]" desktopLeft="md:left-[90%]"
                    borderClass="border-[#00ff88]/40" glowClass="from-[#00ff88] to-[#00bfff]"
                />
            </div>

            {/* Mobile Stacked Cards Layout (Phones Only) */}
            <div className="md:hidden w-full max-w-sm mx-auto mt-8 px-6 flex flex-col gap-6 z-20 relative">
                {/* Frontend Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/5 backdrop-blur-sm relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#00bfff]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                    <h4 className="text-[#00bfff] font-mono text-sm font-bold tracking-widest uppercase mb-4">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                        {skillsData.frontend.map(tech => (
                            <span key={tech} className="px-3 py-1.5 bg-black/40 border border-white/10 rounded-md text-xs text-white/80">{tech}</span>
                        ))}
                    </div>
                </motion.div>

                {/* Languages Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/5 backdrop-blur-sm relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ff88]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                    <h4 className="text-[#00ff88] font-mono text-sm font-bold tracking-widest uppercase mb-4">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                        {skillsData.languages.map(tech => (
                            <span key={tech} className="px-3 py-1.5 bg-black/40 border border-white/10 rounded-md text-xs text-white/80">{tech}</span>
                        ))}
                    </div>
                </motion.div>

                {/* Backend Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/5 backdrop-blur-sm relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#00bfff]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                    <h4 className="text-[#00bfff] font-mono text-sm font-bold tracking-widest uppercase mb-4">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                        {skillsData.backend.map(tech => (
                            <span key={tech} className="px-3 py-1.5 bg-black/40 border border-white/10 rounded-md text-xs text-white/80">{tech}</span>
                        ))}
                    </div>
                </motion.div>

                {/* Networking Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/5 backdrop-blur-sm relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ff88]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                    <h4 className="text-[#00ff88] font-mono text-sm font-bold tracking-widest uppercase mb-4">Networking</h4>
                    <div className="flex flex-wrap gap-2">
                        {skillsData.networking.map(tech => (
                            <span key={tech} className="px-3 py-1.5 bg-black/40 border border-white/10 rounded-md text-xs text-white/80">{tech}</span>
                        ))}
                    </div>
                </motion.div>

                {/* Bug Bounty Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/5 backdrop-blur-sm relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#00bfff]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                    <h4 className="text-[#00bfff] font-mono text-sm font-bold tracking-widest uppercase mb-4">Bug Bounty</h4>
                    <div className="flex flex-wrap gap-2">
                        {skillsData.bugbounty.map(tech => (
                            <span key={tech} className="px-3 py-1.5 bg-black/40 border border-white/10 rounded-md text-xs text-white/80">{tech}</span>
                        ))}
                    </div>
                </motion.div>

                {/* OffSec Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/5 backdrop-blur-sm relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ff88]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                    <h4 className="text-[#00ff88] font-mono text-sm font-bold tracking-widest uppercase mb-4">OffSec</h4>
                    <div className="flex flex-wrap gap-2">
                        {skillsData.offsec.map(tech => (
                            <span key={tech} className="px-3 py-1.5 bg-black/40 border border-white/10 rounded-md text-xs text-white/80">{tech}</span>
                        ))}
                    </div>
                </motion.div>
            </div>

        </section>
    );
}
