import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { AppBar, Box, IconButton, Toolbar, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsPopover from "./notification/NotificationsPopover";
import Profile from "./profile";
import logo from "../images/logo.png";
const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.toolbar,
  boxShadow: theme.shadows[3],
  zIndex: 100000,
}));

export const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;

  return (
    <>
      <DashboardNavbarRoot
        sx={{
          // left: {
          //   lg: 200,
          // },
          width: {
            lg: "100%",
          },
        }}
        {...other}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: "60px",
            left: 0,
          }}
        >
          <Box
            component="img"
            alt="Your logo."
            src={logo}
            sx={{
              marginLeft: { lg: 4 },
              display: { xs: "none", sm: "none", lg: "block", md: "none" },
              width: { lg: 70 },
            }}
          />
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: "inline-flex",
                lg: "none",
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Stack
            direction="row"
            alignItems="center"
            spacing={{ xs: 0.5, sm: 1.5 }}
            sx={{
              mr: "15px",
            }}
          >
            <NotificationsPopover />
            <Profile />
          </Stack>
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};
<Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
  <NotificationsPopover />
</Stack>;
