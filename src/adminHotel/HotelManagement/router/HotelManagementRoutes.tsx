import { ViewHotel } from "../pages/ViewHotel";
import { ListHotel } from "../pages/ListHotel";

export const HotelManagementRoutes = [
    { path: "/hotel/management", element: <ListHotel /> },
    { path: "/hotel/management/:id", element: <ViewHotel /> },
];