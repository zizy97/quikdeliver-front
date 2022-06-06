import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import logo from "../images/logo.png";
import CarRentalIcon from "@mui/icons-material/CarRental";
import PersonIcon from "@mui/icons-material/Person";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import HistoryIcon from "@mui/icons-material/History";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

const drawerWidth = 250; //===================drawer width=======================
function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //=========================drawer componenet starting==========================
  //=========================drawer componenet starting==========================
  const drawer = (
    <div>
      <Box
        component="img"
        alt="logo image"
        src={logo}
        sx={{
          width: 70,
          marginLeft: { xs: 2, lg: 2, md: 2, sm: 3 },
          marginTop: { xs: 2, lg: 2, md: 2, sm: 3 },
          display: { lg: "none", md: "none", sm: "none" },
        }}
      />
      <Box>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <CarRentalIcon
                sx={{ fontSize: { xs: "28px", lg: "30px" }, color: "#1964FF" }}
              />
            </ListItemIcon>
            <ListItemText primary="Vehicles" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <PersonIcon
                sx={{ fontSize: { xs: "28px", lg: "30px" }, color: "#1964FF" }}
              />
            </ListItemIcon>
            <ListItemText primary="Drivers" color="primary" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <DeliveryDiningIcon
                sx={{ fontSize: { xs: "28px", lg: "30px" }, color: "#1964FF" }}
              />
            </ListItemIcon>
            <ListItemText primary="Booking Orders" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <HistoryIcon
                sx={{ fontSize: { xs: "28px", lg: "30px" }, color: "#1964FF" }}
              />
            </ListItemIcon>
            <ListItemText primary="History" />
          </ListItemButton>
        </List>
      </Box>
    </div>
  );
  //=========================drawer componenet ending==========================
  //=========================drawer componenet ending==========================

  //=========================Dashboard Navbar starting==========================
  //=========================Dashboard Navbar starting==========================
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const settings = ["Profile", "Logout"];

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  //=========================Dashboard Navbar ending==========================
  //=========================Dashboard Navbar ending==========================
  return (
    <Box>
      <AppBar
        elevation={0}
        sx={{
          background: "#D4DCF7",
          margin: "0%",
          padding: "0%",
          position: "sticky",
        }}
      >
        <Toolbar>
          <Box
            component="img"
            alt="logo image"
            src={logo}
            sx={{
              width: 70,
              marginTop: { lg: 1, md: 1, sm: 1 },
              display: { xs: "none", md: "block", sm: "block", lg: "block" },
            }}
          />
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 3, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "flex", md: "flex" }, mt: 2 }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon sx={{ color: "#1964FF" }} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={10} color="error">
                <NotificationsIcon sx={{ color: "#1964FF" }} />
              </Badge>
            </IconButton>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
              <Avatar alt="Remy Sharp" src="" size="small" />
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              marginTop: 9,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
