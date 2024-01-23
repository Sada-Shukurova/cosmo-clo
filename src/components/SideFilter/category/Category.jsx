
import { useState } from "react";
import CategoryLabel from "./CategoryLabel";
const Category = () => {
  const [catOpen, setCatOpen] = useState(false);
  function handleCatOpen() {
    setCatOpen(!catOpen);
  }

  return (
    <>
      <div className="flex flex-col gap-3">
        <h2 className="cursor-pointer" onClick={handleCatOpen}>
          Category
        </h2>
        {catOpen && <CategoryLabel />}
      </div>
    </>
  );
};

export default Category;
