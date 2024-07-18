import {
  Paper,
  Box,
  Typography,
  Divider,
  TextField,
  Button,
  Link,
  useMediaQuery
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import medicappLogo from "/img/medicapp-logo.png";

const SignInForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Paper
      elevation={6}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: { xs: "19.9375rem", md: "34.5rem" },
        height: { xs: "28.4375rem", md: "35.4375rem" },
        marginLeft: { xs: "10rem", lg: "0rem" },
        flexShrink: 0,
        background: "var(--background-paper-elevation-6, #FFF)",
        boxSizing: "border-box"
      }}
    >
      <Box
        className="logo-wrapper"
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          padding: "0.5rem 0",
          width: "100%",
          height: "7.75rem",
          boxSizing: "border-box",
          marginBottom: 2
        }}
      >
        <Box
          className="logo"
          sx={{
            width: "19rem",
            height: "7.75rem",
            background: `url(${medicappLogo}) 100% / cover no-repeat`,
            boxSizing: "border-box"
          }}
        ></Box>
      </Box>
      <Box
        id="form"
        sx={{
          display: "flex",
          width: { xs: "17.1875rem", md: "32.1875rem" },
          height: { xs: "18.8rem", md: "25.0625rem" },
          flexDirection: "column",
          alignItems: "flex-start",
          flexShrink: 0,
          boxSizing: "border-box"
        }}
      >
        <Box
          id="title-wrapper"
          sx={{
            display: "flex",
            padding: "var(--2, 1rem) var(--none, 0rem)",
            flexDirection: "column",
            alignItems: "flex-start",
            alignSelf: "stretch",
            boxSizing: "border-box",
            marginBottom: { xs: 0.5, md: 1 }
          }}
        >
          <Box
            id="title-container"
            sx={{
              display: "flex",
              alignItems: "flex-start",
              alignSelf: "stretch",
              boxSizing: "border-box"
            }}
          >
            <Typography variant="h2">Sign in</Typography>
          </Box>
          <Divider sx={{ width: "100%", marginTop: 1 }} />
        </Box>
        <Box
          id="inputs-wrapper"
          sx={{
            display: "flex",
            height: { xs: "14rem", md: "20rem" },
            flexDirection: "column",
            alignItems: "flex-start",
            flexShrink: 0,
            alignSelf: "stretch",
            boxSizing: "border-box"
          }}
        >
          <Box
            id="row-1"
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "0.625rem",
              alignItems: "center",
              gap: { xs: "2rem" },
              alignSelf: "stretch",
              boxSizing: "border-box",
              marginBottom: { xs: 1.5, md: 2 }
            }}
          >
            <TextField
              size={isMobile ? "small" : "medium"}
              variant="outlined"
              label="Email address"
              placeholder="jhon@mail.com"
              SelectProps={{
                native: true
              }}
              InputLabelProps={{
                shrink: true
              }}
              sx={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                alignItems: "flex-start",
                boxSizing: "border-box",
                "& .MuiInputBase-root": {
                  width: "100%"
                }
              }}
            />
            <TextField
              size={isMobile ? "small" : "medium"}
              variant="outlined"
              label="Password"
              placeholder="jhon@mail.com"
              SelectProps={{
                native: true
              }}
              InputLabelProps={{
                shrink: true
              }}
              sx={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                alignItems: "flex-start",
                boxSizing: "border-box",
                "& .MuiInputBase-root": {
                  width: "100%"
                }
              }}
            />
          </Box>
          <Box
            id="row-3"
            sx={{
              display: "flex",
              height: { xs: "2rem", md: "6.5rem" },
              padding: "0.625rem",
              gap: { xs: 2, md: 15 },
              alignItems: "center",
              alignSelf: "stretch",
              boxSizing: "border-box",
              marginBottom: { xs: 0.25, md: 5.5 }
            }}
          >
            <Link
              href="/signup"
              sx={{
                color: "rgba(30, 188, 223, 1)",
                fontFeatureSettings: "'clig' off, 'liga' off",
                fontSize: { xs: "0.575rem", md: "0.875rem" },
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "143%",
                letterSpacing: "0.01063rem"
              }}
            >
              Don´t have an account yet? Click here
            </Link>
            <Link
              href="/recovery"
              sx={{
                color: "rgba(30, 188, 223, 1)",
                fontFeatureSettings: "'clig' off, 'liga' off",
                fontSize: { xs: "0.575rem", md: "0.875rem" },
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "143%",
                letterSpacing: {xs: 0, md: "0.01063rem"}
              }}
            >
              Forgot password?
            </Link>
          </Box>
          <Button
            size="medium"
            variant="formButton"
            sx={{
              height: { xs: "2rem", sm: "inherit" }
            }}
          >
            Sign in
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};
export default SignInForm;
