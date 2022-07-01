import React from "react";
import ViewThree from "../../components/customer/Customer/ViewThree";
// ====== Images ========
import Img03 from "../../images/blue-sky.jpg";
//=======3rd  party library========
import { Parallax } from "react-parallax";
import Profile from "../../components/customer/Customer/Profile";
import AlertDialogSlide1 from "../../components/customer/Customer/DelivererRating";
import AlertDialogSlide2 from "../../components/customer/Customer/AppRating";

function CustomerPage() {
  return (
    <div
      style={{
        // background: `url(${Img03})`,
        background: "#E9EAEC",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* <LoginView /> */}
      {/* <ViewThree /> */}
      <Profile />
      {/* <AlertDialogSlide1 />
      <AlertDialogSlide2 /> */}
    </div>
  );
}

export default CustomerPage;
