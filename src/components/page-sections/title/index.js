import React, { useState, useEffect } from "react";
import { Header, Subtitle } from "../../../font-library";
import "./styles.css";

const texts = [
  "hi, i'm tia!",
  "i'm a software engineer with two years of experience developing full stack applications",
  "welcome to my portfolio",
];

const TypingEffect = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const typingEffect = () => {
      const text = texts[currentTextIndex];
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setCurrentTextIndex((prevIndex) =>
              prevIndex === texts.length - 1 ? 0 : prevIndex + 1
            );
          }, 2000); 
        }
      }, 100);
      return () => clearInterval(interval);
    };

    typingEffect();

  }, [currentTextIndex]);

  return (
    <section id="title">
      <div className="title-container">
        <Header>Tia Bhattacharya</Header>
        <Subtitle>{displayedText}</Subtitle>
      </div>
    </section>
  );
};

export default TypingEffect;
