import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box, Divider, Drawer, useMediaQuery } from '@mui/material';
import { NavItem } from './NavItem';
import { adminItems,customerItems,driverItems,voItems } from '../config/sidebar';


export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const location = useLocation();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  var items;//items is coming from sidebar.js

  switch (location.pathname.split('/')[1]) {
    case 'admin':{
      items = adminItems;
      break;
    }
    case 'customer':{
      items=customerItems;
      break;
    }
    case 'driver':{
      items=driverItems;
      break;
    }
    case 'vo':{
      items=voItems;
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
        <Box sx={{minHeight:"12%"}}></Box>
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
        <div>
          <Box sx={{ p: 2 }}>
            {/* map activate/deactivate status(not essential) */}
            <div>hello</div>
          </Box>
        </div>
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
            backgroundColor: 'neutral.800',
            color: '#FFFFFF',
            width: 200
          }
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
          backgroundColor: 'neutral.800',
          color: '#FFFFFF',
          width: 200
        }
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
