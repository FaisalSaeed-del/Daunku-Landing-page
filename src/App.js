import "./App.css";
import Careplant from "./components/careplant/Careplant";
import Footer from "./components/footer/Footer";
import InteriorPlant from "./components/interiorPlant/InteriorPlant";
import Navbar from "./components/navbar/Navbar";
import SellerProduct from "./components/sellerProduct/SellerProduct";
import Services from "./components/services/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Services />
      <SellerProduct />
      <InteriorPlant />
      <Careplant />
      <Footer />
    </div>
  );
}

export default App;
