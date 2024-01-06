import { CardHotelInfoProps } from "../config/interfaces";

export const hotels: CardHotelInfoProps[] = [
    {
        id: '15',
        active: true,
        username: 'Sebastian',
        name: 'Hotel Ipiales 2',
        address: 'Calle 123 # 123 -123',
        description: 'A good Hotel near to great places',
        city: 'Medellin',
        phone: '31231233',
        email: 'garciaflorez.sebastian@gmail.com',
        services: [
            'Pool',
            'Gym',
            'Restaurant',
            'Parking'
        ],
        rooms: [
            {
                id: '2',
                type: 'single',
                active: true,
                baseCost: 100000,
                taxes: 10000,
                description: 'room with terrace',
            },
            {
                id: '3',
                type: 'double',
                active: true,
                baseCost: 150000,
                taxes: 10000,
                description: 'room with terrace',
            },
        ]
    },
    {
        id: '14',
        active: true,
        username: 'Juan',
        name: 'Hotel Bucarmanga',
        address: 'Calle 39 # 23 -13',
        description: 'A good Hotel near to great places',
        city: 'Bucaramanga',
        phone: '31231233',
        email: 'garciaflorez.sebastian@gmail.com',
        services: [
            'Pool',
            'Gym',
        ],
        rooms: [
            {
                id: '5',
                type: 'single',
                baseCost: 105000,
                active: true,
                taxes: 10000,
                description: 'room with terrace',
            },
            {
                id: '6',
                type: 'double',
                baseCost: 120000,
                active: true,
                taxes: 10000,
                description: 'room with terrace',
            },
            {
                id: '7',
                type: 'suite',
                baseCost: 250000,
                active: true,
                taxes: 24000,
                description: 'room with terrace',
            },
            {
                id: '8',
                type: 'double',
                baseCost: 200000,
                active: true,
                taxes: 15000,
                description: 'room with terrace',
            },
        ]
    }
]