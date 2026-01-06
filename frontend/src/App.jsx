import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import Journey from "./components/Journey";
import WallOfLove from "./components/WallOfLove";
import MenuOverlay from "./components/MenuOverlay";
import { useState } from "react";
import MenuButton from "./components/MenuButton";
import "./App.css";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (

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
  );
}

export default App;
