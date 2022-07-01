import React from "react";

import ViewThree from "../../components/customer/Customer/ViewThree";

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
      <ViewThree />
    </div>
  );
}

export default CustomerPage;
