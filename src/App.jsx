// import react-router
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { myRoutes } from "./Routes/MyRoutes";

// import components
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ProductDetails from "./pages/ProductDetails";
import ScrollToTop from "./components/_common/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import SignInPage from "./pages/SignInPage";
import ProfilePage from "./pages/Profile";
import SignUpPage from "./pages/SignUpPage";
const App = () => {
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <ScrollToTop>
            <Header />
            <Routes>
              {myRoutes.map(({ id, path, element }) => (
                <Route path={path} element={element} key={id} />
              ))}
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route
                path="/profile"
                element={
                  <SignedIn>
                    <ProfilePage />
                  </SignedIn>
                }
              />
              <Route
                path="/signin/*"
                element={
                  <SignedOut>
                    <SignInPage />
                  </SignedOut>
                }
              />
              <Route
                path="/signup/*"
                element={
                  <SignedOut>
                    <SignUpPage />
                  </SignedOut>
                }
              />
              <Route
                path="*"
                element={
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                }
              />
            </Routes>
            <Sidebar />
            <Footer />
          </ScrollToTop>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
};

export default App;
