import { useState } from "react";

import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState("0");

  class Calculator {
    constructor() {
      this.addValue = (e) => {
        const value = e.target.innerText;
        setDisplay(display + value);
        setEquation(equation + value);

        if (equation === "0") {
          setEquation(value);
        }

        if (display[0] === "0") {
          setDisplay((display) => display.substring(1, display.length));
        }
      };

      this.decimal = (e) => {
        const value = e.target.innerText;

        if (display.includes(value)) {
          return;
        }

        setDisplay(display + value);
        setEquation(equation + value);
      };

      this.addProperty = (e) => {
        const value = e.target.innerText;
        let lastInput = [equation[equation.length - 1]];

        if (lastInput == Number(lastInput)) {
          setEquation(equation + value);
        } else if (value != "-") {
          setEquation(
            (equation) => equation.substring(0, equation.length - 1) + value
          );
        } else {
          setEquation(equation + value);
        }

        if (value === "-" && display[0] === "0" && equation === "0") {
          setEquation(value);
        }

        if (value === "-" && display[0] === "0") {
          setDisplay(value);
          return;
        }

        if (
          equation[equation.length - 2] !=
            Number(equation[equation.length - 2]) &&
          lastInput != Number(lastInput)
        ) {
          setEquation(
            (equation) => equation.substring(0, equation.length - 2) + value
          );
        }

        setDisplay("0");
      };

      this.equals = () => {
        if (
          equation[equation.length - 1] != Number(equation[equation.length - 1])
        ) {
          setDisplay("0");
          setEquation("0");
          return;
        }

        const result = eval(equation);

        setDisplay(result);
        setEquation(result);
      };

      this.backspace = () => {
        if (display !== "0") {
          setDisplay(display.substring(0, display.length - 1));
          setEquation(equation.substring(0, equation.length - 1));
        }
        if (display.length === 1) {
          setDisplay("0");
          setEquation("0");
        }
      };

      this.clear = () => {
        setDisplay("0");
        setEquation("0");
      };
    }
  }

  const calculator = new Calculator();

  return (
    <main>
      <div id="calculator">
        <div id="equation">{equation}</div>
        <div id="display-wrapper">
          <div id="display">{display}</div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/565/565311.png"
            id="backspace"
            onClick={calculator.backspace}
            width="20"
          />
        </div>
        <div id="keypad">
          <button id="clear" onClick={calculator.clear}>
            AC
          </button>
          <button onClick={(e) => calculator.addProperty(e)}>+/-</button>
          <button onClick={(e) => calculator.addProperty(e)}>%</button>
          <button id="divide" onClick={(e) => calculator.addProperty(e)}>
            /
          </button>

          <button id="seven" onClick={(e) => calculator.addValue(e)}>
            7
          </button>
          <button id="eight" onClick={(e) => calculator.addValue(e)}>
            8
          </button>
          <button id="nine" onClick={(e) => calculator.addValue(e)}>
            9
          </button>

          <button id="multiply" onClick={(e) => calculator.addProperty(e)}>
            *
          </button>

          <button id="four" onClick={(e) => calculator.addValue(e)}>
            4
          </button>
          <button id="five" onClick={(e) => calculator.addValue(e)}>
            5
          </button>
          <button id="six" onClick={(e) => calculator.addValue(e)}>
            6
          </button>

          <button id="add" onClick={(e) => calculator.addProperty(e)}>
            +
          </button>

          <button id="one" onClick={(e) => calculator.addValue(e)}>
            1
          </button>
          <button id="two" onClick={(e) => calculator.addValue(e)}>
            2
          </button>
          <button id="three" onClick={(e) => calculator.addValue(e)}>
            3
          </button>

          <button id="subtract" onClick={(e) => calculator.addProperty(e)}>
            -
          </button>

          <button id="zero" onClick={(e) => calculator.addValue(e)}>
            0
          </button>
          <button id="decimal" onClick={(e) => calculator.decimal(e)}>
            .
          </button>

          <button id="equals" className="equals" onClick={calculator.equals}>
            =
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
