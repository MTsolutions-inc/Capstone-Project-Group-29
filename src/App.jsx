
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import VideoSection from "./components/VideoSection/VideoSection";
import PlanetCard from "./components/PlanetCard/PlanetCard";
import TableSection from "./components/TableSection/TableSection";
import FormSection from "./components/FormSection/FormSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
    <div>
       <Navbar />
      <Hero />
      <VideoSection />
      <section id="facts">
        <PlanetCard />
      </section>
      <TableSection />
      <section id="contact">
        <FormSection />
      </section>
      <Footer />
      </div>
    </>
  );
}

export default App;
