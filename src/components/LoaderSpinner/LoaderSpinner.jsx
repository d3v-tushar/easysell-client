import BeatLoader from "react-spinners/BeatLoader";
import { ProductContext } from "../../App";
import { useContext } from "react";

const LoaderSpinner = () => {
    const {isLoading} = useContext(ProductContext);
    
    return (
        <BeatLoader
        color={"#26C6DA"}
        loading={isLoading}
        size={25}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
};

export default LoaderSpinner;