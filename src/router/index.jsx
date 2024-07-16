import { useRoutes } from "react-router-dom";
import ScheduleAppointment from "../pages/ScheduleAppointment.jsx";
import Home from "../pages/Home.jsx";
import CreateHistory from "../pages/CreateHistory";

const Router = () => {
  return useRoutes([
    {
      path: "/appointments",
      element: <Home />
    },
    {
      path: "/appointments/schedule",
      element: <ScheduleAppointment />
    },
    {
      path: "/history/create",
      element: <CreateHistory />
    }
  ]);
};
export default Router;
