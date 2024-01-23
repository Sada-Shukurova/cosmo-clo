import { subcategoryLabelInputs } from "../../../inputsData/SubcategoryLabelInputs";

const SubcategoryLabel = () => {
  return (
    <div className="flex flex-col gap-1">
      {subcategoryLabelInputs.map(({ id, name, labelFor, text }) => {
        return (
          <label
            className="checkbox-label cursor-pointer relative flex gap-2"
            key={id}
            htmlFor={labelFor}
          >
            <input
              className="opacity-0"
              type="radio"
              name={name}
              id={labelFor}
            />
            <span className=" checkmark mr-3 absolute top-0 -left-[10px] h-[20px] w-[20px] bg-[#eee] rounded-full"></span>
            {text}
          </label>
        );
      })}
    </div>
  );
};

export default SubcategoryLabel;
