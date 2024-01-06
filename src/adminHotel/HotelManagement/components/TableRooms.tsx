import { Room, TableRoomProps } from "../../../config/interfaces";
import { Checkbox, IconButton, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

export const TableRooms = (props: TableRoomProps) => {

    const { rooms, onOpen, setRoommToEdit } = props

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
                                    Roomm Active
                                </Typography>
                            </th>
                            <th>
                                <Typography
                                    variant="h4"
                                >
                                    Base Cost
                                </Typography>
                            </th>
                            <th>
                                <Typography
                                    variant="h4"
                                >
                                    Taxes
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
                                    Room Type
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
                            rooms && rooms.length > 0 && rooms.map((room: Room) => (
                                <tr
                                    key={room.id}
                                >
                                    <td>
                                        <Checkbox
                                            size="small"
                                            sx={{ m: 0, p: 0 }}
                                            checked={room.active}
                                        />
                                    </td>
                                    <td>
                                        <Typography>
                                            {room.baseCost.toLocaleString()} COP
                                        </Typography>
                                    </td>
                                    <td>
                                        <Typography>
                                            {room.taxes.toLocaleString()} COP
                                        </Typography>
                                    </td>
                                    <td>
                                        <Typography>
                                            {room.description}
                                        </Typography>
                                    </td>
                                    <td>
                                        <Typography>
                                            {room.type}
                                        </Typography>
                                    </td>
                                    <td>
                                        <IconButton
                                            color="secondary"
                                            onClick={() => {
                                                onOpen()
                                                setRoommToEdit(room)
                                            }}
                                        >
                                            <EditIcon />
                                        </IconButton>
                                    </td>
                                </tr>
                            ))
                        }
                        {
                            rooms.length === 0 &&
                            <tr>
                                <td></td>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                    <Typography>
                                        No Rooms
                                    </Typography>
                                </td>
                                <td>
                                </td>
                                <td>
                                </td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
}