import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Navbar/Nav";
import Header from "./components/Header/Header";
import Features from "./components/Features/Features";
import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer/Footer";
import { useWindowSize } from "./hooks/useWindowSize";
const App = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const { width } = useWindowSize();

  if (width > 1000 && isDropdown) {
    setIsDropdown(false);
  }

  return (
    <div className="wrapper">
      <Nav
        isDropdown={isDropdown}
        onMobielMenuClick={() => setIsDropdown((prev) => !prev)}
      />
      <Header isDropdown={isDropdown} />
      <Features />
      <Articles />
      <Footer />
    </div>
  );
};

export default App;
