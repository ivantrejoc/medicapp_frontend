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
import AlertModal from "../AlertModal/AlertModal";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PhoneInput from "../PhoneInput/PhoneInput";
import medicappLogo from "/img/medicapp-logo.webp";
import { createPatient } from "../../services/userServices";

const SignInForm = () => {
  const [message, setMessage] = useState(null);
  const [openAlert, setOpenAlert] = useState(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      phone: "",
      role: "Patient",
      password: "",
      repeatPassword: ""
    }
  });
  const onSubmit = async (data) => {
    const { name, lastName, email, phone, role, password } = data;
    const patientData = {
      name,
      lastName,
      email,
      phone,
      role,
      password
    };
    const response = await createPatient(patientData);
    const responseMessage = response.message;
    reset();
    setOpenAlert(true);
    setMessage(responseMessage);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
    if (message === "Patient successfully created") {
      navigate("/");
    }
  };

  return (
    <Paper
      elevation={6}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: { xs: "19.9375rem", md: "34.5rem" },
        height: { xs: "42.2375rem", md: "44.6875rem" },
        marginLeft: { xs: "9.5rem", lg: "0rem" },
        padding: "1rem",
        flexShrink: 0,
        background: "var(--background-paper-elevation-6, #FFF)",
        boxSizing: "border-box"
      }}
    >
      {openAlert && (
        <AlertModal
          open={openAlert}
          message={message}
          onClose={handleCloseAlert}
        />
      )}
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
        className="form"
        sx={{
          display: "flex",
          width: { xs: "17.1875rem", md: "32.1875rem" },
          height: "37.1rem",
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
            marginBottom: 0
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
            <Typography variant="h2">Sign up</Typography>
          </Box>
          <Divider sx={{ width: "100%", marginTop: 1 }} />
        </Box>
        <Box
          className="inputs-wrapper"
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: "flex",
            height: { xs: "32.3rem", md: "32.5rem" },
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
              height: "27rem",
              padding: "0.625rem",
              alignItems: "center",
              gap: "1rem",
              alignSelf: "stretch",
              boxSizing: "border-box",
              marginBottom: { xs: 1, md: 1.5 }
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
                  size="small"
                  variant="outlined"
                  label="Email address"
                  type="text"
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
                    width: "100%",
                    height: "3.5rem",
                    boxSizing: "border-box",
                    "& .MuiInputBase-root": {
                      width: "100%"
                    }
                  }}
                />
              )}
            />
            <Controller
              name="name"
              control={control}
              rules={{
                required: "Name is required",
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "Name not valid"
                }
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  variant="outlined"
                  type="text"
                  label="Name"
                  placeholder="Jhon"
                  error={!!errors.name}
                  helperText={errors.name ? errors.name.message : null}
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
                    width: "100%",
                    height: "3.5rem",
                    boxSizing: "border-box",
                    "& .MuiInputBase-root": {
                      width: "100%"
                    }
                  }}
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              rules={{
                required: "Last name is required",
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "Last name not valid"
                }
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  variant="outlined"
                  type="text"
                  label="Last name"
                  placeholder="Doe"
                  error={!!errors.lastName}
                  helperText={errors.lastName ? errors.lastName.message : null}
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
                    width: "100%",
                    height: "3.5rem",
                    boxSizing: "border-box",
                    "& .MuiInputBase-root": {
                      width: "100%"
                    }
                  }}
                />
              )}
            />
            <Controller
              name="phone"
              control={control}
              rules={{
                required: "Phone is required",
                pattern: {
                  value: /^\+[\d*]{6,15}$/,
                  message: "Phone not valid"
                }
              }}
              render={({ field }) => (
                <PhoneInput
                  {...field}
                  label="phone"
                  type="text"
                  error={!!errors.phone}
                  helperText={errors.phone ? errors.phone.message : null}
                  FormHelperTextProps={{
                    sx: {
                      fontSize: "0.75rem",
                      margin: 0
                    }
                  }}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              rules={{
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)[a-zA-Z\d\W]{1,8}$/,
                  message:
                    "Max 8 characters, includes 1 uppercase, 1 lowercase, 1 special character"
                }
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  variant="outlined"
                  label="Password"
                  type="password"
                  placeholder="Type your password"
                  error={!!errors.password}
                  helperText={errors.password ? errors.password.message : null}
                 autoComplete="password"
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
                    width: "100%",
                    height: "3.5rem",
                    boxSizing: "border-box",
                    "& .MuiInputBase-root": {
                      width: "100%"
                    }
                  }}
                />
              )}
            />
            <Controller
              name="repeatPassword"
              control={control}
              rules={{
                required: "Please repeat your password",
                validate: (value) =>
                  value === getValues("password") || "Passwords do not match"
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  variant="outlined"
                  type="password"
                  label="Confirm password"
                  placeholder="Repeat your password"
                  error={!!errors.repeatPassword}
                  helperText={
                    errors.repeatPassword ? errors.repeatPassword.message : null
                  }
                  autoComplete="repeat-password"
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
                    width: "100%",
                    height: "3.5rem",
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
            className="row-2"
            sx={{
              display: "flex",
              height: "2rem",
              padding: "0rem 0.625rem",
              alignItems: "center",
              alignSelf: "stretch",
              boxSizing: "border-box",
              marginBottom: { xs: 1, md: 1 }
            }}
          >
            <Link
              href="/"
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
            type="submit"
            size="medium"
            variant="formButton"
            sx={{
              height: "2.5rem"
            }}
          >
            Sign up
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};
export default SignInForm;
