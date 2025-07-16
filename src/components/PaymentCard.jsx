const PaymentCard = ({
  cardNumber,
  cardDate = "MM/YY",
  cardOwner = "NAME",
}) => {
  return (
    <div className="relative left-1/2 transform -translate-x-1/2 w-[208px] h-[123px] rounded-[5px] bg-[#333333]">
      <div className="absolute w-[40px] h-[26px] top-[47px] left-[14px] rounded-[4px] bg-[#CBBA64]"></div>
      <div className="absolute text-white left-[18px] bottom-[22px] card-text text-lg">
        {cardNumber}
      </div>
      <div className="absolute bottom-[10px] left-[18px] card-text">
        {cardOwner}
      </div>
      <div className="absolute bottom-[10px] right-[18px] card-text">
        {cardDate}
      </div>
    </div>
  );
};

export default PaymentCard;
