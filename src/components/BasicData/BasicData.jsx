import { Box, Typography } from "@mui/material";

const BasicData = () => {
  return (
    <Box
      sx={{        
        display: "flex",
        width: "100%",
        height: "2rem",
        padding: {xs:"var(--1, 0.25rem) var(--none, 1.5rem)", md:"0.25rem 1.5rem" },
        alignItems: "flex-start",        
        boxSizing: "border-box",
        marginBottom: 0
      }}
    >
      <Typography variant="avatarName">Patient: Jhon Doe </Typography>
      
    </Box>
  );
};
export default BasicData;
