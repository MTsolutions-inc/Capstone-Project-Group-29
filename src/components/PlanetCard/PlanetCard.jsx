import React from 'react';
import './PlanetCard.css';

function PlanetCard({ planetList }) {
  const hardcodedPlanets = [
    { name: "Mercury", distance: "57.9", img: "https://anurella.github.io/images/planets/mercury.webp" },
    { name: "Venus", distance: "108.2", img: 	"https://anurella.github.io/images/planets/venus.webp" },
    { name: "Earth", distance: "149.6", img: "https://anurella.github.io/images/planets/earth.jpg" },
    { name: "Mars", distance: "227.9", img: "https://anurella.github.io/images/planets/mars.webp" },
    { name: "Jupiter", distance: "778.6", img: "https://anurella.github.io/images/planets/jupiter.webp" },
    { name: "Saturn", distance: "1,433.5", img: "https://anurella.github.io/images/planets/saturn.webp" },
    { name: "Uranus", distance: "2,872.5", img: "https://anurella.github.io/images/planets/uranus.webp" },
    { name: "Neptune", distance: "4,495.1", img: "https://anurella.github.io/images/planets/neptune.webp" },
    { name: "Pluto", distance: "5,906.4", img: "https://anurella.github.io/images/planets/pluto.webp" }
  ];

  const displayList = planetList && planetList.length > 0 ? planetList : hardcodedPlanets;

  return (
    <section className="grid-section" id="planets">
      
      <h2>Visualizing the Differences Between Planets</h2>
      <p>Each planet in our solar system has unique physical characteristics. Visual comparisons help highlight how vastly different terrestrial planets are from gas giants and ice giants.</p>
      
      <div className="planet-grid">
        {displayList.map((planet, index) => (
          <div className="planet-card" key={index}>
            <img src={planet.img || planet.image} alt={planet.name} loading="lazy" />
            <div className="planet-card-info">
              <div className="p-name">{planet.name}</div>
              <div className="p-dist"><span>{planet.distance || planet.semiMajorAxis}</span> M km</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// This is what App.jsx is looking for!
export default PlanetCard;

