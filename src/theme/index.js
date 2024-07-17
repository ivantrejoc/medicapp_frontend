import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    background: {
      default: "#F0F0F0"
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)"
    }
  },
  typography: {
    fontFamily: ["Lato", "sans-serif"],
    fontSize: 16,
    h1: {
      fontFamily: "Lato",
      overflow: "hidden",
      color: "#F5F5F5",
      textAlign: "center",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      fontSize: "2.5rem",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "normal",
      letterSpacing: "0.025rem"
    },
    h2: {
      fontFamily: "Lato",
      color: "rgba(72, 72, 72, 0.87)",
      fontFeatureSettings: "'clig' off, 'liga' off",
      textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      fontSize: "1.5rem",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "133.4%" /* 2.001rem */
    },
    p: {
      fontFamily: "Lato",
      color: "var(--text-primary, rgba(0, 0, 0, 0.87))",
      fontFeatureSettings: "'clig' off, 'liga' off",
      fontSize: "1rem",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "1.5rem" /* 150% */,
      letterSpacing: "0.00938rem"
    },
    avatarName: {
      color: "var(--text-primary, rgba(0, 0, 0, 0.87))",
      fontFamily: "Lato",
      fontSize: "1rem",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "150%" /* 1.5rem */,
      letterSpacing: "0.00938rem",
      alignSelf: "stretch"
    },
    avatarRole: {
      color: "var(--text-secondary, rgba(0, 0, 0, 0.60))",
      fontFeatureSettings: "'clig' off, 'liga' off",
      fontFamily: "Lato",
      fontSize: "0.875rem",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "143%" /* 1.25125rem */,
      letterSpacing: "0.01063rem",
      alignSelf: "stretch"
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "var(--borderRadius, 0.25rem)",
          background: "#5794F7",
          boxShadow:
            "0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.20)",
          color: "var(--primary-contrast, #FFF)",
          fontFamily: "Lato",
          fontSize: "1rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "1.5rem" /* 171.429% */,
          letterSpacing: "0.025rem",
          textTransform: "capitalize"
        }
      },
      variants: [
        {
          props: { variant: "formButton" },
          style: {
            display: "flex",
            padding: "0.5rem 1.375rem",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            borderRadius: "var(--borderRadius, 0.25rem)",
            background: "#6CF585",
            boxShadow:
              "0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.20)",
            color: "var(--primary-contrast, #FFF)",
            fontFeatureSettings: "'clig' off, 'liga' off",
            fontFamily: "Lato",
            fontSize: "1rem",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "1.625rem" /* 162.5% */,
            letterSpacing: "0.02875rem",
            textTransform: "uppercase",
            boxsizing: "border-box",
            "&:hover": {
              background: "#49EF33"
            }
          }
        },
        {
          props: { variant: "pageLayout" },
          style: {
            variants: [
              {
                props: { variant: "formButton" },
                style: {
                  display: "flex",
                  padding: "0.5rem 1.375rem",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderRadius: "var(--borderRadius, 0.25rem)",
                  background: "#6CF585",
                  boxShadow:
                    "0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.20)",
                  color: "var(--primary-contrast, #FFF)",
                  fontFeatureSettings: "'clig' off, 'liga' off",
                  fontFamily: "Lato",
                  fontSize: "1rem",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "1.625rem" /* 162.5% */,
                  letterSpacing: "0.02875rem",
                  textTransform: "uppercase",
                  boxsizing: "border-box",
                  "&:hover": {
                    background: "#49EF33"
                  }
                }
              }
            ]
          }
        }
      ]
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: "var(--text-primary, rgba(0, 0, 0, 0.87))",
          fontFeatureSettings: "'clig' off, 'liga' off",
          fontFamily: "Lato",
          fontSize: "0.9rem",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "150%" /* 1.5rem */,
          letterSpacing: "0.00938rem"
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "0.10rem 1rem",
          lineHeight: "1.15"
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "var(--text-primary, rgba(0, 0, 0, 0.87))",
          textDecoration: "none",
          "&:hover": {
            color: "#5794F7"
          },
          "&:active": {
            color: "#5794F7"
          }
        }
      }
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1530,
      xxxl: 1710
    }
  }
});
