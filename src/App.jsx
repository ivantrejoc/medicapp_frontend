import { BrowserRouter } from "react-router-dom";
import Router from "./router/index";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import theme from "./theme";
import { logCredits } from "./utils/logCredits";
import { NavBar } from "./components/NavBar";
import { Sidenav } from "./components/Sidenav";
import "./assets/css/App.css";
import "./assets/css/fonts.css";

const App = () => {
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
            <Sidenav />
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                height: "calc(100vh - 4.4375rem)",
                overflow: "hidden"
              }}
            >
              <Router />
            </Box>
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
