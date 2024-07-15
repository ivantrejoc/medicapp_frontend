import { Box, Typography } from "@mui/material";

const ScheduleAppointment = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        maxWidth: "100vw",
        maxHeight: { md: "100vh" }
      }}
    >
      <Typography variant="h2">Schedule appointment</Typography>
    </Box>
  );
};
export default ScheduleAppointment;
