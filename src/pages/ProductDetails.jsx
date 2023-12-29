// import usecontext
import { useContext } from "react";
// import useparams
import { useParams } from "react-router";
// import cart contect
import CartContext from "../contexts/CartContext";
// import product contect
import ProductContext from "../contexts/ProductContext";

const ProductDetails = () => {
  // get the product id from url
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // get the single product based on the id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  return <div>Product Details Page</div>;
};

export default ProductDetails;
