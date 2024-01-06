import { Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { InfoHotel } from "../pages/InfoHotel";
import { BookingForm } from "../pages/BookingForm";
import { BookingCompleteReserve } from "../pages/BookingCompleteReserve";

export const BookingServiceRoutes = [
  {
    path: "",
    element: <Home />
  },
  {
    path: "hotel/:id",
    element: <InfoHotel />
  },
  {
    path: "booking/:idHotel/:idRoom",
    element: <BookingForm />
  },
  {
    path: "/*",
    element: <Navigate to={"/"} />,
  },
  {
    path: "booking/completed",
    element: <BookingCompleteReserve/>
  }
];