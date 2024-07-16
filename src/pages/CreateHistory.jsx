import { Box } from "@mui/material";
import { HistoryForm } from "../components/HistoryForm";

const CreateHistory = () => {
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
      <HistoryForm />
    </Box>
  );
};
export default CreateHistory;
