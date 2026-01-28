import HeroCard from "./HeroCard";
import { HeroItem } from "@/types/hero";



type Action = {
    label: string;
    href: string;
    primary?: boolean;
};


interface HeroSectionProps {
    title: string;
    desc: string;
    actions: Action[];
    items?: HeroItem[];
};

export default function HeroSection({ title, desc, actions, items }: HeroSectionProps) {
    return (
        <section className="hero">
            <div className="hero-inner">
                <h1 className="hero-title">{title}</h1>
                <p className="hero-desc">{desc}</p>
                <div>
                    {items?.map((item) => (
                        <HeroCard key={item.id} title={item.title} description={item.description} />
                    ))}
                </div>

                <div className="hero-actions">
                    {actions?.map((action, index) => (
                        <a
                            key={index}
                            href={action.href}
                            className={`btn ${action.primary ? "btn-primary" : ""}`}
                        >
                            {action.label}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
