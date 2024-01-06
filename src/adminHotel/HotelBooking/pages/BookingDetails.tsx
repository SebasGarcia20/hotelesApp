import { Box, Typography } from "@mui/material"
import { ManagementLayout } from "../../../layout/ManagementLayout"
import { Booking, CardHotelInfoProps } from "../../../config/interfaces"
import { useParams } from "react-router-dom"

export const BookingDetails = () => {

  const params = useParams()
  const bookingDetail: Booking = JSON.parse(localStorage.getItem('bookingDetails') as string).find((booking: Booking) => booking.id === params.id) || []
  const hotelsArray = JSON.parse(localStorage.getItem('hotels') as string) || []

  return (
    <ManagementLayout>
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Typography
          component='p'
          variant="h1"
        >
          Details about the booking
        </Typography>
      </Box>
      <Typography
        component='p'
        variant="h5"
        sx={{
          mt: 1
        }}
      >
        You can se more details about the booking to your hotelu
      </Typography>
      <Box
        sx={{
          mt: 4,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly'
          }}
        >
          <Box>
            <Typography
              variant="h2"
              sx={{
                mr: 2
              }}
            >
              Hotel
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mr: 3
              }}
            >
              {hotelsArray.find((hotel: CardHotelInfoProps) => hotel.id === bookingDetail.hotelId).name}
            </Typography>
          </Box>


          <Box>
            <Typography
              variant="h2"
              sx={{
                mr: 2
              }}
            >
              Room
            </Typography>
            <Typography
              variant="body1"
            >
              {
                bookingDetail.firstName2 &&
                'Double or Suite'
              }
              {
                !bookingDetail.firstName2 &&
                'Single'
              }
            </Typography>
          </Box>


          <Box>
            <Typography
              variant="h2"
              sx={{
                mr: 2
              }}
            >
              Check in
            </Typography>
            <Typography
              variant="body1"
            >
              {new Date(bookingDetail.checkIn).toDateString()}
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h2"
              sx={{
                mr: 2
              }}
            >
              Check Out
            </Typography>
            <Typography
              variant="body1"
            >
              {new Date(bookingDetail.checkOut).toDateString()}
            </Typography>
          </Box>

        </Box>


        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 4
          }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 1
            }}
          >
            Details Guests
          </Typography>
          <Typography
            variant="body1"
          >
            {bookingDetail.firstName + ' ' + bookingDetail.lastName}
          </Typography>
          <Typography
            variant="body1"
          >
            {bookingDetail.documentType + ' ' + bookingDetail.documentNumber}
          </Typography>
          <Typography
            variant="body1"
          >
            {bookingDetail.email}
          </Typography>
        </Box>

        {
          bookingDetail.firstName2 &&
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              mt: 4
            }}
          >
            <Typography
              variant="h2"
              sx={{
                mb: 1
              }}
            >
              Second Guest
            </Typography>
            <Typography
              variant="body1"
            >
              {bookingDetail.firstName2 + ' ' + bookingDetail.lastName2}
            </Typography>
            <Typography
              variant="body1"
            >
              {bookingDetail.documentType2 + ' ' + bookingDetail.documentNumber2}
            </Typography>
            <Typography
              variant="body1"
            >
              {bookingDetail.email2}
            </Typography>
          </Box>
        }

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 4
          }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 1
            }}
          >
            Contact Emergency
          </Typography>
          <Typography
            variant="body1"
          >
            {bookingDetail.phoneEmergency}
          </Typography>
          <Typography
            variant="body1"
          >
            {bookingDetail.emailEmergency}
          </Typography>
        </Box>

      </Box>
    </ManagementLayout>
  )
}
