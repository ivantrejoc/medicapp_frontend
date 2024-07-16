import { Paper, Box, Typography, Divider, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import DisplayData from "../DisplayData/DisplayData";
import DisplayDataMulti from "../DisplayData/DisplayDataMulti";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const MedicalHistory = () => {
  const riskFactors = {
    age: "25",
    height: "178 cm",
    weight: "152 lbs",
    bmi: "13.75",
    smoking: "yes",
    alcohol: "yes",
    drugs: "no",
    hypertension: "no",
    medication: "yes",
    comorbilities: "Left knee injury."
  };

  return (
    <Paper
      elevation={6}
      sx={{
        display: "flex",
        width: "39.9375rem",
        height: "35.4375rem",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: 0,
        background: "var(--background-paper-elevation-6, #FFF)",
        boxSizing: "border-box"
      }}
    >
      <Box
        id="form"
        sx={{
          display: "flex",
          width: "37.1875rem",
          height: "29.0625rem",
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
            marginBottom: 3.5
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
            <Typography variant="h2">My Medical History</Typography>
          </Box>
          <Divider sx={{ width: "100%", marginTop: 1 }} />
        </Box>
        <Box
          id="inputs-wrapper"
          sx={{
            display: "flex",
            height: "23.3rem",
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
              alignItems: "center",
              gap: "2.5rem",
              alignSelf: "stretch",
              boxSizing: "border-box",
              marginBottom: 3.5
            }}
          >
            <DisplayData label={"Age"} value={riskFactors.age} />
            <DisplayData label={"Height"} value={riskFactors.height} />
            <DisplayData label={"Weight"} value={riskFactors.weight} />
            <DisplayData label={"BMI"} value={riskFactors.bmi} />
          </Box>
          <Box
            id="row-2"
            sx={{
              display: "flex",
              alignItems: "center",
              height: "2.5rem",
              gap: "2.4rem",
              alignSelf: "stretch",
              boxSizing: "border-box",
              marginBottom: 7
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.25rem",
                flexShrink: 0,
                alignSelf: "stretch",
                boxSizing: "border-box"
              }}
            >
              {riskFactors.smoking === "yes" ? (
                <DoneIcon
                  sx={{
                    fontSize: "medium"
                  }}
                />
              ) : (
                <CloseIcon
                  sx={{
                    fontSize: "medium"
                  }}
                />
              )}
              <Typography
                sx={{
                  color: "var(--text-primary, rgba(0, 0, 0, 0.87))",
                  fontFeatureSettings: "'clig' off, 'liga' off",
                  fontSize: "1rem",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "150%" /* 1.5rem */,
                  letterSpacing: "0.00938rem"
                }}
              >
                Smoking
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.25rem",
                flexShrink: 0,
                alignSelf: "stretch",
                boxSizing: "border-box"
              }}
            >
              {riskFactors.drugs === "yes" ? (
                <DoneIcon
                  sx={{
                    fontSize: "medium"
                  }}
                />
              ) : (
                <CloseIcon
                  sx={{
                    fontSize: "medium"
                  }}
                />
              )}
              <Typography
                sx={{
                  color: "var(--text-primary, rgba(0, 0, 0, 0.87))",
                  fontFeatureSettings: "'clig' off, 'liga' off",
                  fontSize: "1rem",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "150%" /* 1.5rem */,
                  letterSpacing: "0.00938rem"
                }}
              >
                Drugs
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.25rem",
                flexShrink: 0,
                alignSelf: "stretch",
                boxSizing: "border-box"
              }}
            >
              {riskFactors.hypertension === "yes" ? (
                <DoneIcon
                  sx={{
                    fontSize: "medium"
                  }}
                />
              ) : (
                <CloseIcon
                  sx={{
                    fontSize: "medium"
                  }}
                />
              )}
              <Typography
                sx={{
                  color: "var(--text-primary, rgba(0, 0, 0, 0.87))",
                  fontFeatureSettings: "'clig' off, 'liga' off",
                  fontSize: "1rem",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "150%" /* 1.5rem */,
                  letterSpacing: "0.00938rem"
                }}
              >
                Hypertension
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.25rem",
                flexShrink: 0,
                alignSelf: "stretch",
                boxSizing: "border-box"
              }}
            >
              {riskFactors.medication === "yes" ? (
                <DoneIcon
                  sx={{
                    fontSize: "medium"
                  }}
                />
              ) : (
                <CloseIcon
                  sx={{
                    fontSize: "medium"
                  }}
                />
              )}
              <Typography
                sx={{
                  color: "var(--text-primary, rgba(0, 0, 0, 0.87))",
                  fontFeatureSettings: "'clig' off, 'liga' off",
                  fontSize: "1rem",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "150%" /* 1.5rem */,
                  letterSpacing: "0.00938rem"
                }}
              >
                Medication
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.25rem",
                flexShrink: 0,
                alignSelf: "stretch",
                boxSizing: "border-box"
              }}
            >
              {riskFactors.alcohol === "yes" ? (
                <DoneIcon
                  sx={{
                    fontSize: "medium"
                  }}
                />
              ) : (
                <CloseIcon
                  sx={{
                    fontSize: "medium"
                  }}
                />
              )}
              <Typography
                sx={{
                  color: "var(--text-primary, rgba(0, 0, 0, 0.87))",
                  fontFeatureSettings: "'clig' off, 'liga' off",
                  fontSize: "1rem",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "150%" /* 1.5rem */,
                  letterSpacing: "0.00938rem"
                }}
              >
                Alcohol
              </Typography>
            </Box>
          </Box>
          <Box
            id="row-3"
            sx={{
              display: "flex",
              height: "6.5rem",
              alignItems: "center",
              alignSelf: "stretch",
              boxSizing: "border-box",
              marginBottom: 5.5
            }}
          >
            <DisplayDataMulti
              label={"Comorbilities"}
              value={riskFactors.comorbilities}
            />
          </Box>
          <Box
            id="row-4"
            sx={{
              display: "flex",
              height: "6.5rem",
              gap: "1.25rem",
              alignItems: "center",
              alignSelf: "stretch",
              boxSizing: "border-box",
              marginBottom: 3.5
            }}
          >
            <Button
              size="small"
              startIcon={<EditIcon />}
              sx={{
                paddingX: 1,
                background: "#EBAE42",
                textTransform: "uppercase",
                fontWeight: "500",
                "&:hover": {
                  background: "#EB9400"
                }
              }}
            >
              Edit Hystory
            </Button>
            <Button
              size="small"
              startIcon={<DeleteIcon />}
              sx={{
                paddingX: 1,
                background: "#FA7670",
                textTransform: "uppercase",
                fontWeight: "500",
                "&:hover": {
                  background: "#EA5548"
                }
              }}
            >
              Delete Hystory
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};
export default MedicalHistory;
