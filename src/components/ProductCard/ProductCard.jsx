import PropTypes from "prop-types";
import { ProductContext } from "../../App";
import { useContext } from "react";
const ProductCard = ({ product }) => {
  const { checkout, setCheckout } = useContext(ProductContext);

  const handleCheckOut = (product) => {
    let cart = [...checkout];
    let newCart = [];
    const existedItem = cart.find((item) => item._id == product._id);
    if (!existedItem) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      const rest = cart.filter((item) => item._id !== product._id);
      existedItem.quantity = existedItem.quantity + 1;
      newCart = [...rest, existedItem];
    }
    setCheckout(newCart);
  };
  return (
    <div onClick={() => handleCheckOut(product)} className="relative cursor-pointer p-4 h-72 min-w-fit rounded-xl group border border-gray-100 dark:border-gray-700 bg-white shadow-md shadow-sky-900/10 dark:bg-gray-800">
      <div className="relative">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          loading="lazy"
          width="1000"
          height="667"
          className="h-40 mx-auto object-cover rounded-xl"
        />
        <div className="absolute z-[1] w-max h-max right-0">
          <button className="relative mx-auto flex h-10 w-10 items-center before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-t before:from-gray-200 before:to-white dark:before:bg-gray-700 before:border before:border-gray-100 dark:before:border-gray-600  before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="relative h-5 w-5 text-gray-700 dark:text-gray-800 m-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="relative mt-4 space-y-2">
        <p title={product.name} className="text-gray-600 dark:text-gray-400">
          {product.name.length > 22
            ? product.name.slice(0, 19) + "..."
            : product.name}
        </p>
        <div className="flex justify-center items-center">
          <h3 className="text-2xl text-center mt-1 font-semibold text-gray-900 dark:text-white">
            ${product.price}
          </h3>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
