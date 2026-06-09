import React, { useState, useEffect } from 'react';
import './PlanetCard.css';
<<<<<<< HEAD

function PlanetCard({ planetList }) {
  const hardcodedPlanets = [
    { name: "Mercury", distance: "57.9", img: "https://anurella.github.io/images/planets/mercury.webp" },
    { name: "Venus", distance: "108.2", img: "https://anurella.github.io/images/planets/venus.webp" },
    { name: "Earth", distance: "149.6", img: "https://anurella.github.io/images/planets/earth.jpg" },
    { name: "Mars", distance: "227.9", img: "https://anurella.github.io/images/planets/mars.webp" },
    { name: "Jupiter", distance: "778.6", img: "https://anurella.github.io/images/planets/jupiter.webp" },
    { name: "Saturn", distance: "1,433.5", img: "https://anurella.github.io/images/planets/saturn.webp" },
    { name: "Uranus", distance: "2,872.5", img: "https://anurella.github.io/images/planets/uranus.webp" },
    { name: "Neptune", distance: "4,495.1", img: "https://anurella.github.io/images/planets/neptune.webp" },
    { name: "Pluto", distance: "5,906.4", img: "https://anurella.github.io/images/planets/pluto.webp" }
  ];

  const displayList = planetList && planetList.length > 0 ? planetList : hardcodedPlanets;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 🎯 If mobile, slice to exactly 8 planets to maintain the perfect 2x2 layout balance
  const finalPlanetsToRender = isMobile ? displayList.slice(0, 8) : displayList;

  return (
    <section className="grid-section" id="planet-cards-display">
      <h2>Visualizing the Differences Between Planets</h2>
      <p>Each planet in our solar system has unique physical characteristics. Visual comparisons help highlight how vastly different terrestrial planets are from gas giants and ice giants.</p>
      
      <div className="planet-grid">
        {finalPlanetsToRender.map((planet, index) => (
          <div className="planet-card" key={index}>
            <img src={planet.img || planet.image} alt={planet.name} loading="lazy" />
            <div className="planet-card-info">
              <div className="p-name">{planet.name}</div>
              <div className="p-dist">
                Distance <br /> from Sun
                <span className="dist-num">{planet.distance || planet.semiMajorAxis} M km</span>
              </div>
            </div>
=======

// ── Replace this URL with the actual API endpoint provided by your instructor ──
const API_URL =
  'https://api.le-systeme-solaire.net/rest/bodies/?filter[]=isPlanet,eq,true&filter[]=bodyType,eq,Planet&data=englishName,semimajorAxis,bodyType';

// Fallback planet images keyed by English name
const PLANET_IMAGES = {
  Mercury: 'https://anurella.github.io/images/planets/mercury.webp',
  Venus:   'https://anurella.github.io/images/planets/venus.webp',
  Earth:   'https://anurella.github.io/images/planets/earth.jpg',
  Mars:    'https://anurella.github.io/images/planets/mars.webp',
  Jupiter: 'https://anurella.github.io/images/planets/jupiter.webp',
  Saturn:  'https://anurella.github.io/images/planets/saturn.webp',
  Uranus:  'https://anurella.github.io/images/planets/uranus.webp',
  Neptune: 'https://anurella.github.io/images/planets/neptune.webp',
  Pluto:   'https://anurella.github.io/images/planets/pluto.webp',
};

// Distance from Sun in AU (approximate)
const AU_MAP = {
  Mercury: 0.39,
  Venus:   0.72,
  Earth:   1.00,
  Mars:    1.52,
  Jupiter: 5.20,
  Saturn:  9.58,
  Uranus:  19.2,
  Neptune: 30.05,
};

// Static fallback data (used when API fetch fails)
const FALLBACK_PLANETS = [
  { planet: 'Mercury', distanceFromSun: '57.9 M km',   image: PLANET_IMAGES.Mercury },
  { planet: 'Venus',   distanceFromSun: '108.2 M km',  image: PLANET_IMAGES.Venus   },
  { planet: 'Earth',   distanceFromSun: '149.6 M km',  image: PLANET_IMAGES.Earth   },
  { planet: 'Mars',    distanceFromSun: '227.9 M km',  image: PLANET_IMAGES.Mars    },
  { planet: 'Jupiter', distanceFromSun: '778.6 M km',  image: PLANET_IMAGES.Jupiter },
  { planet: 'Saturn',  distanceFromSun: '1,433.5 M km',image: PLANET_IMAGES.Saturn  },
  { planet: 'Uranus',  distanceFromSun: '2,872.5 M km',image: PLANET_IMAGES.Uranus  },
  { planet: 'Neptune', distanceFromSun: '4,495.1 M km',image: PLANET_IMAGES.Neptune },
  { planet: 'Pluto',   distanceFromSun: '5,906.4 M km',image: PLANET_IMAGES.Pluto   },
];

// ── Sub-component: single planet card ──
function PlanetCard({ planet }) {
  return (
    <article className="planet-card">
      <figure className="planet-figure">
        <img
          src={planet.image}
          alt={`3D render of ${planet.planet}`}
          width="260"
          height="260"
          loading="lazy"
          onError={(e) => {
            e.target.src = `https://picsum.photos/seed/${planet.planet}/260/260`;
          }}
        />
        <figcaption className="planet-caption">
          <span className="planet-name">{planet.planet}</span>
          <span className="planet-dist">{planet.distanceFromSun} from the Sun</span>
        </figcaption>
      </figure>
    </article>
  );
}

// ── Main export: fetches data and renders the grid ──
export default function PlanetsSection() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const shaped = (data.bodies || data)
          .filter((b) => b.bodyType === 'Planet' || b.isPlanet)
          .map((b) => ({
            planet: b.englishName,
            distanceFromSun: AU_MAP[b.englishName]
              ? `${AU_MAP[b.englishName]} AU`
              : `${(b.semimajorAxis / 1.496e8).toFixed(2)} AU`,
            image:
              PLANET_IMAGES[b.englishName] ??
              `https://picsum.photos/seed/${b.englishName}/260/260`,
          }));
        setPlanets(shaped);
        setLoading(false);
      })
      .catch(() => {
        setPlanets(FALLBACK_PLANETS);
        setLoading(false);
        setError('Using offline data — check your API endpoint.');
      });
  }, []);

  return (
    <section className="planets-section" id="planets-section">
      <div className="container">
        <p className="section-label">Fetch API</p>
        <h2 className="section-title">Our Solar System</h2>
        <p className="section-desc" style={{ marginBottom: '48px' }}>
          Planet data fetched live from the API. Each card shows the planet
          name, its distance from the Sun, and a visual representation.
        </p>

        {error && (
          <p className="planets-error" role="alert">
            {error}
          </p>
        )}

        {loading ? (
          <div className="planets-loading" aria-live="polite">
            <span className="loader" />
            <p>Fetching planets…</p>
>>>>>>> upstream/main
          </div>
        ))}
      </div>
    </section>
  );
}

<<<<<<< HEAD
export default PlanetCard;
=======

>>>>>>> upstream/main
