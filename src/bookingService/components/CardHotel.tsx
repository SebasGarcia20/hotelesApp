import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { CardHotelInfoProps, Room } from "../../config/interfaces"
import { useEffect, useState } from "react"

export const CardHotel = (props: CardHotelInfoProps) => {

    const {
        id,
        name,
        address,
        city,
        services,
        rooms
    } = props


    const [price, setPrice] = useState<number>()
    const navigate = useNavigate()

    const toInfoHotel = () => {
        navigate(`/hotel/${id}`)
    }

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'row',
                cursor: 'pointer',
                mb: 4,
                width: 840,
                height: 250
            }}
            onClick={toInfoHotel}
        >
            <CardMedia
                component="img"
                sx={{ width: 250 }}
                image="/src/assets/roomHotel.jpg"
                alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', width: '100%', ml: 2, justifyContent: 'space-between' }}>
                <CardContent>
                    <Typography variant="h3">
                        {name}
                    </Typography>
                    <Typography variant="subtitle1" >
                        {`${address}, ${city}`}
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            mt: 2
                        }}
                    >
                        {rooms && rooms.length > 0 && rooms[0].type}
                    </Typography>
                    {
                        services && services.length > 0 && services.map(service =>
                        (
                            <Typography
                                variant="h5"
                                sx={{ color: 'green', mt: 2 }}
                            >
                                ✓ {service}
                            </Typography>
                        ))
                    }
                    {
                        !services &&
                        <></>
                    }
                </CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', pl: 15, pr: 2, py: 2, justifyContent: 'space-between' }}>

                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                        <Typography
                            sx={{
                                pr: 2,
                            }}
                            variant="h4"
                        >
                            Great
                        </Typography>
                        <Typography
                            variant="h4"
                            sx={{
                                backgroundColor: '#FEB100',
                                py: .5,
                                px: 1,
                                color: 'white',
                                borderRadius: .5
                            }}>
                            9,0
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                        }}
                    >
                        <Typography
                            sx={{
                                mt: 11,
                            }}
                            variant="subtitle1"
                        >
                            {
                                rooms && rooms.length > 0 &&
                                (rooms[0].baseCost + rooms[0].taxes).toLocaleString() + ' COP'
                            }
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                mb: 1
                            }}
                        >
                            Taxes Included
                        </Typography>
                        <Button
                            variant="contained"
                            size="small"
                        >
                            See Availability {'>'}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Card>
    )
}
