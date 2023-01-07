import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Toronto" />
        <footer>
          This app was coded by MP and is available {""}
          <a
            href="https://github.com/eltirolibre/react-weather-mp"
            target="_blank"
          >
            on Github
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
