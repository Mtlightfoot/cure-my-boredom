import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import logo1 from "../images/logo1.png";
import logo2 from "../images/logo2.png";
import logo3 from "../images/logo3.png";
import AdbIcon from '@mui/icons-material/Adb';
import Avatar from '@mui/material/Avatar';


const styles = {
  navLink: {
    fontWeight: "700",
    color: "white",
    textDecoration: "none",
    letterSpacing: "2px",
    height: "60px",
  },
};

// const logoStyles = {
//   maxWidth: "120px",
//   maxHeight: "120px",
//   marginRight: "15px",
//   backgroundColor: "#0C0A3E",
// };

const homeLink = (
  <NavLink style={styles.navLink} className="nav-link" to="/" end>
    Home
  </NavLink>
);
const newsSearchlink = (
  <NavLink style={styles.navLink} className="nav-link" to="/News" end>
    News Search
  </NavLink>
);
const activitiesLink = (
  <NavLink style={styles.navLink} className="nav-link" to="/Activities" end>
    Activities
  </NavLink>
);
const moviesLink = (
  <NavLink style={styles.navLink} className="nav-link" to="/Movies" end>
    Movies
  </NavLink>
);
const booksLink = (
  <NavLink style={styles.navLink} className="nav-link" to="/Books" end>
    Books
  </NavLink>
);

const pages = [homeLink, newsSearchlink, activitiesLink, moviesLink, booksLink];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#0C0A3E" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar src={logo1} sx={{
            display: { xs: 'none', md: 'flex' },
            mr: 1,
            width: "100px",
            height: "70px",
            backgroundColor: "#0C0A3E",
          }} alt={`logo`} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 800,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: "2em",
              '&:hover': {
                color: "pink",
                transform: "scale(1.005)",
                transition: "0.2s"
              }
            }}
          >
            Cure My Boredom
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  sx={{
                    backgroundColor: "#313742"
                  }}
                  key={page}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Cure My Boredom
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "right",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2, color: "white", display: "block",
                  '&:hover': {
                    transition: "0.2s",
                    backgroundColor: "#BE3D3E"
                  }
                }}
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
export default Navbar;
