import CartWidget from "./CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Golosineria
      </Link>

      {/* Menú de Categorías */}
      <div>
        <Button
          id="categories-button"
          aria-controls={open ? "categories-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          variant="contained"          // lo hacemos "contained" para que tenga fondo
          sx={{
            backgroundColor: "#c024c0", // color azul primario (puede ser cualquier hex o color de theme)
            color: "#fffbfb",              // texto blanco
            "&:hover": {
              backgroundColor: "#f512a2" // color al pasar mouse
            }
          }}
        >
          Categorías
        </Button>
        <Menu
          id="categories-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        // MenuListProps={{
        //   "aria-labelledby": "categories-button",
        // }}
        >
          <MenuItem component={Link} to="/category/acidos" onClick={handleClose}>
            Ácidos
          </MenuItem>
          <MenuItem component={Link} to="/category/chocolates" onClick={handleClose}>
            Chocolates
          </MenuItem>
          <MenuItem component={Link} to="/category/paletas" onClick={handleClose}>
            Paletas
          </MenuItem>
        </Menu>
      </div>

      <CartWidget />
    </nav>
  );
}

export default NavBar;