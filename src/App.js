import React from "react";
import Sidebar from "./Components/Sidebar";
import PriceList from "./Screen/PriceList";
import Invoice from "./Screen/Invoice";
import Customer from "./Screen/Customer";
import Business from "./Screen/Business";
import Navdash from "./Components/Navdash";
import Journal from "./Screen/Journal";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
    <div className="flex-1">
      <Navdash/>
      <div className="flex">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Invoice/>}/>
          <Route path="/customer" element={<Customer/>}/>
          <Route path="/business" element={<Business/>}/>
          <Route path="/price" element={<PriceList/>}/>
          <Route path="/journal" element={<Journal/>}/>
        </Routes>
      </div>
    </div></BrowserRouter>
  
  );
};

export default App;
