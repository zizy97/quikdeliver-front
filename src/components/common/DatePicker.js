import React from "react";
import { makeStyles } from "@mui/styles";
import {TextField} from "@mui/material";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative"
  },
  display: {
    position: "absolute",
    top: 2,
    left: 0,
    bottom: 2,
    background: "white",
    pointerEvents: "none",
    right: 50,
    display: "flex",
    alignItems: "center"
  },
  input: {}
}));

function InputComponent({ defaultValue, inputRef, ...props }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(() => props.value || defaultValue);

  const handleChange = event => {
    setValue(event.target.value);
    if (props.onChange) {
      props.onChange(event);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.display}>{value}</div>
      <input
        className={classes.input}
        ref={inputRef}
        {...props}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
}

function DatePicker() {
  return (
    <TextField
      id="date"
      label="Birthday"
      type="date"
      InputProps={{
        inputComponent: InputComponent
      }}
      
      InputLabelProps={{
        shrink: true
      }}
    />
  );
}

export default DatePicker;

