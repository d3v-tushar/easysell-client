import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";
import { toast } from "react-hot-toast";

const Settings = () => {
  const { logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().catch((error) => console.log(error));
    toast.success("Successfully logged Out!!!");
  };
  return (
    <div className="lg:h-[91vh] min-h-max md:h-[92vh] p-5 lg:p-8 dark:bg-gray-900">
      <button
        onClick={() => handleLogOut}
        className="mb-1 px-6 py-3 w-24 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-500 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
      >
        Logout
      </button>
    </div>
  );
};

export default Settings;
