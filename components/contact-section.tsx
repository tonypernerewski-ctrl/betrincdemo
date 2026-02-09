"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "What does a 'Growth Strategy' include?",
        answer: "Our growth strategy is a comprehensive audit of your current sales processes, territory mapping, and a tailored plan to deploy our teams to high-opportunity markets.",
    },
    {
        question: "How quickly can you deploy a team?",
        answer: "We typically can have a fully trained squad on the ground within 14-21 days of strategy approval, depending on the market and complexity.",
    },
    {
        question: "Do you handle B2B or B2C?",
        answer: "Both. We have specialized divisions for high-touch B2B enterprise sales and high-volume B2C customer acquisition campaigns.",
    },
    {
        question: "What is your pricing model?",
        answer: "We operate primarily on performance-based models or hybrid retainer structures, ensuring our incentives are aligned with your revenue goals.",
    },
];

export function ContactSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [formState, setFormState] = useState({
        businessName: "",
        name: "",
        email: "",
        industry: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setShowSuccess(true);
        setFormState({ businessName: "", name: "", email: "", industry: "" });
    };

    return (
        <section id="contact" className="py-24 bg-background relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div
                    className="absolute top-1/4 -left-64 w-96 h-96 rounded-full opacity-20"
                    style={{ background: "radial-gradient(circle, rgba(var(--primary-rgb), 0.5) 0%, transparent 70%)" }}
                />
                <div
                    className="absolute bottom-1/4 -right-64 w-96 h-96 rounded-full opacity-10"
                    style={{ background: "radial-gradient(circle, rgba(var(--primary-rgb), 0.5) 0%, transparent 70%)" }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* LEFT COLUMN: FORM */}
                    <div className="bg-card border border-white/10 p-8 md:p-10 rounded-3xl relative">
                        <div className="mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                                Ready to <span className="text-primary">Scale?</span>
                            </h2>
                            <p className="text-muted-foreground">
                                Tell us about your business, and we'll build your growth roadmap.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground/80">Name</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-secondary/50 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground/80">Business Name</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Acme Corp"
                                        className="w-full bg-secondary/50 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        value={formState.businessName}
                                        onChange={(e) => setFormState({ ...formState, businessName: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground/80">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-secondary/50 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground/80">Industry</label>
                                <select
                                    required
                                    className="w-full bg-secondary/50 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none"
                                    value={formState.industry}
                                    onChange={(e) => setFormState({ ...formState, industry: e.target.value })}
                                >
                                    <option value="" disabled>Select your industry</option>
                                    <option value="SaaS">SaaS & Tech</option>
                                    <option value="Telecom">Telecom</option>
                                    <option value="Energy">Energy & Solar</option>
                                    <option value="Healthcare">Healthcare</option>
                                    <option value="Home Services">Home Services</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary text-primary-foreground font-bold text-lg py-4 rounded-xl shadow-[0_0_30px_-5px_rgba(251,191,36,0.4)] hover:shadow-[0_0_50px_-5px_rgba(251,191,36,0.6)] transition-all overflow-hidden relative"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {isSubmitting ? "Processing..." : "Submit Request"}
                                </span>
                                {isSubmitting && (
                                    <motion.div
                                        className="absolute inset-0 bg-white/20"
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "100%" }}
                                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                    />
                                )}
                            </motion.button>
                        </form>
                    </div>

                    {/* RIGHT COLUMN: FAQ */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-foreground">
                                Frequently Asked Questions
                            </h3>
                            <div className="space-y-4">
                                {faqs.map((faq, idx) => (
                                    <div
                                        key={idx}
                                        className="border border-white/10 rounded-2xl bg-card overflow-hidden transition-colors hover:border-primary/30"
                                    >
                                        <button
                                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                            className="w-full flex items-center justify-between p-6 text-left"
                                        >
                                            <span className="font-medium text-lg pr-8">{faq.question}</span>
                                            <span className={cn("shrink-0 transition-transform duration-300", openIndex === idx && "rotate-180")}>
                                                {openIndex === idx ? <Minus className="text-primary" /> : <Plus className="text-muted-foreground" />}
                                            </span>
                                        </button>
                                        <AnimatePresence>
                                            {openIndex === idx && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    style={{ overflow: "hidden" }}
                                                >
                                                    <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                                                        {faq.answer}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* SUCCESS MODAL & LIGHT EXPLOSION */}
            <AnimatePresence>
                {showSuccess && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            onClick={() => setShowSuccess(false)}
                        />

                        {/* Light Explosion Effect */}
                        <motion.div
                            initial={{ scale: 0, opacity: 1 }}
                            animate={{ scale: [0, 1.5, 3], opacity: [1, 0.5, 0] }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="absolute z-40 w-96 h-96 rounded-full pointer-events-none"
                            style={{ background: "radial-gradient(circle, rgba(var(--primary-rgb), 0.8) 0%, transparent 70%)" }}
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 20 }}
                            transition={{ type: "spring", delay: 0.1 }}
                            className="relative z-50 bg-card border border-primary/20 p-8 md:p-12 rounded-3xl max-w-sm w-full text-center shadow-[0_0_100px_-20px_rgba(251,191,36,0.5)]"
                        >
                            <button
                                onClick={() => setShowSuccess(false)}
                                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                            >
                                <X size={20} />
                            </button>

                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                <Check size={40} strokeWidth={3} />
                            </div>

                            <h3 className="text-2xl font-bold mb-2">Congratulations!</h3>
                            <p className="text-muted-foreground">
                                We will contact you shortly to schedule your growth strategy session.
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setShowSuccess(false)}
                                className="mt-8 bg-primary text-primary-foreground font-bold px-8 py-3 rounded-full hover:bg-primary/90 transition-colors w-full"
                            >
                                Close
                            </motion.button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
