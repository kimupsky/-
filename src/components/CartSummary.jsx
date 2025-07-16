import { formatPrice } from "../utils/format";

const CartSummary = ({ data }) => {
  // 상품금액
  const totalPrice = data.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // 배송비
  const deliveryFee = totalPrice >= 100000 ? 0 : 3000;

  // 총 금액
  const totalAmount = totalPrice + deliveryFee;

  return (
    <div>
      <div className="py-[21px] border-b-[1px] border-[#EBEBEB]">
        <div className="flex justify-between items-center pb-[7px]">
          <div className="text-base font-bold">상품금액</div>
          <div className="text-2xl font-bold">{formatPrice(totalPrice)}</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-base font-bold">배송비</div>
          <div className="text-2xl font-bold">{formatPrice(deliveryFee)}</div>
        </div>
      </div>
      <div className="flex justify-between items-center pt-[21px] pb-[43px]">
        <div className="text-base font-bold">총 금액</div>
        <div className="text-2xl font-bold">{formatPrice(totalAmount)}</div>
      </div>
    </div>
  );
};

export default CartSummary;
