import { Card, CardContent, CardMedia } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { CardHotelManagementProps } from "../../../config/interfaces";


export const CardHotel = (props: CardHotelManagementProps) => {

    const { idHotel, name } = props
    const navigate = useNavigate();

    const toSpecificHotel = () => {
        navigate(`/hotel/management/${idHotel}`)
    }

    return (
        <Card
            sx={{
                width: '250px',
                cursor: 'pointer',
                ml: 2,
            }}
            className="card"
            onClick={toSpecificHotel}
        >
            <CardMedia
                image={'https://t4.ftcdn.net/jpg/00/09/21/15/360_F_9211505_d4hxfNtPeTfgt7AeGmoO7u79P2hwxkoQ.jpg'}
                component='img'
            />
            <CardContent>
                {name}
            </CardContent>
        </Card>
    )
}
