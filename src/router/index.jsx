import { useRoutes, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";
import ScheduleAppointment from "../pages/ScheduleAppointment.jsx";
import CreateHistory from "../pages/CreateHistory.jsx";
import History from "../pages/History.jsx";
import Appointments from "../pages/Appointments.jsx";
import SignIn from "../pages/SignIn.jsx";
import SignUp from "../pages/SignUp.jsx";
import NotFound from "../pages/NotFound.jsx";

const Router = () => {
  const { isAuth } = useAuth();

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
      element: isAuth ? <Appointments /> : <Navigate to="/" />
    },
    {
      path: "/appointments/schedule",
      element: isAuth ? <ScheduleAppointment /> : <Navigate to="/" />
    },
    {
      path: "/history",
      element: isAuth ? <History /> : <Navigate to="/" />
    },
    {
      path: "/history/create",
      element: isAuth ? <CreateHistory /> : <Navigate to="/" />
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]);
};
export default Router;
