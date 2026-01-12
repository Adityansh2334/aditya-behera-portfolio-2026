
import Header from './components/Header';
import Hero from './components/Hero';
import BackgroundOrbs from './components/BackgroundOrbs';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Education from "./components/Education";
import CustomCursor from "./components/CustomCursor";
import FloatingGameButton from "./components/FloatingGameButton";




export default function App() {
  return (
      <div className="bg-background text-foreground min-h-screen transition-colors duration-300">
      <CustomCursor />
      <Cursor />
      <BackgroundOrbs />
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
      <FloatingGameButton />
      </div>
  );
}
