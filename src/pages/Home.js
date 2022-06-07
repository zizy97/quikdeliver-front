import Navbar from "../components/Navbar";
import {
  Delivererbooking,
  Bookingsteps,
  Driver,
  Vehicleowner,
} from "../components/Home_components";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      <Navbar />
      <Delivererbooking />
      <Bookingsteps />
      <Driver />
      <Vehicleowner />
      <Footer />
    </div>
  );
}

export default Home;
