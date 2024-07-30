import { Button, Menu, MenuItem, Fade, Link } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import MenuIcon from "@mui/icons-material/Menu";

const BurgerMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { logout } = useAuth();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleClose();
  };

  return (
    <div id="burger-container">
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
          style: {
            backgroundColor: open ? "#FFFFF" : "inherit"
          }
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>
          <Link href="/appointments/schedule">Schedule Appointment</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/appointments">My appointments</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/history/create">Create medical history</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/history">My medical history</Link>
        </MenuItem>
        <MenuItem onClick={handleLogout}>Sign out</MenuItem>
      </Menu>
    </div>
  );
};
export default BurgerMenu;
