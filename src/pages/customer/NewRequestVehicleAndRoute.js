import React from "react";
import NavbarCustomer from "../../components/customer/NavbarCustomer";
import NewRequestVehicleAndRoute from "../../components/customer/Customer/NewRequestVehicleAndRoute";
// ====== Images ========
import Img03 from "../../images/blue-sky.jpg";
//=======3rd  party library========
import { Parallax } from "react-parallax";

function CustomerPage() {
  return (
    <div
      style={{
        // background: `url(${Img03})`,
        background: `#BCD4DE`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* <LoginView /> */}
      <NewRequestVehicleAndRoute />
    </div>
  );
}

export default CustomerPage;
