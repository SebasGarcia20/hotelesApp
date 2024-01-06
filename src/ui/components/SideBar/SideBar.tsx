import { Box, Button, Drawer, Grid, IconButton, List, Typography } from "@mui/material"
import { items } from "./routes"
import NavItem from "../NavItem"
import { useNavigate } from "react-router-dom"

interface SideBarProps {
    drawerWidth: number
}

export const SideBar = ({ drawerWidth }: SideBarProps) => {

    const navigate = useNavigate()

    const toAuth = () => {
        navigate('/auth')
    }

    return (
        <Box
            component='nav'
            sx={{
                width: {
                    sm: drawerWidth
                },
                flexShrink: { sm: 0 }
            }}
        >
            <Drawer
                variant="permanent"
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth
                    }
                }}
            >
                <>
                    <Grid
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            height: "100vh",
                        }}
                    >
                        <section>
                            <Box
                                sx={{
                                    background: "#000102",
                                    height: 79,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderBottom: '1px solid white'
                                }}
                            >
                                <IconButton
                                    sx={{
                                        width: "80%",
                                        color: 'white'
                                    }}
                                >
                                    <Typography
                                        variant="h1"
                                    >
                                        Hotels App
                                    </Typography>
                                </IconButton>
                            </Box>
                        </section>
                        <section>
                            <Grid
                                sx={{
                                    height: `calc( 100vh - ${80}px)`,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    p: 2,
                                    backgroundColor: 'black'
                                }}
                            >
                                <List
                                    sx={{ width: "100%" }}
                                    component="nav"
                                    aria-labelledby="nested-list-subheader"
                                >
                                    {
                                        items.map((item) => (
                                            <NavItem
                                                icon={item.icon}
                                                href={item.href}
                                                title={item.title}
                                                active={location.pathname.includes(item.href)}
                                                child={item.child}
                                                key={item.title}
                                            />
                                        ))
                                    }
                                </List>
                                <Box>
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            onClick={toAuth}
                                        >
                                            Log Out
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid>
                        </section>
                    </Grid>
                </>
            </Drawer>
        </Box>
    )
}
