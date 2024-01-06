import { Button, Card, CardContent, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const CardLogin = () => {

  const navigate = useNavigate()
  const [username, setUsername] = useState('')

  const toManagementPage = () => {
    navigate('/hotel/management')
    localStorage.setItem('username', username)
  }

  const toHome = () => {
    navigate('/')
  }

  return (
    <Card
      sx={{
        maxWidth: '90%',
        width: '500px',
        mb: 2,
        mx: 4,
        py: 2,
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography
        variant="h3"
      >
        Sign in
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mt: 2
        }}
      >
        Enter your name to embark on the journey of creating and managing your hotels
      </Typography>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <TextField
          fullWidth
          label='user name'
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setUsername(event.target.value);
          }}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 4 }}
          onClick={toManagementPage}

        >
          Log in
        </Button>
        <Typography
          variant="h4"
          sx={{
            mt: 2
          }}
        >
          Or
        </Typography>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          sx={{ mt: 3 }}
          onClick={toHome}

        >
          Back to see hotels to book
        </Button>
      </CardContent>
    </Card>
  )
}
