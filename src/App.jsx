// import react-router
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
// import components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";

const App = () => {
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Sidebar />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
