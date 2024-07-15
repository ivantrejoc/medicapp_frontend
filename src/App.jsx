import { BrowserRouter } from "react-router-dom";
import Router from "./router/index";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import { logCredits } from "./utils/logCredits";
import { NavBar } from "./components";
import "./assets/css/App.css";
import "./assets/css/fonts.css";

const App = () => {
  logCredits();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
      <NavBar />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
