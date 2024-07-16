import { Box } from "@mui/material";
import { ScheduleForm } from "../components/ScheduleForm";

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
      <ScheduleForm />
    </Box>
  );
};
export default ScheduleAppointment;
