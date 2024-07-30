import { useEffect, useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Collapse,
  Box,
  Avatar,
  Typography,
  IconButton
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FolderIcon from "@mui/icons-material/Folder";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import AssignmentIcon from "@mui/icons-material/Assignment";

const Sidenav = ({ drawerExpanded, setDrawerExpanded }) => {
  const [openAppointmens, setOpenAppointments] = useState(false);
  const [openMedicalHistory, setOpenMedicalHistory] = useState(false);
  const [user, setUser] = useState(null);  
  
  useEffect(() =>{
    const storedUser = JSON.parse(localStorage.getItem("currentUser"))
    if (storedUser){
      setUser(storedUser)
    }    
  }, [])
  

  const toggleDrawer = () => {
    setDrawerExpanded(!drawerExpanded);
  };

  const handleDropdown = (dropdown) => () => {
    switch (dropdown) {
      case "appointments":
        setOpenAppointments(!openAppointmens);
        break;
      case "medicalHistory":
        setOpenMedicalHistory(!openMedicalHistory);
        break;
      default:
        break;
    }
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: { sm: "7rem", md: "14rem" },
        flexShrink: 0,
        boxSizing: "border-box",
        zIndex: 1200,
        "& .MuiDrawer-paper": {
          width: drawerExpanded ? { sm: "14rem", md: "14rem" } : "5rem",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          background: "#E2E2E2",          
          alignItems: "center",
          justifyContent: "space-between",         
        }
      }}
    >
      <Box
        sx={{          
          width: drawerExpanded ? { sm: "14rem", md: "14rem" } : "5rem",
          maxWidth: "14rem",
          height: "24.5rem",
          marginTop: 9.5,
          overflow: "hidden"
        }}
        component="nav"
      >
        <IconButton
          onClick={toggleDrawer}
          sx={{ alignSelf: drawerExpanded ? "flex-end" : "center", m: 1 }}
        >
          {drawerExpanded ? <NavigateBeforeIcon /> : <NavigateNextIcon />}
        </IconButton>
        {drawerExpanded ? (
          <ListItemButton onClick={handleDropdown("appointments")}>
            <ListItemIcon>
              <CalendarMonthIcon />
            </ListItemIcon>
            <ListItemText primary="Appointments" />
            {openAppointmens ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        ) : (
          <Tooltip title="Appointments" placement="right-start">
            <ListItemButton onClick={handleDropdown("appointments")}>
              <ListItemIcon>
                <CalendarMonthIcon />
              </ListItemIcon>
              {openAppointmens ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </Tooltip>
        )}
        {drawerExpanded ? (
          <Collapse in={openAppointmens} timeout="auto" unmountOnExit>
            <List sx={{height: "7rem"}} component="div" disablePadding>
              <ListItemButton href="/appointments/schedule" sx={{ pl: 4 }}>
                <ListItemIcon>
                  <EditCalendarIcon />
                </ListItemIcon>
                <ListItemText primary="Schedule Appointment" />
              </ListItemButton>
              <ListItemButton href="/appointments" sx={{ pl: 4 }}>
                <ListItemIcon>
                  <PermContactCalendarIcon />
                </ListItemIcon>
                <ListItemText primary="My Appointments" />
              </ListItemButton>
            </List>
          </Collapse>
        ) : (
          <Collapse in={openAppointmens} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Tooltip title="Schedule Appointment" placement="right-start">
                <ListItemButton href="/appointments/schedule" sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <EditCalendarIcon />
                  </ListItemIcon>
                </ListItemButton>
              </Tooltip>
              <Tooltip title="My appointments" placement="right-start">
                <ListItemButton href="/appointments" sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <PermContactCalendarIcon />
                  </ListItemIcon>
                </ListItemButton>
              </Tooltip>
            </List>
          </Collapse>
        )}
        {drawerExpanded ? (
          <ListItemButton onClick={handleDropdown("medicalHistory")}>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary="Medical History" />
            {openMedicalHistory ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        ) : (
          <Tooltip title="Medical History" placement="right-start">
            <ListItemButton onClick={handleDropdown("medicalHistory")}>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              {openMedicalHistory ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </Tooltip>
        )}
        {drawerExpanded ? (
          <Collapse in={openMedicalHistory} timeout="auto" unmountOnExit>
            <List sx={{height: "8rem"}} component="div" disablePadding>
              <ListItemButton href="/history/create" sx={{ pl: 4 }}>
                <ListItemIcon>
                  <HistoryEduIcon />
                </ListItemIcon>
                <ListItemText primary="Create Medical History" />
              </ListItemButton>
              <ListItemButton href="/history" sx={{ pl: 4 }}>
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="My Medical History" />
              </ListItemButton>
            </List>
          </Collapse>
        ) : (
          <Collapse in={openMedicalHistory} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Tooltip title="Create Medical History" placement="right-start">
                <ListItemButton href="/history/create" sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <HistoryEduIcon />
                  </ListItemIcon>
                </ListItemButton>
              </Tooltip>
              <Tooltip title="My Medical History" placement="right-start">
                <ListItemButton href="/history" sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <AssignmentIcon />
                  </ListItemIcon>
                </ListItemButton>
              </Tooltip>
            </List>
          </Collapse>
        )}
      </Box>
      {drawerExpanded && (
        <Box
          sx={{
            display: "flex",
            width: "10rem",
            padding: "var(--1, 0.5rem) var(--none, 0rem)",
            alignItems: "center",
            boxSizing: "border-box"
          }}
        >
          <Box
            sx={{
              display: "flex",
              minWidth: "var(--7, 3.5rem)",
              flexDirection: "column",
              alignItems: "flex-start",
              boxSizing: "border-box"
            }}
          >
            <Avatar
              content="text"
              sx={{
                background: "#6CF585"
              }}
            >
              JD
            </Avatar>
          </Box>
          <Box
            sx={{
              display: "flex",
              padding: "0.25rem var(--none, 0rem)",
              flexDirection: "column",
              alignItems: "flex-start",
              flex: "1 0 0",
              boxSizing: "border-box"
            }}
          >
            <Typography variant="avatarName">{user.name} {user.lastName}</Typography>
            <Typography variant="avatarRole">Patient</Typography>
          </Box>
        </Box>
      )}
    </Drawer>
  );
};
export default Sidenav;
