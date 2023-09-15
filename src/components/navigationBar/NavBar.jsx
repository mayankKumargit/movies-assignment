// NavigationBar.js
// NavigationBar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function NavigationBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={window.scroll(0,0)}>
          Movie App
        </Typography>

        {isMobile ? (
          <>
            <IconButton onClick={handleMenuOpen} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem component={Link} to="/movies" onClick={handleMenuClose}>Movies</MenuItem>
              <MenuItem component={Link} to="/favorites" onClick={handleMenuClose}>Favorites</MenuItem>
              <MenuItem component={Link} to="/watchlist" onClick={handleMenuClose}>Watchlist</MenuItem>
              <MenuItem component={Link} to="/logout" onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Button component={Link} to="/movies" color="inherit">Movies</Button>
            <Button component={Link} to="/favorites" color="inherit">Favorites</Button>
            <Button component={Link} to="/watchlist" color="inherit">Watchlist</Button>
            <Button component={Link} to="/logout" color="inherit">Logout</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;

