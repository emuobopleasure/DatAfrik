import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FeaturesSection from "./components/FeaturesSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";


function App() {
  return (
    <div className="app">
      <Header/>
      <main className="mt-[10rem] lg:mt-[15rem]">
        <HeroSection/>
        <FeaturesSection/>
        <AboutSection/>
        <ContactSection/>
      </main>
    </div>
  );
}

export default App;
