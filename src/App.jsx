import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./index.css";
import CarList from "./components/CarList";
import Testimonials from "./components/Testimonial";
import OwnerBanner from "./components/OwnerBanner";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CarList />
      <OwnerBanner />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
