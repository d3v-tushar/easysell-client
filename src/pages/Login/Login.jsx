import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { emailPassSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    event.preventDefault();
    const email = data.email;
    const password = data.password;
    //sign in with email and password
    emailPassSignIn(email, password)
      .then((res) => {
        if (res.user) {
          navigate(from, { replace: true });
          toast.success("Successfully logged in!!!");
        }
      })
      .catch((err) => console.log(err.messages));
  };
  return (
    <div className="m-auto xl:container px-12 sm:px-0 mx-auto">
      <div className="mx-auto h-full sm:w-max">
        <div className="m-auto  py-12">
          <div className="mt-12 rounded-3xl border bg-gray-50 dark:border-gray-700 dark:bg-gray-800 -mx-6 sm:-mx-10 p-8 sm:p-10">
            <h3 className="text-2xl text-center font-light text-gray-700 dark:text-white">
              EasySell Login
            </h3>
            <form
              onSubmit={handleSubmit(handleLogin)}
              className="mt-10 space-y-8 dark:text-white"
            >
              <div>
                <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <input
                    {...register("email")}
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent p-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                  />
                  {errors.email && <span>Email is required</span>}
                </div>
              </div>

              <div className="flex flex-col items-end">
                <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <input
                    {...register("password", { required: true, minLength: 6 })}
                    id="password"
                    type="password"
                    placeholder="Password"
                    className="w-full bg-transparent p-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                  />
                  {errors.password && <span>Password is required</span>}
                </div>
                <button type="reset" className="-mr-3 w-max p-3">
                  <span className="text-sm tracking-wide text-sky-600 dark:text-sky-400">
                    Forgot password ?
                  </span>
                </button>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-sky-500 dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800"
                >
                  <span className="text-base font-semibold text-white dark:text-gray-900">
                    Login
                  </span>
                </button>
                <Link to="/register" type="reset" className="-ml-3 w-max p-3">
                  <span className="text-sm tracking-wide text-sky-600 dark:text-sky-400">
                    Not Registered?
                  </span>
                </Link>
              </div>
            </form>
          </div>
          <div className="border-t pt-12 text-gray-500 dark:border-gray-800">
            <div className="space-x-4 text-sm">
              <span>&copy; #AngurFolTok-PH</span>
              <a
                href="#"
                className="text-sm hover:text-sky-900 dark:hover:text-gray-300"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-sm hover:text-sky-900 dark:hover:text-gray-300"
              >
                Privacy & Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
