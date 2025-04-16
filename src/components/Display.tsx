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
  return (
    <div className="col-span-4 h-[100px] flex flex-col items-end justify-end px-4 py-2 rounded-[1.5rem] bg-transparent text-right">
      <div className="text-sm text-orange-300">
        {previousOperand} {operation}
      </div>
      <div className="text-5xl text-orange-400 font-semibold leading-none">
        {currentOperand || "0"}
      </div>
    </div>
  );
}
