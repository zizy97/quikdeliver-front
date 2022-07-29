import React from "react";

import NewRequestDeliveryDetails from "../../components/customer/Customer/NewRequestDeliveryDetails";
import Box from "@mui/material/Box";
// ====== Images ========
// import Img03 from "../../images/abstract01.jpg";

function CustomerPage() {
  return (
    <Box
      // style={{
      //   backgroundColor: "#ECF2FF",
      // }}
      style={{
        // background: `url(${Img03})`,
        background: `#BCD4DE`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <NewRequestDeliveryDetails />
    </Box>
  );
}

export default CustomerPage;
