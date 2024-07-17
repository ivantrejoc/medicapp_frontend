import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/index";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import theme from "./theme";
import { logCredits } from "./utils/logCredits";
import { NavBar } from "./components/NavBar";
import { Sidenav } from "./components/Sidenav";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./assets/css/App.css";
import "./assets/css/fonts.css";

const App = () => {
  const [drawerExpanded, setDrawerExpanded] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.only("md"));

  logCredits();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            overflow: "hidden"
          }}
        >
          <NavBar />
          <Box sx={{ display: "flex", width: "100%" }}>
            {!(isTablet || isMobile) && (
              <Sidenav
                drawerExpanded={drawerExpanded}
                setDrawerExpanded={setDrawerExpanded}
              />
            )}
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                height: "calc(100vh - 4.4375rem)",
                width: "100vw",
                marginLeft: drawerExpanded ? "0rem" : "-10rem",
                transition: "margin-left 0.3s ease",
                overflow: "hidden"
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Router />
              </LocalizationProvider>
            </Box>
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
