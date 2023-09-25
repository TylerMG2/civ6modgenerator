import React, { useState } from "react";
import Overview from "./sections/Overview";
import Leader from "./sections/Leader";
import Features from "./sections/Features";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CivForm } from "./types";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#193551",
      paper: "#1e1e1e",
    },
  },
});

// List of sections to render
const sections = [
  {
    id: 0,
    name: "Overview",
    component: Overview,
  },
  {
    id: 1,
    name: "Features",
    component: Features,
  },
  {
    id: 2,
    name: "Leaders",
    component: Leader,
  },
];

function App() {
  // State to keep track of selected section
  const [selectedSection, setSelectedSection] = useState<number>(0);

  // State to keep track of form data
  const [civForm, setCivForm] = useState<CivForm>({
    overview: {},
    features: {},
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
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
          <div id="selected-section">
            {React.createElement(sections[selectedSection].component, {
              data: civForm,
              updateData: setCivForm,
            })}
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
