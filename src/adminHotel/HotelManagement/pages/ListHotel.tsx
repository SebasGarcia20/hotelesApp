import { Box, Button, Grid, Typography } from "@mui/material"
import { ManagementLayout } from "../../../layout/ManagementLayout"
import { CardHotel } from "../components/CardHotel"
import { useEffect, useState } from "react"
import { CardHotelInfoProps } from "../../../config/interfaces"
import { useNavigate } from "react-router-dom"

export const ListHotel = () => {

  const navigate = useNavigate();
  const [hotels, setHotels] = useState(JSON.parse(localStorage.getItem('hotels') as string))

  const hotelByUser = hotels.filter((hotel: CardHotelInfoProps) => hotel.username === localStorage.getItem('username'))

  useEffect(() => {
    setHotels(JSON.parse(localStorage.getItem('hotels') as string))
  }, [localStorage])

  const toNewHotel = () => {
    navigate(`/hotel/management/new`)
}

  return (
    <ManagementLayout>
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Typography
          component='p'
          variant="h1"

        >
          Select Hotel to Management
        </Typography>
        <Button
          variant="contained"
          onClick={toNewHotel}
        >
          + Add Hotel
        </Button>
      </Box>
      <Grid
        sx={{
          pt: 5
        }}
      >
        <Grid
          item
          sx={{
            display: 'flex',
            flexWrap: 'wrap'
          }}
        >
          {
            hotels && hotels.length > 0 && hotelByUser &&
            hotelByUser.map((hotel: CardHotelInfoProps) => (
              <CardHotel idHotel={hotel.id} name={hotel.name} />
            ))
          }
        </Grid>
      </Grid>
    </ManagementLayout>
  )
}
