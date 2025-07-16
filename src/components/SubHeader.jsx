import closeImage from "../assets/close.png";
import backImage from "../assets/back.png";
import { useNavigate } from "react-router-dom";

const SubHeader = ({ showBackButton, title }) => {
  const nav = useNavigate();

  return (
    <header className="header">
      {showBackButton && (
        <button
          onClick={() => nav(-1)}
          className="absolute top-1/2 transform -translate-y-1/2 left-[25px]"
        >
          <img className="w-[9px] bg-cover" src={backImage} />
        </button>
      )}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-[50px]">
        {title}
      </div>
      <button onClick={() => nav("/")} className="header-right">
        <img className="w-5 h-5" src={closeImage} />
      </button>
    </header>
  );
};

export default SubHeader;
