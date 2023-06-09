import PropTypes from "prop-types";
// import { useContext } from "react";
// import { ProductContext } from "../../App";
const GenerateInvoice = ({ name, phone, checkout, placedTime }) => {
  // const { order } = useContext(ProductContext);
  // const { name, phone, checkout } = order;
  // console.log(order);
  
  // let products = [];
  // if(invoiceProducts){
  //   products = invoiceProducts.map(item => item.description = item.name)
  // } 
  console.log({ name, phone, checkout, placedTime });

  let invoiceData = {
    // Customize enables you to provide your own templates
    // Please review the documentation for instructions and examples
    customize: {
      //  "template": fs.readFileSync('template.html', 'base64') // Must be base64 encoded html
    },
    images: {
      // The logo on top of your invoice
      logo: "https://i.ibb.co/mNmYcP7/Untitled-design-2-removebg-preview.png",
      // The invoice background
      background: "https://i.ibb.co/ngXDn2g/Untitled-design-1.png",
    },
    // Your own dataf
    sender: {
      company: "#AngurFolTok",
      address: "Dhaka, Bangladesh",
      zip: "DHK 1212",
      city: "Dhaka",
      country: "Bangladesh",
      //"custom1": "custom value 1",
      //"custom2": "custom value 2",
      //"custom3": "custom value 3"
    },
    // Your recipient
    client: {
      company: name,
      address: phone,
      zip: "DHK 1212",
      city: "Dhaka",
      country: "Bangladesh",
      // "custom1": "custom value 1",
      // "custom2": "custom value 2",
      // "custom3": "custom value 3"
    },
    information: {
      // Invoice number
      number: "2021.0001",
      // Invoice data
      date: placedTime,
    
      // Invoice due date
      
    },
    // The products you would like to see on your invoice
    // Total values are being calculated automatically

    // products: [
    //   {
    //     quantity: 2,
    //     description: "Product 1",
    //     "tax-rate": 6,
    //     price: 33.87,
    //   },
    //   {
    //     quantity: 4.1,
    //     description: "Product 2",
    //     "tax-rate": 6,
    //     price: 12.34,
    //   },
    //   {
    //     quantity: 4.5678,
    //     description: "Product 3",
    //     "tax-rate": 21,
    //     price: 6324.453456,
    //   },
    // ],

    products: checkout,
    // The message you would like to display on the bottom of your invoice
    "bottom-notice": "Thank You For Shopping.",
    // Settings to customize your invoice
    settings: {
      currency: "USD", // See documentation 'Locales and Currency' for more info. Leave empty for no currency.
      // "locale": "nl-NL", // Defaults to en-US, used for number formatting (See documentation 'Locales and Currency')
      // "margin-top": 25, // Defaults to '25'
      // "margin-right": 25, // Defaults to '25'
      // "margin-left": 25, // Defaults to '25'
      // "margin-bottom": 25, // Defaults to '25'
      // "format": "A4", // Defaults to A4, options: A3, A4, A5, Legal, Letter, Tabloid
      // "height": "1000px", // allowed units: mm, cm, in, px
      // "width": "500px", // allowed units: mm, cm, in, px
      // "orientation": "landscape", // portrait or landscape, defaults to portrait
    },
    // Translate your invoice to your preferred language
    translate: {
      // "invoice": "FACTUUR",  // Default to 'INVOICE'
      // "number": "Nummer", // Defaults to 'Number'
      // "date": "Datum", // Default to 'Date'
      // "due-date": "Verloopdatum", // Defaults to 'Due Date'
      // "subtotal": "Subtotaal", // Defaults to 'Subtotal'
      // "products": "Producten", // Defaults to 'Products'
      // "quantity": "Aantal", // Default to 'Quantity'
      // "price": "Prijs", // Defaults to 'Price'
      // "product-total": "Totaal", // Defaults to 'Total'
      // "total": "Totaal", // Defaults to 'Total'
      // "vat": "btw" // Defaults to 'vat'
    },
  };
  return invoiceData;
};

GenerateInvoice.propTypes = {
  orderDetails: PropTypes.object,
};

export default GenerateInvoice;
