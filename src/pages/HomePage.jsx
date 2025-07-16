import MainHeader from "../components/MainHeader";
import ProductList from "../components/ProductList";

const HomePage = () => {
  return (
    <div>
      <MainHeader showBackBtn={false} showCartIcon={true} />
      <ProductList />
    </div>
  );
};

export default HomePage;
