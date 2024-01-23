
import { useState } from "react";
import ColorsLabel from "./ColorsLabel";
const Colors = () => {
  const [colorsOpen, setColorsOpen] = useState(false);
  function handleColorsOpen() {
    setColorsOpen(!colorsOpen);
  }

  return (
    <>
      <div className="flex flex-col gap-3">
        <h2 className="cursor-pointer" onClick={handleColorsOpen}>
          Colors
        </h2>
        {colorsOpen && <ColorsLabel />}
      </div>
    </>
  );
};

export default Colors;
