"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const boxVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
};

export function About() {
    return (
        <section id="about" className="py-24 bg-secondary/30 border-y border-border overflow-hidden">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Column: Text Content */}
                <motion.div
                    variants={boxVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                        Built on <span className="text-primary">Excellence</span> & Integrity.
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        At BETR Inc., we believe sales is more than just numbers; it's about building lasting relationships.
                        We started with a vision to revolutionize the outsourced sales industry by prioritizing
                        transparent reporting and high-quality talent over mass-volume, low-quality touches.
                    </motion.p>

                    <div className="space-y-4">
                        {[
                            "Nationwide Coverage across major metro areas",
                            "Compliance-First approach to brand protection",
                            "Proprietary training academy for all representatives",
                            "100% Performance-based models available"
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className="flex items-center gap-3 p-2 rounded-lg hover:bg-background/50 transition-colors"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                >
                                    <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" />
                                </motion.div>
                                <span className="text-foreground font-medium">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Column: Floating Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="relative"
                >
                    {/* Animated Glow Behind */}
                    <motion.div
                        animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.95, 1.05, 0.95] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent rounded-2xl transform rotate-3 blur-2xl"
                    />

                    {/* Main Card with Float Animation */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative bg-card border border-border rounded-2xl p-2 shadow-2xl overflow-hidden aspect-video z-10"
                    >
                        <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl flex items-center justify-center relative overflow-hidden group">

                            {/* Interactive Background Elements within the card */}
                            <motion.div
                                className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-xl"
                                animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
                            />

                            <motion.div
                                className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"
                                animate={{ scale: [1, 1.5, 1], y: [0, -30, 0] }}
                                transition={{ duration: 7, repeat: Infinity, repeatType: "mirror" }}
                            />

                            <div className="text-center z-20">
                                <motion.p
                                    className="text-2xl font-bold text-foreground mb-1"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    The BETR Standard
                                </motion.p>
                                <p className="text-sm text-muted-foreground">High Performance. Zero Compromise.</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
