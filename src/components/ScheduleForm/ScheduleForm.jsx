import {
  Paper,
  Box,
  Typography,
  Divider,
  TextField,
  Button
} from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";

const ScheduleForm = () => {
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
            <Typography variant="h2">Schedule appointment</Typography>
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
              select
              variant="outlined"
              label="Specialism"
              SelectProps={{
                native: true
              }}
              InputLabelProps={{
                shrink: true
              }}
              sx={{
                display: "flex",
                width: "16.75rem",
                flexDirection: "column",
                alignItems: "flex-start",
                boxSizing: "border-box",
                "& .MuiInputBase-root": {
                  width: "100%"
                }
              }}
            >
              <option value="">Select Specialism</option>
              <option value="cardiology">Cardiology</option>
              <option value="dermatology">Dermatology</option>
              <option value="neurology">Neurology</option>
              <option value="pediatrics">Pediatrics</option>
            </TextField>

            <TextField
              size="small"
              select
              variant="outlined"
              label="Medic"
              SelectProps={{
                native: true
              }}
              InputLabelProps={{
                shrink: true
              }}
              sx={{
                display: "flex",
                width: "16.75rem",
                flexDirection: "column",
                alignItems: "flex-start",
                boxSizing: "border-box",
                "& .MuiInputBase-root": {
                  width: "100%"
                }
              }}
            >
              <option value="">Select Medic</option>
              <option value="1">Jhon Doe</option>
              <option value="2">Jane Doe</option>
              <option value="3">Michael Keaton</option>
              <option value="4">Jack Black</option>
            </TextField>
          </Box>
          <Box
            id="row-2"
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
            <DatePicker
              label="Select Date"
              SelectProps={{
                native: true
              }}
              slotProps={{
                textField: {
                  size: "small",
                  InputLabelProps: {
                    shrink: true
                  }
                }
              }}
              sx={{
                display: "flex",
                width: "16.75rem",
                flexDirection: "column",
                alignItems: "flex-start",
                boxSizing: "border-box"
              }}
            />
            <TimePicker
              label="Select Hour"
              SelectProps={{
                native: true
              }}
              slotProps={{
                textField: {
                  size: "small",
                  InputLabelProps: {
                    shrink: true
                  }
                }
              }}
              sx={{
                display: "flex",
                width: "16.75rem",
                flexDirection: "column",
                alignItems: "flex-start",
                boxSizing: "border-box"
              }}
            />
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
            Schedule appointment
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};
export default ScheduleForm;
