import Link from "@mui/material/Link";
import { Box, Button, Container, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NotFound = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.user.iuli) === "NSSB"?true:false;
  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography align="center" color="textPrimary" variant="h1">
              404: The page you are looking for isn’t here
            </Typography>
            <Typography align="center" color="textPrimary" variant="subtitle2">
              You either tried some shady route or you came here by mistake.
              Whichever it is, try using the navigation
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <img
                alt="Under development"
                src="/static/images/undraw_page_not_found_su7k.svg"
                style={{
                  marginTop: 50,
                  display: "inline-block",
                  maxWidth: "100%",
                  width: 560,
                }}
              />
            </Box>
            <Link
              onClick={() => {
                if(isAuthenticated){
                  navigate("/admin");
                }else{
                  navigate("/");
                }
              }}
            >
              <Button
                component="a"
                startIcon={<ArrowBackIcon fontSize="small" />}
                sx={{ mt: 3 }}
                variant="contained"
              >
                Go back to {isAuthenticated ? "Dashboard" : "Home"}
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default NotFound;
