import { useState } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DashboardNavbar } from "./Navbar";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "./Sidebar"
const DashboardLayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: 0,
  
}));

const CustomerDashboard = (props) => {
 const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <DashboardLayoutRoot>
        <Box
          sx={{
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Outlet />
        </Box>
      </DashboardLayoutRoot>
    
      <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} onClose={() => setSidebarOpen(false)} open={isSidebarOpen}/>
      <DashboardSidebar
        onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}
      />
    </>
  );
};

export default CustomerDashboard;