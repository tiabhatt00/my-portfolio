import React, { useState, useEffect } from "react";

const Title = () => {
  const [texts, setTexts] = useState([
    "hi, i'm tia!",
    "i'm a software engineer with two years of experience",
  ]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(texts[0]);

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
          }, 5);
        }
      }, 100);

      return () => clearInterval(interval);
    };

    typingEffect();
  }, [currentTextIndex, texts]);

  return (
    <section id="title">
      <div className="container">
        <h2>Tia Bhattacharya</h2>
        <p>{displayedText}</p>
      </div>
    </section>
  );
};

export default Title;
