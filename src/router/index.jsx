import { useRoutes } from "react-router-dom";
import ScheduleAppointment from "../pages/ScheduleAppointment.jsx";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <ScheduleAppointment />
    }
  ]);
};
export default Router;
