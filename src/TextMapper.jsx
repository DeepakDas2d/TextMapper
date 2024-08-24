import React, { useRef, useEffect, useState } from "react";
import "./TextMapper.css"; // Import the CSS file

const TextMapper = ({ inputText, outputText }) => {
  const inputRef = useRef(null);
  const sentenceMap = useRef(new Map());
  const [highlightedSentence, setHighlightedSentence] = useState(null);

  useEffect(() => {
    // Input box mein har sentence ko map karo with its corresponding DOM element
    inputText.forEach((sentence, index) => {
      const elements = inputRef.current.querySelectorAll("p");
      if (elements[index] && elements[index].textContent === sentence) {
        sentenceMap.current.set(sentence, elements[index]);
      }
    });
  }, [inputText]);

  const handleClick = (sentence) => {
    const targetElement = sentenceMap.current.get(sentence);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
      setHighlightedSentence(sentence);
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h2>Input Box</h2>
        <div className="input-box" ref={inputRef}>
          {inputText.map((sentence, index) => (
            <p
              key={index}
              className={highlightedSentence === sentence ? "highlight" : ""}
            >
              {sentence}
            </p>
          ))}
        </div>
      </div>
      <div className="box">
        <h2>Output Box</h2>
        <div className="output-box">
          {outputText.map((sentence, index) => (
            <p key={index} onClick={() => handleClick(sentence)}>
              {sentence}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextMapper;
