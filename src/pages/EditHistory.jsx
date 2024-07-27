import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { EditHistoryForm } from "../components/EditHistoryForm";
import { useStories } from "../store/storiesState";

const EditHistory = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);
  const { fetchStories } = useStories((state) => ({
    fetchStories: state.fetchStories,
    stories: state.stories
  }));

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

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
