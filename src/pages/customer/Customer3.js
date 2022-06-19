import React from "react";

import NavbarCustomer from "../../components/customer/NavbarCustomer";
import ViewThree from "../../components/customer/Customer/ViewThree";
// ====== Images ========
// import Img03 from "../images/sky.jpg";
// import ImgOne from "../images/skyImage.jpg";
//=======3rd  party library========
import { Parallax } from "react-parallax";
import Profile from "../../components/customer/Customer/Profile";
import AlertDialogSlide1 from "../../components/customer/Customer/DelivererRating";
import AlertDialogSlide2 from "../../components/customer/Customer/AppRating";


function CustomerPage() {
  return (
    <div
      // style={{
      //   backgroundColor: "#ECF2FF",
      // }}
      style={{
        // background: `url(${Img03})`,
        background: `white`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <NavbarCustomer />
      {/* <LoginView /> */}
      {/* <ViewThree /> */}
      <Profile />
      {/* <AlertDialogSlide1 />
      <AlertDialogSlide2 /> */}
    </div>
  );
}

export default CustomerPage;
