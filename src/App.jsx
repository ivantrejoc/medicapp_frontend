import { BrowserRouter } from "react-router-dom";
import Router from "./router/index";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import { logCredits } from "./utils/logCredits";
import "./assets/css/App.css";

const App = () => {
  logCredits();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
