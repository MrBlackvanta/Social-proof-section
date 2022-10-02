import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Signature from "./components/Signature";
import "./App.scss";

function App() {
  return (
    <div>
      <Hero
        heading="10,000+ of our users love our products."
        description="We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services."
      />
      <Testimonials />
      <Signature />
    </div>
  );
}

export default App;
