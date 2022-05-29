import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import Drawercomp from "./NavbarDrawer";

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
          background: "#0074B7",
          margin: "0%",
          padding: "0%",
          position: "sticky",
        }}
      >
        <Toolbar sx={{ marginTop: { lg: 3 } }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              pr: 3,
              display: { xs: "none", md: "flex" },
              fontFamily: "roboto",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              fontSize: 30,
            }}
          >
            Quik
          </Typography>
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
                      fontSize: { lg: 18 },
                      color: "white",
                    }}
                  />
                ))}
              </Tabs>
              <Button
                sx={{
                  marginLeft: "auto",
                  width: { lg: 120 },
                  height: 45,
                  backgroundColor: "#003B73",
                  "&:hover": { backgroundColor: "#003B73" },
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
                  backgroundColor: "#003B73",
                  "&:hover": { backgroundColor: "#003B73" },
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
