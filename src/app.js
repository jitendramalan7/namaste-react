import React  from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";

/**
    * Header
    *  - Logo
    *  - Nav Items(Right Side)
    *  - Cart
    * Body
    * - Search Bar
    * - Restrauant List
    *  - Restraunt Card
    *      - Image
    *      - Name
    *      - Rating
    *      - Cusines
    * Footer
    *  - Links
    *  - Copyrights
*/

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path:"/",
                element: <Body />
            },
            {
                path:"/About",
                element: <About />,
                children: [
                    {
                        path: "profile",
                        element: <Profile />
                    }
                ]
            },
            {
                path:"/Contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            }
        ]
    },
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
