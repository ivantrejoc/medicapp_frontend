import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { HistoryForm } from "../components/HistoryForm";

const CreateHistory = () => {
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
          marginTop: "0vh",          
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "2rem",
          overflowY: { xs: "scroll", md: "hidden" },
          boxSizing: "border-box"
        }}
      >
        <HistoryForm user={user} />
      </Box>
    );
  }
};
export default CreateHistory;
