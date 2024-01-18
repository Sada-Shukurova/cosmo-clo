// import react-router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { myRoutes } from "./MyRoutes";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <Header />
        <Routes>
          {myRoutes.map(({ id, path, element }) => (
            <Route path={path} element={element} key={id} />
          ))}
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
