import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import PatientAppointments from "../components/PatientAppointments/PatientAppointments";

const Appointments = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setLoading(false);
    }
  }, []);

  if (user && loading === false) {
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
        <PatientAppointments user={user} />
      </Box>
    );
  }
};

export default Appointments;
