import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import BoostLinks from "./components/boostLinks/BoostLinks";
import Footer from "./components/footer/Footer";
import InputShorten from "./components/shorten/InputShorten";
import Statistics from "./components/statistics/Statistics";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <InputShorten />
      <Statistics />
      <BoostLinks />
      <Footer />
    </>
  );
}

export default App;
