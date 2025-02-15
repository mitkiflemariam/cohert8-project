import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import AboutUs from "./component/AboutUs";
import Footer from "./component/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
