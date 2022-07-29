import React from "react"; //react
import TextField from "@mui/material/TextField";

function TextInput({
  maxRows,
  name,
  value,
  onChange,
  label,
  id,
  InputLabelProps,
  InputProps,
}) {
  return (
    <TextField
      style={{
        backgroundColor: "#FFFFFF",
      }}
      fullWidth
      sx={{ mx: 0, borderRadius: 1 }}
      id={id}
      label={label}
      InputLabelProps={InputLabelProps}
      placeholder="Placeholder"
      multiline
      maxRows={maxRows}
      name={name}
      value={value}
      onChange={onChange}
      // onChange={handleChange}
      margin="dense"
      InputProps={InputProps}
    />
  );
}

export default TextInput;
