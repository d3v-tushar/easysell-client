const AddProduct = () => {
  return (
    
        <form className="w-full mx-17 my-17 p-8 bg-slate-50 border overflow-hidden  border-gray-200 ">
          <div className="w-full grid lg:grid-cols-3 gap-x-4 gap-y-4 md:grid-cols-2 sm:grid-cols-1 ">
            <div className="">
              <div className=" mb-5">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6   text-gray-600"
                >
                  Name
                </label>
                <input
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
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 border-slate-200 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                >
                  <option>Select Category</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>

              <div className="  items-center mb-5">
                <label
                  htmlFor="product-catagory"
                  className="block text-sm font-medium leading-6   text-gray-600"
                >
                  Barcode Symbology :
                </label>
                <div placeholder="Enter Code">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 border-slate-200 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  >
                    <option></option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>

              <div className=" mb-5">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6   text-gray-600"
                >
                  Product Price:
                </label>
                <input
                  type="number"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 border-slate-200 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Enter Product Price"
                />
              </div>
              <div className="  items-center mb-5">
                <label
                  htmlFor="product-catagory"
                  className="block text-sm font-medium leading-6   text-gray-600"
                >
                  Sale Unit :
                </label>
                <div placeholder="Enter Code">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 border-slate-200 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  >
                    <option></option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>

              <div className=" mb-5">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6   text-gray-600"
                >
                  Stock Alert:
                </label>
                <input
                  type="number"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 border-slate-200 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Enter Product Price"
                />
              </div>

              <div className="  items-center mb-5">
                <label
                  htmlFor="product-catagory"
                  className="block text-sm font-medium leading-6   text-gray-600"
                >
                  Tax Type :
                </label>
                <div placeholder="Enter Code">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 border-slate-200 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  >
                    <option></option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="">
              <div className="  mb-5">
                <label
                  htmlFor="code"
                  className="block text-sm font-medium leading-6   text-gray-600"
                >
                  Code
                </label>
                <input
                  type="name"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 border-slate-200 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Enter Code"
                />
              </div>
              <div className="  items-center mb-5">
                <label
                  htmlFor="product-catagory"
                  className="block text-sm font-medium leading-6   text-gray-600"
                >
                  Brand :
                </label>
                <div placeholder="Enter Code">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 border-slate-200 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  >
                    <option></option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>
              <div className=" mb-5">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6   text-gray-600"
                >
                  Product Cost:
                </label>
                <input
                  type="number"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 border-slate-200 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Enter Product Price"
                />
              </div>
              <div className="  items-center mb-5">
                <label
                  htmlFor="product-catagory"
                  className="block text-sm font-medium leading-6   text-gray-600"
                >
                  Product Unit :
                </label>
                <div placeholder="Enter Code">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 border-slate-200 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  >
                    <option></option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>
              <div className="  items-center mb-5">
                <label
                  htmlFor="product-catagory"
                  className="block text-sm font-medium leading-6   text-gray-600"
                >
                  Purchase Unit :
                </label>
                <div placeholder="Enter Code">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 border-slate-200 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  >
                    <option></option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>
              <div className=" mb-5">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6   text-gray-600"
                >
                  Order Tax:
                </label>
                <input
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
                  Quantity Limitation:
                </label>
                <input
                  type="number"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 border-slate-200 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Enter Product Price"
                />
              </div>
            </div>

            <div className="">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6   text-gray-600"
              >
                Multiple Image:
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
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
              <div className="text-center mt-5 mb-3 ">
                <h2 className="text-4xl font-bold leading-7   text-gray-600">
                  Add Stock
                </h2>
              </div>

              <div className="  items-center mb-5">
                <label
                  htmlFor="product-catagory"
                  className="block text-sm font-medium leading-6   text-gray-600"
                >
                  Warehouse
                </label>
                <div placeholder="Enter Code">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 border-slate-200 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  >
                    <option></option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>
              <div className="  items-center mb-5">
                <label
                  htmlFor="product-catagory"
                  className="block text-sm font-medium leading-6   text-gray-600"
                >
                  Supplier :
                </label>
                <div placeholder="Enter Code">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 border-slate-200 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  >
                    <option></option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>

              <div className=" mb-5">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6   text-gray-600"
                >
                  Add Product Quantity:
                </label>
                <input
                  type="number"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 border-slate-200 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Enter Product Price"
                />
              </div>

              <div className="  items-center mb-5">
                <label
                  htmlFor="product-catagory"
                  className="block text-sm font-medium leading-6   text-gray-600"
                >
                  Status :
                </label>
                <div placeholder="Enter Code">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 border-slate-200 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  >
                    <option></option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3 grid grid-cols-2 sm:w-full">
            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6   text-gray-600"
              >
                Notes
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows="3"
                  placeholder="Enter Some Notes"
                  className="block w-full rounded-md border-0   text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="w-full grid lg:grid-cols-10 md:lg:grid-cols-10 sm:lg:grid-cols-10 gap-x-4 items-end mt-6 ">
            <button className="mb-1 px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-500 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50">
              cancle
            </button>
            <button className="mb-1 px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-500 rounded-lg hover:bg-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50">
              Save
            </button>
          </div>
        </form>
     
  );
};

export default AddProduct;
