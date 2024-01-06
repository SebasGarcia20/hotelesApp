import { Button, Typography } from "@mui/material";
import { Booking, CardHotelInfoProps, TableBookingProps } from "../../../config/interfaces";
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";


export const TableBookings = (props: TableBookingProps) => {

    const { bookingsByUser } = props
    const navigate = useNavigate()

    const hotelsArray = JSON.parse(localStorage.getItem('hotels') as string) || []

    const toBookingDetails = (id: string) => {
        navigate(`/hotel/booking/${id}`)
    }

    return (
        <section>
            <div className="tbl-header">
                <table >
                    <thead>
                        <tr>
                            <th>
                                <Typography
                                    variant="h4"
                                >
                                    Hotel

                                </Typography>
                            </th>
                            <th>
                                <Typography
                                    variant="h4"
                                >
                                    Name Guest
                                </Typography>
                            </th>
                            <th>
                                <Typography
                                    variant="h4"
                                >
                                    Number Guests
                                </Typography>
                            </th>
                            <th>
                                <Typography
                                    variant="h4"
                                >
                                    Room Type
                                </Typography>
                            </th>
                            <th>
                                <Typography
                                    variant="h4"
                                >
                                    Check-in
                                </Typography>
                            </th>
                            <th>
                                <Typography
                                    variant="h4"
                                >
                                    Check-out
                                </Typography>
                            </th>
                            <th>
                                <Typography
                                    variant="h4"
                                >
                                    Actions
                                </Typography>
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="tbl-content">
                <table border={0}>
                    <tbody>
                        {
                            bookingsByUser && bookingsByUser.map((booking: Booking) => (
                                <tr
                                    className="tr-clickable"
                                    onClick={() => toBookingDetails(booking.id)}
                                >
                                    <td>
                                        <Typography
                                            variant="body1"
                                        >
                                            {
                                                hotelsArray.find((hotel: CardHotelInfoProps) => hotel.id === booking.hotelId).name
                                            }
                                        </Typography>
                                    </td>
                                    <td>
                                        <Typography
                                            variant="body1"
                                        >
                                            {
                                                booking.firstName + ' ' + booking.lastName
                                            }
                                        </Typography>
                                    </td>
                                    <td>
                                        <Typography
                                            variant="body1"
                                        >
                                            {
                                                booking.firstName2 &&
                                                <>
                                                    <PersonIcon fontSize="small" />
                                                    <PersonIcon fontSize="small" />
                                                </>
                                            }
                                            {
                                                !booking.firstName2 &&
                                                <PersonIcon fontSize="small" />
                                            }
                                        </Typography>
                                    </td>
                                    <td>
                                        <Typography
                                            variant="body1"
                                        >
                                            {
                                                booking.firstName2 &&
                                                'Double or Suite'
                                            }
                                            {
                                                !booking.firstName2 &&
                                                'Single'
                                            }
                                        </Typography>
                                    </td>
                                    <td>
                                        <Typography
                                            variant="body1"
                                        >
                                            {
                                                new Date(booking.checkIn).toDateString()
                                            }
                                        </Typography>
                                    </td>
                                    <td>
                                        <Typography
                                            variant="body1"
                                        >
                                            {
                                                new Date(booking.checkOut).toDateString()
                                            }
                                        </Typography>
                                    </td>
                                    <td>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                        >
                                            More details
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </section>
    );
}