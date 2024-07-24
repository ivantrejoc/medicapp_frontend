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

  console.log("EL USER EN LA VISTA HISTORY: ", user);

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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: { md: "hidden" },
          overflowY: { xs: "auto", md: "hidden" }
        }}
      >
        <HistoryForm user={user} />
      </Box>
    );
  }
};
export default CreateHistory;
