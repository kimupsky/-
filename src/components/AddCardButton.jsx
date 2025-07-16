import { useNavigate } from "react-router-dom";

const AddCardButton = () => {
  const nav = useNavigate();

  return (
    <button
      className="w-[208px] h-[123px] rounded-[5px] bg-[#E5E5E5] text-3xl text-[#575757]"
      onClick={() => nav("/cards/register")}
    >
      +
    </button>
  );
};

export default AddCardButton;
