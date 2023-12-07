import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
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

const Sidebar = () => {
  const items = [
    {
      name: "Invoices",
      image: image1,
      url: "",
    },
    {
      name: "Customers",
      image: image2,
      url: "customer",
    },
    {
      name: "My Business",
      image: image3,
      url: "business",
    },
    {
      name: "Invoice Journal",
      image: image4,
      url: "journal",
    },
    {
      name: "Price List",
      image: image5,
      url: "price",
    },
    {
      name: "Multiple Invoicing",
      image: image6,
      url: "invoice",
    },
    {
      name: "Unpaid Invoices",
      image: image7,
      url: "unpaidinv",
    },
    {
      name: "Offer",
      image: image8,
      url: "offer",
    },
    {
      name: "Inventory Control",
      image: image9,
      url: "inventory",
    },
    {
      name: "Member Invoicing",
      image: image10,
      url: "member",
    },
    {
      name: "Import/Export",
      image: image11,
      url: "impor",
    },
    {
      name: "Log Out",
      image: image12,
      url: "logout",
    },
  ];

  const { pathname } = useLocation();
  console.log(pathname);

  const [toggle, settoggle] = useState(false);

  const toggleMenu = () => {
    settoggle(!toggle);
  };

  return (
    <div>
      <div className="hidden xl:block items-center justify-center space-y-4 py-[1%] text-black shadow-2xl px-[2%] min-h-screen">
        <h1 className="flex items-center justify-center text-xl">Menu</h1>
        <hr />
        <ul className="flex-1 space-y-4 justify-start">
          {items.map((item) => (
            <NavLink
              key={item.url}
              className="flex items-center space-x-2"
              to={item.url}
              activeClassName="text-green-500"
            >
              <span
                className={`p-1 rounded-full ${
                  pathname === `/${item.url}` ? "bg-green-500" : "hidden"
                }`}
              ></span>{" "}
              <img src={item.image} className="w-5 h-5" alt="logo" />
              <li className="flex">{item.name}</li>
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="block xl:hidden py-[8%]">
      <h1 className="flex items-center justify-center text-xl">Menu</h1>
        <hr />
        <ul className="flex-1 space-y-4 justify-start">
          {items.map((item) => (
            <NavLink
              key={item.url}
              className="flex items-center space-x-2"
              to={item.url}
              activeClassName="text-green-500"
            >
              <span
                className={`p-1 rounded-full ${
                  pathname === `/${item.url}` ? "bg-green-500" : "hidden"
                }`}
              ></span>{" "}
              <img src={item.image} className="w-6 h-6" alt="logo" />
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
