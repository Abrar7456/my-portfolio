import { BackgroundSwitcher } from "../components/BackgoundSwitcher";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <BackgroundSwitcher />
            <Navbar />

            <main>
                <HeroSection />
                <AboutSection />
            </main>

        </div>
    );
};