import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import { ProductContext } from "../../App";

const ShoppingCart = () => {
  const { checkout } = useContext(ProductContext);

  let total = 0;
  checkout.map(
    (product) =>
      (total = total + parseInt(product.quantity) * parseInt(product.price))
  );
  return (
    <div
      className={`lg:flex flex-col hidden w-[35vw] lg:h-[91vh] bg-white dark:bg-gray-800 shadow-xl`}
    >
      <div className="flex-1 overflow-y-scroll py-6 px-4 sm:px-6">
        <div className="flex items-start z-10 justify-between">
          <h2 className="text-lg font-medium text-gray-900 dark:text-slate-200">
            Shopping Cart
          </h2>
        </div>

        <div className="flow-root mt-8">
          <ul className="-my-6 divide-y divide-gray-200">
            {checkout.length == 0 ? (
              <div>
                <h2 className="text-center font-semibold">Nothing In Cart</h2>
              </div>
            ) : (
              checkout.map((product, index) => (
                <CartItem key={index} product={product} />
              ))
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900 dark:text-slate-200">
          <p>Subtotal</p>
          <p>${total}</p>
        </div>
        <div className="mt-6">
          <Link
            disabled={checkout.length == 0}
            to="/pos/checkout"
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
