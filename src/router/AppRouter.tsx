import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";

import { HotelBookingRouter, HotelBookingRoutes } from '../HotelBooking/router/index'
import { ErrorPage } from "../ui/pages/ErrorPage";
import { AuthRouter, AuthRoutes } from "../auth/router";
import { HotelManagementRouter, HotelManagementRoutes } from "../HotelManagement/router";


const routesConfig = createBrowserRouter([
    {
        path: "/auth/*",
        element: (
            <AuthRouter />
        ),
        children: AuthRoutes,
        errorElement: <ErrorPage />,
    },
    {
        // ? Journalist App
        path: "/",
        element: (
            <HotelBookingRouter />
        ),
        children: HotelBookingRoutes,
        errorElement: <ErrorPage />,
    },
    {
        // ? Journalist App
        path: "/",
        element: (
            <HotelManagementRouter />
        ),
        children: HotelManagementRoutes,
        errorElement: <ErrorPage />,
    },
    {
        path: "/*",
        element: <Navigate to={"/auth"} />,
    },
]);

export const AppRouter = () => {
    return <RouterProvider router={routesConfig} />;
};