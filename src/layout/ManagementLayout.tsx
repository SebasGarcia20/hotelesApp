import { Box, IconButton } from "@mui/material"
import { SideBar } from "../ui/components/SideBar/SideBar"
import { HotelManagementLayoutProps } from "../config/interfaces"
import { ArrowBack } from "@mui/icons-material"
import { useLocation, useNavigate } from "react-router-dom"

export const ManagementLayout = ({ children }: HotelManagementLayoutProps) => {

    const navigate = useNavigate()
    const location = useLocation()

    const toPreviousPage = () => {
        navigate(-1)
    }

    return (
        <>
            <SideBar drawerWidth={250} />
            {location && (location.pathname !== '/hotel/booking' && location.pathname !== '/hotel/management') &&
                <Box
                    sx={{
                        pt: 2,
                        pl: 35
                    }}
                >

                    <IconButton
                        onClick={toPreviousPage}
                        sx={{
                            backgroundColor: '#FEB100',
                            color: 'white'
                        }}
                        size="small"
                    >
                        <ArrowBack />
                    </IconButton>
                </Box>
            }
            <Box
                sx={{
                    p: 2,
                    pl: 35
                }}
            >
                {children}
            </Box>
        </>
    )
}