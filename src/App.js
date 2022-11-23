import React from "react";
import {Routes,Route} from 'react-router-dom'
import Home from "./pages/Home";
import PricingP from "./pages/PricingP";
import FAQP from "./pages/FAQP";
import ContactP from "./pages/ContactP";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pricing" element={<PricingP/>}/>
        <Route path="/faq" element={<FAQP/>}/>
        <Route path="/contact" element={<ContactP/>}/>
      </Routes>
    </>
  );
}

export default App;
