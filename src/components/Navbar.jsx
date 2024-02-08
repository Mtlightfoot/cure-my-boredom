import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import { Link } from 'react-router-dom';

const pages = ['Saved Activities'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{
            backgroundColor: "#0661A8",
        }}>
            <Container maxWidth="xl">
                <Toolbar>
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '0.5rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            '&:hover': {
                                color: '#ff9800',
                                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                            },
                              
                        }}
                    >
                        Cure My Boredom
                    </Typography>
                    <nav>
                        <ul style={{ listStyleType: 'none', 
                                    display: 'flex', 
                                    justifyContent: 'flex-end', 
                                    alignItems: 'center',
                                    textDecoration: 'none',
                                    '&hover':{
                                        color: '#ff9800',
                                    },
                                     }}>
                            <li style={{ marginRight: '10px',
                                         textDecoration: 'none',
                                         '&hover':{
                                            color: '#ff9800',
                                         }, }}>
                            <Link to="/" style={{ color: 'white', textDecoration: 'none', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', '&:hover': { color: '#ff9800' } }}>Home</Link>
                            </li>
                            <li style={{ marginRight: '10px' }}>
                            <Link to="/news" style={{ color: 'white', textDecoration: 'none', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', '&:hover': { color: '#ff9800' } }}>News</Link>
                            </li>
                            <li>
                            <Link to="/activities" style={{ color: 'white', textDecoration: 'none', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', '&:hover': { color: '#ff9800' } }}>Activities</Link>
                            </li>
                        </ul>
                    </nav>

                    <Box sx={{
                        flexGrow: 1,
                        display: { xs: 'flex', md: 'none' },
                    }}>
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
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Cure My Boredom
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;