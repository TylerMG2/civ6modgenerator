import React, { useState } from "react";
import Overview from "./sections/Overview";
import Leader from "./sections/Leader";
import "./App.css";

// List of sections to render
const sections = [
  {
    id: 0,
    name: "Overview",
    component: Overview,
  },
  {
    id: 1,
    name: "Leaders",
    component: Leader,
  },
];

function App() {
  // State to keep track of selected section
  const [selectedSection, setSelectedSection] = useState<number>(0);

  return (
    <>
      <div id="title-section">
        <img src="https://image.api.playstation.com/vulcan/img/rnd/202011/0203/4LEC1DsPn82UUHbPoX3dSuhE.png" />
        <h4>CIVILIZATION CREATOR</h4>
      </div>
      <div id="section">
        <div id="section-selector">
          {sections.map((section) => {
            return (
              <button
                key={section.id}
                onClick={() => setSelectedSection(section.id)}
                className={selectedSection === section.id ? "selected" : ""}
              >
                {section.name}
              </button>
            );
          })}
        </div>
        <div id="selected-section">{sections[selectedSection].component()}</div>
      </div>
    </>
  );
}

export default App;
