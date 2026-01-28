import HeroSection from "@/components/HeroSection";
import Visual from "@/components/Visual";


const heroData = {
    title: "The React Framework for the Web",
    desc: "Used by some of the world’s largest companies.",
    items: [
        { id: 1, title: "Performance", description: "Next.js applications are fast by default." },
        { id: 2, title: "Scalability", description: "Scale your application with ease." },
    ],
};

const actionData = {
    actions: [
        { label: "Get Started", href: "/get-started", primary: true },
        { label: "Learn More", href: "/learn-more" },
    ],
};

export default async function Home() {
    return (
        <div className="main">
            <Visual />
            
            <HeroSection {...heroData} {...actionData} />;
        </div>
    )
    
}
