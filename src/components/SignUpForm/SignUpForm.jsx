import { useState } from "react";
import {
  Paper,
  Box,
  Typography,
  Divider,
  TextField,
  Button,
  Link
} from "@mui/material";
import PhoneInput from "../PhoneInput/PhoneInput";
import medicappLogo from "/img/medicapp-logo.png";

const SignInForm = () => {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (phone) => {
    setPhone(phone);
  };

  console.log(window.innerHeight);

  return (
    <Paper
      elevation={6}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: { xs: "19.9375rem", md: "34.5rem" },
        height: { xs: "37.2375rem", md: "44.6875rem" },
        marginLeft: { xs: "9.5rem", lg: "0rem" },
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
          height: { xs: "2.5rem", md: "5rem" },
          boxSizing: "border-box",
          marginBottom: 0
        }}
      >
        <Box
          className="logo"
          sx={{
            width: { xs: "6.8rem", md: "13rem" },
            height: { xs: "2.5rem", md: "5rem" },
            background: `url(${medicappLogo}) 100% / cover no-repeat`,
            boxSizing: "border-box"
          }}
        />
      </Box>
      <Box
        id="form"
        sx={{
          display: "flex",
          width: { xs: "17.1875rem", md: "32.1875rem" },
          height: { xs: "33.8rem", md: "39.2875rem" },
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
            marginBottom: 0
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
            <Typography variant="h2">Sign up</Typography>
          </Box>
          <Divider sx={{ width: "100%", marginTop: 1 }} />
        </Box>
        <Box
          id="inputs-wrapper"
          sx={{
            display: "flex",
            height: { xs: "28rem", md: "34.2rem" },
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
              gap: { xs: "1.5rem", md: "2rem" },
              alignSelf: "stretch",
              boxSizing: "border-box",
              marginBottom: { xs: 1.5, md: 2 }
            }}
          >
            <TextField
              size="small"
              variant="outlined"
              label="Email address"
              type="email"
              placeholder="jhon@mail.com"
              SelectProps={{
                native: true
              }}
              InputLabelProps={{
                shrink: true
              }}
              sx={{
                width: "100%",
                boxSizing: "border-box",
                "& .MuiInputBase-root": {
                  width: "100%"
                }
              }}
            />
            <TextField
              size="small"
              variant="outlined"
              type="text"
              label="Name"
              placeholder="Jhon"
              SelectProps={{
                native: true
              }}
              InputLabelProps={{
                shrink: true
              }}
              sx={{
                width: "100%",
                boxSizing: "border-box",
                "& .MuiInputBase-root": {
                  width: "100%"
                }
              }}
            />
            <TextField
              size="small"
              variant="outlined"
              type="text"
              label="Surname"
              placeholder="Doe"
              SelectProps={{
                native: true
              }}
              InputLabelProps={{
                shrink: true
              }}
              sx={{
                width: "100%",
                boxSizing: "border-box",
                "& .MuiInputBase-root": {
                  width: "100%"
                }
              }}
            />
            <PhoneInput value={phone} onChange={handlePhoneChange} />

            <TextField
              size="small"
              variant="outlined"
              label="Password"
              type="password"
              placeholder="Type your password"
              SelectProps={{
                native: true
              }}
              InputLabelProps={{
                shrink: true
              }}
              sx={{
                width: "100%",
                boxSizing: "border-box",
                "& .MuiInputBase-root": {
                  width: "100%"
                }
              }}
            />
            <TextField
              size="small"
              variant="outlined"
              type="password"
              label="Confirm password"
              placeholder="Repeat your password"
              SelectProps={{
                native: true
              }}
              InputLabelProps={{
                shrink: true
              }}
              sx={{
                width: "100%",
                boxSizing: "border-box",
                "& .MuiInputBase-root": {
                  width: "100%"
                }
              }}
            />
          </Box>
          <Box
            id="row-2"
            sx={{
              display: "flex",
              height: "2rem",
              padding: "0rem 0.625rem",
              gap: { xs: 2, md: 15 },
              alignItems: "center",
              alignSelf: "stretch",
              boxSizing: "border-box",
              marginBottom: { xs: 1, md: 2 }
            }}
          >
            <Link
              href="/signup"
              sx={{
                color: "rgba(30, 188, 223, 1)",
                fontFeatureSettings: "'clig' off, 'liga' off",
                fontSize: { xs: "0.755rem", md: "0.875rem" },
                fontStyle: "normal",
                fontWeight: "500",
                letterSpacing: "0.01063rem"
              }}
            >
              Do you have an account? Sign in
            </Link>
          </Box>
          <Button
            size="medium"
            variant="formButton"
            sx={{
              height: "2rem"
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
