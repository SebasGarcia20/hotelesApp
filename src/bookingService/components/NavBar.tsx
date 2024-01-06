import { AppBar, Autocomplete, Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import LoginIcon from '@mui/icons-material/Login';
import { useLocation, useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { places } from "../../config/interfaces";



export const NavBar = () => {

  const location = useLocation()
  const navigate = useNavigate()
  const [city, setCity] = useState('')
  const [checkIn, setCheckIn] = useState<Dayjs | null>(dayjs(new Date()))
  const [checkOut, setCheckOut] = useState<Dayjs | null>(dayjs(new Date()).add(1, 'day'))
  const [guests, setGuests] = useState<string>('')

  const toAuth = () => {
    navigate('/auth/')
  }

  const toHome = () => {
    navigate('/')
  }

  useEffect(() => {
    let searchfilters = JSON.parse(localStorage.getItem('searchFilters') as string)
    if (searchfilters) {
      if(searchfilters.city) setCity(searchfilters.city)
      if(searchfilters.checkIn) setCheckIn(dayjs(searchfilters.checkIn))
      if(searchfilters.checkOut) setCheckOut(dayjs(searchfilters.checkOut))
      if(searchfilters.guests) setGuests(searchfilters.guests)
    }
  }, [])

  const saveSearchFilters = () => {
    localStorage.setItem('searchFilters',
      JSON.stringify({
        checkOut,
        checkIn,
        city,
        guests
      }))
    if (location.pathname === '/') {
      navigate(0)
    } else {
      navigate('/')
    }
  }

  return (
    <AppBar
      sx={{
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        py: 2,
        px: 3
      }}
    >

      <Typography
        sx={{
          color: 'black',
          cursor: 'pointer'
        }}
        variant="h3"
        onClick={toHome}
      >
        HOTELS APP
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={places}
          sx={{ width: 250 }}
          value={city}
          onChange={(event: any, newValue: string | null) => {
            setCity(newValue as string);
          }}
          renderInput={(params) => <TextField {...params} label="Where are you going? " />}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs} >
          <DatePicker
            sx={{ width: 150, ml: 2 }}
            label="Check-in"
            value={checkIn}
            onChange={(newValue) => setCheckIn(newValue)}
          />
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            sx={{ width: 150, ml: 2 }}
            label="Check-out"
            value={checkOut}
            onChange={(newValue) => setCheckOut(newValue)}
            minDate={dayjs(checkIn).add(1, 'day')}
          />
        </LocalizationProvider>

        <FormControl sx={{ width: 150, ml: 2 }}>
          <InputLabel id="demo-simple-select-label">Guests</InputLabel>
          <Select
            label="Guests"
            value={guests}
            onChange={(event: SelectChangeEvent) => setGuests(event.target.value as string)}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
          </Select>
        </FormControl>
        <IconButton
          color="secondary"
          sx={{
            ml: 2,
            height: 45,
            width: 45,
            backgroundColor: '#323643',
            color: 'white',
            "&:hover": {
              color: 'black'
            }
          }}
          size="small"
          onClick={saveSearchFilters}
        >
          <SearchIcon />
        </IconButton>
      </Box>
      <Box>
        <Button
          variant="contained"
          color="secondary"
          onClick={toAuth}
        >
          <LoginIcon /> &nbsp; Post your Hotel
        </Button>
      </Box>
    </AppBar>
  )
}
