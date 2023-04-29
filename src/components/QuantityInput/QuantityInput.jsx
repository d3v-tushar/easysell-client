import PropTypes from "prop-types";
import { useContext } from "react";
import { ProductContext } from "../../App";

const QuantityInput = ({ product }) => {
  const { checkout, setCheckout } = useContext(ProductContext);
    let newCheckout = [...checkout]
  //   let [input, setInput] = useState(1);
  //   let products = [];
    const restProducts = newCheckout.filter((item) => item._id !== product._id);

    const handleDecrese = (product) =>{
      //const selectedProduct = newCheckout.find((item) => item._id == product._id);
      product.quantity = product.quantity - 1;
      setCheckout(restProducts, product);
    };

    const handleIncrese = (product) =>{
      //const selectedProduct = newCheckout.find((item) => item._id == product._id);
      product.quantity = product.quantity + 1;
      setCheckout(restProducts, product);
    };

  // selectedProduct.quantity = parseInt(input);
  // if(selectedProduct.quantity !== product.quantity){
  //   products = [...restProducts, selectedProduct];
  //   setCheckOut(products);
  // }
  // // console.log(products);
  //console.log(selectedProduct);
   //console.log(product);
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
          className="w-6 h-6 text-gray-600 transition hover:opacity-75"
        >
          &minus;
        </button>

        <input
          defaultValue={product.quantity}
          type="number"
          id="Quantity"
          className="h-6 w-6 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
        />

        <button
          onClick={() => handleIncrese(product)}
          type="button"
          className="w-6 h-6 text-gray-600 transition hover:opacity-75"
        >
          &#43;
        </button>
      </div>
    </div>
  );
};

QuantityInput.propTypes = {
  product: PropTypes.object,
};

export default QuantityInput;
