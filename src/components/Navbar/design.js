import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import logo from "../../logo.svg";
import { styles } from "./style";

const pages = [
  { label: "Home", path: "/" },
  { label: "Books", path: "/books" },
];

function Design({
  mobileOpen,
  isDrawer,
  handleDrawerToggle,
  user,
  handleLogout,
  isSelected,
}) {
  const {
    drawerDiv,
    box,
    iconButton,
    navbarBox,
    img,
    listItemButton,
    boxLogout,
    avatarIconButton,
    appBar,
    drawerButtons,
    boxOfLeftMargin,
    logoutButton,
    divider,
  } = styles;

  const drawer = (
    <Box sx={drawerDiv}>
      <Box>
        <Link to="/" onClick={handleDrawerToggle}>
          <img src={logo} alt="Logo" style={img} />
        </Link>
        <Divider sx={divider} />
        <List>
          {pages.map((page) => (
            <ListItem key={page.label} disablePadding>
              <ListItemButton
                component={Link}
                to={page.path}
                onClick={handleDrawerToggle}
                sx={listItemButton(isSelected, page.path)}
              >
                <ListItemText primary={page.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box
        sx={{
          box,
        }}
      >
        <Box sx={boxLogout}>
          <Button onClick={handleLogout} fullWidth>
            Logout
          </Button>
        </Box>
        <Tooltip title={`${user.first_name} ${user.last_name}`}>
          <IconButton sx={avatarIconButton}>
            <Avatar alt="Remy Sharp" src="" />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
  return (
    <>
      {/* Mobile Drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
      {/* App Bar */}
      <AppBar position="sticky" sx={appBar}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {isDrawer && (
              <IconButton
                color="black"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={iconButton}
              >
                <MenuIcon />
              </IconButton>
            )}
            {/* Conditionally render the logo */}
            {!isDrawer && (
              <Link to="/">
                <img src={logo} alt="Logo" style={img} />
              </Link>
            )}

            {/* Conditionally render navigation items based on isDrawer */}
            {isDrawer ? null : (
              <>
                <Box sx={navbarBox}>
                  {pages.map((page) => (
                    <Button
                      key={page.label}
                      component={Link}
                      to={page.path}
                      sx={drawerButtons(isSelected, page.path)}
                    >
                      {page.label}
                    </Button>
                  ))}
                </Box>
                <Box sx={boxOfLeftMargin}>
                  {/* Add Logout button to the app bar */}
                  <Button onClick={handleLogout} sx={logoutButton}>
                    Logout
                  </Button>
                </Box>
              </>
            )}
            <Box sx={boxOfLeftMargin}>
              <Tooltip title={`${user.first_name} ${user.last_name}`}>
                <IconButton sx={avatarIconButton}>
                  <Avatar alt="Remy Sharp" src="" />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Design;
