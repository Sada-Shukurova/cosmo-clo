import { AnimatePresence, delay, motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../contexts/SidebarContext";
import { CartContext } from "../../contexts/CartContext";
import { BsBag } from "react-icons/bs";
// import { FiUser } from "react-icons/fi";
import { HiMiniBars3, HiMiniBars3BottomRight } from "react-icons/hi2";
import Logo from "/img/logo.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import { myRoutes } from "../../Routes/MyRoutes";
import { ProductContext } from "../../contexts/ProductContext";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const menuVariants = {
  hidden: { opacity: 0, x: -300 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: { opacity: 0, x: -300 },
};
const menuItemsVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.3,
    },
  },
  exit: { opacity: 0, x: -100 },
};
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pageI, setPageI } = useContext(ProductContext);

  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  // location event listener
  useEffect(() => {
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
          <div className="flex items-center">
            <img className="w-[40px]" src={Logo} alt="logo" />
            <h2 className="text-2xl font-semibold">CosmoClo</h2>
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
                  isActive
                    ? "text-red-700 border-b-2 border-b-red-700  font-semibold"
                    : ""
                } hidden md:block text-xl`
              }
            >
              {text}
            </NavLink>
          );
        })}
        {/* burger */}

        <HiMiniBars3
          onClick={() => setMenuOpen((prev) => !prev)}
          className="block md:hidden text-2xl cursor-pointer"
        />
        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="rounded-md sm:w-[50vw] w-full   p-5 pt-7 bg-white absolute top-20 flex flex-col gap-5 items-center sm:justify-evenly justify-start left-0  sm:h-[30vh] h-screen md:hidden"
            >
              {myRoutes.map(({ path, text, id }) => {
                return (
                  <motion.div variants={menuItemsVariants}>
                    <NavLink
                      onClick={() => setMenuOpen(false)}
                      key={id}
                      to={path}
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-red-700 border-b-2 border-b-red-700  font-semibold"
                            : ""
                        }  text-xl hover:scale-105 duration-500 transition-all`
                      }
                    >
                      {text}
                    </NavLink>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
        {/* cart */}
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="cursor-pointer flex relative "
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-700 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
        {/* clerk auth */}

        <SignedOut>
          <div className="bg-red-700 duration-500 transition-all hover:bg-red-900 text-white font-bold py-2 px-4 rounded">
            <SignInButton />
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: "w-10 h-10",
                userButtonTrigger:
                  "flex items-center border border-gray-300 rounded-full p-1 hover:bg-gray-100",
              },
            }}
          />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
