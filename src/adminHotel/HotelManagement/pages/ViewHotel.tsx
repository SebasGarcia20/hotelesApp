import { Autocomplete, Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, IconButton, Switch, TextField, Typography } from "@mui/material"
import { ManagementLayout } from "../../../layout/ManagementLayout"
import { ModalAddRoom } from "../components/ModalAddRoom"
import React, { useEffect, useState } from "react"
import { TableRooms } from "../components/TableRooms"
import { CardHotelInfoProps, Room, Services, places } from "../../../config/interfaces"
import { useNavigate, useParams } from "react-router-dom"

export const ViewHotel = () => {

    const params = useParams()
    const navigate = useNavigate()
    const hotelsArray = JSON.parse(localStorage.getItem('hotels') as string) || []
    const [activeHotel, setActiveHotel] = useState(true)
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [description, setDescription] = useState('')
    const [city, setCity] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [services, setServices] = useState<Services>([])
    const [pool, setPool] = useState(false);
    const [parking, setParking] = useState(false);
    const [restaurant, setRestaurant] = useState(false);
    const [gym, setGym] = useState(false);
    const [rooms, setRooms] = useState<Room[]>([])
    const [roomToEdit, setRoomToEdit] = useState<Room>()

    useEffect(() => {
        if (params) {
            if (hotelsArray) {
                const hotelSelected: CardHotelInfoProps = hotelsArray.find((hotel: CardHotelInfoProps) => hotel.id === params.id)
                if (hotelSelected) {
                    setRooms(hotelSelected.rooms);
                    setName(hotelSelected.name);
                    setAddress(hotelSelected.address);
                    setDescription(hotelSelected.description);
                    setCity(hotelSelected.city);
                    setEmail(hotelSelected.email);
                    setPhone(hotelSelected.phone.toString());
                    setActiveHotel(hotelSelected.active)
                    setServices(hotelSelected.services)
                    hotelSelected.services.map(service => {
                        if (service === "Gym") {
                            setGym(true)
                        } else if (service === "Parking") {
                            setParking(true)
                        } else if (service === "Pool") {
                            setPool(true)
                        } else if (service === "Restaurant") {
                            setRestaurant(true)
                        }
                    })
                }
            }
        }
    }, [params])

    console.log(params)

    const saveHotel = () => {
        if (params.id === 'new') {
            if (name && address && city) {
                let id = Math.floor(Math.random() * (100 - 1) + 1).toString();
                hotelsArray.push(
                    {
                        id: id,
                        username: localStorage.getItem('username'),
                        active: activeHotel,
                        name: name,
                        address: address,
                        description: description,
                        city: city,
                        phone: phone,
                        email: email,
                        services: services,
                        rooms: rooms
                    }
                )
                localStorage.setItem('hotels', JSON.stringify(hotelsArray))
                navigate('/hotel/management')
            } else {
                alert('Fill at least name, address and city fields')
            }
        } else {
            if (name && address && city) {
                const hotelAux: CardHotelInfoProps[] = hotelsArray.filter((hotel: CardHotelInfoProps) => hotel.id !== params.id)
                hotelAux.push(
                    {
                        id: params.id as string,
                        username: localStorage.getItem('username') as string,
                        active: activeHotel,
                        name: name,
                        address: address,
                        description: description,
                        city: city,
                        phone: phone,
                        email: email,
                        services: services,
                        rooms: rooms
                    }
                )
                localStorage.setItem('hotels', JSON.stringify(hotelAux))
                navigate('/hotel/management')
            } else {
                alert('Fill at least name, address and city fields')
            }
        }
    }

    const onOpen = () => {
        setOpen(true)
    }

    const onClose = () => {
        setOpen(false);
        setRoomToEdit(undefined)
    }

    console.log(activeHotel)

    return (
        <ManagementLayout>
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <Typography
                        component='p'
                        variant="h1"

                    >
                        Create a New Hotel
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'baseline',
                            ml: 5
                        }}
                    >

                        <Switch
                            checked={activeHotel}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setActiveHotel(event.target.checked);
                            }}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                        <Typography
                            variant="h4"
                        >
                            {activeHotel ? 'Deactivate Hotel' : 'Activate Hotel'}
                        </Typography>
                    </Box>

                </Box>
                <Typography
                    component='p'

                >
                    Fill in the details to create and publish your hotel for reservations. Ensure accurate information for a welcoming and bookable space
                </Typography>
            </Box>

            <Grid
                sx={{
                    pt: 3
                }}
            >
                <Grid item>
                    <Typography
                        variant="h4"
                    >
                        Hotel Information
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            mt: 1,
                            mb: 2
                        }}
                    >
                        <TextField
                            name="name"
                            label="Name"
                            sx={{
                                mr: 2
                            }}
                            value={name}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setName(event.target.value);
                            }}
                        />
                        <TextField
                            name="address"
                            label="Address"
                            sx={{
                                mr: 2
                            }}
                            value={address}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setAddress(event.target.value);
                            }}
                        />
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={places}
                            sx={{ width: 235 }}
                            value={city}
                            onChange={(event: any, newValue: string | null) => {
                                setCity(newValue as string);
                            }}
                            renderInput={(params) => <TextField {...params} label="City " />}
                        />
                    </Box>
                    <TextField
                        fullWidth
                        name="description"
                        label="Description"
                        value={description}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setDescription(event.target.value);
                        }}
                    />
                    <Typography
                        variant="h4"
                        sx={{
                            mt: 2,
                            mb: 1
                        }}
                    >
                        Contact Details
                    </Typography>
                    <TextField
                        name="contact"
                        label="Phone Number"
                        sx={{
                            mr: 2,
                            mb: 2
                        }}
                        value={phone}
                        type="number"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setPhone(event.target.value);
                        }}
                    />
                    <TextField
                        name="email"
                        label="email"
                        type="email"
                        value={email}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setEmail(event.target.value);
                        }}
                    />
                    <Typography
                        variant="h4"
                    >
                        Services and Features
                    </Typography>
                    <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={pool}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setPool(event.target.checked);
                                        if (event.target.checked) {
                                            services.push("Pool")
                                        } else {
                                            let array = services.filter(item => item !== "Pool");
                                            setServices(array as Services)
                                        }
                                    }}
                                />}
                            label="Pool"

                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={gym}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setGym(event.target.checked);
                                        if (event.target.checked) {
                                            services.push("Gym")
                                        } else {
                                            let array = services.filter(item => item !== "Gym");
                                            setServices(array as Services)
                                        }
                                    }}
                                />}
                            label="Gym"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={restaurant}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setRestaurant(event.target.checked);
                                        if (event.target.checked) {
                                            services.push("Restaurant")
                                        } else {
                                            let array = services.filter(item => item !== "Restaurant");
                                            setServices(array as Services)
                                        }
                                    }}
                                />}
                            label="Restaurant"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={parking}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setParking(event.target.checked);
                                        if (event.target.checked) {
                                            services.push("Parking")
                                        } else {
                                            let array = services.filter(item => item !== "Parking");
                                            setServices(array as Services)
                                        }
                                    }}
                                />}
                            label="Parking"
                        />
                    </FormGroup>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mt: 2
                    }}>
                        <Typography
                            variant="h3"
                        >
                            Room Configuration
                        </Typography>
                        <Button
                            variant="contained"
                            size="small"
                            onClick={onOpen}
                        >
                            + Add Room
                        </Button>
                    </Box>
                </Grid>
                <Typography
                    sx={{
                        mt: 2
                    }}
                    variant="h5"
                >
                   Remember to activate your rooms to make them public and visible to the audience on the platform.
                </Typography>
                <Grid sx={{ mt: 1 }}>
                    <TableRooms
                        rooms={rooms}
                        onOpen={onOpen}
                        setRoommToEdit={setRoomToEdit}
                    />
                </Grid>
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                        float: "right",
                        mt: 2
                    }}
                    onClick={saveHotel}
                >
                    Save Hotel
                </Button>
            </Grid>
            <ModalAddRoom
                rooms={rooms}
                setRooms={setRooms}
                onClose={onClose}
                open={open}
                roomToEdit={roomToEdit as Room}
            />
        </ManagementLayout>
    )
}
