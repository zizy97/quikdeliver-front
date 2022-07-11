import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { AppBar, Box, IconButton, Toolbar, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsPopover from "./notification/NotificationsPopover";
import Profile from "./profile";
import CancelIcon from "@mui/icons-material/Cancel";

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  zIndex: 100000,
}));

export const DashboardNavbar = (props) => {
  const { onSidebarOpen, open, onClose, ...other } = props;

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
            minHeight: "50px",
            left: 0,
          }}
        >
          <IconButton
            icon={<MenuIcon />}
            onClick={open ? onClose : onSidebarOpen}
            sx={{
              display: {
                xs: "inline-flex",
                lg: "inline-flex",
              },
              bgcolor: "white",
            }}
          >
            {!open ? (
              <MenuIcon fontSize="small" />
            ) : (
              <CancelIcon fontSize="small" />
            )}
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
