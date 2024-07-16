import { useRoutes } from "react-router-dom";
import ScheduleAppointment from "../pages/ScheduleAppointment.jsx";
import Home from "../pages/Home.jsx";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/schedule",
      element: <ScheduleAppointment />
    }
  ]);
};
export default Router;
