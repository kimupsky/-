import ProductCard from "../components/ProductCard";
import { products } from "../constants/products";

const ProductList = () => {
  return (
    <div className="mt-[69px] pt-[32px] px-[23px] pb-[28px]">
      <h2 className="text-[30px] font-extrabold mb-[7px]">신발 상품 목록</h2>
      <div className="text-base font-normal mb-[33px]">
        현재 {products.length}개의 상품이 있습니다.
      </div>
      <div className="flex flex-wrap gap-4 justify-between">
        {products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
