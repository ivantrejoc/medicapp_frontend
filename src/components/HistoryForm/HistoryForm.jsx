import {
  Paper,
  Box,
  Typography,
  Divider,
  TextField,
  InputAdornment,  
  FormControl,  
  FormControlLabel,
  FormGroup,
  Checkbox,
  Button
} from "@mui/material";

const HistoryForm = () => {
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
            <Typography variant="h2">Create Medical History</Typography>
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
              padding: "0.625rem",
              alignItems: "center",
              gap: "2.1875rem",
              alignSelf: "stretch",
              boxSizing: "border-box",
              marginBottom: 3.5
            }}
          >
            <TextField
              size="small"
              variant="outlined"
              label="Age"
              SelectProps={{
                native: true
              }}
              InputLabelProps={{
                shrink: true
              }}
              sx={{
                display: "flex",
                width: "7.375rem",
                flexDirection: "column",
                alignItems: "flex-start",
                boxSizing: "border-box",
                "& .MuiInputBase-root": {
                  width: "100%"
                }
              }}
            />
            <TextField
              size="small"
              variant="outlined"
              label="Height"
              InputProps={{
                endAdornment: <InputAdornment position="end">cm</InputAdornment>
              }}
              SelectProps={{
                native: true
              }}
              InputLabelProps={{
                shrink: true
              }}
              sx={{
                display: "flex",
                width: "7.375rem",
                flexDirection: "column",
                alignItems: "flex-start",
                boxSizing: "border-box",
                "& .MuiInputBase-root": {
                  width: "100%"
                }
              }}
            />
            <TextField
              size="small"
              variant="outlined"
              label="Weight"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">lbs</InputAdornment>
                )
              }}
              SelectProps={{
                native: true
              }}
              InputLabelProps={{
                shrink: true
              }}
              sx={{
                display: "flex",
                width: "7.375rem",
                flexDirection: "column",
                alignItems: "flex-start",
                boxSizing: "border-box",
                "& .MuiInputBase-root": {
                  width: "100%"
                }
              }}
            />
            <TextField
              size="small"
              variant="outlined"
              label="BMI"
              SelectProps={{
                native: true
              }}
              InputLabelProps={{
                shrink: true
              }}
              sx={{
                display: "flex",
                width: "7.375rem",
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
            id="row-2"
            sx={{                
              display: "flex",
              padding: "0.625rem",
              alignItems: "center",
              gap: "2.1875rem",
              paddingX: "0.80rem",
              alignSelf: "stretch",
              boxSizing: "border-box",
              marginBottom: 3.5
            }}
          >
            <FormControl>
              <FormGroup row                
              >
                <FormControlLabel
                  value="smoking"
                  sx={{
                    '& .MuiFormControlLabel-label': {
                        fontFamily: 'Lato, sans-serif',
                        fontSize: "1rem",
                        fontWeight: "500"
                      },
                  }}
                  control={
                    <Checkbox
                      size="small"
                      sx={{
                        "&.Mui-checked": {
                          color: "#6CF585"
                        }
                      }}
                    />
                  }
                  label="Smoking"
                />
                <FormControlLabel
                  value="drugs"
                 sx={{
                    '& .MuiFormControlLabel-label': {
                        fontFamily: 'Lato, sans-serif',
                        fontSize: "1rem",
                        fontWeight: "500"
                      },
                  }}
                  control={
                    <Checkbox
                      size="small"
                      sx={{
                        "&.Mui-checked": {
                          color: "#6CF585"
                        }
                      }}
                    />
                  }
                  label="Drugs"
                />
                <FormControlLabel
                  value="hypertension"
                 sx={{
                    '& .MuiFormControlLabel-label': {
                        fontFamily: 'Lato, sans-serif',
                        fontSize: "1rem",
                        fontWeight: "500"
                      },
                  }}
                  control={
                    <Checkbox
                      size="small"
                      sx={{
                        "&.Mui-checked": {
                          color: "#6CF585"
                        }
                      }}
                    />
                  }
                  label="Hypertenesion"
                />
                <FormControlLabel
                  value="medication"
                 sx={{
                    '& .MuiFormControlLabel-label': {
                        fontFamily: 'Lato, sans-serif',
                        fontSize: "1rem",
                        fontWeight: "500"
                      },
                  }}
                  control={
                    <Checkbox
                      size="small"
                      sx={{
                        "&.Mui-checked": {
                          color: "#6CF585"
                        }
                      }}
                    />
                  }
                  label="Medication"
                />
                <FormControlLabel
                  value="alcohol"
                 sx={{
                    '& .MuiFormControlLabel-label': {
                        fontFamily: 'Lato, sans-serif',
                        fontSize: "1rem",
                        fontWeight: "500"
                      },
                  }}
                  control={
                    <Checkbox
                      size="small"
                      sx={{
                        "&.Mui-checked": {
                          color: "#6CF585"
                        }
                      }}
                    />
                  }
                  label="Alcohol"
                />
              </FormGroup>
            </FormControl>
          </Box>
          <Box
            id="row-3"
            sx={{
              display: "flex",
              height: "6.5rem",
              padding: "0.625rem",
              alignItems: "center",
              alignSelf: "stretch",
              boxSizing: "border-box",
              marginBottom: 5.5
            }}
          >
            <TextField
              id="outlined-textarea"
              label="Comments"
              placeholder="Your comments..."
              multiline
              rows={2}
              InputLabelProps={{ shrink: true }}
              sx={{
                height: "5.75rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                flex: "1 0 0",
                alignSelf: "stretch",
                boxSizing: "border-box",
                "& .MuiInputBase-root": {
                  width: "100%"
                }
              }}
            />
          </Box>
          <Button size="large" variant="formButton">
            CREATE MY HISTORY
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};
export default HistoryForm;
