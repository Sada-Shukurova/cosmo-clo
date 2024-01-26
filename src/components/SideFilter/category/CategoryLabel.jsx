import { categoryLabelInputs } from "../../../inputsData/CategoryLabelInputs";

const CategoryLabel = () => {
  return (
    <div className="flex flex-col gap-1">
      {categoryLabelInputs.map(({ id, labelFor, text, name }) => {
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
              value={labelFor}
              onChange={""}
            />
            <span className="checkmark mr-3 absolute top-0 -left-[10px] h-[20px] w-[20px] bg-[#eee] rounded-full"></span>
            {text}
          </label>
        );
      })}
    </div>
  );
};

export default CategoryLabel;
