import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import MobileSidebar from "../../components/MobileSidebar/MobileSidebar";
import Header from "../../components/Header/Header";
import { ProductContext } from "../../App";
import { useContext } from "react";

const Main = () => {
  const { open, setOpen, pageHeader, cartOpen, setCartOpen, darkMode } =
    useContext(ProductContext);
  return (
    <div
      className={`${
        darkMode ? "dark" : null
      } h-full w-full lg:w-[95vw] lg:ml-[5vw] dark:bg-gray-900`}
    >
      <Sidebar />
      <div className="w-full relative">
        <Header
          pageHeader={pageHeader}
          open={open}
          setOpen={setOpen}
          cartOpen={cartOpen}
          setCartOpen={setCartOpen}
        />
        <MobileSidebar open={open} setOpen={setOpen} />
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
