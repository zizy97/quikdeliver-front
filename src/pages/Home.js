import Navbar from "../components/Navbar";
import {
  Delivererbooking,
  Bookingsteps,
  Driver,
  Vehicleowner,
} from "../components/Home_components";
function Home() {
  return (
    <div>
      <Navbar />
      <Delivererbooking />
      <Bookingsteps />
      <Driver />
      <Vehicleowner />
    </div>
  );
}

export default Home;
