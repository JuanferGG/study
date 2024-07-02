import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavDrawer } from "./NavDrawer";
import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";

import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            onClick={() => setOpen(!open)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { sm: 'none', xs: 'inline-flex' }}}
          >
            <MenuIcon color="inherit" />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          {routes.map((route) => {
            return (
              <Button
                key={route.name}
                color="inherit"
                variant="text"
                LinkComponent={NavLink}
                to={route.path}
                sx={{
                  transition: "all .7s",
                  display: { sm: "block", xs: "none" },
                }}
              >
                {route.name}
              </Button>
            );
          })}
        </Toolbar>
      </AppBar>

      <Drawer open={open} anchor={"left"} onClose={() => setOpen(!open)} sx={{ display: { sm: 'none', xs: 'inline-flex' }}}>
        <NavDrawer routes={routes}  setOpen={setOpen}/>
      </Drawer>
    </>
  );
};
