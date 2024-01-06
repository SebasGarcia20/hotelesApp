import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material"
import { NavBar } from "../components/NavBar"
import { CardHotelInfoProps } from "../../config/interfaces"
import dayjs from "dayjs"

export const BookingForm = () => {

    const navigate = useNavigate()
    const params = useParams()
    const [infoHotelstate, setInfoHotelstate] = useState<CardHotelInfoProps>()
    const [searchFilters, setSearchFilters] = useState(JSON.parse(localStorage.getItem('searchFilters') as string))

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [documentNumber, setDocumentNumber] = useState('');
    const [documentType, setDocumentType] = useState('');
    const [email, setEmail] = useState('');

    const [firstName2, setFirstName2] = useState('');
    const [lastName2, setLastName2] = useState('');
    const [documentNumber2, setDocumentNumber2] = useState('');
    const [documentType2, setDocumentType2] = useState('');
    const [email2, setEmail2] = useState('');

    const [emailEmergency, setEmailEmergency] = useState('');
    const [phoneEmergency, setPhoneEmergency] = useState('')

    useEffect(() => {
        if (params) {
            let hotelsArray = JSON.parse(localStorage.getItem('hotels') as string)
            setInfoHotelstate(hotelsArray.find((hotel: CardHotelInfoProps) => params.idHotel as string === hotel.id))
            setSearchFilters(JSON.parse(localStorage.getItem('searchFilters') as string))
        }
    }, [])

    console.log(params)

    const toCompletedReserve = () => {
        if (infoHotelstate && infoHotelstate?.rooms.find(room => room.id === params.idRoom)?.type === 'single') {
            if (firstName && lastName && documentNumber && documentType && email
                && emailEmergency && phoneEmergency) {

                let bookings = JSON.parse(localStorage.getItem('bookings') as string) || []
                bookings.push(
                    {
                        id: Math.floor(Math.random() * (100 - 1) + 1).toString(),
                        hotelId: params.idHotel,
                        idRoom: params.idRoom,
                        firstName,
                        lastName,
                        documentNumber,
                        documentType,
                        email,
                        emailEmergency,
                        phoneEmergency,
                        checkIn: searchFilters ? searchFilters.checkIn : new Date().toString(),
                        checkOut: searchFilters ? searchFilters.checkOut : dayjs(new Date()).add(1, 'day')
                    })
                localStorage.setItem('bookings', JSON.stringify(bookings))
                navigate('/booking/completed')
            } else {
                alert('Fill all fields to finish reservation')
            }
        } else {
            if (firstName && lastName && documentNumber && documentType && email
                && firstName2 && lastName2 && documentNumber2 && documentType2 && email2
                && emailEmergency && phoneEmergency) {

                let bookings = JSON.parse(localStorage.getItem('bookings') as string) || []
                bookings.push(
                    {
                        id: Math.floor(Math.random() * (100 - 1) + 1).toString(),
                        hotelId: params.idHotel,
                        idRoom: params.idRoom,
                        firstName,
                        lastName,
                        documentNumber,
                        documentType,
                        email,
                        firstName2,
                        lastName2,
                        documentNumber2,
                        documentType2,
                        email2,
                        emailEmergency,
                        phoneEmergency,
                        checkIn: searchFilters ? searchFilters.checkIn : new Date().toString(),
                        checkOut: searchFilters ? searchFilters.checkOut : dayjs(new Date()).add(1, 'day')
                    })
                localStorage.setItem('bookingDetails', JSON.stringify(bookings))
                navigate('/booking/completed')
            } else {
                alert('Fill all fields to finish reservation')
            }
        }

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
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: 350,

                        }}
                    >
                        <Box
                            sx={{
                                border: '1px solid #FEB100',
                                borderRadius: 1,
                                px: 2,
                                py: 1
                            }}
                        >
                            <Typography
                                variant="h4"
                            >
                                {infoHotelstate?.name}
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 1
                                }}
                            >
                                {infoHotelstate?.address}
                            </Typography>
                            <Typography
                                variant="h4"
                                sx={{
                                    mb: 1
                                }}
                            >
                                Room:
                            </Typography>
                            <Typography
                                variant="body1"
                            >
                                {infoHotelstate && infoHotelstate?.rooms.find(room => room.id === params.idRoom)?.type}
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 1
                                }}
                            >
                                {infoHotelstate && infoHotelstate?.rooms.find(room => room.id === params.idRoom)?.description}
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 1
                                }}
                            >
                                {
                                    ((infoHotelstate?.rooms.find(room => room.id === params.idRoom)?.taxes || 0) +
                                        (infoHotelstate?.rooms.find(room => room.id === params.idRoom)?.baseCost || 0)).toLocaleString() + ' COP'
                                }
                            </Typography>
                            <Typography
                                variant="h4"
                                sx={{
                                    mb: 1
                                }}
                            >
                                Date:
                            </Typography>
                            <Typography
                                variant="body1"
                            >
                                {searchFilters && new Date(searchFilters.checkIn).toDateString()}
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 2
                                }}
                            >
                                to {searchFilters && new Date(searchFilters.checkOut).toDateString()}
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',

                                }}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{
                                        alignSelf: 'baseline',
                                        backgroundColor: '#FEB100',
                                        py: .5,
                                        px: 1,
                                        color: 'white',
                                        borderRadius: .5,
                                        mr: 1
                                    }}>
                                    9,0
                                </Typography>
                                <Typography>
                                    Great
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            ml: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                border: '1px solid #FEB100',
                                borderRadius: 1,
                                pl: 2,
                                width: '100%',
                            }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    mt: 1
                                }}
                            >
                                Fill The information of Guests
                            </Typography>

                            <Typography
                                sx={{
                                    my: 1
                                }}
                                variant="body1"
                            >
                                First Guest
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    width: '100%'

                                }}
                            >
                                <TextField
                                    label="First Name"
                                    sx={{
                                        width: '47%',
                                        mr: 2
                                    }}
                                    value={firstName}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setFirstName(event.target.value);
                                    }}
                                />
                                <TextField
                                    label="Last Name"
                                    sx={{
                                        width: '47%'
                                    }}
                                    value={lastName}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setLastName(event.target.value);
                                    }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    my: 2,
                                    width: '100%'
                                }}
                            >
                                <FormControl sx={{ width: '47%', mr: 2, }}>
                                    <InputLabel >Document Type</InputLabel>
                                    <Select
                                        id="document-type1"
                                        label="document-type"
                                        value={documentType}
                                        onChange={(event: SelectChangeEvent) => {
                                            setDocumentType(event.target.value);
                                        }}
                                    >
                                        <MenuItem value={'CC'}>CC</MenuItem>
                                        <MenuItem value={'TI'}>TI</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField
                                    sx={{
                                        width: '47%'
                                    }}
                                    label="Document Number"
                                    type="number"
                                    value={documentNumber}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setDocumentNumber(event.target.value);
                                    }}
                                />
                            </Box>

                            <FormControl sx={{ width: '47%', mb: 2 }}>
                                <InputLabel>Gender</InputLabel>
                                <Select
                                    id="gender1"
                                    label="Gender"
                                >
                                    <MenuItem value={10}>Male</MenuItem>
                                    <MenuItem value={20}>Female</MenuItem>
                                    <MenuItem value={30}>Other</MenuItem>
                                </Select>
                            </FormControl>

                            <TextField
                                label="Email"
                                sx={{
                                    width: '48%',
                                    mb: 2
                                }}
                                value={email}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setEmail(event.target.value);
                                }}
                            />
                            <TextField
                                label="Phone"
                                type="number"
                                sx={{
                                    width: '48%',
                                    mb: 2
                                }}
                            />
                            {infoHotelstate && infoHotelstate?.rooms.find(room => room.id === params.idRoom)?.type !== 'single' && (
                                <>
                                    <Typography
                                        sx={{
                                            my: 1
                                        }}
                                        variant="body1"
                                    >
                                        Second Guest
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            width: '100%'

                                        }}
                                    >
                                        <TextField
                                            label="First Name"
                                            sx={{
                                                width: '47%',
                                                mr: 2
                                            }}
                                            value={firstName2}
                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                setFirstName2(event.target.value);
                                            }}
                                        />
                                        <TextField
                                            label="Last Name"
                                            sx={{
                                                width: '47%'
                                            }}
                                            value={lastName2}
                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                setLastName2(event.target.value);
                                            }}
                                        />
                                    </Box>

                                    <Box
                                        sx={{
                                            my: 2,
                                            width: '100%'
                                        }}
                                    >
                                        <FormControl sx={{ width: '47%', mr: 2, }}>
                                            <InputLabel id="demo-simple-select-label">Document Type</InputLabel>
                                            <Select
                                                id="document-type"
                                                label="document-type"
                                                value={documentType2}
                                                onChange={(event: SelectChangeEvent) => {
                                                    setDocumentType2(event.target.value);
                                                }}
                                            >
                                                <MenuItem value={'CC'}>CC</MenuItem>
                                                <MenuItem value={'TI'}>TI</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <TextField
                                            sx={{
                                                width: '47%'
                                            }}
                                            label="Document Number"
                                            type="number"
                                            value={documentNumber2}
                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                setDocumentNumber2(event.target.value);
                                            }}
                                        />
                                    </Box>

                                    <FormControl sx={{ width: '47%', mb: 2 }}>
                                        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                        <Select
                                            id="gender"
                                            label="Gender"
                                        >
                                            <MenuItem value={10}>Male</MenuItem>
                                            <MenuItem value={20}>Female</MenuItem>
                                            <MenuItem value={30}>Other</MenuItem>
                                        </Select>
                                    </FormControl>

                                    <TextField
                                        label="Email"
                                        sx={{
                                            width: '48%',
                                            mb: 2
                                        }}
                                        value={email2}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setEmail2(event.target.value);
                                        }}
                                    />
                                    <TextField
                                        label="Phone"
                                        sx={{
                                            width: '48%',
                                            mb: 2
                                        }}
                                    />
                                </>
                            )}
                        </Box>

                        <Box
                            sx={{
                                mt: 3,
                                display: 'flex',
                                flexDirection: 'column',
                                border: '1px solid #FEB100',
                                borderRadius: 1,
                                pl: 2,
                                width: '100%'
                            }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    mt: 2,
                                    mb: 1
                                }}
                            >
                                Emergency Contact
                            </Typography>

                            <Box
                                sx={{
                                    display: 'flex',
                                    mb: 2
                                }}
                            >
                                <TextField
                                    label="Email"
                                    sx={{
                                        width: '48%',
                                        mr: 2
                                    }}
                                    value={emailEmergency}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setEmailEmergency(event.target.value);
                                    }}
                                />
                                <TextField
                                    label="Phone"
                                    sx={{
                                        width: '48%'
                                    }}
                                    value={phoneEmergency}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setPhoneEmergency(event.target.value);
                                    }}
                                />
                            </Box>

                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                pl: 2,
                                width: '100%',
                            }}
                        >
                            <Button
                                variant="contained"
                                sx={{
                                    mt: 4,
                                }}
                                onClick={toCompletedReserve}
                            >
                                Finish Reservation
                            </Button>
                        </Box>

                    </Box>

                </Box>

            </Grid>
        </>
    )
}
