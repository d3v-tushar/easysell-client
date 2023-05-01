import PropTypes from "prop-types";
import Searchbar from "../Searchbar/Searchbar";
import { useContext } from "react";
import { ProductContext } from "../../App";
import { useLocation } from "react-router-dom";
const Header = () => {
  const { open, setOpen, cartOpen, setCartOpen, darkMode, setDarkMode } =
    useContext(ProductContext);
  let location = useLocation();

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("dark", !darkMode);
  };
  return (
    <div className="sticky transition-all duration-200 top-0 w-full z-30 h-[8vh] lg:h-[9vh] border-b bg-white dark:bg-gray-800 dark:border-gray-700 lg:py-2">
      <div className="flex items-center align-middle justify-between space-x-4  my-auto px-6">
        <div className="flex min-h-full">
          <button
            onClick={() => setOpen(!open)}
            className="h-16 w-12 border-r mr-2 lg:hidden dark:border-gray-700 dark:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="my-auto h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {location.pathname == "/pos" ? (
            <Searchbar />
          ) : (
            <h5
              hidden
              className="bg-gradient-to-r from-sky-600 to-cyan-400 bg-clip-text text-transparent text-xl 2xl:text-4xl font-bold text-gray-800 lg:block"
            >
              EasySell
            </h5>
          )}
        </div>
        <div className="flex justify-end align-middle space-x-4">
        <button
            onClick={handleDarkMode}
            aria-label="darkMode"
            className="h-10 w-10 lg:h-10 lg:w-10 rounded-xl border bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="m-auto h-6 w-6 lg:h-8 lg:w-8 text-gray-600 dark:text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="m-auto h-6 w-6 lg:h-8 lg:w-8 text-gray-600 dark:text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            )}
          </button>
          { location.pathname == "/pos" ? <button
            aria-label="cart"
            onClick={() => setCartOpen(!cartOpen)}
            className="h-10 w-10 lg:hidden rounded-xl border bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="m-auto h-6 w-6 text-gray-600 dark:text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </button>: null}
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  setCartOpen: PropTypes.func,
};

export default Header;
