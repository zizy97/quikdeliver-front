import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import Drawercomp from "./NavbarDrawer";
import logo from "../images/logo.png";

const PAGES = ["Home", "About", "Create Booking"];
const Navbar = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <div>
      <AppBar
        elevation={0}
        sx={{
          background: "#E0EAFF",
          margin: "0%",
          padding: "0%",
        }}
      >
        <Toolbar sx={{ marginTop: { lg: 3 } }}>
          <Box
            component="img"
            alt="Your logo."
            src={logo}
            sx={{
              marginLeft: 8,
              display: { xs: "none", sm: "none", lg: "block", md: "block" },
            }}
          />

          {isMatch ? (
            <>
              <Drawercomp />
            </>
          ) : (
            <>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="primary"
                sx={{
                  marginLeft: "auto",
                }}
              >
                {PAGES.map((page, index) => (
                  <Tab
                    key={index}
                    label={page}
                    sx={{
                      fontSize: { lg: 20 },
                      color: "#06173B",
                      fontFamily: "Roboto",
                    }}
                  />
                ))}
              </Tabs>
              <Button
                sx={{
                  marginLeft: "auto",
                  width: { lg: 120 },
                  height: 45,
                  backgroundColor: "#FFD481",
                  "&:hover": { backgroundColor: "#FFD481" },
                }}
                variant="contained"
              >
                Log In
              </Button>
              <Button
                sx={{
                  margin: "10px",
                  width: { lg: 120 },
                  height: 45,
                }}
                variant="contained"
              >
                Sign Up
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
