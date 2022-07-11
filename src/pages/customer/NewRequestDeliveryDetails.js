import React from "react";

import NewRequestDeliveryDetails from "../../components/customer/Customer/NewRequestDeliveryDetails";
import Box from "@mui/material/Box";
// ====== Images ========
import Img03 from "../../images/blue-sky.jpg";
//=======3rd  party library========
import { Parallax } from "react-parallax";

function CustomerPage() {
  return (
    <Box
      // style={{
      //   backgroundColor: "#ECF2FF",
      // }}
      style={{
        // background: `url(${Img03})`,
        background: `#E9EAEC`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* <NavbarCustomer /> */}
      {/* <LoginView /> */}
      <NewRequestDeliveryDetails />
    </Box>
  );
}

export default CustomerPage;