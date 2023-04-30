import { useContext } from "react";
import { ProductContext } from "../../App";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animation02 from "../../assets/animation02.json";
//import CartItem from "../../components/CartItem/CartItem";
//import moment from "moment/moment";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
const PaymentCheckout = () => {
  const { checkout } = useContext(ProductContext);
  let subTotal = 0;
  checkout.map((product) => (subTotal = subTotal + parseInt(product.price)));
  //console.log(subTotal);
  //let total = subTotal + subTotal * 0.05;
  //let placedTime = moment().format('DD/MM/YY, h:mm:ss a');
  //console.log(placedTime);

  //Create your invoice! Easy!
  // easyinvoice.createInvoice(invoiceData, function (result) {
  //     //The response will contain a base64 encoded PDF file
  //     /console.log('PDF base64 string: ', result.pdf);
  // });

  //const downloadInvoice = async() => {
  // See documentation for all data properties
  //const data = this.getSampleData();
  // const result = await easyinvoice.createInvoice(invoiceData);
  // easyinvoice.download('myInvoice.pdf', result.pdf);
  //	you can download like this as well:
  //	easyinvoice.download();
  //	easyinvoice.download('myInvoice.pdf');
  //}

  // const renderInvoice = async() => {
  //     // See documentation for all data properties
  //     document.getElementById('pdf').innerHTML = 'loading...';
  //     const data = this.getSampleData();
  //     const result = await easyinvoice.createInvoice(data);
  //     easyinvoice.render('pdf', result.pdf);
  // }

  const style = {
    height: 500,
  };

  return (
    <section className="h-[91vh]  mx-auto">
      <div className="mx-auto grid grid-cols-1 lg:h-[91vh] md:grid-cols-2">
        <div className={`bg-slate-300 dark:bg-gray-900 grid ${checkout.length === 0 ? 'items-center' : null} h-full lg:px-5`}>
          {checkout.length === 0 ? (
            <>
              <h2 className="font-bold mt-8 text-center text-2xl bg-gradient-to-r from-yellow-300 to-cyan-300 bg-clip-text text-transparent">
                Nothing in Cart :(
              </h2>
              <Lottie style={style} animationData={animation02} />
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
                    className="relative w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
                  >
                    <option>Cash</option>
                    <option>Card</option>
                    <option>Cheque</option>
                    <option>Bank transfer</option>
                    <option>Other</option>
                  </select>
                </div>
              </fieldset>

              <fieldset className="col-span-6">
                <legend className="block text-sm font-medium text-gray-700">
                  Billing Address
                </legend>

                <textarea className="relative w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"></textarea>
              </fieldset>

              <div className="flex col-span-6">
                <div className="   w-full p-2">
                  <Link
                    to="/pos"
                    className="block  w-full text-center rounded-md bg-black p-2 text-md text-white transition hover:shadow-lg"
                  >
                    Pay Now
                  </Link>
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentCheckout;
