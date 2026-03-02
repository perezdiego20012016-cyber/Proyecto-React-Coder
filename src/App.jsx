import AppRouter from './router/AppRouter.jsx';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light', // cambia a 'dark' si quieres modo oscuro
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Contenedor global con padding */}
      <Box sx={{ p: 3 }}>
        <AppRouter />
      </Box>

    </ThemeProvider>
  );
}

export default App;































