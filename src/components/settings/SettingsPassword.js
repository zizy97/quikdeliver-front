import { useState } from "react";
//=======MUI======
import { styled } from "@mui/material/styles";
//=======MUI======
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
} from "@mui/material";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#1964FF",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#1964FF",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#1964FF",
      borderRadius: 30,
    },
    "&:hover fieldset": {
      borderColor: "#1964FF",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1964FF",
    },
  },
});

export const SettingsPassword = (props) => {
  const [values, setValues] = useState({
    password: "",
    confirm: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form {...props}>
      <Card>
        <CardHeader subheader="Update password" title="Password" />
        <Divider />
        <CardContent>
          <CssTextField
            fullWidth
            size="small"
            label="Password"
            margin="normal"
            name="password"
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          <CssTextField
            // variant="style1"
            fullWidth
            size="small"
            label="Confirm password"
            margin="normal"
            name="confirm"
            onChange={handleChange}
            type="password"
            value={values.confirm}
            variant="outlined"
          />
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            p: 2,
          }}
        >
          <Button color="primary" variant="contained" sx={{ borderRadius: 10 }}>
            Update
          </Button>
        </Box>
      </Card>
    </form>
  );
};
