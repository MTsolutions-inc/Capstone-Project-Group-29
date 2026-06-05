import './App.css';
import Hero from './components/Hero/Hero';
import VideoSection from './components/VideoSection/VideoSection';
import PlanetCard from './components/PlanetCard/PlanetCard';
import TableSection from "./components/TableSection/TableSection";
import FormSection from './components/FormSection/FormSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Hero />
      <VideoSection />
<<<<<<< HEAD
      <TableSection />
      <PlanetCard />
=======
      <PlanetCard />
      <TableSection />
>>>>>>> 9134d4f8259ec0e795352323e3dc340890d234fc
      <FormSection />
      <Footer />
    </> // 👈 Added the missing slash here to close the fragment!
  );
}

export default App;
