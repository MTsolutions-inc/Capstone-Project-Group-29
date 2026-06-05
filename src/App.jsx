import "./App.css";
import Hero from "./components/Hero/Hero";
import VideoSection from "./components/VideoSection/VideoSection";
import PlanetCard from "./components/PlanetCard/PlanetCard";
import TableSection from "./components/TableSection/TableSection";
import FormSection from "./components/FormSection/FormSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Hero />
      <VideoSection />
      <PlanetCard />
      <TableSection />
      <FormSection />
      <Footer />
    </> // 👈 Added the missing slash here to close the fragment!
  );
}

export default App;
