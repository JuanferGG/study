import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const Root = () => {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          ...(mode === "light"
            ? {
                primary: {
                  main: "#ffffff",
                },
                secondary: {
                  main: "#9c27b0",
                },
                text: {
                  hint: "#000000",
                  disabled: "rgba(0,0,0,0.38)",
                  secondary: "rgba(16,16,16,0.6)",
                },
                divider: "rgba(2,0,0,0.12)",
              }
            : {
                primary: {
                  main: "#ffffff",
                },
                secondary: {
                  main: "#9c27b0",
                },
                text: {
                  hint: "#ffffff",
                  disabled: "rgba(255,255,255,0.5)",
                  secondary: "rgba(255,255,255,0.7)",
                },
                divider: "rgba(255,255,255,0.12)",
              }),
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                transition: "background-color 0.6s ease, color 0.3s ease",
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
