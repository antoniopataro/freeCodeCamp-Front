import styled from "styled-components";

const QuoteIcon = "https://i.ibb.co/Dgc83Ff/icons8-aspas-esquerdas-50.png";

const Body = styled.main`
  display: flex;

  height: 100vh;

  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.color};

  transition: background-color linear 0.1s;

  #quote-box {
    display: flex;
    flex-direction: column;

    min-height: 175px;
    height: fit-content;
    width: 450px;

    justify-content: space-between;
    padding: 50px;
    gap: 30px;

    border-radius: 5px;

    background: white;

    #text {
      display: flex;
      flex-direction: row;

      color: ${(props) => props.color};

      gap: 10px;

      text-align: center;

      word-break: break-word;

      /* transition: color linear 0.1s; */

      #text:first-line {
        text-indent: 50px;
      }

      #quote-icon {
        -webkit-mask-image: url(${QuoteIcon});
        mask-image: url(${QuoteIcon});
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        mask-size: 100%;
      }

      #quote-icon-bg {
        height: 30px;
        width: 30px;

        background-color: ${(props) => props.color};

        transition: background-color linear 0.1s;
      }

      img {
        pointer-events: none;

        height: 30px;
      }
    }

    #quote-author {
      text-align: right;

      color: ${(props) => props.color};

      transition: color linear 0.1s;
    }

    #quote-nav {
      display: flex;
      flex-direction: row;

      justify-content: space-between;

      #tweet-quote {
        display: grid;
        place-items: center;

        height: 50px;
        width: 50px;

        border-radius: 5px;

        cursor: pointer;

        background-color: ${(props) => props.color};

        transition: background-color linear 0.1s;
      }

      #new-quote {
        height: 50px;
        width: 125px;

        border: none;
        border-radius: 5px;

        text-align: center;

        cursor: pointer;

        color: white;
        background-color: ${(props) => props.color};

        transition: background-color, filter linear 0.1s;
      }

      a:hover,
      button:hover {
        filter: brightness(95%);
      }
    }
  }
`;

export default Body;
