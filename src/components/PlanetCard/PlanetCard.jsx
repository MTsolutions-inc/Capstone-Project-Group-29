
import { useState, useEffect } from 'react'
import './PlanetCard.css'

// ── Replace this URL with the actual API endpoint provided by your instructor ──
const API_URL = 'https://api.le-systeme-solaire.net/rest/bodies/?filter[]=isPlanet,eq,true&filter[]=bodyType,eq,Planet&data=englishName,semimajorAxis,bodyType'

// Fallback planet images keyed by English name
const PLANET_IMAGES = {
  Mercury: 'https://amurella.github.io/images/mercury.webp',
  Venus:   'https://amurella.github.io/images/venus.webp',
  Earth:   'https://amurella.github.io/images/earth.webp',
  Mars:    'https://amurella.github.io/images/mars.webp',
  Jupiter: 'https://amurella.github.io/images/jupiter.webp',
  Saturn:  'https://amurella.github.io/images/saturn.webp',
  Uranus:  'https://amurella.github.io/images/uranus.webp',
  Neptune: 'https://amurella.github.io/images/neptune.webp',
}

// AU distances (approximate, for display alongside the API data)
const AU_MAP = {
  Mercury: 0.39, Venus: 0.72, Earth: 1.00, Mars: 1.52,
  Jupiter: 5.20, Saturn: 9.58, Uranus: 19.2, Neptune: 30.05,
}

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
          onError={(e) => { e.target.src = `https://picsum.photos/seed/${planet.planet}/260/260` }}
        />
        <figcaption className="planet-caption">
          <span className="planet-name">{planet.planet}</span>
          <span className="planet-dist">
            {planet.distanceFromSun} AU from the Sun
          </span>
        </figcaption>
      </figure>
    </article>
  )
}

export default function PlanetsSection() {
  const [planets, setPlanets] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // ── IMPORTANT: Replace this fetch with the actual API your instructor provided ──
    // The shape expected is: [{ planet, distanceFromSun, image }, ...]
    // If your instructor's API is unavailable during development, the fallback below is used.
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`)
        return res.json()
      })
      .then((data) => {
        // Adapt to expected shape — adjust field names to match your actual API response
        const shaped = (data.bodies || data)
          .filter((b) => b.bodyType === 'Planet' || b.isPlanet)
          .map((b) => ({
            planet: b.englishName,
            distanceFromSun: AU_MAP[b.englishName] ?? (b.semimajorAxis / 1.496e8).toFixed(2),
            image: PLANET_IMAGES[b.englishName] ?? `https://picsum.photos/seed/${b.englishName}/260/260`,
          }))
        setPlanets(shaped)
        setLoading(false)
      })
      .catch(() => {
        // fallback with static data so the UI always renders
        setPlanets([
          { planet: 'Mercury', distanceFromSun: 0.39, image: PLANET_IMAGES.Mercury },
          { planet: 'Venus',   distanceFromSun: 0.72, image: PLANET_IMAGES.Venus },
          { planet: 'Earth',   distanceFromSun: 1.00, image: PLANET_IMAGES.Earth },
          { planet: 'Mars',    distanceFromSun: 1.52, image: PLANET_IMAGES.Mars },
          { planet: 'Jupiter', distanceFromSun: 5.20, image: PLANET_IMAGES.Jupiter },
          { planet: 'Saturn',  distanceFromSun: 9.58, image: PLANET_IMAGES.Saturn },
          { planet: 'Uranus',  distanceFromSun: 19.2, image: PLANET_IMAGES.Uranus },
          { planet: 'Neptune', distanceFromSun: 30.05, image: PLANET_IMAGES.Neptune },
        ])
        setLoading(false)
        setError('Using offline data — check your API endpoint.')
      })
  }, [])

  return (
    <section className="planets-section" id="planets-section">
      <div className="container">
        <p className="section-label">Fetch API</p>
        <h2 className="section-title">Our Solar System</h2>
        <p className="section-desc" style={{ marginBottom: '48px' }}>
          Planet data fetched live from the API. Each card shows the planet name,
          its distance from the Sun, and a visual representation.
        </p>

        {error && (
          <p className="planets-error" role="alert">{error}</p>
        )}

        {loading ? (
          <div className="planets-loading" aria-live="polite">
            <span className="loader" />
            <p>Fetching planets…</p>
          </div>
        ) : (
          <div className="planets-grid">
            {planets.map((p) => (
              <PlanetCard key={p.planet} planet={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

