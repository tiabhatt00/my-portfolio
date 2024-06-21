import React, { useState, useEffect } from "react";
import { H1, Subtitle } from "../../font-library";
import "./styles.css";

const texts = [
  "hi, i'm tia!",
  "i'm a software engineer with two years of experience developing full stack applications",
  "welcome to my portfolio :)",
];


const Title = () => {

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
        <H1>Tia Bhattacharya</H1>
        <Subtitle>{displayedText}</Subtitle>
        <div className="socials">
          <a
            href="http://linkedin.com/in/tia-bhattacharya"
            target="_blank"
            rel="noopener noreferrer"
            className="socials-item"
          >
            LinkedIn
          </a>
          <a
            href="http://github.com/tiabhatt00"
            target="_blank"
            rel="noopener noreferrer"
            className="socials-item"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Title;
