import { useState } from "react";
import Display from "./Display";
import Button from "./Button";

export default function Calculator() {
  const [currentOperand, setCurrentOperand] = useState("");
  const [previousOperand, setPreviousOperand] = useState("");
  const [operation, setOperation] = useState("");

  const buttonStyles = {
    number: "bg-zinc-700 hover:bg-zinc-600",
    operator: "bg-zinc-800 hover:bg-zinc-700 active:scale-95",
    action: "bg-orange-400 hover:bg-orange-300",
    delete: "bg-zinc-800 hover:bg-zinc-700",
    toggleSign: "bg-zinc-800 hover:bg-zinc-700",
  };

  const appendNumber = (number: string) => {
    if (currentOperand === "Error") {
      setCurrentOperand(number);
      return;
    }

    if (number === "-" && currentOperand === "") {
      setCurrentOperand("-");
      return;
    }

    if (number === "." && currentOperand.includes(".")) return;

    setCurrentOperand(currentOperand + number);
  };

  const toggleSign = () => {
    if (currentOperand === "Error") return;

    if (currentOperand.startsWith("-")) {
      setCurrentOperand(currentOperand.slice(1));
    } else if (currentOperand !== "") {
      setCurrentOperand("-" + currentOperand);
    }
  };

  const chooseOperation = (op: string) => {
    if (currentOperand === "Error") {
      clear();
      return;
    }
    if (currentOperand === "") return;

    if (previousOperand !== "") {
      const result = performCalculation();
      if (result !== null) {
        setPreviousOperand(result.toString());
        setCurrentOperand("");
      } else {
        return;
      }
    } else {
      setPreviousOperand(currentOperand);
      setCurrentOperand("");
    }
    setOperation(op);
  };

  const performCalculation = (): number | null => {
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return null;

    switch (operation) {
      case "+":
        return prev + current;
      case "-":
        return prev - current;
      case "*":
        return prev * current;
      case "/":
        if (current === 0) {
          setCurrentOperand("Error");
          setPreviousOperand("");
          setOperation("");
          return null;
        }
        return prev / current;
      default:
        return null;
    }
  };

  const compute = () => {
    if (currentOperand === "Error") {
      clear();
      return;
    }

    const result = performCalculation();
    if (result !== null) {
      setCurrentOperand(result.toString());
      setPreviousOperand("");
      setOperation("");
    }
  };

  const clear = () => {
    setCurrentOperand("");
    setPreviousOperand("");
    setOperation("");
  };

  const del = () => {
    if (currentOperand === "Error") {
      clear();
      return;
    }
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
        <Button className={buttonStyles.action} onClick={clear}>
          AC
        </Button>

        <Button className={buttonStyles.delete} onClick={del}>
          DEL
        </Button>

        <Button className={buttonStyles.toggleSign} onClick={toggleSign}>
          ±
        </Button>
        <Button
          className={buttonStyles.operator}
          onClick={() => chooseOperation("/")}
        >
          ÷
        </Button>

        <Button
          className={buttonStyles.number}
          onClick={() => appendNumber("7")}
        >
          7
        </Button>
        <Button
          className={buttonStyles.number}
          onClick={() => appendNumber("8")}
        >
          8
        </Button>
        <Button
          className={buttonStyles.number}
          onClick={() => appendNumber("9")}
        >
          9
        </Button>
        <Button
          className={buttonStyles.operator}
          onClick={() => chooseOperation("*")}
        >
          ×
        </Button>

        <Button
          className={buttonStyles.number}
          onClick={() => appendNumber("4")}
        >
          4
        </Button>
        <Button
          className={buttonStyles.number}
          onClick={() => appendNumber("5")}
        >
          5
        </Button>
        <Button
          className={buttonStyles.number}
          onClick={() => appendNumber("6")}
        >
          6
        </Button>
        <Button
          className={buttonStyles.operator}
          onClick={() => chooseOperation("+")}
        >
          +
        </Button>

        <Button
          className={buttonStyles.number}
          onClick={() => appendNumber("1")}
        >
          1
        </Button>
        <Button
          className={buttonStyles.number}
          onClick={() => appendNumber("2")}
        >
          2
        </Button>
        <Button
          className={buttonStyles.number}
          onClick={() => appendNumber("3")}
        >
          3
        </Button>
        <Button
          className={buttonStyles.operator}
          onClick={() => chooseOperation("-")}
        >
          -
        </Button>

        <Button
          className={buttonStyles.operator}
          onClick={() => appendNumber(".")}
        >
          .
        </Button>
        <Button
          className={buttonStyles.number}
          onClick={() => appendNumber("0")}
        >
          0
        </Button>
        <Button
          className={`${buttonStyles.action} col-span-2`}
          onClick={compute}
        >
          =
        </Button>
      </div>
    </div>
  );
}
