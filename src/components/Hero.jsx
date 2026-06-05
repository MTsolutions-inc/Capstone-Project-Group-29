// import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Explore Our Solar System Through Data</h1>

        <p>
          Understand the planets not just by names, but by measureable facts.
        </p>

        <div className="hero-buttons">
          <button>Explore the Data</button>
          <button className="outline">Contact Us</button>
        </div>
      </div>

      <div className="hero-image">
        <img src="/earth.png" alt="Earth"/>
      </div>
    </section>
  );
}