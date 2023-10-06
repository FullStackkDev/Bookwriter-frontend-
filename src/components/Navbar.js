import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const pages = [
  { label: 'Home', path: '/' },
  { label: 'Books', path: '/books' },
  { label: 'Sign In', path: '/signin' },
  { label: 'Sign Up', path: '/signup' },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isSelected = (pagePath) => {
    return location.pathname === pagePath;
  };

  const drawer = (
    <div>
      <List>
        {pages.map((page) => (
          <ListItem key={page.label} disablePadding>
            <ListItemButton
              component={Link}
              to={page.path}
              onClick={handleDrawerToggle}
              sx={{
                textAlign: 'center',
                textDecoration: isSelected(page.path) ? 'underline' : 'none',
              }}
            >
              <ListItemText primary={page.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        {drawer}
      </Drawer>
      
      {/* App Bar */}
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                display: { xs: 'none', md: 'flex' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            {/* Conditionally render navigation items based on mobileOpen */}
            {mobileOpen ? null : (
              <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
                {pages.map((page) => (
                  <Button
                    key={page.label}
                    component={Link}
                    to={page.path}
                    sx={{
                      color: 'white',
                      textDecoration: isSelected(page.path) ? 'underline' : 'none',
                    }}
                  >
                    {page.label}
                  </Button>
                ))}
              </Box>
            )}

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Profile">
                <IconButton sx={{ p: 0 }}>
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
