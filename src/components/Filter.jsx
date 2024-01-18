import { useState } from "react";
import Button from "./Button";
import FilterItem from "./FilterItem";

const Filter = () => {
  const [openFilter, setOpenFilter] = useState(false);
  function handleOpenFilter() {
    setOpenFilter(!openFilter);
  }
  return (
    <div className="flex flex-col items-start relative">
      <Button
        text="Filter"
        classes="bg-red-200 py-3 px-10 rounded-full"
        onClick={handleOpenFilter}
      />
      {openFilter ? <FilterItem /> : ""}
    </div>
  );
};

export default Filter;
