import { useState } from "react";
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

const Sidenav = () => {
  const [drawerExpanded, setDrawerExpanded] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDrawer = () => {
    setDrawerExpanded(!drawerExpanded);
  };

  const handleDropdown = () => {
    setOpenDropdown(!openDropdown);
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

          boxSizing: "border-box",
          background: "#E2E2E2",
          display: "flex",
          alignItems: "center",
          gap: { sm: 78, md: 60, xl: 52 }
        }
      }}
    >
      <Box
        sx={{
          width: drawerExpanded ? { sm: "14rem", md: "14rem" } : "5rem",
          maxWidth: "14rem",
          height: "14rem",
          marginTop: 10
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
          <ListItemButton onClick={handleDropdown}>
            <ListItemIcon>
              <CalendarMonthIcon />
            </ListItemIcon>
            <ListItemText primary="Appointments" />
            {openDropdown ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        ) : (
          <Tooltip title="Appointments" placement="right-start">
            <ListItemButton onClick={handleDropdown}>
              <ListItemIcon>
                <CalendarMonthIcon />
              </ListItemIcon>
              {openDropdown ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </Tooltip>
        )}
        {drawerExpanded ? (
          <Collapse in={openDropdown} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <EditCalendarIcon />
                </ListItemIcon>
                <ListItemText primary="Schedule Appointment" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <PermContactCalendarIcon />
                </ListItemIcon>
                <ListItemText primary="My Appointments" />
              </ListItemButton>
            </List>
          </Collapse>
        ) : (
          <Collapse in={openDropdown} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Tooltip title="Schedule Appointment" placement="right-start">
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <EditCalendarIcon />
                  </ListItemIcon>
                </ListItemButton>
              </Tooltip>
              <Tooltip title="My appointments" placement="right-start">
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <PermContactCalendarIcon />
                  </ListItemIcon>
                </ListItemButton>
              </Tooltip>
            </List>
          </Collapse>
        )}
        {drawerExpanded ? (
          <ListItemButton>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary="My medical history" />
          </ListItemButton>
        ) : (
          <Tooltip title="My medical history" placement="right-start">            
            <ListItemButton>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
            </ListItemButton>
          </Tooltip>
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
            <Typography variant="avatarName">John Doe</Typography>
            <Typography variant="avatarRole">Patient</Typography>
          </Box>
        </Box>
      )}
    </Drawer>
  );
};
export default Sidenav;
