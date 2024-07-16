import { useRoutes } from "react-router-dom";
import ScheduleAppointment from "../pages/ScheduleAppointment.jsx";
import CreateHistory from "../pages/CreateHistory.jsx";
import History from "../pages/History.jsx";

const Router = () => {
  return useRoutes([
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
