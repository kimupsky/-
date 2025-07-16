import PaymentCard from "./PaymentCard";
import Button from "./Button";

const CardList = ({ data }) => {
  return (
    <div className="mt-[69px]">
      {data.map((item) => {
        return (
          <div key={item.id} className="flex flex-col gap-3 mb-[17px]">
            <PaymentCard {...item} />
            <Button
              text={"이 카드로 결제하기"}
              color={"yellow"}
              size={"small"}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
