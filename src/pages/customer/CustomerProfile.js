import React from "react";
import LoginView from "../components/Customer/LoginView";
import NavbarCustomer from "../components/NavbarCustomer";
import ViewThree from "../components/Customer/ViewThree";
// ====== Images ========
import Img03 from "../images/sky.jpg";
import ImgOne from "../images/skyImage.jpg";
//=======3rd  party library========
import { Parallax } from "react-parallax";
import Profile from "../components/Customer/Profile";


function CustomerPage() {
  return (
    
      <div
        // style={{
        //   backgroundColor: "#ECF2FF",
        // }}
        style={{
          background: `url(${Img03})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <NavbarCustomer />
        {/* <LoginView /> */}
        <Profile />
      </div>
    
  );
}

export default CustomerPage;
