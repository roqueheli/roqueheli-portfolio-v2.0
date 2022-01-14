import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section id="hero">
      <div class="hero container">
        <div>
          <h1>Hello, <span></span></h1>
          <h1>My name is <span></span></h1>
          <h1>Roqueheli <span></span></h1>
          <Link to="/projects" type="button" class="cta">Projects</Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
