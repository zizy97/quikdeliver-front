import Navbar from "../components/Navbar";
import {
  Delivererbooking,
  Bookingsteps,
  Driver,
  Vehicleowner,
  Footer,
} from "../components/home/Home_components";
// import Footer from "../components/Footer";

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
