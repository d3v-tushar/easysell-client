import { useContext } from "react";
import { ProductContext } from "../../App";

const Searchbar = () => {
  const { setSearchQuery } = useContext(ProductContext);
  return (
   
      <div className="my-auto">
        <form action="" className="relative w-max">
          <input
          onChange={(e) => setSearchQuery(e.target.value)}
            type="search"
            className="peer dark:text-slate-200 cursor-pointer relative z-10 h-12 w-12 rounded-full border-2 bg-transparent pl-12 outline-none focus:w-full lg:w-full duration-300 lg:cursor-text focus:cursor-text focus:border-cyan-600 lg:border-cyan-600 focus:pl-16 lg:pl-16 focus:pr-4 lg:pr-4"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-y-0 my-auto h-10 w-12 border-r border-transparent stroke-cyan-600 px-3.5 peer-focus:border-cyan-600 peer-focus:stroke-cyan-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </form>
      </div>
   
  );
};

export default Searchbar;
