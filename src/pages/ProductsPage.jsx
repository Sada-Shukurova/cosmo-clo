import HeroSmall from "../components/HeroSmall";
import Products from "../components/Products";
import SortSearch from "../components/SortSearch";
import Recommended from "../components/Recommended";
import SideFilter from "../components/SideFilter/SideFilter";

const ProductsPage = () => {
  return (
    <div>
      <HeroSmall heroTitle={"Products"} />
      <div className="flex ">
        <SideFilter />
        <div className="flex flex-col my-0 mx-auto">
          <Recommended />
          <SortSearch />
          <Products />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
