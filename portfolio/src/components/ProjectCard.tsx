"use client";

import React, { useRef, useState, MouseEvent } from "react";

interface Project {
    title: string;
    description: string;
    tags: string[];
}

export default function ProjectCard({ project }: { project: Project }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [transformData, setTransformData] = useState({
        rotateX: 0,
        rotateY: 0,
        sheenX: 0,
        sheenY: 0,
        sheenOpacity: 0
    });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();

        // Calculate mouse position relative to the center of the card
        const x = e.clientX - rect.left; // x position within the element
        const y = e.clientY - rect.top;  // y position within the element

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate rotation based on cursor distance from center
        // Max rotation is 15 degrees
        const rotateMax = 15;
        const rotateX = ((centerY - y) / centerY) * rotateMax;
        const rotateY = ((x - centerX) / centerX) * rotateMax;

        // Calculate sheen position based on mouse position
        const sheenX = (x / rect.width) * 100;
        const sheenY = (y / rect.height) * 100;

        setTransformData({
            rotateX,
            rotateY,
            sheenX,
            sheenY,
            sheenOpacity: 1
        });
    };

    const handleMouseLeave = () => {
        // Reset transform values smoothly
        setTransformData({
            rotateX: 0,
            rotateY: 0,
            sheenX: 50,
            sheenY: 50,
            sheenOpacity: 0
        });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative cursor-pointer"
            style={{ perspective: "1000px" }}
        >
            <div
                className="relative w-full h-full p-8 md:p-12 overflow-hidden rounded-[2rem] bg-[#1a1a1c]/80 border border-white/5 transition-transform duration-200 ease-out flex flex-col justify-end min-h-[420px]"
                style={{
                    transform: `rotateX(${transformData.rotateX}deg) rotateY(${transformData.rotateY}deg)`,
                    transformStyle: "preserve-3d",
                    boxShadow: transformData.sheenOpacity > 0
                        ? `0 30px 60px -20px rgba(0,0,0,0.8), 
                           ${-transformData.rotateY * 2}px ${transformData.rotateX * 2}px 30px rgba(255,255,255,0.03)`
                        : `0 10px 30px -10px rgba(0,0,0,0.5)`,
                }}
            >
                {/* Magnetic Sheen Layer */}
                <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-[2rem] z-0 mix-blend-overlay"
                    style={{
                        background: `radial-gradient(
                            circle 400px at ${transformData.sheenX}% ${transformData.sheenY}%, 
                            rgba(255,255,255,0.2), 
                            transparent 80%
                        )`,
                        opacity: transformData.sheenOpacity
                    }}
                />

                {/* 3D Depth Layer */}
                <div
                    className="relative z-10 transition-transform duration-200 ease-out pointer-events-none"
                    style={{
                        transform: "translateZ(60px)", // Pushes content out towards the user
                    }}
                >
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map(tag => (
                            <span
                                key={tag}
                                className="px-3 py-1 text-[0.7rem] uppercase tracking-wider font-mono text-white/80 bg-white/5 border border-white/10 rounded-full"
                                style={{
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h4
                        className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight drop-shadow-2xl"
                        style={{
                            transform: "translateZ(30px)", // Extra depth for the title
                        }}
                    >
                        {project.title}
                    </h4>
                    <p className="text-white/60 leading-relaxed text-sm md:text-base max-w-sm">
                        {project.description}
                    </p>
                </div>

                {/* Decorative wireframe grid background */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: `40px 40px`,
                        transform: "translateZ(-20px)" // Pushed backward into the card
                    }}
                />
            </div>
        </div>
    );
}
