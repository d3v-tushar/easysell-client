import PropTypes from "prop-types";
import { useState } from "react";

const QuantityInput = ({product, handleRemove}) => {
    let [input, setInput] = useState(product.quantity);

    const handleDecrese = (product) =>{
      if(product.quantity < 2){
        handleRemove();
      }
      product.quantity = input - 1;
      setInput(input-1)
    };

    const handleIncrese = (product) =>{
      product.quantity = input + 1;
      setInput(input+1)
    };
  return (
    <div>
      <label htmlFor="Quantity" className="sr-only">
        {" "}
        Quantity{" "}
      </label>

      <div className="flex items-center border w-20 border-gray-200 rounded">
        <button
          onClick={() => handleDecrese(product)}
          type="button"
          className="w-7 h-8 text-gray-600 transition font-semibold dark:text-slate-200 hover:opacity-75"
        >
          &minus;
        </button>

        <input
          value={input}
          // onChange={(e) => setInput(e.target.value)}
          readOnly
          type="number"
          id="Quantity"
          className="h-8 w-6 outline-none border-transparent text-center [-moz-appearance:_textfield] text-lg font-semibold sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
        />

        <button
          onClick={() => handleIncrese(product)}
          type="button"
          className="w-7 h-8 text-gray-600 font-semibold dark:text-slate-200 transition hover:opacity-75"
        >
          &#43;
        </button>
      </div>
    </div>
  );
};

QuantityInput.propTypes = {
  product: PropTypes.object,
  handleRemove: PropTypes.func
};

export default QuantityInput;
