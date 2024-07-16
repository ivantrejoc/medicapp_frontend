import { Box } from "@mui/material";
import MedicalHistory from "../components/MedicalHistory/MedicalHistory";

const History = () => {
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
      <MedicalHistory />
    </Box>
  );
};
export default History;
