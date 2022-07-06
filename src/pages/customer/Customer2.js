import React from "react";
import NavbarCustomer from "../../components/customer/NavbarCustomer";
import ViewTwo from "../../components/customer/Customer/ViewTwo";
// ====== Images ========
import Img03 from "../../images/blue-sky.jpg";
//=======3rd  party library========
import { Parallax } from "react-parallax";

function CustomerPage() {
  return (
    <div
      style={{
        // background: `url(${Img03})`,
        background: `#E9EAEC`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* <LoginView /> */}
      <ViewTwo />
    </div>
  );
}

export default CustomerPage;
