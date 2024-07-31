import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useStories } from "../store/storiesState";
import MedicalHistory from "../components/MedicalHistory/MedicalHistory";

const History = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const { fetchStories } = useStories((state) => ({
    fetchStories: state.fetchStories
  }));

  useEffect(() => {
    const loadStories = async () => {
      await fetchStories();
      setLoading(false);
    };
    loadStories();
  }, [fetchStories]);

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
          padding: "2rem",
          overflow: "hidden",
          boxSizing: "border-box"
        }}
      >
        <MedicalHistory user={user} />
      </Box>
    );
  }
};
export default History;
