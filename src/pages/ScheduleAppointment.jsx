import { Box, Typography } from "@mui/material";

const ScheduleAppointment = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        height: "100%",
        maxWidth: "100%",
        maxHeight: { md: "100vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
      }}
    >
      <Typography variant="h2">Schedule appointment</Typography>
    </Box>
  );
};
export default ScheduleAppointment;
