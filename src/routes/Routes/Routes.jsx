import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Pos from "../../pages/POS/POS";
import AddProduct from "../../pages/AddProduct/AddProduct";
import Login from "../../pages/Login/Login";
import PaymentCheckout from "../../pages/PaymentCheckout/PaymentCheckout";
import Inventory from "../../pages/Inventory/Inventory";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Dashboard/>
            },
            {
                path: '/pos',
                element: <Pos/>
            },
            {
                path: '/inventory',
                element: <Inventory/>
            },
            {
                path: '/add-product',
                element: <AddProduct/>
            },
            {
                path: '/pos/checkout',
                element: <PaymentCheckout/>
            },
            
        ]
    },
    {
        path: '/login',
        element: <Login/>
    }
]);