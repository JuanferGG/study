import { useContext } from "react";
import { ColorModeContext } from "../../main";
import { AppBar, Button, Toolbar, Typography, useTheme } from "@mui/material";

//? Icons
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export const Header = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <AppBar position="fixed" sx={{ transition: "all .6s" }}>
      <Toolbar>
        <Typography variant="h5" fontWeight="bold" sx={{ flexGrow: 1 }}>
          Where in the world
        </Typography>
        <Button sx={{ color: "text.hint" }} onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "light" ? (
            <>
              <DarkModeIcon /> Dark mode
            </>
          ) : (
            <>
              <WbSunnyIcon />
              Light mode
            </>
          )}
        </Button>
      </Toolbar>
    </AppBar>
  );
};
