import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Service from "./pages/landing";
import About from "./pages/about";
import Payment from "./pages/payment";
import Testimonials from "./pages/testimonials";
import Sample from "./pages/sample";
import Estimation from "./pages/estimation";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/sample" element={<Sample />} />
          <Route path="/estimation" element={<Estimation />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
