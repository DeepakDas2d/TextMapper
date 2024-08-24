import React from "react";
import TextMapper from "./TextMapper"; // Import the TextMapper component

const App = () => {
  const inputText = [
    "The patient reported sharp and worsening abdominal pain.",
    "The pain radiates to the lower back.",
    "There is a history of similar episodes.",
    "The patient has been experiencing nausea.",
    "There is no fever or chills reported.",
    "Blood pressure and heart rate are within normal limits.",
    "The patient denies any recent travel.",
    "A CT scan is scheduled for further evaluation.",
    "The lab results are pending.",
    "The patient is advised to rest and stay hydrated.",
  ];

  const outputText = [
    "Blood pressure and heart rate are within normal limits.",
    "The patient reported sharp and worsening abdominal pain.",
    "The lab results are pending.",
    "The pain radiates to the lower back.",
    "A CT scan is scheduled for further evaluation.",
  ];

  return (
    <div className="App">
      <h1>Text Mapping Example</h1>
      <TextMapper inputText={inputText} outputText={outputText} />
    </div>
  );
};

export default App;
