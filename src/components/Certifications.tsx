import React from "react";
import { Shield, Code, Terminal, Sparkles, Cpu, Layers, Wrench, Bot } from "lucide-react";
import DisplayCards from "./ui/display-cards";

export default function Certifications() {
    const certCards = [
        {
            icon: <Terminal className="size-4 text-[#00bfff]" />,
            title: "Git - Skill Up",
            description: "GeeksforGeeks x NationSkillUp",
            date: "2026",
            link: "/certs/git_skill_up.pdf",
            iconClassName: "text-[#00bfff]",
            titleClassName: "text-[#00bfff] font-mono",
        },
        {
            icon: <Code className="size-4 text-[#00ff88]" />,
            title: "Python Skill Up",
            description: "GeeksforGeeks x NationSkillUp",
            date: "2026",
            link: "/certs/python_skill_up.pdf",
            iconClassName: "text-[#00ff88]",
            titleClassName: "text-[#00ff88] font-mono",
        },
        {
            icon: <Shield className="size-4 text-[#ffcb4d]" />,
            title: "Ethical Hacking",
            description: "Udemy — Zaid Sabih",
            date: "2026",
            link: "/certs/ethical_hacking.pdf",
            iconClassName: "text-[#ffcb4d]",
            titleClassName: "text-[#ffcb4d] font-mono",
        },
        {
            icon: <Sparkles className="size-4 text-[#d97706]" />,
            title: "Claude 101",
            description: "Anthropic",
            date: "2026",
            link: "/certs/claude_101.pdf",
            iconClassName: "text-[#d97706]",
            titleClassName: "text-[#d97706] font-mono",
        },
        {
            icon: <Cpu className="size-4 text-[#a855f7]" />,
            title: "Claude Code in Action",
            description: "Anthropic",
            date: "2026",
            link: "/certs/claude_code_in_action.pdf",
            iconClassName: "text-[#a855f7]",
            titleClassName: "text-[#a855f7] font-mono",
        },
        {
            icon: <Layers className="size-4 text-[#3b82f6]" />,
            title: "Claude with the Anthropic API",
            description: "Anthropic",
            date: "2026",
            link: "/certs/claude_anthropic_api.pdf",
            iconClassName: "text-[#3b82f6]",
            titleClassName: "text-[#3b82f6] font-mono",
        },
        {
            icon: <Wrench className="size-4 text-[#06b6d4]" />,
            title: "Intro to Model Context Protocol",
            description: "Anthropic",
            date: "2026",
            link: "/certs/intro_model_context_protocol.pdf",
            iconClassName: "text-[#06b6d4]",
            titleClassName: "text-[#06b6d4] font-mono",
        },
        {
            icon: <Bot className="size-4 text-[#ec4899]" />,
            title: "Intro to Agent Skills",
            description: "Anthropic",
            date: "2026",
            link: "/certs/intro_agent_skills.pdf",
            iconClassName: "text-[#ec4899]",
            titleClassName: "text-[#ec4899] font-mono",
        },
        {
            icon: <Terminal className="size-4 text-[#22c55e]" />,
            title: "Linux - Skill Up",
            description: "GeeksforGeeks x NationSkillUp",
            date: "2026",
            link: "/certs/linux_skill_up.pdf",
            iconClassName: "text-[#22c55e]",
            titleClassName: "text-[#22c55e] font-mono",
        },
    ];

    return (
        <section id="certs" className="relative w-full py-32 bg-[#121212] z-30 min-h-screen flex items-center overflow-hidden">
            <div className="max-w-7xl mx-auto w-full px-6 md:px-16 lg:px-24 flex flex-col items-center gap-16 relative z-10">

                {/* Text Content Block */}
                <div className="flex flex-col items-center text-center max-w-2xl">
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium text-[#f2ede4] mb-4 tracking-tight">
                        Verified{" "}
                        <span className="font-cormorant italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00bfff] to-[#00ff88]">
                            Expertise.
                        </span>
                    </h3>
                    <p className="text-white/40 font-mono text-sm mt-2 mb-4 tracking-widest uppercase">
                        {`// Continuous learning & credentials`}
                    </p>
                    <p className="text-white/70 text-base md:text-lg leading-relaxed">
                        Committed to mastering new technologies and modern paradigms.
                        Explore the industry certifications and course credentials that back my technical decisions.
                    </p>
                    {/* Background embellishment */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-[#00bfff]/5 rounded-full blur-[120px] pointer-events-none -z-10" />
                </div>

                {/* Display Cards Block */}
                <div className="w-full flex justify-center relative">
                    <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#00ff88]/10 rounded-full blur-[100px] pointer-events-none -z-10" />
                    <DisplayCards cards={certCards} />
                </div>
            </div>
        </section>
    );
}

