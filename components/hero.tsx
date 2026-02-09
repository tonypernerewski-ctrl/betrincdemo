"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

// Height of the scroll track (still needed for text transitions)
const SECTION_HEIGHT = "300vh";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Soft physics for text transitions
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // TEXT ANIMATIONS
    // Mapped to scroll progress for fade in/out

    // Section 1 (Top)
    // Fades out earlier to clear the stage
    const opacityText1 = useTransform(smoothProgress, [0, 0.2, 0.3], [1, 1, 0]);
    const yText1 = useTransform(smoothProgress, [0, 0.3], [0, -50]);

    // Section 2 (Middle)
    // Starts later (0.35) so Section 1 is gone.
    // Ends earlier (0.65) to clear for Section 3.
    const opacityText2 = useTransform(smoothProgress, [0.35, 0.5, 0.65], [0, 1, 0]);
    const yText2 = useTransform(smoothProgress, [0.35, 0.5, 0.65], [50, 0, -50]);

    // Section 3 (Bottom)
    // Starts later (0.7) so Section 2 is gone.
    const opacityText3 = useTransform(smoothProgress, [0.7, 0.85], [0, 1]);
    const yText3 = useTransform(smoothProgress, [0.7, 0.85], [50, 0]);

    return (
        <section ref={containerRef} className="relative bg-background">

            {/* STICKY CONTAINER */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">

                {/* VIDEO BACKGROUND LAYER */}
                {/* Replaces the Canvas. Auto-playing loop. */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 z-0 h-full w-full object-cover opacity-60"
                >
                    <source src="/hero-bg.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/40 to-background/90 z-10" />

                <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">

                    {/* Headline 1 */}
                    <motion.div style={{ opacity: opacityText1, y: yText1 }} className="absolute">
                        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6">
                            Direct Sales. <br />
                            <span className="text-primary">Reimagined.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground font-medium mt-4 max-w-2xl mx-auto">
                            Go beyond digital noise. We build the human connections that drive real loyalty.
                        </p>
                        <div className="flex justify-center animate-bounce mt-12 text-muted-foreground">
                            <span className="text-sm font-medium mr-2">Scroll to explore</span>
                            <ChevronDown />
                        </div>
                    </motion.div>

                    {/* Headline 2 */}
                    <motion.div style={{ opacity: opacityText2, y: yText2 }} className="absolute w-full max-w-5xl">
                        <h2 className="text-6xl md:text-8xl font-black tracking-tight mb-6 text-foreground">
                            Elite Teams. <br />
                            <span className="text-white">Data-Driven Strategy.</span>
                        </h2>
                        <p className="text-2xl text-muted-foreground font-light max-w-3xl mx-auto">
                            From territory intent mapping to proprietary rep training—get a sneak peek into the future of outsourcing.
                        </p>
                    </motion.div>

                    {/* Headline 3 */}
                    <motion.div style={{ opacity: opacityText3, y: yText3 }} className="absolute max-w-4xl">
                        <h2 className="text-6xl md:text-8xl font-black tracking-tight mb-8">
                            Unlock <br />
                            <span className="text-primary">Nationwide Growth.</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/20"
                            >
                                Get a Growth Strategy
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* 
        SNAP TRIGGERS
        Maintained to keep the "Locking" behavior for text, even though video loops freely.
      */}
            <div className="relative z-0">
                <div className="h-screen w-full" />
                <div className="h-screen w-full" />
                <div className="h-screen w-full" />
            </div>

        </section>
    );
}
