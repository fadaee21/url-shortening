import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import { ShortlyIcon } from '../assets/svg';

const pages = ['features', 'Pricing', 'resources'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar position="static" color={"whitePalette"} elevation={0} >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ flexDirection: { xs: 'row-reverse', md: 'row' }, justifyContent: 'space-between' }}>
          <ShortlyIcon sx={{ display: { xs: 'none', md: 'flex' }, width: '7rem', height: '7rem' }} />
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
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
                backgroundImage: "linear-gradient(180deg, hsla(233, 26%, 24%, 0.7) 0%, hsla(0, 0%, 100%, 0) 100%)",
              }}
              MenuListProps={{
                sx: {
                  padding: '2rem 0'
                }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                  <Button sx={{ color: '#fff', fontSize: '1.2rem' }} >{page}</Button>
                </MenuItem>
              ))}
              <MenuItem onClick={handleCloseNavMenu}
                sx={{ m: '1.5rem 0' }}
              >
                <Stack spacing={2}  >
                  <Divider sx={{ width: '18rem', borderColor: '#ffffff30' }} />
                  <Button sx={{ color: '#fff', fontSize: '1.2rem' }}  >login</Button>
                  <Button variant='cyan' sx={{ fontSize: '1.2rem' }} >sign up</Button>
                </Stack>
              </MenuItem>
            </Menu>
          </Box>
          <ShortlyIcon sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: '0', width: '7rem', height: '7rem' }} />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 5 }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ m: 1, display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 0 }}  >
            <Button sx={{ mx: '1rem' }} >login</Button>
            <Button variant='cyan' >sign up</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
};
export default ResponsiveAppBar;
