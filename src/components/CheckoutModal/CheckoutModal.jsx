import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import { ProductContext } from "../../App";
import { useForm } from "react-hook-form";

const CheckoutModal = () => {
  const { openModal, setOpenModal } = useContext(ProductContext);
  const { register, handleSubmit } = useForm();
  const imageKey = import.meta.env.VITE_imgbb_key;

  function handleCloseModal() {
    setOpenModal(false);
  }

  const handleAddProduct = (data) => {
    const image = data.imageSrc[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const product = {
            name: data.name,
            description: data.description,
            imageSrc: imgData.data.url,
            category: data.category,
            price: data.price,
            productCost: data.cost,
            stockQuantity: data.quantity,
            "tax-rate": data.tax,
          };
          //Saving Data to DB
          fetch("https://easy-sell-server.vercel.app/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
            });
        }
      });
  };
  return (
    <Transition appear show={openModal} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={handleCloseModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="lg:w-2/5 w-full md:w-4/5 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Add New Product
                </Dialog.Title>
                <form
                  onSubmit={handleSubmit(handleAddProduct)}
                  className="w-full mx-17 my-17 p-8 bg-slate-50 border overflow-hidden  border-gray-200 "
                >
                  <div className="w-full flex flex-col md:flex-row gap-x-4 gap-y-4">
                    <div className="">
                      <div className=" mb-5">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium leading-6   text-gray-600"
                        >
                          Product Name
                        </label>
                        <input
                          {...register("name", { required: true })}
                          type="name"
                          className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 border-slate-200 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                          placeholder="Enter Name"
                        />
                      </div>

                      <div className="  items-center mb-5">
                        <label
                          htmlFor="product-catagory"
                          className="block text-sm font-medium leading-6   text-gray-600"
                        >
                          Product Category
                        </label>

                        <select
                          {...register("category", { required: true })}
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 border-slate-200 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        >
                          <option defaultChecked>Select Category</option>
                          <option value="clothing">Clothing</option>
                          <option value="mobile">Mobile</option>
                          <option value="electronics">Electronics</option>
                          <option value="bags">Bags</option>
                          <option value="accessories">Accessories</option>
                          <option value="camera">Cameras</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="product-photo"
                          className="block text-sm font-medium leading-6   text-gray-600"
                        >
                          Product Image:
                        </label>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                          <div className="text-center">
                            <svg
                              className="mx-auto h-12 w-12 text-gray-300"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                              <label
                                htmlFor="file"
                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                              >
                                <span>Upload Picture</span>
                                <input
                                  {...register("imageSrc", { required: true })}
                                  type="file"
                                  name="imageSrc"
                                  id="file"
                                  className="sr-only"
                                />
                              </label>
                            </div>
                            <p className="text-xs leading-5 text-gray-600">
                              PNG, JPG, GIF up to 10MB
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex gap-4 mt-6 ">
                        <button
                          onClick={handleCloseModal}
                          className="mb-1 px-6 py-3 w-full text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-500 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
                        >
                          cancle
                        </button>
                        <button
                          type="submit"
                          className="mb-1 px-6 py-3 w-full text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-500 rounded-lg hover:bg-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
                        >
                          Submit
                        </button>
                      </div>
                    </div>

                    <div>
                      <div className=" mb-5">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium leading-6   text-gray-600"
                        >
                          Product Price:
                        </label>
                        <input
                          {...register("price", { required: true })}
                          type="number"
                          className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 border-slate-200 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                          placeholder="Enter Product Price"
                        />
                      </div>

                      <div className=" mb-5">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium leading-6   text-gray-600"
                        >
                          Product Cost:
                        </label>
                        <input
                          {...register("cost", { required: true })}
                          type="number"
                          className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 border-slate-200 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                          placeholder="Enter Product Price"
                        />
                      </div>
                      <div className=" mb-5">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium leading-6   text-gray-600"
                        >
                          Order Tax:
                        </label>
                        <input
                          {...register("tax", { required: true })}
                          type="number"
                          className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 border-slate-200 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                          placeholder="Enter Product Price"
                        />
                      </div>
                      <div className=" mb-5">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium leading-6   text-gray-600"
                        >
                          Product Quantity:
                        </label>
                        <input
                          {...register("quantity", { required: true })}
                          type="number"
                          className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 border-slate-200 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                          placeholder="Enter Product Price"
                        />
                      </div>
                      <div className="col-span-full">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6   text-gray-600"
                        >
                          Product Discription
                        </label>
                        <div className="mt-2">
                          <textarea
                            {...register("description")}
                            id="description"
                            name="description"
                            rows="3"
                            placeholder="Enter Description"
                            className="block w-full rounded-md border-0   text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CheckoutModal;
