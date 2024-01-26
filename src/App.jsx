// import react-router
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { myRoutes } from "./Routes/MyRoutes";

// import components
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
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
