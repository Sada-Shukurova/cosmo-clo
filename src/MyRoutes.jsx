import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import ProductsPage from "./pages/ProductsPage";

export const myRoutes = [
  {
    id: 1,
    path: "/",
    element: <Home />,
  },
  {
    id: 2,
    path: "/products",
    element: <ProductsPage />,
  },
  {
    id: 3,
    path: "/product/:id",
    element: <ProductDetails />,
  },
  {
    id: 4,
    path: "/about",
    element: <AboutPage />,
  },
  {
    id: 5,
    path: "/contact",
    element: <ContactPage />,
  },
];
