type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <button
      className={`rounded-full h-[60px] text-xl font-medium transition-all duration-150 active:scale-95 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
