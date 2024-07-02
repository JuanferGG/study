import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ContainerMui } from "./components/ContainerMui";
import { TypographyMui } from "./components/TypographyMui";
import { BoxMui } from "./components/BoxMui";
import { ButtonMui } from "./components/ButtonMui";

import { GridMui } from "./components/GridMui";
import CardExample from "./components/CardExample";
import { BlueCard } from "./components/BlueCard";

import { Navbar } from "./components/NavBar/Navbar";

import { Container, createTheme, ThemeProvider, Typography } from "@mui/material";
import { green, purple } from '@mui/material/colors';
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Contact";
import { About } from "./Pages/About";

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
        {/* <Typography variant="h2" >App</Typography> */}
        {/* <ButtonMui /> */}
        {/* <ContainerMui /> */}
        {/* <TypographyMui /> */}
        {/* <BoxMui /> */}
        {/* <GridMui/> */}
        {/* <CardExample /> */}
        {/* <BlueCard /> */}
        <Navbar />
        <Container maxWidth="xl" sx={{ mt: "5em" }} >
          <Routes>
            <Route path="/" element={<Home/> } />
            <Route path="/Contact" element={<Contact /> } />
            <Route path="/About" element={<About  /> } />
          </Routes>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
