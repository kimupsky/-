import { useContext } from "react";
import { CartStateContext } from "../App";
import CartItem from "./CartItem";

const CartList = ({ data }) => {
  return (
    <div className="pt-[32px]">
      <h2 className="text-[30px] font-extrabold mb-[7px]">장바구니</h2>
      <div className="text-base font-normal mb-[10px]">
        현재 {data.length}개의 상품이 담겨있습니다.
      </div>
      <div>
        {data.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CartList;
