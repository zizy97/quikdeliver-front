import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography,
  FormControlLabel,
} from "@mui/material";
import { Search as SearchIcon } from "../../icons/search";
//import { Upload as UploadIcon } from "../../icons/upload";
//import { Download as DownloadIcon } from "../../icons/download";

//=============model============//
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Checkbox from "@mui/material/Checkbox";
//===========model===========//

export function DriverListToolbar(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box {...props}>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          m: -1,
        }}
      >
        <Typography sx={{ m: 1 }} variant="h4">
          Driver List
        </Typography>
        <Box sx={{ m: 1 }}>
          {/**  <Button startIcon={<UploadIcon fontSize="small" />} sx={{ mr: 1 }}>
            Import
          </Button>
          <Button startIcon={<DownloadIcon fontSize="small" />} sx={{ mr: 1 }}>
            Export
          </Button>
      */}
          <Button color="primary" variant="contained" onClick={handleClickOpen}>
            Add Drivers
          </Button>
        </Box>
        <Dialog open={open} onClose={handleClose} sx={{ mt: { xs: 5 } }}>
          <DialogTitle>Add Driver Details</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ pb: 2 }}>
              Please enter all the details about the Drivers.
            </DialogContentText>
            <TextField
              sx={{ m: 1 }}
              id="outlined-basic"
              label="Enter Frist Name"
              variant="outlined"
            />
            <TextField
              sx={{ m: 1 }}
              id="outlined-basic"
              label="Enter Last Name"
              variant="outlined"
            />
            <TextField
              sx={{ m: 1 }}
              id="outlined-basic"
              label="Enter ID Number"
              variant="outlined"
            />
            <TextField
              sx={{ m: 1 }}
              id="outlined-basic"
              label="Enter Email"
              variant="outlined"
              type="email"
            />
            <TextField
              sx={{ m: 1 }}
              id="outlined-basic"
              label="Enter Address"
              variant="outlined"
            />
            <TextField
              sx={{ m: 1 }}
              id="outlined-basic"
              label="Enter Telephone Number"
              variant="outlined"
            />
            <DialogContentText sx={{ mt: 2 }}>
              Choose vehicles to able to drive
            </DialogContentText>
            <FormControlLabel control={<Checkbox />} label="Motor Bike" />
            <FormControlLabel control={<Checkbox />} label="Car" />
            <FormControlLabel control={<Checkbox />} label="Van" />
            <FormControlLabel control={<Checkbox />} label="Lorry" />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              variant="contained"
              size="small"
              sx={{
                borderRadius: 30,
                width: 80,
                backgroundColor: "primary.main",
                "&:hover": {
                  backgroundColor: "primary.main",
                },
              }}
            >
              Save
            </Button>
            <Button
              onClick={handleClose}
              variant="contained"
              size="small"
              sx={{
                borderRadius: 30,
                backgroundColor: "primary.main",
                "&:hover": {
                  backgroundColor: "primary.main",
                },
              }}
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon color="action" fontSize="small">
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  ),
                }}
                placeholder="Search Drivers"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
