import { Box } from "@mui/material";
import "./loading.css";

const Loading = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "25%",
        height: "25%",
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
      <div className="progress"></div>
    </Box>
  );
};
export default Loading;
