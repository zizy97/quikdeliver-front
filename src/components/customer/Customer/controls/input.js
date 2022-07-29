import React from "react";
import TextField from "@mui/material/TextField";

export default function input(props) {
  const { id, name, label, value, onChange } = props;
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id={id || id}
      label={label || label}
      name={name || name}
      value={value || value}
      onChange={onChange}
      autoComplete="off"
      autoFocus
    />
  );
}
