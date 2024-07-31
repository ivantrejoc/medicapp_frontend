import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { ScheduleForm } from "../components/ScheduleForm";

const ScheduleAppointment = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {      
      setUser(JSON.parse(storedUser));
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

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
        paddingTop: "6rem",
        paddingBottom: "2rem",      
        overflowX: "hidden",
        overflowY: { xs: "visible", md: "hidden" },
        boxSizing: "border-box"
      }}
    >
      <ScheduleForm user={user} />
    </Box>
  );
};
export default ScheduleAppointment;
