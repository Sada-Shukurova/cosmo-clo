import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Home from "../pages/HomePage";
// import ProductDetails from "./pages/ProductDetails";
import ProductsPage from "../pages/ProductsPage";

export const myRoutes = [
  {
    id: 1,
    path: "/",
    element: <Home />,
    text: "HOME",
  },
  {
    id: 2,
    path: "/products",
    element: <ProductsPage />,
    text: "PRODUCTS",
  },
  {
    id: 3,
    path: "/about",
    element: <AboutPage />,
    text: "ABOUT",
  },
  {
    id: 4,
    path: "/contact",
    element: <ContactPage />,
    text: "CONTACT",
  },
];
