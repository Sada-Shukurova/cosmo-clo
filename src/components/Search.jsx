import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div className="flex items-center justify-center gap-1">
      <div>
        <input
          className="cursor-pointer bg-white text-black border-b border-b-red-300 border-x border-t border-t-transparent border-r-transparent border-l-transparent rounded-md px-2 py-1 outline-none transition-all ease-in-out duration-700 focus:border focus:border-red-300"
          type="text"
          placeholder="search..."
        />
      </div>
      <div>
        <Link to="#">
          <IoIosSearch className="text-red-300" size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Search;
Search;
