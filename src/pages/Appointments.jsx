import { Box } from "@mui/material";
import PatientAppointments from "../components/PatientAppointments/PatientAppointments";

const Appointments = () => {
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
    <PatientAppointments />
    </Box>
  )
};

export default Appointments