import React, { useState, useEffect } from "react";
import "./App.css";
import Apod from './Components/Apod/Apod';


function App() {
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <Apod />

    </div>
  );
}

export default App;
