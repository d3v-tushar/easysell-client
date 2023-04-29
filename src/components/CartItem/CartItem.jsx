import PropTypes from "prop-types";
import { useContext } from "react";
import { ProductContext } from "../../App";
const CartItem = ({ product }) => {
  const { checkout, setCheckout } = useContext(ProductContext);

  const handleRemove = () => {
    const cart = [...checkout];
    const newCart = cart.filter((CartProduct) => CartProduct !== product);
    setCheckout(newCart);
  };

  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900 dark:text-slate-300">
            <h3>
              <a href={product.href}>
                {product.name.length > 32
                  ? product.name.slice(0, 32) + "..."
                  : product.name}
              </a>
            </h3>
            <p className="ml-4">${product.price}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{product.color}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500 dark:text-gray-400">Qty {product.quantity}</p>

          <div className="flex">
            <button
            onClick={handleRemove}
              type="button"
              className="font-medium text-indigo-600 dark:text-indigo-300 hover:text-indigo-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

CartItem.propTypes = {
  product: PropTypes.object,
};

export default CartItem;
