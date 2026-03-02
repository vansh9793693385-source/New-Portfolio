import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "MIND.EXE",
        description: "Cinematic portfolio experience built with Canvas and fine-tuned interactions.",
        tags: ["Next.js", "Canvas", "Framer Motion"],
    },
    {
        title: "Spatial UI",
        description: "Experimental glassmorphic interface inspired by spatial computing.",
        tags: ["React", "Three.js", "Tailwind"],
    },
    {
        title: "Dark Matter System",
        description: "A dark-mode-first component library for modern web apps.",
        tags: ["TypeScript", "CSS", "Storybook"],
    },
    {
        title: "Aura Commerce",
        description: "High-performance headless e-commerce storefront.",
        tags: ["Next.js", "Shopify", "GraphQL"],
    }
];

export default function Projects() {
    return (
        <section className="relative w-full min-h-screen bg-[#121212] py-32 px-6 md:px-16 lg:px-24 z-30">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                <div className="mb-20 text-center">
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold font-cormorant tracking-tight mb-4 hidden-text bg-gradient-to-r from-[#ff5533] to-[#00ff88] text-transparent bg-clip-text">
                        Featured Creations
                    </h3>
                    <p className="text-white/50 text-lg md:text-xl max-w-xl">
                        A collection of recent technical and creative projects.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} project={project} />
                    ))}
                </div>

            </div>
        </section>
    );
}
