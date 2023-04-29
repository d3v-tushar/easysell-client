import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/Routes/Routes";
import { createContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

export const ProductContext = createContext();

// const products = [
//   {
//     id: 1,
//     name: "Throwback Hip Bag",
//     href: "#",
//     color: "Salmon",
//     price: "$90.00",
//     quantity: 1,
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
//     imageAlt:
//       "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
//   },
//   {
//     id: 2,
//     name: "Medium Stuff Satchel",
//     href: "#",
//     color: "Blue",
//     price: "$32.00",
//     quantity: 1,
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
//     imageAlt:
//       "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
//   },
// ];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkout, setCheckout] = useState([]);
  const [pageHeader, setPageHeader] = useState("EasySell");

  useEffect(() =>{
    setDarkMode(JSON.parse(localStorage.getItem('dark')))
  }, [setDarkMode]);

  //console.log(JSON.parse(localStorage.getItem('dark')));

  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch(`https://easy-sell-server.vercel.app/products`);
        const data = res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const clonedProducts = [...products];
  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);
  // console.log(selected);

  const filteredProducts =
    searchQuery === ""
      ? clonedProducts
      : clonedProducts.filter((product) =>
          product.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(searchQuery.toLowerCase().replace(/\s+/g, ""))
        );

  const contextData = {
    open,
    setOpen,
    darkMode,
    setDarkMode,
    pageHeader,
    setPageHeader,
    cartOpen,
    setCartOpen,
    products,
    checkout,
    setCheckout,
    searchQuery,
    setSearchQuery,
    filteredProducts
  };
  return (
    <ProductContext.Provider value={contextData}>
      <RouterProvider router={routes} />
    </ProductContext.Provider>
  );
}

export default App;
