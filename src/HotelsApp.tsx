import { ThemeProvider } from "@mui/material"
import { AppRouter } from "./router/AppRouter"
import { theme } from "./theme"

export const HotelsApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  )
}
