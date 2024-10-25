import React from "react";
import BlurBackground from "./components/BlurBackground";

const App = () => {
  return (
    <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_50%_50%_at_50%_-20%,rgba(100,0,100,0.6),rgba(0,0,0,0.8))]">
      <div>
        <BlurBackground />
      </div>
    </div>
  );
};

export default App;
