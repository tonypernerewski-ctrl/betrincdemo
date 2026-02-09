"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = ["Services", "About Us", "Careers"];

    return (
        <nav
            className={cn(
                "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-fit max-w-[98vw]",
                "backdrop-blur-xl bg-background/60 border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.2)]",
                isScrolled ? "py-2 px-4" : "py-3 px-6"
            )}
        >
            <div className="flex items-center gap-6 md:gap-10 whitespace-nowrap">
                {/* Logo & Brand */}
                <Link href="/" className="flex items-center gap-3 group shrink-0">
                    <div className="relative h-8 w-auto">
                        <img
                            src="/logo.png"
                            alt="BETR Inc."
                            className="h-full w-auto object-contain"
                        />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors hidden sm:block">
                        BETR <span className="text-primary">Inc.</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((item) => (
                        <Link
                            key={item}
                            href="#"
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:scale-105"
                            onClick={(e) => e.preventDefault()}
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link
                        href="#contact"
                        className="inline-flex items-center justify-center px-5 py-2 text-sm font-bold text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-md shadow-primary/20"
                        onClick={(e) => e.preventDefault()}
                    >
                        Book a Growth Strategy
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-foreground p-1 hover:bg-white/10 rounded-full transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="absolute top-full mt-4 left-0 right-0 bg-background/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl min-w-[280px]">
                    {navLinks.map((item) => (
                        <Link
                            key={item}
                            href="#"
                            className="text-lg font-medium text-foreground hover:text-primary text-center"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsOpen(false);
                            }}
                        >
                            {item}
                        </Link>
                    ))}
                    <div className="h-px w-full bg-white/10 my-2" />
                    <Link
                        href="#contact"
                        className="flex items-center justify-center px-6 py-3 text-base font-bold text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20"
                        onClick={(e) => {
                            setIsOpen(false);
                        }}
                    >
                        Book a Growth Strategy
                    </Link>
                </div>
            )}
        </nav>
    );
}
