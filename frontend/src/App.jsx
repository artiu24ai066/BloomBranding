import Home from "./pages/Home";
import { useState } from "react";
import "./App.css";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <Home />
    </>
  );
}

export default App;
