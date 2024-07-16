import { TextField } from "@mui/material";

const DisplayData = ({ label, value }) => {
  return (
    <TextField
      size="small"
      variant="outlined"
      label={label}
      value={value}
      InputProps={{
        readOnly: true,
        style: { fontFamily: "Lato, sans-serif" }
      }}
      InputLabelProps={{
        shrink: true,
        style: { color: "rgba(0, 0, 0, 0.6)" } 
      }}
      sx={{
        display: "flex",
        width: "7.375rem",
        flexDirection: "column",
        alignItems: "flex-start",
        boxSizing: "border-box",
        "& .MuiInputBase-root": {
          width: "100%"
        },
        "& .MuiOutlinedInput-root": {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(0, 0, 0, 0.6)" 
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(0, 0, 0, 0.6)"
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "none"
          }
        },
        "& .MuiInputBase-input.Mui-disabled": {
          WebkitTextFillColor: "black"
        }
      }}
    />
  );
};
export default DisplayData;
