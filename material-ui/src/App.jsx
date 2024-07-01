import { ButtonMui } from "./components/ButtonMui";

import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ContainerMui } from "./components/ContainerMui";
import { TypographyMui } from "./components/TypographyMui";
import { BoxMui } from "./components/BoxMui";

import { createTheme, ThemeProvider } from "@mui/material";
import { green, purple } from '@mui/material/colors';
import { GridMui } from "./components/GridMui";

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: "#37f56a",
    },
    secondary: {
      main: green[500],
    },
  },
})

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <h1>App</h1>
        {/* <ButtonMui /> */}
        {/* <ContainerMui /> */}
        {/* <TypographyMui /> */}
        {/* <BoxMui /> */}
        {/* <GridMui/> */}
      </ThemeProvider>
    </>
  );
}

export default App;
