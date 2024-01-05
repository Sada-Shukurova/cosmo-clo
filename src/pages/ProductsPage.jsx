import React from "react";
import HeroSmall from "../components/HeroSmall";
import Products from "../components/Products";

const ProductsPage = () => {
  return (
    <div>
      <HeroSmall heroTitle={"Products"} />
      <Products />
    </div>
  );
};

export default ProductsPage;
