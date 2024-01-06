import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";

import { HotelBookingRouter, HotelBookingRoutes } from '../adminHotel/HotelBooking/router/index'
import { ErrorPage } from "../ui/pages/ErrorPage";
import { AuthRouter, AuthRoutes } from "../auth/router";
import { HotelManagementRouter, HotelManagementRoutes } from "../adminHotel/HotelManagement/router";
import { BookingServiceRouter, BookingServiceRoutes } from "../bookingService/router";


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
        path: "/hotel",
        children: [
            {
              path: "booking", // Relative path to "/hotel", not "/hotel/booking"
              element: <HotelBookingRouter />,
              children: HotelBookingRoutes,
              errorElement: <ErrorPage />,
            },
            {
              path: "management", // Relative path to "/hotel", not "/hotel/management"
              element: <HotelManagementRouter />,
              children: HotelManagementRoutes,
              errorElement: <ErrorPage />,
            },
            {
                path: '*',
                element: <Navigate to={"/hotel/management"}/>
            }
          ],
        errorElement: <ErrorPage />,
    },
    {
        path: "/",
        element: (
            <BookingServiceRouter />
        ),
        children: BookingServiceRoutes,
        errorElement: <ErrorPage />,
    },
    // {
    //     path: "/*",
    //     element: <Navigate to={"/auth"} />,
    // },
]);

export const AppRouter = () => {
    return <RouterProvider router={routesConfig} />;
};