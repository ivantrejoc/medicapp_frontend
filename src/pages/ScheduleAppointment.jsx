import { Box } from "@mui/material";
import { ScheduleForm } from "../components/ScheduleForm";

const ScheduleAppointment = () => {
  // const id = 2;
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await getUserById(id);
  //       console.log(response);
  //       return(response);
  //     } catch (error) {
  //       console.error("Error fetching user:", error);
  //     }
  //   };
  //   fetchUser();
  // }, [id]);

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
        overflowX: "hidden",
        overflowY: { xs: "visible", md: "hidden" }
      }}
    >
      <ScheduleForm />
    </Box>
  );
};
export default ScheduleAppointment;
