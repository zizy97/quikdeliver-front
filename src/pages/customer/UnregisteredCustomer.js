import React from "react";

import UnregisteredCustomerDetails from "../../components/customer/Customer/UnregisteredCustomerDetails";
import Box from "@mui/material/Box";

function CustomerPage() {
  return (
    <Box
    // style={{
    //   backgroundColor: "#ECF2FF",
    // }}
    //   style={{
    //     // background: `url(${Img03})`,
    //     background: `#E9EAEC`,
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    //     backgroundPosition: "center",
    //   }}
    >
      <UnregisteredCustomerDetails />
    </Box>
  );
}

export default CustomerPage;
