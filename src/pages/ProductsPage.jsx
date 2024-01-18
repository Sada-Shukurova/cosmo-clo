import HeroSmall from "../components/HeroSmall";
import Products from "../components/Products";
import FilterSortSearch from "../components/FilterSortSearch";

const ProductsPage = () => {
  return (
    <div>
      <HeroSmall heroTitle={"Products"} />
      <FilterSortSearch />
      <Products />
    </div>
  );
};

export default ProductsPage;
