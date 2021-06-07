import React from "react";
import Header from "./Header";
import Social from "./Social";
import Hero from "./Hero";

function App() {
  return (
    <div>
      <div className="socialwrapper">
        <Social />
      </div>
      <Header />
      <Hero />
    </div>
  );
}

export default App;
