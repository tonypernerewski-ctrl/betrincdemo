import Link from "next/link";
import { TrendingUp } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t border-border pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="p-1.5 bg-primary rounded-md text-primary-foreground">
                                <TrendingUp size={20} strokeWidth={2.5} />
                            </div>
                            <span className="text-lg font-bold tracking-tight text-foreground">
                                BETR <span className="text-primary">Inc.</span>
                            </span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Premier outsourced sales and consulting firm driving growth for national brands.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#about" className="hover:text-primary">About Us</Link></li>
                            <li><Link href="#careers" className="hover:text-primary">Careers</Link></li>
                            <li><Link href="#culture" className="hover:text-primary">Culture</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Services</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#services" className="hover:text-primary">Direct Sales</Link></li>
                            <li><Link href="#services" className="hover:text-primary">Consulting</Link></li>
                            <li><Link href="#services" className="hover:text-primary">Lead Gen</Link></li>
                        </ul>
                    </div>

                    <div id="contact">
                        <h4 className="font-semibold text-foreground mb-4">Contact</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                            Ready to scale?
                        </p>
                        <a href="mailto:info@betr-inc.com" className="text-primary font-medium hover:underline">
                            info@betr-inc.com
                        </a>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} BETR Inc. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
                        <Link href="#" className="hover:text-foreground">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
