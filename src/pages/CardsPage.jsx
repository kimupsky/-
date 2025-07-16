import SubHeader from "../components/SubHeader";
import AddCardButton from "../components/AddCardButton";
import CardList from "../components/CardList";
import { useContext } from "react";
import { CardStateContext } from "../App";

const CardsPage = () => {
  const cards = useContext(CardStateContext);

  return (
    <div>
      <SubHeader title={"보유카드"} />
      <div className="pb-16 flex flex-col items-center">
        <CardList data={cards} />
        {cards.length === 0 && (
          <div className="pb-[9px] text-[#575757] text-center font-bold text-sm">
            새로운 카드를 등록해주세요.
          </div>
        )}
        <div className={cards.length === 0 ? "" : "pt-[40px]"}>
          <AddCardButton />
        </div>
      </div>
    </div>
  );
};

export default CardsPage;
