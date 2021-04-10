import Header from "./Components/Header";
import Title from "./Components/Title";
import Search from "./Components/Search";
import ImageWelcome from "./Components/ImageWelcome";
import { AppContext } from "./Components/AppContext";
import React, { useContext } from "react";

function App() {
  const { isDarkMode } = useContext(AppContext);

  return (
    <div className={`container ${isDarkMode ? "dark" : "light"}`}>
      <Header />
      <Title />
      <div className="content-search">
        <ImageWelcome />
        <Search />
      </div>
    </div>
  );
}

export default App;
