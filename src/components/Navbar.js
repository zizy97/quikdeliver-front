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

//===============Nav bar=========================================
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
          background: "#D4DCF7",
        }}
      >
        <Toolbar sx={{ marginTop: { lg: 3, md: 2 } }}>
          <Box
            component="img"
            alt="Your logo."
            src={logo}
            sx={{
              marginLeft: { lg: 5, md: 2 },
              display: { xs: "none", sm: "none", lg: "block", md: "block" },
              width: { lg: 80, md: 70 },
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
                      fontSize: { lg: 18, md: 15 },
                      color: "#06173B",
                    }}
                  />
                ))}
              </Tabs>
              <Button
                sx={{
                  marginLeft: "auto",
                  width: { lg: 120 },
                  height: { lg: 45 },
                  backgroundColor: "#FFD481",
                  color: "#06173B",
                }}
                variant="contained"
              >
                Log In
              </Button>
              <Button
                sx={{
                  margin: "10px",
                  width: { lg: 120 },
                  height: { lg: 45 },
                  color: "#FFD481",
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
