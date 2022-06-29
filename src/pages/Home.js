import {
  Delivererbooking,
  Bookingsteps,
  Driver,
  Vehicleowner,
} from "../../src/components/home/Home_components";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Delivererbooking />
      <Bookingsteps />
      <Driver />
      <Vehicleowner />
      <Footer />
    </div>
  );
}

export default Home;
