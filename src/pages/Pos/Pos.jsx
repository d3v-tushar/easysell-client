import { useContext } from "react";
import { ProductContext } from "../../App";
import ProductCart from "../../components/ProductCart/ProductCart";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";
import ProductCard from "../../components/ProductCard/ProductCard";
import LoaderSpinner from "../../components/LoaderSpinner/LoaderSpinner";
// import CheckoutModal from "../../components/CheckoutModal/CheckoutModal";

const Pos = () => {
  const { filteredProducts, isLoading } = useContext(ProductContext);
  return (
    <div className="flex dark:bg-gray-900 justify-between overflow-hidden">
      <div className={`w-full h-full mx-8 ${isLoading ? 'flex my-8 justify-center' : 'justify-items-center items-stretch my-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-8'}`}>
        {isLoading ? (
          <LoaderSpinner />
        ) : (
          <>
            {filteredProducts.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
          </>
        )}
      </div>
      <ProductCart />
      <ShoppingCart />
    </div>
  );
};

export default Pos;
