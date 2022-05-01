import React from "react";

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}

// hero content
const Hero = () => (
  <section className="hero">
    {/* content for the hero */}
    <div className="hero__content">
      <h1 className="hero__title">Volcanoes of the world </h1>
    </div>
  </section>
);
