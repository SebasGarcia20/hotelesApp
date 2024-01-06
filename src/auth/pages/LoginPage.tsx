import { Grid, Paper, Typography } from "@mui/material"
import Banner from "../components/Banner"
import { CardLogin } from "../components/CardLogin"

export const LoginPage = () => {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Banner />
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
        }}
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
      >
        <CardLogin/>
      </Grid>
    </Grid>
  )
}
