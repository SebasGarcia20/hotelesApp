import { Dayjs } from "dayjs";
import { ReactNode } from "react"

export interface ItemSidebar {
  href: string;
  icon: any;
  title: string;
  active?: boolean;
  child?: ChildreItemSidebar[];
}

export interface ChildreItemSidebar {
  href: string;
  title: string;
}

export interface HotelManagementLayoutProps {
  children: ReactNode
}

export interface ModalAddRoomProps {
  open: boolean;
  onClose: () => void;
  rooms: Room[];
  roomToEdit: Room;
  setRooms: any;
}

export type Services = ['Pool'?, 'Gym'?, 'Restaurant'?, 'Parking'?];

export type RoomType = 'single' | 'double' | 'suite';

export interface Room {
  id: string;
  active: boolean;
  type: RoomType;
  baseCost: number;
  taxes: number;
  description: string;
}

export interface CardHotelInfoProps {
  id: string;
  active: boolean;
  name: string;
  city: string;
  address: string;
  description: string;
  phone: string;
  email: string;
  services: Services;
  rooms: Room[];
  username: string;
}

export interface TableAvailabilityProps {
  idHotel: string;
  rooms: Room[];
}

export interface SearchFilters {
  city: string;
  checkIn: Dayjs;
  checkOut: Dayjs;
  guests: string;
}

export interface CardHotelManagementProps {
  idHotel: string;
  name: string;
}

export const places = ['Bucaramanga', 'Medellin', 'Cali', 'Barranquilla'];

export interface TableRoomProps {
  onOpen: () => void;
  rooms: Room[];
  setRoommToEdit: any;
}

export interface Booking {
  id: string;
  hotelId: string;
  idRoom: string;
  firstName: string;
  lastName: string;
  documentNumber: string;
  documentType: number;
  email: string;
  firstName2?: string;
  lastName2?: string;
  documentNumber2?: string;
  documentType2?: number;
  email2?: string;
  emailEmergency: string;
  phoneEmergency: string;
  checkIn: string;
  checkOut: string;
}

export interface TableBookingProps {
  bookingsByUser: Booking[];
}
