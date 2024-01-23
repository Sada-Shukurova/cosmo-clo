import { createContext, useState, useEffect } from "react";

const url = "https://fakestoreapi.com/products";
const hUrl = "https://fakestoreapi.com/products?limit=4";
// create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // product state
  const [products, setProducts] = useState([]);
  // flag for page
  const [pageI, setPageI] = useState(true);

  // fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const fetchUrl = pageI ? url : hUrl;
      console.log("Fetching from URL:", fetchUrl);

      try {
        const resp = await fetch(fetchUrl);
        const data = await resp.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [pageI]);

  return (
    <ProductContext.Provider value={{ products, pageI, setPageI }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
