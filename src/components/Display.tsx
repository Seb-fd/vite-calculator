type DisplayProps = {
  previousOperand: string;
  currentOperand: string;
  operation: string;
};

export default function Display({
  previousOperand,
  currentOperand,
  operation,
}: DisplayProps) {
  const getFontSize = (text: string) => {
    if (text.length > 18) return "text-2xl";
    if (text.length > 12) return "text-3xl";
    if (text.length > 8) return "text-4xl";
    return "text-5xl";
  };

  return (
    <div className="col-span-4 h-[100px] flex flex-col items-end justify-end px-4 py-2 rounded-[1.5rem] bg-transparent text-right text-wrap break-all">
      <div
        className={`text-sm text-orange-300 leading-none w-full overflow-hidden truncate ${getFontSize(
          previousOperand
        )}`}
      >
        {previousOperand} {operation}
      </div>
      <div
        className={`text-orange-400 font-semibold leading-none w-full overflow-hidden truncate ${getFontSize(
          currentOperand || "0"
        )}`}
      >
        {currentOperand || "0"}
      </div>
    </div>
  );
}
