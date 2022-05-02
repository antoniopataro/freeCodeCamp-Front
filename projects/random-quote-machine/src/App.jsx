import React, { useState } from "react";
import "./App.css";

const TwitterIcon = "https://i.ibb.co/Mg8szpQ/Twitter-Icon.png";

import Main from "./Styles/Main";

function App() {
  const [primaryColor, setPrimaryColor] = useState(
    "#" + Math.floor(Math.random() * 16777215).toString(16)
  );

  const [quoteText, setQuoteText] = useState(() => getData());
  const [quoteAuthor, setQuoteAuthor] = useState();

  function getData() {
    fetch("https://api.quotable.io/random")
      .then(function (response) {
        response.json().then(function (data) {
          if (typeof data === "object") {
            console.log("carregou:", data);
            setQuoteText(data.content);
            setQuoteAuthor(data.author);
            setPrimaryColor(generateColor());
          }
        });
      })
      .catch(function (err) {
        console.error("Failed retrieving information", err);
      });
  }

  const generateColor = () => {
    const newColor = `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, 0)}`;

    return newColor;
  };

  return (
    <Main color={primaryColor}>
      <div id="quote-box">
        <div id="quote-text">
          <span id="text">
            <div id="quote-icon">
              <div id="quote-icon-bg"></div>
            </div>
            <h1>{quoteText}</h1>
          </span>
        </div>
        <div id="quote-author">
          <span>- </span>
          <span id="author">{quoteAuthor}</span>
        </div>
        <div id="quote-nav">
          <a
            id="tweet-quote"
            target="_blank"
            href={`https://twitter.com/intent/tweet?text=${quoteText}`}
          >
            <img src={TwitterIcon} alt="Tweet this quote." />
          </a>
          <button id="new-quote" onClick={() => getData()}>
            New Quote
          </button>
        </div>
      </div>
    </Main>
  );
}

export default App;
