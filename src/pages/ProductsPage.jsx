import HeroSmall from "../components/layout/HeroSmall";
import Products from "../components/_common/Products";
import SortSearch from "../components/sortSearch/SortSearch";
import Recommended from "../components/_common/Recommended";
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
