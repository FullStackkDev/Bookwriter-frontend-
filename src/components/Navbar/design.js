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
  const { drawerDiv, box, iconButton, navbarBox } = styles;

  const drawer = (
    <Box sx={drawerDiv}>
      <Box>
        <Link to="/" onClick={handleDrawerToggle}>
          <img
            src={logo}
            alt="Logo"
            style={{ width: "auto", height: "70px" }}
          />
        </Link>
        <Divider sx={{ my: 1 }} />
        <List>
          {pages.map((page) => (
            <ListItem key={page.label} disablePadding>
              <ListItemButton
                component={Link}
                to={page.path}
                onClick={handleDrawerToggle}
                sx={{
                  textAlign: "center",
                  textDecoration: isSelected(page.path) ? "underline" : "none",
                }}
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
        <Box sx={{ marginTop: "auto" }}>
          <Button onClick={handleLogout} fullWidth>
            Logout
          </Button>
        </Box>
        <Tooltip title={`${user.first_name} ${user.last_name}`}>
          <IconButton sx={{ p: 3 }}>
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
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {isDrawer && (
              <IconButton
                color="inherit"
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
              <img
                src={logo}
                alt="Logo"
                style={{ width: "auto", height: "70px" }}
              />
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
                      sx={{
                        color: "white",
                        textDecoration: isSelected(page.path)
                          ? "underline"
                          : "none",
                      }}
                    >
                      {page.label}
                    </Button>
                  ))}
                </Box>
                <Box sx={{ marginLeft: "auto" }}>
                  {/* Add Logout button to the app bar */}
                  <Button onClick={handleLogout} color="inherit">
                    Logout
                  </Button>
                </Box>
              </>
            )}
            <Box sx={{ marginLeft: "auto" }}>
              <Tooltip title={`${user.first_name} ${user.last_name}`}>
                <IconButton sx={{ p: 3 }}>
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
