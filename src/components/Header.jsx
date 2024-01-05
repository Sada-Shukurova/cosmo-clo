import { useContext, useEffect, useState } from "react";
// sidebarcontext
import { SidebarContext } from "../contexts/SidebarContext";
// card barcontext
import { CartContext } from "../contexts/CartContext";
// import icons
import { BsBag } from "react-icons/bs";
// import Logo
import Logo from "../img/logo.svg";

// import Link
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container px-[2.5rem] mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <Link to={"/"}>
          <div>
            <img className="w-[40px]" src={Logo} alt="logo" />
          </div>
        </Link>
        {/* Navigation */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "text-rose-800 underline font-semibold" : ""} text-xl`
          }
        >
          HOME
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            `${isActive ? "text-rose-800 underline font-semibold" : ""} text-xl`
          }
        >
          PRODUCTS
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? "text-rose-800 underline font-semibold" : ""} text-xl`
          }
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${isActive ? "text-rose-800 underline font-semibold" : ""} text-xl`
          }
        >
          CONTACT
        </NavLink>
        {/* cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative "
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
