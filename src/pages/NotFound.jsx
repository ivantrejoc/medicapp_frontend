import { Box } from "@mui/material";

const NotFound = () => {
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
      <h3>Ooops... Not found</h3>
    </Box>
  );
};

export default NotFound;
