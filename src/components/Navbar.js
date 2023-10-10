import React, { useState, useEffect } from "react";
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
import logo from "../logo.svg";

const pages = [
  { label: "Home", path: "/" },
  { label: "Books", path: "/books" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDrawer, setIsDrawer] = useState(false);
  const location = useLocation();
  const [firstName, setFirstName] = useState("");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isSelected = (pagePath) => {
    return location.pathname === pagePath;
  };

  const updateIsDrawer = () => {
    setIsDrawer(window.innerWidth < 480);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  useEffect(() => {
    window.addEventListener("resize", updateIsDrawer);
    updateIsDrawer();
    return () => {
      window.removeEventListener("resize", updateIsDrawer);
    };
  }, []);
  useEffect(() => {
    // Get the first name from local storage
    const storedUserJSON = localStorage.getItem("user");
    if (storedUserJSON) {
      // Parse the JSON string into a JavaScript object
      const storedUser = JSON.parse(storedUserJSON);
      setFirstName(storedUser);
    }
  }, []);

  const drawer = (
    <div
      sx={{
        backgroundColor: "inherit",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Link to="/" onClick={handleDrawerToggle}>
        <Typography
          variant="h6"
          noWrap
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
            textAlign: "center",
            mt: 2,
          }}
        >
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
          position: "absolute",
          bottom: "0",
          left: "0",
        }}
      >
        <Box sx={{ marginTop: "auto" }}>
          <Button onClick={handleLogout} fullWidth>
            Logout
          </Button>
        </Box>
        <Tooltip title={firstName ? firstName.name : ""}>
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
                sx={{
                  display: { xs: "block", md: "none" },
                  marginRight: "10px",
                }}
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
                sx={{
                  display: { xs: "none", md: "flex" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
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
              <Box
                sx={{ display: "flex", flexGrow: 1, justifyContent: "center" }}
              >
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
              <Tooltip title={firstName ? firstName.name : ""}>
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

export default Navbar;
