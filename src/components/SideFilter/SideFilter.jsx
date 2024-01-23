import Category from "./category/Category";
import Subcategory from "./subcategory/Subcategory";
import Price from "./price/Price";
import Colors from "./colors/Colors";

// import icons
import { FaFilter } from "react-icons/fa";

const SideFilter = () => {
  return (
    <>
      <section className="select-none w-[20%]  h-full shadow-2xl bg-white p-5 pl-[2.5rem] flex flex-col items-start">
        <div className="flex items-center gap-2 mb-5">
          <FaFilter />
          <h2 className="text-2xl font-bold">Filter</h2>
        </div>
        <div className="flex flex-col gap-4">
          <Category />
          <Subcategory />
          <Price />
          <Colors />
        </div>
      </section>
    </>
  );
};

export default SideFilter;
