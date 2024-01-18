import HeroSmall from "../components/HeroSmall";
import Products from "../components/Products";
import FilterSortSearch from "../components/FilterSortSearch";
import Recommended from "../components/Recommended";

const ProductsPage = () => {
  return (
    <div>
      <HeroSmall heroTitle={"Products"} />
      <Recommended />
      <FilterSortSearch />
      <Products />
    </div>
  );
};

export default ProductsPage;
