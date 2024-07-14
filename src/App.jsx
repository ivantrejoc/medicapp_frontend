import { BrowserRouter } from "react-router-dom";
import Router from "./router/index";
import { logCredits } from "./utils/logCredits";
import "./assets/css/App.css";

const App = () => {
  logCredits();

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
