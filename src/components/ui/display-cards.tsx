"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface DisplayCardProps {
    className?: string;
    icon?: React.ReactNode;
    title?: string;
    description?: string;
    date?: string;
    iconClassName?: string;
    titleClassName?: string;
    link?: string;
    isSelected?: boolean;
    onSelect?: () => void;
}

function DisplayCard({
    className,
    icon = <Sparkles className="size-4 text-blue-300" />,
    title = "Featured",
    description = "Discover amazing content",
    date = "Just now",
    titleClassName = "text-blue-500",
    link,
    isSelected = false,
    onSelect,
}: DisplayCardProps) {
    const handleClick = () => {
        if (!link) return;

        // Detect if the device relies purely on touch interactions (no hover mouse)
        const isTouchDevice = window.matchMedia("(hover: none) and (pointer: coarse)").matches;

        if (isTouchDevice) {
            if (!isSelected) {
                // First Tap: Just focus it and let the CSS transition pull it out of the deck
                if (onSelect) onSelect();
                return;
            }
            // Second Tap: Actually open the certificate
            window.open(link, "_blank");
        } else {
            // Desktop: Hover state handles pull-out already, open instantly on click
            window.open(link, "_blank");
        }
    };

    return (
        <div
            onClick={handleClick}
            className={cn(
                "relative flex h-auto min-h-36 w-full max-w-[20rem] sm:max-w-[22rem] -skew-y-[4deg] hover:skew-y-0 select-none flex-col justify-between rounded-xl border border-white/10 bg-[#1a1a1c]/90 backdrop-blur-md px-5 py-4 transition-all duration-500 hover:border-white/30 hover:bg-[#222225] hover:scale-[1.02] hover:z-20 [&>*]:flex [&>*]:items-center [&>*]:gap-2 shadow-lg hover:shadow-2xl",
                isSelected && "border-white/30 bg-[#222225] -translate-y-2 z-10 grayscale-0",
                link && "cursor-pointer",
                className
            )}
        >
            <div>
                <span className="relative inline-block rounded-full bg-white/5 p-1.5 backdrop-blur-md border border-white/10">
                    {icon}
                </span>
                <p className={cn("text-base font-semibold tracking-tight", titleClassName)}>{title}</p>
            </div>
            <p className="text-sm font-sans text-white/80 mt-1">{description}</p>
            <p className="text-xs font-mono text-white/40 mt-2">{date}</p>
        </div>
    );
}

interface DisplayCardsProps {
    cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
    const [selectedIdx, setSelectedIdx] = React.useState<number | null>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);

    // Reset selection whenever user taps/clicks outside the card stack
    React.useEffect(() => {
        const handleClickOutside = (e: PointerEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setSelectedIdx(null);
            }
        };
        document.addEventListener("pointerdown", handleClickOutside);
        return () => document.removeEventListener("pointerdown", handleClickOutside);
    }, []);

    const isStacked = cards && cards.length <= 3;

    return (
        <div
            ref={containerRef}
            className={cn(
                "opacity-100 animate-in fade-in-0 duration-700 w-full",
                isStacked
                    ? "grid [grid-template-areas:'stack'] place-items-center"
                    : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center"
            )}
        >
            {cards?.map((cardProps, index) => (
                <DisplayCard
                    key={index}
                    {...cardProps}
                    isSelected={selectedIdx === index}
                    onSelect={() => setSelectedIdx(index)}
                />
            ))}
        </div>
    );
}

