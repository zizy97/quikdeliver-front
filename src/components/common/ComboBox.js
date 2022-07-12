import * as React from 'react';
import {
    TextField,
    Autocomplete
} from '@mui/material';

export default function ComboBox({options, placeholderText, onChangeHandler}) {
  return (
    <Autocomplete
      autoHighlight
      disablePortal
      onChange={onChangeHandler} 
      id="combo-box-demo"
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={placeholderText} />}
    />
  );
}
