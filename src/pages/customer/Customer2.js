import React from "react";
import NavbarCustomer from "../../components/customer/NavbarCustomer";
import ViewTwo from "../../components/customer/Customer/ViewTwo";
// ====== Images ========
// import Img03 from "../images/sky.jpg";
// import ImgOne from "../images/skyImage.jpg";
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
        background: `#ECF2FF`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <NavbarCustomer />
      {/* <LoginView /> */}
      <ViewTwo />
    </div>
  );
}

export default CustomerPage;
