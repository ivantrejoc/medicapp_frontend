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
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow:{md: "hidden"},
        overflowY: { xs: "auto", md: "hidden" }
      }}
    >
      <HistoryForm />
    </Box>
  );
};
export default CreateHistory;
