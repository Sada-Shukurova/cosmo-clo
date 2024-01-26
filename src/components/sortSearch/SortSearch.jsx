import React from "react";

import Sort from "./Sort";
import Search from "./Search";

const SortSearch = () => {
  return (
    <>
      {/* sort,search */}
      <div className="container mx-auto px-10 flex justify-evenly items-center py-16">
        <Sort />
        <Search />
      </div>
    </>
  );
};

export default SortSearch;
