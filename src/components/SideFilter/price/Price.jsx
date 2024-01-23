
import { useState } from "react";
import PriceLabel from "./PriceLabel";

function Price() {
  const [priceOpen, setPriceOpen] = useState(false);

  function handlePriceOpen() {
    setPriceOpen(!priceOpen);
  }
  return (
    <div className="flex flex-col gap-3">
      <h2 className="cursor-pointer" onClick={handlePriceOpen}>
        Price
      </h2>
      {priceOpen && <PriceLabel />}
    </div>
  );
}

export default Price;
