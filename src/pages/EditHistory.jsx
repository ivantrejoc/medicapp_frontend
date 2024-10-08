import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { EditHistoryForm } from "../components/EditHistoryForm";

const EditHistory = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    const user = JSON.parse(currentUser);
    if (user) {
      setUser(user);
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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: { md: "hidden" },
          overflowY: { xs: "auto", md: "hidden" }
        }}
      >
        <EditHistoryForm user={user} />
      </Box>
    );
  }
};
export default EditHistory;
