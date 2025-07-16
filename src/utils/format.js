// x.xxx원
export const formatPrice = (price) => {
  const formattedPrice = price.toLocaleString("ko-KR");
  return `${formattedPrice}원`;
};
