const Button = ({ text, size, onClick, color, isDisabled = false }) => {
  const colorVariants = {
    yellow: "text-black bg-[#FFEF64]",
    gray: "px-[11px] text-black bg-[#D8D8D8]",
  };

  const sizeVariants = {
    extraSmall: "btn-xs",
    small: "btn-sm",
    large: "btn-lg",
  };

  return (
    <button
      className={`self-start btn ${sizeVariants[size]} ${colorVariants[color]}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
