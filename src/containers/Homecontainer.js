import Navbar from "../components/Navbar";
import { Delivererbooking } from "../components/Home_components";
import Background from "../images/home.jpg";
function Homecontainer() {
  return (
    <div
      style={{
        background: `url(${Background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <Delivererbooking />
    </div>
  );
}

export default Homecontainer;
