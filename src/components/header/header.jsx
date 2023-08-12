import AccountCircle from "@mui/icons-material/AccountCircle";
import DraftsIcon from "@mui/icons-material/Drafts";
import InboxIcon from "@mui/icons-material/Inbox";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import "./header.css";

const profileUrl =
  "https://instagram.fmaa3-2.fna.fbcdn.net/v/t51.2885-15/241314267_265207168773601_8341810399384943062_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fmaa3-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=-PsPkcbtFHUAX-Tz--S&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjY1NjYyMDQ5NTA1MDc0NDQyNA%3D%3D.2-ccb7-5&oh=00_AfCkKCmOtuPBVY78ErV1c9xK5txIP2KbfyvbjPSnkNULVQ&oe=64DC3F2E&_nc_sid=b41fef";

export const Header = ({ menuOpen, updateToggleMenu }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setOpen((open) => !open);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          onClick={updateToggleMenu}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Vinodh Sample Project
        </Typography>
        {
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleClick}
              className="!mr-8"
            >
              <AccountCircle />
            </IconButton>

            <Popper open={open} anchorEl={anchorEl}>
              <Paper className="p-2" elevation={3}>
                <div className="flex justify-between items-center gap-2 py-2 px-5 mb-5">
                  <Avatar alt="Vinodh Kumar" src={profileUrl} />
                  <div className="font-bold">Vinodh Kumar</div>
                </div>
                <Divider />
                <div className="mt-4">
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Drafts" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </div>
              </Paper>
            </Popper>
          </div>
        }
      </Toolbar>
    </AppBar>
  );
};
