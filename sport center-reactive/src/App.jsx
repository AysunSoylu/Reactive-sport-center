import Header from "./components/sectionOne/Header";
import Classes from "./components/sectionTwo/Classes";
import Trainer from "./components/sectionThree/Trainer";
import Review from "./components/sectionFour/Review";
import Contact from "./components/sectionFive/Contact";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Classes />
      <Trainer />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;