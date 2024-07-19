import { useRoutes } from "react-router-dom";
import ScheduleAppointment from "../pages/ScheduleAppointment.jsx";
import CreateHistory from "../pages/CreateHistory.jsx";
import History from "../pages/History.jsx";
import Appointments from "../pages/Appointments.jsx";
import SignIn from "../pages/SignIn.jsx";
import SignUp from "../pages/SignUp.jsx";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <SignIn />
    },
    {
      path: "/signup",
      element: <SignUp />
    },
    {
      path: "/appointments",
      element: <Appointments />
    },
    {
      path: "/appointments/schedule",
      element: <ScheduleAppointment />
    },
    {
      path: "/history",
      element: <History />
    },
    {
      path: "/history/create",
      element: <CreateHistory />
    }
  ]);
};
export default Router;
