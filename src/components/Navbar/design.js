import React from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
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
}) {
  const {
    drawerDiv,
    typography,
    img,
    box,
    iconButton,
    navbarTypography,
    navbarBox,
  } = styles;
  const location = useLocation();

  const isSelected = (pagePath) => {
    return location.pathname === pagePath;
  };

  const drawer = (
    <div sx={drawerDiv}>
      <Link to="/" onClick={handleDrawerToggle}>
        <Typography variant="h6" noWrap sx={typography}>
          <img
            src={logo}
            alt="Logo"
            style={{ width: "auto", height: "70px" }}
          />
        </Typography>
      </Link>
      <Divider sx={{ my: 2 }} />
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
    </div>
  );
  return (
    <>
      {/* Mobile Drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
      {/* App Bar */}
      <AppBar position="static">
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
              <Typography
                variant="h6"
                noWrap
                component={Link}
                to="/"
                sx={navbarTypography}
              >
                <img
                  src={logo}
                  alt="Logo"
                  style={{ width: "auto", height: "70px" }}
                />
              </Typography>
            )}

            {/* Conditionally render navigation items based on isDrawer */}
            {isDrawer ? null : (
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
            )}
            <Box sx={{ marginLeft: "auto" }}>
              {/* Add Logout button to the app bar */}
              <Button onClick={handleLogout} color="inherit">
                Logout
              </Button>
            </Box>
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
