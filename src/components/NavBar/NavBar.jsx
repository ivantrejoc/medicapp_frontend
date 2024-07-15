import { Paper, AppBar, Toolbar, Box, Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
const NavBar = () => {
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
            gap: { xs: "15vw", sm: "58vw", lg: "80vw" },
            flexShrink: 0,
            alignSelf: "stretch",
            boxSizing: "border-box"
          }}
        >
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

          <Button
            size="medium"
            startIcon={<LogoutIcon />}
            variant="contained"
            sx={{
              width: { lg: "8.5rem" }
            }}
          >
            Sign out
          </Button>
        </Toolbar>
      </AppBar>
    </Paper>
  );
};
export default NavBar;
