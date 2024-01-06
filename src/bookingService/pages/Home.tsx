import { Grid, Typography } from "@mui/material"
import { NavBar } from "../components/NavBar";
import { useEffect, useState } from "react";
import { CardHotel } from "../components/CardHotel";
import { CardHotelInfoProps } from "../../config/interfaces";



export const Home = () => {

  const [hotels, setHotels] = useState(JSON.parse(localStorage.getItem('hotels') as string))
  const [searchFilters, setSearchFilters] = useState(JSON.parse(localStorage.getItem('searchFilters') as string) || [])
  const [hotelsByFilters, setHotelsByFilters] = useState<CardHotelInfoProps[]>([])
  let hotelsActive: CardHotelInfoProps[] = []

  useEffect(() => {
    setHotels(JSON.parse(localStorage.getItem('hotels') as string))
  }, [localStorage])



  useEffect(() => {
    setSearchFilters(JSON.parse(localStorage.getItem('searchFilters') as string) || [])
    if (hotels && hotels.length > 0) {
      hotelsActive = hotels.filter((hotel: CardHotelInfoProps) => hotel.active === true)
      if (searchFilters && searchFilters.city) {
        setHotelsByFilters(hotelsActive.filter((hotel: CardHotelInfoProps) => hotel.city === searchFilters.city))
      }
    }
  }, [searchFilters])

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
        {
          hotelsByFilters && hotelsByFilters.length > 0 && hotelsByFilters.map((hotel: CardHotelInfoProps) => (
            <CardHotel
              key={hotel.id}
              active={hotel.active}
              id={hotel.id}
              name={hotel.name}
              address={hotel.address}
              description={hotel.description}
              city={hotel.city}
              phone={hotel.phone}
              email={hotel.email}
              services={hotel.services}
              rooms={hotel.rooms}
              username={hotel.username}
            />
          ))
        }
        {
          !hotelsActive &&
          <Typography
            variant="h2"
          >
            Theres no hotels
          </Typography>
        }
      </Grid>
    </>
  )
}