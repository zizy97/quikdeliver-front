import Navbar from "../components/Navbar";
import {
  Delivererbooking,
  Bookingsteps,
  Driver,
  Vehicleowner,
  Footer,
} from "../components/Home_components";
// import Footer from "../components/Footer";
import Homecontainer from "../containers/Homecontainer";

function Home() {
  return (
    <div>
      <Navbar />
      <Delivererbooking />
      {/* <Homecontainer /> */}
      <Bookingsteps />
      <Driver />
      <Vehicleowner />
      <Footer />
    </div>
  );
}

export default Home;
