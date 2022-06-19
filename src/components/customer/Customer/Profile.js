import React, { useState, useEffect } from "react"; //react

//--MUI--
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import Grow from "@mui/material/Grow";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Collapse from "@mui/material/Collapse";
import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { tableCellClasses } from "@mui/material/TableCell";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

//--MUI--

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Profile() {
  const Input = styled("input")({
    display: "none",
  });

  // =============Transition handling===========
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    return () => {
      setChecked(true);
      console.log(" clecked ");
    };
  }, []);
  // =============Transition handling end===========

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

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //========Previous Payment Component===================
  function VehicleType(prop) {
    return (
      <Card
        variant="outlined"
        sx={{
          bgcolor: "#D3E2FF",
          alignItems: "center",
          borderColor: "#FFD481",
          elavation: 0,
          mx: 2,
          mt: 0,
          width: 200,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
          alt="mage"
          style={{ width: "100%", height: "5rem", objectFit: "cover" }}
        />
        <CardContent
          component={"div"}
          sx={{
            justifyContent: "center",
          }}
        >
          <Typography component={"div"} variant="text.primary">
            2022.Mar.25
          </Typography>
          <hr />
          <Typography component={"div"} color="text.primary">
            Delivery Cost <b>1800LKR</b>
          </Typography>
          <hr />
          <Typography component={"div"} color="text.secondary">
            Mathara
          </Typography>
          <hr />
          <Typography component={"div"} variant="body2">
            Go home Gota.
          </Typography>
        </CardContent>

        <CardActions
          component={"div"}
          sx={{
            justifyContent: "center",
          }}
        >
          <Button
            size="small"
            variant="outlined"
            sx={{
              m: 0,
              color: "black",
              width: 80,
              borderRadius: 10,
            }}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    );
  }
  //========Previous Payment Component ending===================

  // =============TABLE CONTENT==============
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#3885BD",
      color: theme.palette.common.white,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "#FFF2D8",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
      <React.Fragment>
        <StyledTableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          <StyledTableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </StyledTableCell>
          <StyledTableCell component="th" scope="row">
            {row.name}
          </StyledTableCell>
          <StyledTableCell align="left">{row.calories}</StyledTableCell>
          <StyledTableCell align="left">{row.fat}</StyledTableCell>
          <StyledTableCell align="right">{row.carbs}</StyledTableCell>
          <StyledTableCell align="right">{row.protein}</StyledTableCell>
        </StyledTableRow>
        <TableRow>
          <StyledTableCell
            style={{ paddingBottom: 0, paddingTop: 0 }}
            colSpan={6}
          >
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                {/* <Typography variant="body2" gutterBottom component="div">
                  Proof of delivery
                </Typography> */}
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Vehicle Type</TableCell>
                      <TableCell>Vehicle Owner</TableCell>
                      <TableCell align="left">Driver</TableCell>
                      <TableCell align="left">Given Rating</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.history.map((historyRow) => (
                      <TableRow key={historyRow.date}>
                        <StyledTableCell component="th" scope="row">
                          {historyRow.date}
                        </StyledTableCell>
                        <StyledTableCell>
                          {historyRow.customerId}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {historyRow.amount}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {Math.round(historyRow.amount * row.price * 100) /
                            100}
                        </StyledTableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </StyledTableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  Row.propTypes = {
    row: PropTypes.shape({
      calories: PropTypes.number.isRequired,
      carbs: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      history: PropTypes.arrayOf(
        PropTypes.shape({
          amount: PropTypes.number.isRequired,
          customerId: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
        })
      ).isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      protein: PropTypes.number.isRequired,
    }).isRequired,
  };

  function createData(name, calories, fat, carbs, protein, price) {
    return {
      name,
      calories,
      fat,
      carbs,
      protein,
      price,
      history: [
        {
          date: "bike",
          customerId: "Sarath perera",
          amount: "Anura Kumara",
        },
        {
          date: "Car",
          customerId: "Wasantha Kumara",
          amount: "Tilwin Silva",
        },
      ],
    };
  }

  const rows = [
    createData(
      "2022-02-03",
      "Ambalantota",
      "Thangalle",
      "2hrs",
      "400LKR",
      3.99
    ),
    createData("2022-02-03", "gandara", "Mathara", "33min", "370LKR", 4.99),
    createData("2022-02-03", "gandara", "Mathara", "33min", "370LKR", 3.79),
  ];

  // =============TABLE CONTENT==============

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          bgcolor: "transparent",
          pt: 10,
          pb: 2,

          px: 4,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5} md={3} lg={3}>
            <Box sx={{ minWidth: 200 }}>
              <Grow
                in={checked}
                style={{ transformOrigin: "0 0 0" }}
                {...(checked ? { timeout: 500 } : {})}
              >
                <Card
                  variant="outlined"
                  sx={{
                    bgcolor: "white",
                    justifyContent: "center",
                    borderColor: "#FFD481",
                    borderTopLeftRadius: 5,
                    elavation: 0,
                    mx: 2,
                    mt: 0,
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
                    alt="mage"
                    style={{
                      width: "100%",
                      height: "10rem",
                      objectFit: "cover",
                    }}
                  />
                  <CardContent
                    sx={{
                      py: 0,
                      justifyContent: "center",
                    }}
                  >
                    <Typography component={"div"} variant="h6">
                      Chandana Fernando
                    </Typography>
                  </CardContent>

                  <CardActions
                    component={"div"}
                    sx={{
                      justifyContent: "center",
                    }}
                  >
                    <label htmlFor="icon-button-file">
                      <Input
                        accept="image/*"
                        id="icon-button-file"
                        type="file"
                      />
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        <PhotoCamera />
                      </IconButton>
                    </label>
                  </CardActions>
                </Card>
              </Grow>
            </Box>
          </Grid>
          <Grid item xs={12} sm={7} md={9} lg={9}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              {/* ========Name========= */}
              <CssTextField
                size="small"
                id="custom-css-outlined-input"
                label="Name"
                InputLabelProps={{
                  style: {
                    color: "black",
                  },
                }}
                variant="standard"
                sx={{
                  width: "80%",
                  mx: 3,
                }}
                placeholder="Placeholder"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <CssTextField
                size="small"
                id="custom-css-outlined-input"
                label="Email"
                InputLabelProps={{
                  style: {
                    color: "black",
                  },
                }}
                variant="standard"
                sx={{
                  width: "80%",
                  ml: 3,
                }}
                placeholder="Placeholder"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <CssTextField
                size="small"
                id="custom-css-outlined-input"
                label="Password"
                InputLabelProps={{
                  style: {
                    color: "black",
                  },
                }}
                variant="standard"
                sx={{
                  width: "80%",
                  ml: 3,
                }}
                placeholder="Placeholder"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <CssTextField
                size="small"
                id="custom-css-outlined-input"
                label="TP Number"
                InputLabelProps={{
                  style: {
                    color: "black",
                  },
                }}
                variant="standard"
                sx={{
                  width: "80%",
                  ml: 3,
                }}
                placeholder="Placeholder"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          spacing={2}
          sx={{
            display: "flex",
            bgcolor: "white",
            pt: 0,
            mt: 3,
            borderRadius: 5,
            flexGrow: 1,
          }}
        >
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell />
                  <StyledTableCell>Ordered Date </StyledTableCell>
                  <StyledTableCell align="left">From</StyledTableCell>
                  <StyledTableCell align="left">To</StyledTableCell>
                  <StyledTableCell align="right">Consumed Time</StyledTableCell>
                  <StyledTableCell align="right">Delivery Cost</StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <Row key={row.name} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Box>
    </>
  );
}

export default Profile;
