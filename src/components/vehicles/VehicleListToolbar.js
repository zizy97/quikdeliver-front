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
} from "@mui/material";
//import { Download as DownloadIcon } from "../../icons/download";
import { Search as SearchIcon } from "../../icons/search";
//import { Upload as UploadIcon } from "../../icons/upload";
//====================model==================//
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
//===================model ===============//

export function VehicleListToolbar(props) {
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
          Vehicles
        </Typography>
        <Box sx={{ m: 1 }}>
          {/**   <Button startIcon={<UploadIcon fontSize="small" />} sx={{ mr: 1 }}>
            Import
          </Button>
          <Button startIcon={<DownloadIcon fontSize="small" />} sx={{ mr: 1 }}>
            Export
      </Button>*/}
          <Button color="primary" variant="contained" onClick={handleClickOpen}>
            Add Vehicle
          </Button>
        </Box>
        <Dialog open={open} onClose={handleClose} sx={{ mt: { xs: 5 } }}>
          <DialogTitle>Add Vehicle Details</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter all the details about the vehicle.
            </DialogContentText>
            <TextField
              sx={{ m: 1 }}
              id="outlined-basic"
              label="Enter Vehicle Name"
              variant="outlined"
            />
            <TextField
              sx={{ m: 1 }}
              id="outlined-basic"
              label="Enter Vehicle Number"
              variant="outlined"
            />
            <TextField
              sx={{ m: 1 }}
              id="outlined-basic"
              label="Enter Vehicle Color"
              variant="outlined"
            />
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
                      <SvgIcon fontSize="small" color="action">
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  ),
                }}
                placeholder="Search Vehicle"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
