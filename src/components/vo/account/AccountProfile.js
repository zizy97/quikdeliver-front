import React, { useState, useEffect } from "react"; //react
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import Zoom from "@mui/material/Zoom";
const user = {
  avatar: "/static/images/avatars/avatar_3.png",
  city: "Ingiriya",
  country: "Kaluthara District",
  role: "Vehicle Owner",
  name: "Supun Tharuka",
  points: 10,
};

function AccountProfile(props) {
  //=====Transitions handeling=====
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    return () => {
      setChecked(true);
      console.log(" clecked ");
    };
  }, []);
  //=====Transitions handeling ending=====
  return (
    <Box>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          mb: -9,
        }}
      >
        <Zoom
          in={checked}
          style={{ transitionDelay: checked ? "500ms" : "0ms" }}
        >
          <Avatar
            variant="outlined"
            src={user.avatar}
            sx={{
              height: 130,
              mb: 1,
              mt: -3,
              width: 130,
              borderRadius: "90px",
              borderBottom: 1,
              borderColor: "primary.main",
            }}
          />
        </Zoom>
      </Box>
      <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
        <Card
          {...props}
          elevation={3}
          sx={{
            backgroundColor: "#D3E2FF",
            borderRadius: 1,
            // border: 1,
            // borderColor: "#5E8FD4",
            elevation: 6,
            pt: 5,
          }}
        >
          <CardContent>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography color="textPrimary" gutterBottom variant="h5">
                {user.name}
              </Typography>
              <Typography color="textSecondary" variant="body2">
                {`${user.city} ${user.country}`}
              </Typography>
              <Typography color="textSecondary" variant="body2" sx={{ mb: -4 }}>
                {user.role}
              </Typography>
            </Box>
          </CardContent>
          <Divider sx={{ color: "blue" }} />
          <CardActions>
            <Button color="primary" fullWidth variant="text" sx={{}}>
              Change Profile picture
            </Button>
          </CardActions>
        </Card>
      </Slide>
    </Box>
  );
}

export default AccountProfile;
