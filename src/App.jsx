// import { useState } from "react";
// import { useMediaQuery } from "@mui/material";
// import { BrowserRouter } from "react-router-dom";
// import Router from "./router";
// import { ThemeProvider } from "@mui/material/styles";
// import { CssBaseline, Box } from "@mui/material";
// import theme from "./theme";
// import { logCredits } from "./utils/logCredits";
// import { NavBar } from "./components/NavBar";
// import { Sidenav } from "./components/Sidenav";
// import { LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import "./assets/css/App.css";
// import "./assets/css/fonts.css";
// import { AuthProvider } from "./context/authContext";

// const App = () => {
//   const [drawerExpanded, setDrawerExpanded] = useState(false);
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//   const isTablet = useMediaQuery(theme.breakpoints.only("md"));

//   const hideNavs = ["/", "/signup"].includes(location.pathname);

//   logCredits();

//   return (
//     <AuthProvider>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <BrowserRouter>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               height: "100vh",
//               overflow: "hidden"
//             }}
//           >
//             {!hideNavs && <NavBar />}

//             <Box sx={{ display: "flex", width: "100%" }}>
//               {!hideNavs && !(isTablet || isMobile) && (
//                 <Sidenav
//                   drawerExpanded={drawerExpanded}
//                   setDrawerExpanded={setDrawerExpanded}
//                 />
//               )}

//               <Box
//                 component="main"
//                 sx={{
//                   flexGrow: 1,
//                   height: !hideNavs ? "calc(100vh - 4.4375rem)" : "100vh",
//                   width: "100vw",
//                   marginLeft: drawerExpanded ? "0rem" : "-10rem",
//                   transition: "margin-left 0.3s ease",
//                   overflow: "hidden"
//                 }}
//               >
//                 <LocalizationProvider dateAdapter={AdapterDayjs}>
//                   <Router />
//                 </LocalizationProvider>
//               </Box>
//             </Box>
//           </Box>
//         </BrowserRouter>
//       </ThemeProvider>
//     </AuthProvider>
//   );
// };

// export default App;

import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { BrowserRouter, useLocation, useNavigate } from "react-router-dom";
import Router from "./router";
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
import { AuthProvider } from "./context/authContext";
import { useAuth } from "./hooks/useAuth";

const AppContent = () => {
  const [drawerExpanded, setDrawerExpanded] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.only("md"));

  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const hideNavs = ["/", "/signup"].includes(location.pathname);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden"
      }}
    >
      {currentUser && !hideNavs && <NavBar />}

      <Box sx={{ display: "flex", width: "100%" }}>
        {currentUser && !hideNavs && !(isTablet || isMobile) && (
          <Sidenav
            drawerExpanded={drawerExpanded}
            setDrawerExpanded={setDrawerExpanded}
          />
        )}

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: !hideNavs ? "calc(100vh - 4.4375rem)" : "100vh",
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
  );
};

const App = () => {
  logCredits();

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
