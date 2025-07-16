import { getProductImage } from "../utils/get-product-image";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartStateContext } from "../App";
import { CartDispatchContext } from "../App";
import { formatPrice } from "../utils/format";

const ProductCard = ({ id, name, content, price }) => {
  const cart = useContext(CartStateContext);
  const { onAddToCart } = useContext(CartDispatchContext);
  const nav = useNavigate();

  const isInCart = cart.find((item) => item.id === id);

  const onClickButton = () => {
    nav("/cards");
  };

  const onClickAddToCart = () => {
    onAddToCart(id);
  };

  return (
    <div className="w-[calc((100%-16px)/2)] overflow-hidden rounded-[15px] border border-solid border-[#f2f2f2]">
      <img
        className="w-full h-[115px] md:h-[165px] lg:h-[215px] object-cover"
        src={getProductImage(id + 1)}
      />
      <div className="pl-[17px] pt-[17px] pr-[12px] pb-[20px] flex flex-col gap-[7px]">
        <div className="text-base font-medium">{name}</div>
        <div className="text-[13px] font-normal text-[#7c7a7a]">{content}</div>
        <div className="text-sm font-medium">{formatPrice(price)}</div>
        <div className="flex gap-[9px]">
          <Button
            text={isInCart ? "담김!" : "담기"}
            size={"extraSmall"}
            onClick={onClickAddToCart}
            isDisabled={isInCart}
            color={isInCart && "gray"}
          />
          <Button
            text={"구매"}
            size={"extraSmall"}
            color={"yellow"}
            onClick={onClickButton}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
