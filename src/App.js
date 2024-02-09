import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";


function App() {
  return (
    <>
      <Header/>
      <main className="mt-[13rem] lg:mt-[15rem]">
        <HeroSection/>
        <FeaturesSection/>
        <AboutSection/>
        <ContactSection/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
