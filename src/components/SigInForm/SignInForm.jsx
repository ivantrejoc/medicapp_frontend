import { useState, useEffect } from "react";
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
import AlertModal from "../AlertModal/AlertModal";
import { useTheme } from "@mui/material/styles";
import { useForm, Controller } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import medicappLogo from "/img/medicapp-logo.webp";

const SignInForm = () => {
  const [message, setMessage] = useState(null);
  const [openAlert, setOpenAlert] = useState(false);
  const { login, isAuth } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  useEffect(() => {
    if (isAuth) {
      navigate("/appointments/schedule");
    }
  }, [isAuth, navigate]);  

  const onSubmit = async (data) => {
    try {
      const response = await login(data);
      const status = response.status;
      if (status === false) {
        setMessage(response.data);
        setOpenAlert(true);
      }
      reset();
    } catch (error) {
      console.error;
    }
  };

  return (
    <Paper
      elevation={6}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-beetwen",
        alignItems: "center",
        padding: "1rem",
        width: { xs: "19.9375rem", md: "34.5rem" },
        height: { xs: "30.6375rem", md: "34.4375rem" },
        marginLeft: { xs: "9.5rem", lg: "0rem" },
        flexShrink: 0,
        background: "var(--background-paper-elevation-6, #FFF)",
        boxSizing: "border-box"
      }}
    >
      {openAlert && (
        <AlertModal
          open={openAlert}
          message={message}
          onClose={() => setOpenAlert(false)}
        />
      )}
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
        className="form"
        sx={{
          display: "flex",
          width: { xs: "17.1875rem", md: "32.1875rem" },
          height: { xs: "19.5rem", md: "22.8rem" },
          flexDirection: "column",
          alignItems: "flex-start",
          flexShrink: 0,
          boxSizing: "border-box"
        }}
      >
        <Box
          className="title-wrapper"
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
            className="title-container"
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
          className="inputs-wrapper"
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{           
            display: "flex",
            height: { xs: "14.5rem", md: "17.5rem" },
            flexDirection: "column",
            alignItems: "flex-start",
            flexShrink: 0,
            alignSelf: "stretch",
            boxSizing: "border-box"
          }}
        >
          <Box
            className="row-1"
            sx={{
              display: "flex",
              flexDirection: "column",
              height: { xs: "8.5rem", md: "11rem" },
              alignItems: "center",
              justifyContent: "space-between",
              alignSelf: "stretch",
              boxSizing: "border-box",
              marginBottom: { xs: 1.5, md: 2 }
            }}
          >
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email not valid"
                }
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  size={isMobile ? "small" : "medium"}
                  variant="outlined"
                  label="Email address"
                  placeholder="jhon@mail.com"
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : null}
                  InputLabelProps={{
                    shrink: true
                  }}
                  FormHelperTextProps={{
                    sx: {
                      fontSize: "0.75rem",
                      margin: 0
                    }
                  }}
                  sx={{
                                        display: "flex",
                    width: "100%",
                    height: { xs: "3.6rem", md: "4.5rem" },
                    flexDirection: "column",
                    alignItems: "flex-start",
                    boxSizing: "border-box",
                    "& .MuiInputBase-root": {
                      width: "100%"
                    }
                  }}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              rules={{
                required: "Password is required"
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  size={isMobile ? "small" : "medium"}
                  variant="outlined"
                  label="Password"
                  placeholder="Type your password"
                  type="password"
                  error={!!errors.password}
                  helperText={errors.password ? errors.password.message : null}
                  InputLabelProps={{
                    shrink: true
                  }}
                  FormHelperTextProps={{
                    sx: {
                      fontSize: "0.75rem",
                      margin: 0
                    }
                  }}
                  sx={{                   
                    display: "flex",
                    width: "100%",
                    height: { xs: "3.6rem", md: "4.5rem" },
                    flexDirection: "column",
                    alignItems: "flex-start",
                    boxSizing: "border-box",
                    "& .MuiInputBase-root": {
                      width: "100%"
                    }
                  }}
                />
              )}
            />
          </Box>
          <Box
            id="row-3"
            sx={{             
              display: "flex",
              height: "2rem",
              padding: "0.625rem",
              alignItems: "center",
              justifyContent: "space-between",
              alignSelf: "stretch",
              boxSizing: "border-box",
              marginBottom: { xs: 1, md: 1.5 }
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
                fontSize: { xs: "0.755rem", md: "0.875rem" },
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "143%",
                letterSpacing: { xs: 0, md: "0.01063rem" }
              }}
            >
              Forgot password?
            </Link>
          </Box>
          <Button
            type="submit"
            size="medium"
            variant="formButton"
            sx={{
              height: "2.5rem"
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
