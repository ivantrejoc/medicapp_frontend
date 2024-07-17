import { useState } from "react";
import {
  Paper,
  Box,
  Typography,
  Divider,
  Button,
  TableContainer,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Checkbox,
  TableFooter,
  useMediaQuery
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import BasicData from "../BasicData/BasicData";
import Pagination from "../Pagination/Pagination";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";

const PatientAppointments = () => {
  const theme = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.only("md"));

  const appointments = [
    {
      id: 2,
      patient_id: 2,
      medic_id: 2,
      specialism_id: 2,
      appointment_date: "2024-07-16T00:00:00.000Z",
      appointment_hour: "10:00:00",
      comments: "Patient has a persistent rash on the face and arms.",
      patient_name: "Jane",
      medic_name: "Sarah",
      specialism: "Dermatology"
    },
    {
      id: 12,
      patient_id: 2,
      medic_id: 2,
      specialism_id: 2,
      appointment_date: "2024-07-26T00:00:00.000Z",
      appointment_hour: "11:30:00",
      comments: "Patient’s rash has spread. Needs further examination.",
      patient_name: "Jane",
      medic_name: "Sarah",
      specialism: "Dermatology"
    },
    {
      id: 23,
      patient_id: 2,
      medic_id: 3,
      specialism_id: 5,
      appointment_date: "2024-07-26T00:00:00.000Z",
      appointment_hour: "15:35:00",
      comments: "This is a test comment",
      patient_name: "Jane Doe",
      medic_name: "James Brown",
      specialism: "Oncology"
    },
    {
      id: 24,
      patient_id: 2,
      medic_id: 3,
      specialism_id: 5,
      appointment_date: "2024-07-26T00:00:00.000Z",
      appointment_hour: "15:35:00",
      comments: "This is other appointment",
      patient_name: "Jane Doe",
      medic_name: "James Brown",
      specialism: "Oncology"
    },
    {
      id: 25,
      patient_id: 2,
      medic_id: 3,
      specialism_id: 5,
      appointment_date: "2024-07-25T00:00:00.000Z",
      appointment_hour: "15:35:00",
      comments: "This is other appointment",
      patient_name: "Jane Doe",
      medic_name: "James Brown",
      specialism: "Oncology"
    },
    {
      id: 35,
      patient_id: 2,
      medic_id: 3,
      specialism_id: 5,
      appointment_date: "2024-07-25T00:00:00.000Z",
      appointment_hour: "15:35:00",
      comments: "This is other appointment",
      patient_name: "Jane Doe",
      medic_name: "James Brown",
      specialism: "Oncology"
    },
    {
      id: 40,
      patient_id: 2,
      medic_id: 3,
      specialism_id: 5,
      appointment_date: "2024-07-25T00:00:00.000Z",
      appointment_hour: "15:35:00",
      comments: "This is other appointment",
      patient_name: "Jane Doe",
      medic_name: "James Brown",
      specialism: "Oncology"
    },
    {
      id: 16,
      patient_id: 2,
      medic_id: 3,
      specialism_id: 5,
      appointment_date: "2024-07-25T00:00:00.000Z",
      appointment_hour: "15:35:00",
      comments: "This is other appointment",
      patient_name: "Jane Doe",
      medic_name: "James Brown",
      specialism: "Oncology"
    },
    {
      id: 8,
      patient_id: 2,
      medic_id: 3,
      specialism_id: 5,
      appointment_date: "2024-07-25T00:00:00.000Z",
      appointment_hour: "15:35:00",
      comments: "This is other appointment",
      patient_name: "Jane Doe",
      medic_name: "James Brown",
      specialism: "Oncology"
    }
  ];

  const indexOfLastAppointment = currentPage * pageSize;
  const indexOfFirstAppointment = indexOfLastAppointment - pageSize;
  const currentAppointments = appointments?.slice(
    indexOfFirstAppointment,
    indexOfLastAppointment
  );

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Paper
      elevation={6}
      sx={{
        display: "flex",
        width: {
          xs: "20.875rem",
          md: "39.875rem",
          lg: "59.875rem",
          xxl: "79.875rem"
        },
        height: { xs: "28.6875rem", md: "30.6875rem", xxxl: "40.6875rem" },
        marginLeft: { xs: "10rem", lg: "0rem" },
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: 0,
        boxSizing: "border-box"
      }}
    >
      {(isMobile || isTablet) && <BasicData />}
      <Box
        className="dashboard-wrapper"
        sx={{
          display: "flex",
          width: { xs: "18.875rem", md: "37rem", lg: "55rem", xxxl: "75rem" },
          height: { lg: "27.0625rem", xxxl: "37.0625rem" },
          padding: { xs: "0rem", xxxl: "1.5rem" },
          flexDirection: "column",
          alignItems: "center",
          gap: { lg: "0.5rem", xxxl: "1.5rem" },
          flexShrink: 0,
          boxSizing: "border-box"
        }}
      >
        <Box
          className="heading"
          sx={{
            display: "flex",
            width: { xs: "18.875rem", md: "37rem", lg: "55rem", xxxl: "75rem" },
            padding: "1rem 0rem 0rem 0rem",
            flexDirection: "column",
            alignItems: "flex-start",
            boxSizing: "border-box"
          }}
        >
          <Typography variant="h2">My appointments</Typography>
          <Divider sx={{ width: "100%", marginTop: 1 }} />
        </Box>
        <Box
          className="dashboard"
          sx={{
            display: "flex",
            width: { xs: "18.875rem", md: "37rem", lg: "55rem", xxxl: "75rem" },
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            boxSizing: "border-box"
          }}
        >
          <Box
            className="toolbar"
            sx={{
              display: "flex",
              padding: "var(--2, 1rem)",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "var(--2, 1rem)",
              alignSelf: "stretch",
              boxSizing: "border-box"
            }}
          >
            <Button
              variant="formButton"
              size="small"
              startIcon={<EditIcon />}
              sx={{
                width: { xs: "5.5rem", sm: "6.25rem", xxl: "9.25rem" },
                height: { xs: "1.5rem", sm: "1.85rem", xxl: "2.25rem" },
                fontSize: { xs: "0.45rem", sm: "0.55rem", xxl: "1rem" },
                flexDirection: "row",
                fontWeight: "500"
              }}
            >
              Reschedule
            </Button>
            <Button
              variant="formButton"
              size="small"
              startIcon={<CloseIcon />}
              sx={{
                width: { xs: "5.5rem", sm: "6.25rem", xxl: "9.25rem" },
                height: { xs: "1.5rem", sm: "1.85rem", xxl: "2.25rem" },
                fontSize: { xs: "0.45rem", sm: "0.55rem", xxl: "1rem" },
                flexDirection: "row",
                fontWeight: "500",
                background: "#FA7670",
                "&:hover": {
                  background: "#EA5548"
                }
              }}
            >
              cancel
            </Button>
          </Box>
          <Box
            className="table"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              alignSelf: "stretch",
              boxSizing: "border-box"
            }}
          >
            <TableContainer
              sx={{
                width: "100%"
              }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        width: { xs: "20%", sm: "auto" }
                      }}
                    ></TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 700
                      }}
                    >
                      Specialism
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 700
                      }}
                    >
                      Professional
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 700
                      }}
                    >
                      Date
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 700
                      }}
                    >
                      Hour
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currentAppointments.map((appointment) => (
                    <TableRow key={appointment.id}>
                      <TableCell>
                        <Checkbox
                          size={"small"}
                          sx={{
                            "&.Mui-checked": {
                              color: "#6CF585"
                            }
                          }}
                        />
                      </TableCell>
                      <TableCell>{appointment.specialism}</TableCell>
                      <TableCell>{appointment.medic_name}</TableCell>
                      <TableCell>
                        {appointment.appointment_date.slice(0, 10)}
                      </TableCell>
                      <TableCell>
                        {appointment.appointment_hour.slice(0, 5)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow
                    sx={{
                      "& .MuiTableCell-root": {
                        borderBottom: "none"
                      }
                    }}
                  >
                    <TableCell colSpan={5}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          width: "100%"
                        }}
                      >
                        <Pagination
                          pageSize={pageSize}
                          appointments={appointments || []}
                          currentPage={currentPage}
                          pagination={pagination}
                        />
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};
export default PatientAppointments;
