import React, { useState } from "react"; //=================react===================
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material"; //==============Components==================================
import MenuIcon from "@mui/icons-material/Menu"; //============menuIcon=============
//import logo from "../images/logo.png"; //===================logo image===============

//===============Drawer Component starting==========================================
//===============Drawer Component starting==========================================
const PAGES = ["Home", "About", "Create Booking", "Login", "Sign Up"];
function Drawercomp() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItemText></ListItemText>
          {PAGES.map((page, index) => (
            <ListItemButton onClick={() => setOpenDrawer(false)} key={index}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{
          color: "primary",
          marginTop: 2,
        }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon
          fontSize="large"
          sx={{ marginLeft: { xs: "auto", sm: "auto" } }}
        />
      </IconButton>
    </div>
  );
}
//===============Drawer Component Ending==========================================
//===============Drawer Component Ending==========================================
export default Drawercomp;
