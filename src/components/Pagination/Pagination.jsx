import { Box, Button, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Pagination = ({ pageSize, appointments, currentPage, pagination }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(appointments.length / pageSize); i++) {
    pageNumbers.push(i);
  }
  const totalPages = pageNumbers.length;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 3
      }}
    >
      <Box>
        <Typography
          variant="p"
          sx={{
            lineHeight: "2rem"
          }}
        >
          {currentPage} de {totalPages}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 1
        }}
      >
        <Button
          sx={{
            background: "none",
            height: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "var(--text-primary, rgba(0, 0, 0, 0.87))"
          }}
          onClick={() => pagination(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeftIcon fontSize="small" />
        </Button>
        <Button
          sx={{
            background: "none",
            height: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "var(--text-primary, rgba(0, 0, 0, 0.87))"
          }}
          onClick={() => pagination(currentPage + 1)}
          disabled={currentPage === pageNumbers.length}
        >
          <ChevronRightIcon fontSize="small" />
        </Button>
      </Box>
    </Box>
  );
};
export default Pagination;
