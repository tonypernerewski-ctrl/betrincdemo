"use client";

import { motion } from "framer-motion";
import { Users, TrendingUp, Target, BrainCircuit, BarChart, Shield } from "lucide-react";

const services = [
    {
        title: "Direct Sales Representation",
        description: "Our core expertise. We deploy face-to-face and B2B teams that represent your brand with integrity and high performance.",
        icon: Users,
    },
    {
        title: "Inbound Lead Qualification",
        description: "Stop wasting AE time on bad leads. We qualify inbound interest and book high-intent meetings for your closers.",
        icon: Target,
    },
    {
        title: "Sales Operations Consulting",
        description: "We optimize your CRM, script your pitches, and define territories to maximize efficiency.",
        icon: BrainCircuit,
    },
    {
        title: "Talent Incubation",
        description: "Access our 'Rising Stars'. We recruit, screen, and train the top 1% of sales talent for your custom campaigns.",
        icon: TrendingUp,
    },
    {
        title: "Customer Retention",
        description: "Acquisition is only half the battle. Our teams specialize in account management and churn reduction.",
        icon: Shield,
    },
    {
        title: "Data-Driven Reporting",
        description: "Complete transparency. You see what we see with real-time dashboards and daily activity reports.",
        icon: BarChart,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
        }
    },
    hover: {
        y: -10,
        scale: 1.03,
        borderColor: "var(--primary)",
        boxShadow: "0 20px 40px -15px rgba(255, 179, 11, 0.15)", // Amber glow
        transition: { type: "spring", stiffness: 300 }
    }
};

export function Services() {
    return (
        <section id="services" className="py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                        Comprehensive <span className="text-primary">Sales Solutions</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        We don't just provide bodies; we provide a fully managed revenue engine tailored to your specific goals.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover="hover"
                            className="group p-8 rounded-2xl bg-card border border-border transition-colors relative z-0"
                        >
                            <motion.div
                                className="h-12 w-12 bg-secondary rounded-lg flex items-center justify-center text-primary mb-6"
                                whileHover={{ rotate: 15, scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <service.icon size={24} />
                            </motion.div>
                            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                            <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
