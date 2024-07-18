import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { SignInForm } from "../components/SigInForm";
import calendarDoctor from "/img/doctor-calendar.png";

const SignIn = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.only("md"));

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        height: "100%",
        maxWidth: "100%",
        maxHeight: { md: "100vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
      }}
    >
      {isMobile || isTablet ? (
        <Box
          classname="wrapper"
          sx={{
            display: "flex",
            width: "100%",
            height: "100vh"
          }}
        >
          <Box
            classname="screen-wrapper"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingY: { xs: 5, sm: 12 },
              gap: {xs:2, md:5},
              background:
                "linear-gradient(180deg, #6CF5B3 0%, #9DEDC6 81.32%, #6CF5E0 100%)",
              height: "100%",
              width: "100%",
              boxSizing: "border-box"
            }}
          >
            <Typography
              variant="h1"
              sx={{
                display: "flex",
                width: {xs: "18.875rem", md: "42.875rem"},
                height: "6.625rem",
                marginLeft: 18,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                boxSizing: "border-box"
              }}
            >
              Welcome to your medical appointment manager
            </Typography>
            <SignInForm />
          </Box>
        </Box>
      ) : (
        <Box
          classname="wrapper"
          sx={{
            display: "flex",
            width: "100%",
            height: "100vh"
          }}
        >
          <Box
            classname="left-side"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              background:
                "linear-gradient(180deg, #6CF5B3 0%, #9DEDC6 81.32%, #6CF5E0 100%)",
              height: "100%",
              width: "50%"
            }}
          >
            <Typography
              variant="h1"
              sx={{
                display: "flex",
                width: "42.875rem",
                height: "6.625rem",
                marginLeft: 18,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                boxSizing: "border-box"
              }}
            >
              Welcome to your medical appointment manager
            </Typography>
            <Box
              classname="image"
              sx={{
                width: "35.875rem",
                height: "35.875rem",
                marginLeft: 15,
                flexShrink: 0,
                boxSizing: "border-box",
                background: `url(${calendarDoctor}) 100%/ cover no-repeat`
              }}
            ></Box>
          </Box>
          <Box
            classname="right-side"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "50%"
            }}
          >
            <SignInForm />
          </Box>
        </Box>
      )}
    </Box>
  );
};
export default SignIn;
