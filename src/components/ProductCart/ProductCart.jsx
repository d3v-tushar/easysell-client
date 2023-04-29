import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ProductContext } from "../../App";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const ProductCart = () => {
  const total = 100;
  const { cartOpen, setCartOpen, checkout } = useContext(ProductContext);
  return (
    <div className="fixed w-full left-0 top-0 z-[999]">
      <div
        className={`lg:hidden text-gray-900 absolute w-full md:w-6/12 h-screen font-medium bg-gray-100 shadow-xl top-0 duration-500 ${
          cartOpen ? "right-0" : "right-[-100%]"
        }`}
      >
        <div className={`flex flex-col w-full h-full bg-white shadow-xl`}>
          <div className="flex-1 overflow-y-scroll py-6 px-4 sm:px-6">
            <div className="flex items-start z-10 justify-between">
              <h2 className="text-lg font-medium text-gray-900">
                Shopping Cart
              </h2>
              <div className="ml-3 flex h-7 items-center">
                <button
                  type="button"
                  className="-m-2 p-2 text-white rounded-full bg-black"
                  onClick={() => setCartOpen(false)}
                >
                  <span className="sr-only">Close panel</span>
                  <XMarkIcon
                    className="h-6 w-6 font-extrabold"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>

            <div className="flow-root mt-8">
              <ul className="-my-6 divide-y divide-gray-200">
                {checkout.length == 0 ? (
                  <div>
                    <h2 className="text-center font-semibold">
                      Nothing In Cart
                    </h2>
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
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>${total}</p>
            </div>
            <div className="mt-6">
              <Link
                to="/payment"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
