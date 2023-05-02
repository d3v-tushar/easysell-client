import { PlusCircleIcon } from "@heroicons/react/20/solid";
import CheckoutModal from "../../components/CheckoutModal/CheckoutModal";
import { useContext } from "react";
import { ProductContext } from "../../App";
import InventoryItem from "../../components/InventoryItem/InventoryItem";
import { useState } from "react";
const Inventory = () => {
  const { openModal, setOpenModal, products } = useContext(ProductContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedProduct, setSearchProduct] = useState([]);
  const clonedProducts = [...products];

  const handleSearch = (searchQuery) => {
    const result =
      searchQuery === ""
        ? clonedProducts
        : clonedProducts.filter((product) =>
            product.name
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(searchQuery.toLowerCase().replace(/\s+/g, ""))
          );
    setSearchProduct(result);
  };
  return (
    <div className="lg:h-[91vh] min-h-max md:h-[92vh] p-5 lg:p-8 dark:bg-gray-900">
      <div className="flex items-center justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-slate-200 sm:truncate sm:text-3xl sm:tracking-tight">
            Manage Inventory
          </h2>
        </div>
        <div className="mt-5 flex lg:ml-4 lg:mt-0">
          <span className="sm:ml-3">
            <button
              onClick={() => setOpenModal(!openModal)}
              type="button"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <PlusCircleIcon
                className="-ml-0.5 mr-1.5 h-5 w-5 text-slate-200"
                aria-hidden="true"
              />
              Create Product
            </button>
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4 my-5 ">
        <div className="relative w-full lg:w-2/5">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-5 h-5 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>

          <input
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            placeholder="Search"
          />
          <span className="h-full whitespace-nowrap absolute bottom-0 top-0 w-32 right-0">
            <button
              onClick={() => handleSearch(searchQuery)}
              type="button"
              className="inline-flex items-center border-l px-8 py-2.5 text-lg font-semibold dark:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Search
            </button>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {searchedProduct.length === 0
          ? products.map((product) => (
              <InventoryItem key={product._id} product={product} />
            ))
          : searchedProduct.map((product) => (
              <InventoryItem key={product._id} product={product} />
            ))}
      </div>
      <CheckoutModal />
    </div>
  );
};

export default Inventory;
