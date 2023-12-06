import React from "react";
import logo from "../images/GB.png";
import { Link } from "react-router-dom";
import image1 from "../images/invoices.png";
import image2 from "../images/person.png";
import image3 from "../images/trade.png";
import image4 from "../images/journal.png";
import image5 from "../images/price.png";
import image6 from "../images/invoices.png";
import image7 from "../images/unpaid.png";
import image8 from "../images/offer.png";
import image9 from "../images/inventory.png";
import image10 from "../images/member.png";
import image11 from "../images/import.png";
import image12 from "../images/logout.png";
import Sidebar from "../Components/Sidebar";

const PriceDashboard = () => {
  const items = [
    {
      name: "Invoices",
      image: image1,
    },
    {
      name: "Customers",
      image: image2,
    },
    {
      name: "My Business",
      image: image3,
    },
    {
      name: "Invoice Journal",
      image: image4,
    },
    {
      name: "Price List",
      image: image5,
    },
    {
      name: "Multiple Invoicing",
      image: image6,
    },
    {
      name: "Unpaid Invoices",
      image: image7,
    },
    {
      name: "Offer",
      image: image8,
    },
    {
      name: "Inventory Control",
      image: image9,
    },
    {
      name: "Member Invoicing",
      image: image10,
    },
    {
      name: "Import/Export",
      image: image11,
    },

    {
      name: "Log Out",
      image: image12,
    },
  ];

  return (
    <div className="flex-1">
      <div className="flex bg-blue-600 justify-between px-[5%] py-[1%]">
        <div className="flex text-white space-x-3">
          <div className="flex">
            <div className="bg-gray-300 rounded-full w-12 h-12">
              <img
                src={image2} // Replace with your image URL
                alt="profile"
                className="w-12 h-12 rounded-full"
              />
            </div>
            <div className="bg-green-500 w-2 h-2 rounded-full -ml-1.5 mt-8"></div>
          </div>

          <div className="flex-1">
            <p>John Andre</p>
            <span className="text-sm font-sans">Starfjord AS</span>
          </div>
        </div>
        <div className="flex items-center text-white space-x-2">
          <p>Norsk Bokmal</p>
          <img src={logo} alt="flag" className="w-6 h-6" />
        </div>
      </div>
      <div className="flex">
        <Sidebar/>
        <div>
            dfd
        </div>
      </div>
    </div>
  );
};

export default PriceDashboard;
