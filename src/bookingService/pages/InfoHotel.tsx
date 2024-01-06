import { Box, Grid, Typography } from "@mui/material"
import { NavBar } from "../components/NavBar"
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PoolIcon from '@mui/icons-material/Pool';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import { TableAvailability } from "../components/TableAvailability";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardHotelInfoProps, Room } from "../../config/interfaces";

export const InfoHotel = () => {

  const params = useParams()
  const [infoHotelstate, setInfoHotelstate] = useState<CardHotelInfoProps>()

  useEffect(() => {
    if (params) {
      let hotelsArray = JSON.parse(localStorage.getItem('hotels') as string)
      setInfoHotelstate(hotelsArray.find((hotel: CardHotelInfoProps) => params.id as string === hotel.id))
    }
  }, [])


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
          }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 2
            }}
          >
            {`${infoHotelstate?.name}`}
            <Typography>
              {`${infoHotelstate?.address}, ${infoHotelstate?.city}, ${infoHotelstate?.phone}`}
            </Typography>
          </Typography>
          <Box
            sx={{ display: 'flex' }}
          >
            <img src="/src/assets/roomHotel.jpg" alt="Hotel room" style={{ width: '60%', marginRight: '8px' }} />
            <Box>
              <img src="/src/assets/roomHotel2.jpg" alt="Hotel room" style={{ width: '98%' }} />
              <img src="/src/assets/roomHotel3.jpg" alt="Hotel room" style={{ width: '98%', marginTop: 2, marginBottom: 0 }} />
            </Box>
          </Box>

          <Box
            sx={{
              mt: 2
            }}
          >
            <Typography
              variant="body1"
            >
              {infoHotelstate?.description}
            </Typography>

            <Typography
              sx={{
                mt: 2,
                mb: 1
              }}
              variant="h3"
            >
              Services
            </Typography>

            <Box
              sx={{
                display: 'flex'
              }}
            >
              {
                infoHotelstate && infoHotelstate.services.length > 0 &&
                infoHotelstate.services.map(service => (
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: 'green',
                      mr: 3
                    }}
                  >
                    {
                      service === 'Gym' &&
                      <FitnessCenterIcon fontSize="small" />
                    }
                    {
                      service === 'Parking' &&
                      <LocalParkingIcon fontSize="small" />
                    }
                    {
                      service === 'Restaurant' &&
                      <RestaurantIcon fontSize="small" />
                    }
                    {
                      service === 'Pool' &&
                      <PoolIcon fontSize="small" />
                    }
                    <Typography
                      sx={{
                        ml: 1
                      }}
                      variant="h4"
                    >
                      {service}
                    </Typography>
                  </Box>
                ))
              }
            </Box>
          </Box>

          <Typography
            variant="h3"
            sx={{
              mt: 3,
              mb: 2
            }}
          >
            Availability
          </Typography>

          <Box
            sx={{
              mb: 3
            }}
          >
            <TableAvailability
              idHotel={infoHotelstate?.id as string}
              rooms={infoHotelstate?.rooms as Room[]}
            />
          </Box>

        </Box>
      </Grid>
    </>
  )
}
