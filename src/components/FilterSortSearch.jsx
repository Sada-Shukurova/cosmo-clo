import React from "react";
import Filter from "./Filter";
import Sort from "./Sort";
import Search from "./Search";

const FilterSortSearch = () => {
  return (
    <>
      {/* filter,sort,search */}
      <div className="container mx-auto px-10 flex justify-between items-center py-16">
        <Filter />
        <Sort />
        <Search />
      </div>
    </>
  );
};

export default FilterSortSearch;
