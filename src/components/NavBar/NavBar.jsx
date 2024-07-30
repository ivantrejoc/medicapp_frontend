import { Paper, AppBar, Toolbar, Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import LogoutIcon from "@mui/icons-material/Logout";
const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.only("md"));

  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleClick = () => {
    logout();
    navigate("/");
  };

  return (
    <Paper
      elevation={4}
      sx={{
        display: "flex",
        width: "100vw",
        height: "4.4375rem",
        boxSizing: "border-box",
        zIndex: 1300
      }}
    >
      <AppBar
        sx={{
          background:
            "linear-gradient(90deg, #F5F5F5 19%, rgba(108, 245, 179, 0.80) 54.5%, #9DEDC6 75%, #6CF5E0 100%)",
          display: "flex",
          height: "4.4375rem",
          flexDirection: "column",
          alignItems: "flex-start",
          flexShrink: 0,
          alignSelf: "stretch",
          zIndex: 1400
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            height: "4.3125rem",
            padding: "var(--none, 0rem) var(--3, 1.5rem)",
            alignItems: "center",
            justifyContent: "space-between",          
            flexShrink: 0,
            alignSelf: "stretch",
            boxSizing: "border-box"
          }}
        >
          {isMobile ? (
            <Box
              className="medicapp-logo"
              sx={{
                width: "3.0625rem",
                height: "3.0625rem",
                background:
                  "url('/img/medicapp-cross-no-bg.png') 100% / cover no-repeat",
                boxSizing: "border-box"
              }}
            />
          ) : (
            <Box
              className="medicapp-logo"
              sx={{
                width: "8.9375rem",
                height: "3.0625rem",
                background:
                  "url('/img/medicapp-logo.png') 100% / cover no-repeat",
                boxSizing: "border-box"
              }}
            />
          )}

          {isTablet || isMobile ? (
            <BurgerMenu />
          ) : (
            <Button
              size="medium"
              startIcon={<LogoutIcon />}
              variant="contained"
              onClick={() => {
                handleClick();
              }}
              sx={{
                width: { lg: "11rem" }
              }}
            >
              Sign out
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Paper>
  );
};
export default NavBar;
