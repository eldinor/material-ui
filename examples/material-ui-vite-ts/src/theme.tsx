import { createTheme } from '@mui/material/styles';
import { red, blue } from '@mui/material/colors';
import { Bluetooth } from '@mui/icons-material';

// A custom theme for this app
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: blue[900],
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
