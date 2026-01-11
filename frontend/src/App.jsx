import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./App.css";
// import GetStarted from "./pages/GetStarted";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Journey from "./pages/Journey";
import Work from "./pages/Work";
import MenuPage from "./pages/MenuPage";


function App() {
  return (
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<MenuPage />} />

      {/* <Route path="/get-started" element={<GetStarted />} />  */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/journey" element={<Journey />} />
      <Route path="/work" element={<Work />} />
    </Routes>
  );
}

export default App;


  // <>
  //      <Home /> 
  //      <Journey /> 
  //      <Services /> 
  //      <Work /> 
  //   </> 
