import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import HotelImage from '../../assets/banner.jpg'

const Banner = () => (
    <>
        <CssBaseline />
        <Grid
            item
            xs={12}
            sm={4}
            md={7}
            sx={{
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <img src={HotelImage} alt="Hotel Image" style={{height: '100vh', width: '100%'}}/>
        </Grid>
    </>
)

export default Banner;
