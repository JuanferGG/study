import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

// Icons
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import MouseIcon from "@mui/icons-material/Mouse";
import DeleteIcon from "@mui/icons-material/Delete";

import { NavLink } from 'react-router-dom'

export const NavDrawer = ({ routes, setOpen }) => {
  return (
    <Box sx={{ width: 300, bgcolor: "primary.main" }}>
      <nav>
        <List>
          {
            routes.map((route) => {
              return (
                <ListItem key={route.name} disablePadding >
                  <ListItemButton
                    LinkComponent={NavLink}
                    to={route.path}
                  >
                    <ListItemText
                      variant="body1"
                      primary={route.name}
                      onClick={() => setOpen(false)}
                    />
                  </ListItemButton>
                </ListItem>
              )
            })
          }
          <Divider />
          <ListItem disablePadding >
            <ListItemButton
              LinkComponent={NavLink}
              to="https://mui.com/material-ui/material-icons/"
              target="_blank"
              onClick={() => setOpen(false)}
            >
              <MouseIcon />
              <ListItemText
                variant="body1"
                sx={{ ml: 1 }}
                primary="Icons Click Me!"
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <DeleteIcon /> <ListItemText primary="Trash" sx={{ ml: 1 }} onClick={ () => setOpen(false) } />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};
