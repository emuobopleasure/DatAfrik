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
      </main>
    </div>
  );
}

export default App;
