import { Box, Grid, Typography } from "@mui/material"
import { ManagementLayout } from "../../../layout/ManagementLayout"
import { TableBookings } from "../components/TableBookings"
import { Booking, CardHotelInfoProps } from "../../../config/interfaces"

export const HotelBooking = () => {

  const hotelsArray = JSON.parse(localStorage.getItem('hotels') as string) || []
  const bookingsArray = JSON.parse(localStorage.getItem('bookings') as string) || []
  const hotelsByUser =
    hotelsArray.filter((hotel: CardHotelInfoProps) => hotel.username === localStorage.getItem('username'))
      .map((hotel: CardHotelInfoProps) => hotel.id)
  const bookingsByUser = bookingsArray.filter((booking: Booking) => hotelsByUser.includes(booking.hotelId))
  
  return (
    <ManagementLayout>
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Typography
          component='p'
          variant="h1"
        >
          Bookings to your rooms
        </Typography>
      </Box>
      <Typography
        component='p'
        variant="h5"
        sx={{
          mt: 1
        }}
      >
        Click on booking to see details
      </Typography>
      <Grid
        sx={{
          pt: 4
        }}
      >
        <Grid item>
          <TableBookings bookingsByUser={bookingsByUser} />
        </Grid>
      </Grid>
    </ManagementLayout>
  )
}
