import {
  Paper,
  Box,
  Typography,
  Divider,
  TextField,
  Button,
  Link
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "../PhoneInput/PhoneInput";
import medicappLogo from "/img/medicapp-logo.png";

const SignInForm = () => {
  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      phone: "",
      role: "Patient",
      password: "",
      repeatPassword: ""
    }
  });
  const onSubmit = (data) => {
    console.log(data);
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
        className="form"
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
            height: { xs: "28rem", md: "34.2rem" },
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
              padding: "0.625rem",
              alignItems: "center",
              gap: { xs: "1.5rem", md: "2rem" },
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
                  size="small"
                  variant="outlined"
                  label="Email address"
                  type="text"
                  placeholder="jhon@mail.com"
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : null}
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
              )}
            />
            <Controller
              name="surname"
              control={control}
              rules={{
                required: "Surname is required",
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "Surname not valid"
                }
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  variant="outlined"
                  type="text"
                  label="Surname"
                  placeholder="Doe"
                  error={!!errors.surname}
                  helperText={errors.surname ? errors.surname.message : null}
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
              )}
            />
          </Box>
          <Box
            className="row-2"
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
            type="submit"
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
