import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../Navbar/Logo.png';
import {Link} from 'react-router-dom';

const pages = ['Menu', 'Gallery', 'Reserve'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <Container maxWidth="xl">
    <Toolbar disableGutters>
    <a href='/'><img src={Logo} alt='The Krusty Krabs'/></a>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 500,
          letterSpacing: '.3rem',
          textDecoration: 'none',
        }}
      >
      </Typography>

      <Box sx={{ color:'black', flexGrow: 1, marginLeft:'55%',display: { xs: 'flex', md: 'none' }, fontFamily:'Slackey' }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                  <Link style={{textDecoration:'none', color:'black'}} to ={`/${page}`}>{page}</Link>
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Box sx={{flexGrow: 1, marginLeft:'25%', marginTop:5,display: { xs: 'none', md: 'flex' }}}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block', fontFamily:'Slackey', fontSize:24}}
          >
            <Link style={{textDecoration:'none', color:'black'}} to ={`/${page}`}>{page}</Link>
          </Button>
        ))}
      </Box>
    </Toolbar>
  </Container>
  );
};
export default Navbar;