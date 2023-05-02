import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Pos from "../../pages/POS/POS";
import Login from "../../pages/Login/Login";
import PaymentCheckout from "../../pages/PaymentCheckout/PaymentCheckout";
import Inventory from "../../pages/Inventory/Inventory";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Settings from "../../pages/Settings/Settings";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <PrivateRoute><Main/></PrivateRoute>,
        children: [
            {
                path: '/',
                element: <Dashboard/>
            },
            {
                path: '/pos',
                element: <Pos/>,
            },
            {
                path: '/inventory',
                element: <Inventory/>
            },
            {
                path: '/pos/checkout',
                element: <PaymentCheckout/>
            },
            {
                path: '/settings',
                element: <Settings/>
            },
            
        ]
    },
    {
        path: '/login',
        element: <Login/>
    }
]);