"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";

const stats = [
    {
        id: "retention",
        value: "98%",
        label: "Retention Rate",
        description: "Our clients stay because we deliver. We focus on long-term relationships and sustainable growth, not just quick wins.",
    },
    {
        id: "roi",
        value: "2.5x",
        label: "Average ROI",
        description: "See a return on your investment within the first quarter. We track every metric to ensure your sales budget works for you.",
    },
    {
        id: "coverage",
        value: "50+",
        label: "Major Cities",
        description: "Nationwide coverage for your sales campaigns. From Tier 1 metropolises to strategic regional markets, we have boots on the ground.",
    },
];

export function StatsScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Create transforms for the 3 distinct sections of the scroll
    const activeIndex = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 0, 1, 2]);

    return (
        <div ref={containerRef} className="h-[300vh] relative bg-background">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute inset-0 bg-background/90 z-0">
                    <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full opacity-30" />
                </div>

                <div className="relative z-10 w-full max-w-4xl px-6">
                    {stats.map((stat, index) => (
                        <StatCard
                            key={stat.id}
                            stat={stat}
                            index={index}
                            activeIndex={activeIndex}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function StatCard({ stat, index, activeIndex }: { stat: any; index: number; activeIndex: any }) {
    // Opacity logic: ONLY show when activeIndex rounds to this index
    // We use a custom transform or just motion styles that react to the scroll progress

    // Simpler approach: Map precise ranges to opacity
    // 0 -> 0.33 : Index 0
    // 0.33 -> 0.66 : Index 1
    // 0.66 -> 1.0 : Index 2

    // We can't easily use "activeIndex === index" conditionally in render because it's a motion value.
    // Instead we map opacity for EACH card based on the generic scrollProgress passed down or re-hooked.
    // But since we have `activeIndex` as a MotionValue 0-2, we can transform that.

    const opacity = useTransform(activeIndex, (latest) => {
        // Add a small buffer for transition
        const current = Math.round(latest as number);
        return current === index ? 1 : 0;
    });

    const y = useTransform(activeIndex, (latest) => {
        const current = Math.round(latest as number);
        return current === index ? 0 : 50;
    });

    const scale = useTransform(activeIndex, (latest) => {
        const current = Math.round(latest as number);
        return current === index ? 1 : 0.9;
    });

    // We also want to toggle "display: none" or "pointerAnts: none" so they don't overlap interactively?
    // Visual overlap is handled by opacity.

    return (
        <motion.div
            style={{ opacity, y, scale }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 transition-all duration-500 ease-out"
        >
            <div className="border border-white/10 bg-white/5 backdrop-blur-md rounded-3xl p-12 max-w-md w-full shadow-2xl">
                <span className="block text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-primary to-orange-400 mb-6 tracking-tighter">
                    {stat.value}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {stat.label}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    {stat.description}
                </p>
            </div>
        </motion.div>
    );
}
