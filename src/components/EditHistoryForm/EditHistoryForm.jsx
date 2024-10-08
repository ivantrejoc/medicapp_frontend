import { useEffect, useState } from "react";
import {
  Paper,
  Box,
  Typography,
  Divider,
  TextField,
  InputAdornment,
  FormControl,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Button,
  useMediaQuery
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useTheme } from "@mui/material/styles";
import BasicData from "../BasicData/BasicData";
import AlertModal from "../AlertModal/AlertModal";
import Loading from "../Loading/Loading";
import { useStories } from "../../store/storiesState";
import { editHistory } from "../../services/historyServices";
import { useNavigate } from "react-router-dom";

const EditHistoryForm = ({ user }) => {
  const { id } = user;
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);
  const [openAlert, setOpenAlert] = useState(false);
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.only("md"));

  const { historyById, fetchStoryById } = useStories((state) => ({
    historyById: state.historyById,
    fetchStoryById: state.fetchStoryById
  }));

  useEffect(() => {
    const loadStoryById = async (id) => {
      await fetchStoryById(id);
      setLoading(false);
    };
    loadStoryById(id);
  }, [id, fetchStoryById]);

  const story = historyById;
  const { storyId } = story;

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      age: "",
      height: "",
      weight: "",
      bmi: "",
      smoking: false,
      drugs: false,
      hypertension: false,
      medication: false,
      alcohol: false,
      comorbilities: ""
    }
  });

  const onSubmit = async (data) => {
    const formData = {
      ...data,
      smoking: data.smoking ? "yes" : "no",
      drugs: data.drugs ? "yes" : "no",
      hypertension: data.hypertension ? "yes" : "no",
      medication: data.medication ? "yes" : "no",
      alcohol: data.alcohol ? "yes" : "no",
      height: `${data.height}cm.`,
      weight: `${data.weight}lb.`
    };

    const historyData = {
      ...formData
    };
    
    const response = await editHistory(storyId, historyData);    
    const responseMessage = await response.message;
    if(responseMessage === "Medical story updated successfully")
    reset();
    setMessage(responseMessage);
    setOpenAlert(true);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
    if (message === "Medical story updated successfully") {
      navigate("/history");
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Paper
      elevation={6}
      sx={{
        display: "flex",
        width: { xs: "19.9375rem", md: "39.9375rem" },
        marginLeft: { xs: "10rem", lg: "0rem" },
        height: { xs: "37.4375rem", md: "35.4375rem" },
        flexDirection: "column",
        justifyContent: { xs: "flex-start", md: "center" },
        alignItems: "center",
        flexShrink: 0,
        background: "var(--background-paper-elevation-6, #FFF)",
        boxSizing: "border-box"
      }}
    >
      {openAlert && (
        <AlertModal
          open={openAlert}
          message={message}
          onClose={handleCloseAlert}
        />
      )}
      {(isMobile || isTablet) && (
        <BasicData name={user?.name} lastName={user?.lastName} />
      )}
      <Box
        className="form"
        sx={{
          display: "flex",
          width: { xs: "17.1875rem", md: "37.1875rem" },
          height: { xs: "31.3125rem", md: "29.0625rem" },
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
            <Typography variant="h2">Edit your Medical History</Typography>
          </Box>
          <Divider sx={{ width: "100%", marginTop: 1 }} />
        </Box>
        <Box
          className="inputs-wrapper"
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: "flex",
            height: { xs: "28.2rem", md: "23.3rem" },
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
              display: { xs: "grid", md: "flex" },
              gridTemplateColumns: { xs: "repeat(2, 2fr)" },
              padding: { xs: "0rem", md: "0.625rem" },
              alignItems: "flex-start",
              gap: { xs: "1.75rem", md: "2.1875rem" },
              alignSelf: "stretch",
              boxSizing: "border-box",
              marginBottom: { xs: 1.5, md: 3.5 }
            }}
          >
            <Controller
              name="age"
              control={control}
              rules={{
                required: "Required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Only numbers"
                }
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  variant="outlined"
                  label="Age"
                  placeholder={story.age.toString()}
                  error={!!errors.age}
                  helperText={errors.age ? errors.age.message : null}
                  InputLabelProps={{
                    shrink: true
                  }}
                  FormHelperTextProps={{
                    sx: {
                      fontSize: "0.75rem",
                      margin: 1
                    }
                  }}
                  sx={{
                    display: "flex",
                    width: "7.375rem",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    boxSizing: "border-box",
                    "& .MuiInputBase-root": {
                      width: "100%"
                    }
                  }}
                />
              )}
            />

            <Controller
              name="height"
              control={control}
              rules={{
                required: "Required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Only numbers"
                }
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  variant="outlined"
                  label="Height"
                  placeholder={story.height}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">cm.</InputAdornment>
                    )
                  }}
                  error={!!errors.height}
                  helperText={errors.height ? errors.height.message : null}
                  InputLabelProps={{
                    shrink: true
                  }}
                  FormHelperTextProps={{
                    sx: {
                      fontSize: "0.75rem",
                      margin: 1
                    }
                  }}
                  sx={{
                    display: "flex",
                    width: "7.375rem",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    boxSizing: "border-box",
                    "& .MuiInputBase-root": {
                      width: "100%"
                    }
                  }}
                />
              )}
            />
            <Controller
              name="weight"
              control={control}
              rules={{
                required: "Required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Only numbers"
                }
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  variant="outlined"
                  label="Weight"
                  placeholder={story.weight}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">lb.</InputAdornment>
                    )
                  }}
                  error={!!errors.weight}
                  helperText={errors.weight ? errors.weight.message : null}
                  InputLabelProps={{
                    shrink: true
                  }}
                  FormHelperTextProps={{
                    sx: {
                      fontSize: "0.75rem",
                      margin: 1
                    }
                  }}
                  sx={{
                    display: "flex",
                    width: "7.375rem",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    boxSizing: "border-box",
                    "& .MuiInputBase-root": {
                      width: "100%"
                    }
                  }}
                />
              )}
            />
            <Controller
              name="bmi"
              control={control}
              rules={{
                required: "Required",
                pattern: {
                  value: /^[\d,]{1,3}(\.[0-9]{2})?$/,
                  message: "Only 2 decimals"
                }
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  variant="outlined"
                  label="BMI"
                  placeholder={story.bmi}
                  error={!!errors.bmi}
                  helperText={errors.bmi ? errors.bmi.message : null}
                  InputLabelProps={{
                    shrink: true
                  }}
                  FormHelperTextProps={{
                    sx: {
                      fontSize: "0.75rem",
                      margin: 1
                    }
                  }}
                  sx={{
                    display: "flex",
                    width: "7.375rem",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    boxSizing: "border-box",
                    "& .MuiInputBase-root": {
                      width: "100%"
                    }
                  }}
                />
              )}
            />
          </Box>
          <Box
            className="row-2"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              padding: { xs: "0", md: "0.625rem" },
              alignItems: "center",
              gap: { xs: "1.75rem", md: "2.1875rem" },
              alignSelf: "stretch",
              boxSizing: "border-box",
              marginBottom: { xs: 0.5, md: 1.5, lg: 3.5 }
            }}
          >
            <FormControl>
              <FormGroup
                row
                sx={{
                  display: { xs: "grid", md: "flex" },
                  gridTemplateColumns: { xs: "repeat(2, 3fr)" }
                }}
              >
                <Controller
                  name="smoking"
                  defaultValue={false}
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      value="smoking"
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          fontFamily: "Lato, sans-serif",
                          fontSize: "1rem",
                          fontWeight: "500"
                        }
                      }}
                      control={
                        <Checkbox
                          {...field}
                          size="small"
                          checked={field.value}
                          onChange={(e) => field.onChange(e.target.checked)}
                          sx={{
                            "&.Mui-checked": {
                              color: "#6CF585"
                            }
                          }}
                        />
                      }
                      label="Smoking"
                    />
                  )}
                />
                <Controller
                  name="drugs"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      value="drugs"
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          fontFamily: "Lato, sans-serif",
                          fontSize: "1rem",
                          fontWeight: "500"
                        }
                      }}
                      control={
                        <Checkbox
                          {...field}
                          size="small"
                          checked={field.value}
                          onChange={(e) => field.onChange(e.target.checked)}
                          sx={{
                            "&.Mui-checked": {
                              color: "#6CF585"
                            }
                          }}
                        />
                      }
                      label="Drugs"
                    />
                  )}
                />
                <Controller
                  name="alcohol"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      value="alcohol"
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          fontFamily: "Lato, sans-serif",
                          fontSize: "1rem",
                          fontWeight: "500"
                        }
                      }}
                      control={
                        <Checkbox
                          {...field}
                          size="small"
                          checked={field.value}
                          onChange={(e) => field.onChange(e.target.checked)}
                          sx={{
                            "&.Mui-checked": {
                              color: "#6CF585"
                            }
                          }}
                        />
                      }
                      label="Alcohol"
                    />
                  )}
                />
                <Controller
                  name="hypertension"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      value="hypertension"
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          fontFamily: "Lato, sans-serif",
                          fontSize: "1rem",
                          fontWeight: "500"
                        }
                      }}
                      control={
                        <Checkbox
                          {...field}
                          size="small"
                          checked={field.value}
                          onChange={(e) => field.onChange(e.target.checked)}
                          sx={{
                            "&.Mui-checked": {
                              color: "#6CF585"
                            }
                          }}
                        />
                      }
                      label="Hypertension"
                    />
                  )}
                />
                <Controller
                  name="medication"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      value="medication"
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          fontFamily: "Lato, sans-serif",
                          fontSize: "1rem",
                          fontWeight: "500"
                        }
                      }}
                      control={
                        <Checkbox
                          {...field}
                          size="small"
                          checked={field.value}
                          onChange={(e) => field.onChange(e.target.checked)}
                          sx={{
                            "&.Mui-checked": {
                              color: "#6CF585"
                            }
                          }}
                        />
                      }
                      label="Medication"
                    />
                  )}
                />
              </FormGroup>
            </FormControl>
          </Box>
          <Box
            className="row-3"
            sx={{
              display: "flex",
              height: { xs: "7rem", md: "6.5rem" },
              padding: "0.625rem",
              alignItems: "center",
              alignSelf: "stretch",
              boxSizing: "border-box",
              marginBottom: { xs: 1, md: 3.5, lg: 5.5 }
            }}
          >
            <Controller
              name="comorbilities"
              control={control}
              rules={{
                required: "Required",
                maxLength: {
                  value: 200,
                  message: "Maximum 200 characters"
                }
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="outlined-textarea"
                  label="Comorbilities"
                  placeholder={story.comorbilities}
                  multiline
                  rows={2}
                  error={!!errors.comorbilities}
                  helperText={
                    errors.comorbilities ? errors.comorbilities.message : null
                  }
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
            EDIT MY HISTORY
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};
export default EditHistoryForm;
