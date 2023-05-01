import { useContext, useState } from "react";
import { ProductContext } from "../../App";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animation02 from "../../assets/animation02.json";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import easyinvoice from "easyinvoice";
import GenerateInvoice from "../../components/GenerateInvoice/GenerateInvoice";
import moment from "moment/moment";
const PaymentCheckout = () => {
  const { checkout, setOrder } = useContext(ProductContext);
  let subTotal = 0;
  checkout.map((product) => (subTotal = subTotal + parseInt(product.price)));

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentRoute, setPaymentRoute] = useState(false);

  let placedTime = moment().format("DD/MM/YYYY, h:mm a");

  const handleSubmit = (e) => {
    const paymentOption = e.target.value;
    if (paymentOption === "cash") {
      setPaymentRoute(true);
      setOrder({ name, phone, checkout });
    }
  };

  let invoiceData = GenerateInvoice({ name, phone, checkout, placedTime });

  const downloadInvoice = async () => {
    const result = await easyinvoice.createInvoice(invoiceData);
    easyinvoice.download("myInvoice.pdf", result.pdf);
  };

  const handlePayNow = async () => {
    setOrder({ name, phone, checkout });
    downloadInvoice();
  };

  //console.log(invoiceData);
  //console.log(subTotal);
  //let total = subTotal + subTotal * 0.05;

  //console.log(placedTime);

  return (
    <section className="h-[91vh]  mx-auto">
      <div className="mx-auto grid grid-cols-1 lg:h-[91vh] md:grid-cols-2">
        <div
          className={`bg-slate-300 dark:bg-gray-900 grid ${
            checkout.length === 0 ? "items-center" : null
          } h-full lg:px-5`}
        >
          {checkout.length === 0 ? (
            <>
              <h2 className="font-bold mt-8 text-center text-2xl bg-gradient-to-r from-yellow-300 to-cyan-300 bg-clip-text text-transparent">
                Nothing in Cart :(
                <button
                  onClick={downloadInvoice}
                  className="py-1 px-6 text-slate-200 bg-black"
                >
                  Download
                </button>
              </h2>
              <Lottie style={{ height: 500 }} animationData={animation02} />
            </>
          ) : null}
          <ul className="max-w-[30rem] p-5">
            {checkout.map((product) => (
              <CheckoutItem key={product._id} product={product} />
            ))}
          </ul>
        </div>

        <div className="bg-white dark:bg-slate-400 py-12 md:py-24">
          <div className="mx-auto max-w-lg px-4 lg:px-8">
            <form className="grid grid-cols-6 gap-4">
              <div className="col-span-6">
                <label
                  htmlFor="FirstName"
                  className="block text-xs font-medium text-gray-700"
                >
                  Coustomer Name
                </label>

                <input
                  type="text"
                  onBlur={(e) => setName(e.target.value)}
                  id="Coustomer Name"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-xs font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  defaultValue="guest@easysell.com"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Phone"
                  className="block text-xs font-medium text-gray-700"
                >
                  Phone
                </label>

                <input
                  onBlur={(e) => setPhone(e.target.value)}
                  type="tel"
                  id="Phone"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </div>

              <fieldset className="col-span-6">
                <legend className="block text-sm font-medium text-gray-700">
                  Payment Type :
                </legend>

                <div>
                  <label htmlFor="Country" className="sr-only">
                    payment Detail
                  </label>

                  <select
                    id="Country"
                    name="paymentOption"
                    onChange={handleSubmit}
                    className="relative w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
                  >
                    <option defaultChecked>Please Select</option>
                    <option value="cash">Cash</option>
                    <option value="card">Card</option>
                  </select>
                </div>
              </fieldset>

              <fieldset className="col-span-6">
                <legend className="block text-sm font-medium text-gray-700">
                  Billing Address
                </legend>

                <textarea className="relative w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"></textarea>
              </fieldset>

              {/* <div className="flex col-span-6">
                <div className="   w-full p-2">
                    <Link
                      to="/pos"
                      className="block  w-full text-center rounded-md bg-black p-2 text-md text-white transition hover:shadow-lg"
                    >
                      Pay Now
                    </Link>
                </div>

                <div className="   w-full py-2">
                  <button
                    onClick={downloadInvoice}
                    className="block  text-center w-full rounded-md border-2 border-black bg-white p-2 text-md text-black transition hover:shadow-lg"
                  >
                    Cancel
                  </button>
                </div>
              </div> */}
            </form>
            <div className="flex col-span-6">
              <div className="   w-full p-2">
                {paymentRoute ? (
                  <button
                    onClick={handlePayNow}
                    className="block  w-full text-center rounded-md bg-black p-2 text-md text-white transition hover:shadow-lg"
                  >
                    Pay Now
                  </button>
                ) : (
                  <Link
                    to="/pos"
                    className="block  w-full text-center rounded-md bg-black p-2 text-md text-white transition hover:shadow-lg"
                  >
                    Pay Now
                  </Link>
                )}
              </div>

              <div className="   w-full py-2">
                <Link
                  to="/pos"
                  className="block  text-center w-full rounded-md border-2 border-black bg-white p-2 text-md text-black transition hover:shadow-lg"
                >
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentCheckout;
