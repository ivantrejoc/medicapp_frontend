import { TextField } from "@mui/material";

const DisplayDataMulti = ({ label, value }) => {
  return (
    <TextField
      multiline
      fullWidth
      size="small"
      variant="outlined"
      label={label}
      value={value}
      rows={3}
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
        width: "100%",
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
export default DisplayDataMulti;
