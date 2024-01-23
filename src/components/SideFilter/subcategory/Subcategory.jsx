
import { useState } from "react";
import SubcategoryLabel from "./SubcategoryLabel";
const Subcategory = () => {
  const [catOpen, setSubOpen] = useState(false);
  function handleSubOpen() {
    setSubOpen(!catOpen);
  }

  return (
    <>
      <div className="flex flex-col gap-3">
        <h2 className="cursor-pointer" onClick={handleSubOpen}>
          Subcategory
        </h2>
        {catOpen && <SubcategoryLabel />}
      </div>
    </>
  );
};

export default Subcategory;
