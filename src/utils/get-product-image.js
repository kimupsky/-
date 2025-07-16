import Product1 from "../assets/product1.png";
import Product2 from "../assets/product2.png";
import Product3 from "../assets/product3.png";
import Product4 from "../assets/product4.png";
import Product5 from "../assets/product5.jpeg";
import Product6 from "../assets/product6.png";

export function getProductImage(productId) {
  switch (productId) {
    case 1:
      return Product1;
    case 2:
      return Product2;
    case 3:
      return Product3;
    case 4:
      return Product4;
    case 5:
      return Product5;
    case 6:
      return Product6;
    default:
      return null;
  }
}
