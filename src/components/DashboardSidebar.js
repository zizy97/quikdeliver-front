import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Box, Divider, Drawer, useMediaQuery } from "@mui/material";
import { ChartBar as ChartBarIcon } from "../icons/chart-bar";
import { Cog as CogIcon } from "../icons/cog";
import { Truck as TruckIcon } from "../icons/vehicle";
import { User as UserIcon } from "../icons/user";
import { Logout as LogoutIcon } from "../icons/logout";
import { Users as UsersIcon } from "../icons/users";
import { NavItem } from "./NavItem";

const items = [
  {
    href: "/admin",
    icon: (
      <ChartBarIcon
        fontSize="small"
        sx={{
          color: "black",
        }}
      />
    ),
    title: "Dashboard",
  },
  {
    href: "/admin/drivers",
    icon: (
      <UsersIcon
        fontSize="small"
        sx={{
          color: "black",
        }}
      />
    ),
    title: "Drivers",
  },
  {
    href: "/admin/vehicles",
    icon: (
      <TruckIcon
        fontSize="small"
        sx={{
          color: "black",
        }}
      />
    ),
    title: "Vehicles",
  },
  {
    href: "/admin/account",
    icon: (
      <UserIcon
        fontSize="small"
        sx={{
          color: "black",
        }}
      />
    ),
    title: "Account",
  },
  {
    href: "/admin/settings",
    icon: (
      <CogIcon
        fontSize="small"
        sx={{
          color: "black",
        }}
      />
    ),
    title: "Settings",
  },
  {
    href: "/",
    icon: (
      <LogoutIcon
        fontSize="small"
        sx={{
          color: "black",
        }}
      />
    ),
    title: "Logout",
  },
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const location = useLocation();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  useEffect(
    () => {
      if (!location.pathname) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [location.pathname]
  );

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
        }}
      >
        <div>
          <Box sx={{ p: 2 }}></Box>
        </div>
        <Divider
          sx={{
            borderColor: "#2D3748",
            my: 3,
          }}
        />
        <Box
          sx={{
            flexGrow: 1,
            color: "black",
          }}
        >
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
        <Divider sx={{ borderColor: "#2D3748" }} />
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "#D3E2FF",
            color: "#FFFFFF",
            width: 180,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "#D3E2FF",
          color: "#FFFFFF",
          width: 200,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
