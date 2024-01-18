import { useContext, useEffect, useState } from "react";
// sidebarcontext
import { SidebarContext } from "../contexts/SidebarContext";
// card barcontext
import { CartContext } from "../contexts/CartContext";
// import icons
import { BsBag } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
// import Logo
import Logo from "../img/logo.svg";

// import Link
import { Link, NavLink, useLocation } from "react-router-dom";
import { myRoutes } from "../MyRoutes";
import { ProductContext } from "../contexts/ProductContext";

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // get products context
  const { setPageI, pageI } = useContext(ProductContext);

  // get location
  const location = useLocation();

  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  // location event listener
  useEffect(() => {
    // Log a message when the path is "/"
    if (location.pathname === "/") {
      setPageI(false);
    } else if (location.pathname === "/products") {
      setPageI(true);
    }
  }, [location.pathname]);

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-20 transition-all`}
    >
      <div className="container px-[2.5rem] mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <Link to={"/"}>
          <div>
            <img className="w-[40px]" src={Logo} alt="logo" />
          </div>
        </Link>
        {/* Navigation */}
        {myRoutes.map(({ path, text, id }) => {
          return (
            <NavLink
              key={id}
              to={path}
              className={({ isActive }) =>
                `${
                  isActive ? "text-red-700 underline font-semibold" : ""
                } text-xl`
              }
            >
              {text}
            </NavLink>
          );
        })}

        {/* user */}
        <Link to={"https://www.google.com"}>
          <FiUser className="text-2xl" />
        </Link>
        {/* cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative "
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-700 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
