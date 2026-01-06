import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Work from "../components/Work";
import Journey from "../components/Journey";
import WallOfLove from "../components/WallOfLove";
import MenuOverlay from "../components/MenuOverlay";
import { useState } from "react";
import MenuButton from "../components/MenuButton";
const Home = () => {
  return (
    <main style={{ padding: "80px 40px" }}>
      <h1>Welcome to Bloom Branding</h1>
      <p>
        We craft bold brand identities and immersive digital experiences.
      </p>
      <div className="app">
      <MenuButton onClick={() => setMenuOpen(true)} />

      {menuOpen && <MenuOverlay onClose={() => setMenuOpen(false)} />}

      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Journey />
      <WallOfLove />
    </div>
    </main>
  );
};

export default Home;
