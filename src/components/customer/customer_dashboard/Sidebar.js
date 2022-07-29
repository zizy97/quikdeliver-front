import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Box, Divider, Drawer } from "@mui/material";
import { NavItem } from "./NavItem";
import {
  adminItems,
  customerItems,
  driverItems,
  voItems,
} from "../../../config/sidebar";

import { motion } from "framer-motion";

const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const location = useLocation();
  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
  //   defaultMatches: true,
  //   noSsr: false,
  // });
  //====framer motion animation====
  const container = {
    hidden: { opacity: 1, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemChild = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      color: "yellow",
    },
  };

  //====framer motion animation====

  var items; //items is coming from sidebar.js

  switch (location.pathname.split("/")[1]) {
    case "admin": {
      items = adminItems;
      break;
    }
    case "customer": {
      items = customerItems;
      break;
    }
    case "driver": {
      items = driverItems;
      break;
    }
    case "vo": {
      items = voItems;
      break;
    }
    default: {
    }
  }

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
        {/* <div>
          <Box sx={{ minHeight:"64px",backgroundColor:"background.paper"}}></Box>
        </div>
        <Divider
          sx={{
            borderColor: '#2D3748',
            // my: 3
          }}
        /> */}
        <Box sx={{ minHeight: "12%" }}></Box>

        <Box sx={{ flexGrow: 1 }}>
          <motion.div variants={container} initial="hidden" animate="visible">
            {items.map((item) => (
              <motion.div variants={itemChild} key={item.title}>
                <NavItem
                  key={item.title}
                  icon={item.icon}
                  href={item.href}
                  title={item.title}
                />
              </motion.div>
            ))}
          </motion.div>
        </Box>

        <Divider sx={{ borderColor: "#2D3748" }} />
      </Box>
    </>
  );

  // if (lgUp) {
  //   return (
  //     <Drawer
  //       anchor="left"
  //       open
  //       PaperProps={{
  //         sx: {
  //           backgroundColor: "white",
  //           color: "black",
  //           width: 200,
  //         },
  //       }}
  //       variant="permanent"
  //     >
  //       {content}
  //     </Drawer>
  //   );
  // }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "white",
          color: "black",
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

export default DashboardSidebar;

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
