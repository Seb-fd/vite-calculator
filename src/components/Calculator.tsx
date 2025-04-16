import { useState } from "react";
import Display from "./Display";
import Button from "./Button";

export default function Calculator() {
  const [currentOperand, setCurrentOperand] = useState("");
  const [previousOperand, setPreviousOperand] = useState("");
  const [operation, setOperation] = useState("");

  const appendNumber = (number: string) => {
    if (number === "." && currentOperand.includes(".")) return;
    setCurrentOperand(currentOperand + number);
  };

  const chooseOperation = (op: string) => {
    if (currentOperand === "") return;
    if (previousOperand !== "") {
      compute();
    } else {
      setPreviousOperand(currentOperand);
      setCurrentOperand("");
    }
    setOperation(op);
  };

  const compute = () => {
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    let result;
    switch (operation) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "*":
        result = prev * current;
        break;
      case "/":
        result = prev / current;
        break;
      default:
        return;
    }

    setCurrentOperand(result.toString());
    setPreviousOperand("");
    setOperation("");
  };

  const clear = () => {
    setCurrentOperand("");
    setPreviousOperand("");
    setOperation("");
  };

  const del = () => {
    setCurrentOperand(currentOperand.slice(0, -1));
  };

  return (
    <div className="bg-zinc-900 text-white rounded-3xl shadow-2xl p-4 w-[320px]">
      <Display
        previousOperand={previousOperand}
        currentOperand={currentOperand}
        operation={operation}
      />

      <div className="grid grid-cols-4 gap-3">
        <Button
          className="bg-zinc-800 hover:bg-zinc-700 col-span-2"
          onClick={clear}
        >
          AC
        </Button>
        <Button className="bg-zinc-800 hover:bg-zinc-700" onClick={del}>
          DEL
        </Button>
        <Button
          className="bg-zinc-800 hover:bg-zinc-700 active:scale-95"
          onClick={() => chooseOperation("/")}
        >
          ÷
        </Button>

        <Button
          className="bg-zinc-700 hover:bg-zinc-600"
          onClick={() => appendNumber("7")}
        >
          7
        </Button>
        <Button
          className="bg-zinc-700 hover:bg-zinc-600"
          onClick={() => appendNumber("8")}
        >
          8
        </Button>
        <Button
          className="bg-zinc-700 hover:bg-zinc-600"
          onClick={() => appendNumber("9")}
        >
          9
        </Button>
        <Button
          className="bg-zinc-800 hover:bg-zinc-700 active:scale-95"
          onClick={() => chooseOperation("*")}
        >
          ×
        </Button>

        <Button
          className="bg-zinc-700 hover:bg-zinc-600"
          onClick={() => appendNumber("4")}
        >
          4
        </Button>
        <Button
          className="bg-zinc-700 hover:bg-zinc-600"
          onClick={() => appendNumber("5")}
        >
          5
        </Button>
        <Button
          className="bg-zinc-700 hover:bg-zinc-600"
          onClick={() => appendNumber("6")}
        >
          6
        </Button>
        <Button
          className="bg-zinc-800 hover:bg-zinc-700 active:scale-95"
          onClick={() => chooseOperation("+")}
        >
          +
        </Button>

        <Button
          className="bg-zinc-700 hover:bg-zinc-600"
          onClick={() => appendNumber("1")}
        >
          1
        </Button>
        <Button
          className="bg-zinc-700 hover:bg-zinc-600"
          onClick={() => appendNumber("2")}
        >
          2
        </Button>
        <Button
          className="bg-zinc-700 hover:bg-zinc-600"
          onClick={() => appendNumber("3")}
        >
          3
        </Button>
        <Button
          className="bg-zinc-800 hover:bg-zinc-700 active:scale-95"
          onClick={() => chooseOperation("-")}
        >
          -
        </Button>

        <Button
          className="bg-zinc-800 hover:bg-zinc-700"
          onClick={() => appendNumber(".")}
        >
          .
        </Button>
        <Button
          className="bg-zinc-700 hover:bg-zinc-600"
          onClick={() => appendNumber("0")}
        >
          0
        </Button>
        <Button
          className="bg-orange-400 hover:bg-orange-300 col-span-2"
          onClick={compute}
        >
          =
        </Button>
      </div>
    </div>
  );
}
