import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "./Product";

const Products = () => {
  // get products from product context
  const { products } = useContext(ProductContext);

  return (
    <div>
      <section className="pb-16">
        <div className="container mx-auto px-10">
          {/* products grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {products.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
