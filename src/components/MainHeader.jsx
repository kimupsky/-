import cartImage from "../assets/cart.png";
import backArrowImage from "../assets/backArrow.png";
import { CartStateContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const MainHeader = ({ showBackBtn, showCartIcon }) => {
  const cart = useContext(CartStateContext);
  const cartCount = cart.length;
  const nav = useNavigate();

  return (
    <header className="header bg-black">
      {showBackBtn && (
        <button className="header-left" onClick={() => nav(-1)}>
          <img className="w-5 h-5 bg-cover" src={backArrowImage} />
        </button>
      )}
      {showCartIcon && (
        <button className="header-right" onClick={() => nav("/cart")}>
          <img className="w-5 h-6 bg-cover" src={cartImage} />
          {cartCount > 0 && (
            <div className="absolute top-[12px] left-[12px] w-[19px] h-[19px] rounded-full bg-white text-black text-[10px] font-bold flex items-center justify-center">
              {cart.length}
            </div>
          )}
        </button>
      )}
    </header>
  );
};

export default MainHeader;
