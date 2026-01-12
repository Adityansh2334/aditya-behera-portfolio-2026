import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BackgroundOrbs from "./components/BackgroundOrbs";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import FloatingGameButton from "./components/FloatingGameButton";
import Education from "./components/Education";
import { UIProvider } from "./context/UIContext";

export default function App() {
        const [enableCursor, setEnableCursor] = useState(false);

        useEffect(() => {
                const isDesktop =
                    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
                    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

                setEnableCursor(isDesktop);

                // Kill any ghost cursor on touch
                const handleTouch = () => {
                        document.body.style.cursor = "auto";
                };
                window.addEventListener("touchstart", handleTouch, { passive: true });

                return () => window.removeEventListener("touchstart", handleTouch);
        }, []);

        return (
            <UIProvider>
                    <div className="bg-background text-foreground min-h-screen transition-colors duration-300">
                            {/* ✅ CURSOR ONLY ON DESKTOP */}
                            {enableCursor && <CustomCursor />}

                            <BackgroundOrbs />
                            <Header />
                            <Hero />
                            <Experience />
                            <Projects />
                            <Skills />
                            <Education />
                            <Contact />
                            <Footer />

                            {/* OPTIONAL: disable on mobile if needed */}
                            <FloatingGameButton />
                    </div>
            </UIProvider>
        );
}
