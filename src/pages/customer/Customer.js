import React from "react";

import ViewOne from "../../components/customer/Customer/ViewOne";
import Box from "@mui/material/Box";
// ====== Images ========
// import Img03 from "../images/sky.jpg";
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
        background: `#ECF2FF`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* <NavbarCustomer /> */}
      {/* <LoginView /> */}
      <ViewOne />
    </Box>
  );
}

export default CustomerPage;
