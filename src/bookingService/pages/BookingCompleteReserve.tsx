import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material"
import { NavBar } from "../components/NavBar"
import { useNavigate } from "react-router-dom"

export const BookingCompleteReserve = () => {

    const navigate = useNavigate();

    const toHome = () => {
        navigate('/booking')
    }

    return (
        <>
            <NavBar />
            <Grid
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    mt: 13,
                    width: '100%'
                }}
            >
                <Box
                    sx={{
                        width: 1000,
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Card>
                        <CardContent
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Typography
                                variant="h3"
                                sx={{
                                    my: 2
                                }}
                            >
                                Your reservation is confirmed! We look forward to welcoming you to our hotel
                            </Typography>
                            <Button
                                variant="contained"
                                onClick={toHome}
                            >
                                Make another reservation
                            </Button>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
        </>
    )
}
