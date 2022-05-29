import React, { useState } from "react"; //=================react===================
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material"; //==============Components==================================
import MenuIcon from "@mui/icons-material/Menu"; //============menuicon=============

//===============Drawer Component starting==========================================
//===============Drawer Component starting==========================================
const PAGES = ["Home", "About", "Create Booking", "Login", "Sign Up"];
function Drawercomp() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItemText>Quik</ListItemText>
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
          color: "inherit",
          paddingTop: 2,
        }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
//===============Drawer Component Ending==========================================
//===============Drawer Component Ending==========================================
export default Drawercomp;
