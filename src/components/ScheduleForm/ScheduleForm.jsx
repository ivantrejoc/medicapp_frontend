import { useEffect, useState } from "react";
import {
  Paper,
  Box,
  Typography,
  Divider,
  TextField,
  Button,
  useMediaQuery
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useForm, Controller } from "react-hook-form";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import BasicData from "../BasicData/BasicData";
import { createAppointment, getMedics } from "../../services";
import { getSpecialties } from "../../services";
import dayjs from "dayjs";

const ScheduleForm = () => {
  const [medics, setMedics] = useState([]);
  const [specialties, setSpecialties] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.only("md"));

  useEffect(() => {
    const fetchMedics = async () => {
      const response = await getMedics();
      setMedics(response);
    };

    const fetchSpecialties = async () => {
      const response = await getSpecialties();
      setSpecialties(response);
    };

    fetchMedics();
    fetchSpecialties();
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      patientId: "",
      patient: "",
      medicId: "",
      medic: "",
      specialismId: "",
      specialism: "",
      appointmentDate: "",
      appointmentHour: "",
      comments: ""
    }
  });

  const onSubmit = async (data) => {
    const {
      // patientId,
      // patient,
      medic,
      specialism,
      appointmentDate,
      appointmentHour,
      comments
    } = data;

    const selectedSpecialism = specialties.find((s) => s.name === specialism);
    const specialismId = selectedSpecialism ? selectedSpecialism.id : null;

    const [medicName, medicSurname] = medic.split(" ");
    const selectedMedic = medics.find(
      (m) => m.name === medicName && m.surname === medicSurname
    );
    const medicId = selectedMedic ? selectedMedic.id : null;

    const cleanDate = appointmentDate.format("YYYY-MM-DD");
    const cleanHour = appointmentHour.format("HH:mm:ss");

    const appointmentData = {
      patient_id: 1,
      medic_id: medicId,
      specialism_id: specialismId,
      appointment_date: cleanDate,
      appointment_hour: cleanHour,
      comments: comments,
      patient_name: "John Doe",
      medic_name: medic,
      specialism: specialism
    };

    const response = await createAppointment(appointmentData);
    const responseMessage = await response.body.message;
    alert(responseMessage);
  };

  return (
    <Paper
      elevation={6}
      sx={{
        display: "flex",
        width: { xs: "19.9375rem", md: "39.9375rem" },
        marginLeft: { xs: "10rem", lg: "0rem" },
        height: { xs: "37.4375rem", md: "35.4375rem" },
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: 0,
        background: "var(--background-paper-elevation-6, #FFF)",
        boxSizing: "border-box"
      }}
    >
      {(isMobile || isTablet) && <BasicData />}
      <Box
        className="form"
        sx={{
          display: "flex",
          width: { xs: "17.1875rem", md: "37.1875rem" },
          height: { xs: "33.8rem", md: "29.0625rem" },
          flexDirection: "column",
          alignItems: "flex-start",
          flexShrink: 0,
          boxSizing: "border-box"
        }}
      >
        <Box
          className="title-wrapper"
          sx={{
            display: "flex",
            padding: "var(--2, 1rem) var(--none, 0rem)",
            flexDirection: "column",
            alignItems: "flex-start",
            alignSelf: "stretch",
            boxSizing: "border-box",
            marginBottom: { xs: 0.5, md: 3.5 }
          }}
        >
          <Box
            className="title-container"
            sx={{
              display: "flex",
              alignItems: "flex-start",
              alignSelf: "stretch",
              boxSizing: "border-box"
            }}
          >
            <Typography variant="h2">Schedule appointment</Typography>
          </Box>
          <Divider sx={{ width: "100%", marginTop: 1 }} />
        </Box>
        <Box
          className="inputs-wrapper"
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: "flex",
            height: { xs: "29.2rem", md: "23.3rem" },
            flexDirection: "column",
            alignItems: "flex-start",
            flexShrink: 0,
            alignSelf: "stretch",
            boxSizing: "border-box"
          }}
        >
          <Box
            className="row-1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              padding: "0.625rem",
              alignItems: "center",
              gap: { xs: "1rem", md: "2.1875rem" },
              alignSelf: "stretch",
              boxSizing: "border-box",
              marginBottom: { xs: 1, md: 3.5 }
            }}
          >
            <Controller
              name="specialism"
              control={control}
              rules={{
                required: "Specialism is required"
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  select
                  variant="outlined"
                  label="Specialism"
                  placeholder="Select specialism"
                  error={!!errors.specialism}
                  onChange={(event) => {
                    field.onChange(event);
                    control.setValue(
                      "specialismId",
                      event.target.options[event.target.selectedIndex].id
                    );
                  }}
                  helperText={
                    errors.specialism ? errors.specialism.message : null
                  }
                  SelectProps={{
                    native: true
                  }}
                  InputLabelProps={{
                    shrink: true
                  }}
                  FormHelperTextProps={{
                    sx: {
                      fontSize: "0.75rem",
                      margin: 0
                    }
                  }}
                  sx={{
                    display: "flex",
                    width: "16.75rem",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    boxSizing: "border-box",
                    "& .MuiInputBase-root": {
                      width: "100%"
                    }
                  }}
                >
                  <option value="">Select specialism</option>
                  {specialties?.map((specialism) => (
                    <option
                      key={specialism.id}
                      id={specialism.id}
                      value={specialism.name}
                    >
                      {specialism.name}
                    </option>
                  ))}
                </TextField>
              )}
            />

            <Controller
              name="medic"
              control={control}
              rules={{
                required: "Medic name is required"
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  select
                  variant="outlined"
                  label="Medic"
                  error={!!errors.medic}
                  helperText={errors.medic ? errors.medic.message : null}
                  SelectProps={{
                    native: true
                  }}
                  InputLabelProps={{
                    shrink: true
                  }}
                  FormHelperTextProps={{
                    sx: {
                      fontSize: "0.75rem",
                      margin: 0
                    }
                  }}
                  sx={{
                    display: "flex",
                    width: "16.75rem",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    boxSizing: "border-box",
                    "& .MuiInputBase-root": {
                      width: "100%"
                    }
                  }}
                >
                  <option value="">Select medic</option>
                  {medics?.map((medic) => (
                    <option
                      key={medic.id}
                      id={medic.id}
                      value={`${medic.name} ${medic.surname}`}
                    >
                      {`${medic.name} ${medic.surname}`}
                    </option>
                  ))}
                </TextField>
              )}
            />
          </Box>
          <Box
            className="row-2"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              padding: "0.625rem",
              alignItems: "center",
              gap: { xs: "1rem", md: "2.1875rem" },
              alignSelf: "stretch",
              boxSizing: "border-box",
              marginBottom: { xs: 1, md: 3.5 }
            }}
          >
            <Controller
              name="appointmentDate"
              control={control}
              rules={{
                required: "Appointment date is required"
              }}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  label="Select Date"
                  value={field.value || dayjs(Date.now)}
                  error={!!errors.appointmentDate}
                  helperText={errors.appointmentDate?.message}
                  slotProps={{
                    textField: {
                      size: "small",
                      InputLabelProps: {
                        shrink: true
                      }
                    }
                  }}
                  FormHelperTextProps={{
                    sx: {
                      fontSize: "0.75rem",
                      margin: 0
                    }
                  }}
                  sx={{
                    display: "flex",
                    width: "16.75rem",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    boxSizing: "border-box"
                  }}
                />
              )}
            />
            <Controller
              name="appointmentHour"
              control={control}
              rules={{
                required: "Appointment hour is required"
              }}
              render={({ field }) => (
                <TimePicker
                  {...field}
                  label="Select Hour"
                  value={field.value || dayjs(Date.now)}
                  error={!!errors.appointmentHour}
                  helperText={errors.appointmentHour?.message}
                  SelectProps={{
                    native: true
                  }}
                  slotProps={{
                    textField: {
                      size: "small",
                      InputLabelProps: {
                        shrink: true
                      }
                    }
                  }}
                  FormHelperTextProps={{
                    sx: {
                      fontSize: "0.75rem",
                      margin: 0
                    }
                  }}
                  sx={{
                    display: "flex",
                    width: "16.75rem",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    boxSizing: "border-box"
                  }}
                />
              )}
            />
          </Box>
          <Box
            className="row-3"
            sx={{
              display: "flex",
              height: "6.5rem",
              padding: "0.625rem",
              alignItems: "center",
              alignSelf: "stretch",
              boxSizing: "border-box",
              marginBottom: { xs: 2.5, md: 5.5 }
            }}
          >
            <Controller
              name="comments"
              control={control}
              rules={{
                required: "Comments are required"
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="outlined-textarea"
                  label="Comments"
                  placeholder="Your comments..."
                  multiline
                  rows={2}
                  error={!!errors.comments}
                  helperText={errors.comments ? errors.comments.message : null}
                  InputLabelProps={{ shrink: true }}
                  FormHelperTextProps={{
                    sx: {
                      fontSize: "0.75rem",
                      margin: 0
                    }
                  }}
                  sx={{
                    height: "5.75rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                    boxSizing: "border-box",
                    "& .MuiInputBase-root": {
                      width: "100%"
                    }
                  }}
                />
              )}
            />
          </Box>
          <Button
            type="submit"
            size="large"
            variant="formButton"
            sx={{
              height: "2rem"
            }}
          >
            Schedule appointment
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};
export default ScheduleForm;
