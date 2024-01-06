import { Button, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";
import { TableAvailabilityProps } from "../../config/interfaces";


export const TableAvailability = (props: TableAvailabilityProps) => {

    const { rooms, idHotel } = props
    const navigate = useNavigate();

    const goToBookingRoom = (idRoom: string) => {
        navigate(`/booking/${idHotel}/${idRoom}`)
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
                                    Room Type
                                </Typography>
                            </th>
                            <th>
                                <Typography
                                    variant="h4"
                                >
                                    Description
                                </Typography>
                            </th>
                            <th>
                                <Typography
                                    variant="h4"
                                >
                                    Guest
                                </Typography>
                            </th>
                            <th>
                                <Typography
                                    variant="h4"
                                >
                                    Price
                                </Typography>
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="tbl-content">
                <table border={0}>
                    <tbody>

                        {
                            rooms && rooms.length > 0 && rooms.map(room => (
                                <tr key={room.id}>
                                    <td>
                                        <Typography
                                            variant="body1"
                                        >
                                            {room.type}
                                        </Typography>
                                    </td>
                                    <td>
                                        <Typography
                                            variant="body1"
                                        >
                                            {room.description}
                                        </Typography>
                                    </td>
                                    <td>
                                        {
                                            (room.type === 'double' || room.type === 'suite') &&
                                            <>
                                                <PersonIcon fontSize="small" />
                                                <PersonIcon fontSize="small" />
                                            </>
                                        }
                                        {
                                            room.type === 'single' &&
                                            <PersonIcon fontSize="small" />
                                        }
                                    </td>
                                    <td>
                                        <Typography
                                            variant="body1"
                                        >
                                            {(room.taxes + room.baseCost).toLocaleString()}
                                        </Typography>
                                    </td>
                                    <td>
                                        <Button
                                            variant="contained"
                                            size="small"
                                            color="secondary"
                                            onClick={() => goToBookingRoom(room.id)}
                                        >
                                            Make Reservation
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