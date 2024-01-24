import Button from "./Button";

const recommendedBtnClasses =
  "bg-red-400 text-white font-semibold py-3 px-10 rounded-full transition-all duration-500 border border-red-400  hover:bg-white hover:text-red-400";

const Recommended = () => {
  return (
    <div>
      <div className="container mx-auto px-10">
        <h2 className="text-xl py-10">Recommended</h2>
        {/* recommended-btns */}
        <div className="flex justify-between items-center">
          <Button text="All Products" classes={recommendedBtnClasses} />
          <Button text="T-shirts" classes={recommendedBtnClasses} />
          <Button text="Jewelery" classes={recommendedBtnClasses} />
          <Button text="Bags" classes={recommendedBtnClasses} />
          <Button text="Jeans" classes={recommendedBtnClasses} />
        </div>
      </div>
    </div>
  );
};

export default Recommended;
