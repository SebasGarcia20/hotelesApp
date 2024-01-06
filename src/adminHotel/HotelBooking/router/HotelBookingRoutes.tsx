import { BookingDetails } from "../pages/BookingDetails";
import { HotelBooking } from "../pages/HotelBooking";

export const HotelBookingRoutes = [
    {
        path: "/hotel/booking",
        element: <HotelBooking />
    },
    {
        path: "/hotel/booking/:id",
        element: <BookingDetails />
    }
];