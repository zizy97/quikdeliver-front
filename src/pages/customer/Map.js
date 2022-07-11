import React from "react";

import MapDetails from "../../components/customer/Customer/MapDetails";

// ====== Images ========
import Img03 from "../../images/blue-sky.jpg";
//=======3rd  party library========
import { Parallax } from "react-parallax";

function CustomerPage() {
  return (
    <div
      // style={{
      //   backgroundColor: "#ECF2FF",
      // }}
      style={{
        // background: `url(${Img03})`,
        background: "#E9EAEC",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <MapDetails />
    </div>
  );
}

export default CustomerPage;
