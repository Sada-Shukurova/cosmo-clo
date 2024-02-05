import { createContext, useState, useEffect } from "react";

const url = "https://happy-clo-db.vercel.app/products";
const hUrl = "https://happy-clo-db.vercel.app/products?_limit=4";
// create context
export const ProductContext = createContext();

let queryUrl = "";

const ProductProvider = ({ children }) => {
  // product state
  const [products, setProducts] = useState([]);
  // flag for page
  const [pageI, setPageI] = useState(false);
  const [query, setQuery] = useState("");

  // fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      let fetchUrl = pageI ? url : hUrl;
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

  useEffect(() => {
    const splitedState = query.split("=");


    if (queryUrl.includes(splitedState[0])) {
      const regex = new RegExp(`${splitedState[0]}=[^&]*`);
      queryUrl = queryUrl.replace(
        regex,
        `${splitedState[0]}=${splitedState[1]}`
      ); // output must be http://excample.com?category=lorem
    } else {
      queryUrl += `${query}&`;
    }

    console.log(queryUrl);

    const fetchWithCategory = async () => {
      const res = await fetch(`${url}?${queryUrl}`);
      const data = await res.json();
      setProducts(data);
    };

    fetchWithCategory();
  }, [query]);

  return (
    <ProductContext.Provider value={{ products, pageI, setPageI, setQuery }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
