import SubHeader from "../components/SubHeader";
import PaymentCard from "../components/PaymentCard";
import CardRegisterForm from "../components/CardRegisterForm";

const CardRegisterPage = () => {
  return (
    <div>
      <SubHeader showBackButton={true} title={"카드 추가"} />
      <div className="mt-[69px]">
        <PaymentCard />
        <CardRegisterForm />
      </div>
    </div>
  );
};

export default CardRegisterPage;
