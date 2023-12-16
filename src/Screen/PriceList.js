import { useEffect, useState } from "react";
import axios from "axios";
import image3 from "../images/bandage.png";
import image2 from "../images/printer.png";
import image1 from "../images/plussign.png";
import image4 from "../images/search.png";

const PriceList = () => {
  const headers = [
    "Article No.",
    "Product/Service",
    "In Price",
    "Price",
    "Unit",
    "In Stock",
    "desc",
  ];

  const [tableData, settableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios("https://test.sajhaghar.com/api/prices/");
        settableData(res.data.prices);
      } catch (err) {
        console.log("Error Fetching the data", err);
      }
    };

    fetchData();
  }, []);

  // Log the updated state when it changes
  useEffect(() => {
    console.log(tableData);
  }, [tableData]);

  return (
    <div className="flex-1 items-center justify-center p-1">
      <div className="flex-initial md:flex items-start justify-between space-y-4 md:space-y-0 p-2">
        <div className="flex flex-col justify-center gap-y-3 items-center">
          <div className="flex relative w-full">
            <input
              placeholder="Enter Email Address"
              className="rounded-full px-2 w-full border-2"
            ></input>
            <img
              src={image4}
              className="absolute cursor-pointer right-1 translate-y-1 w-5 h-5"
            />
          </div>
          <div className="flex relative w-full">
            <input
              placeholder="Search Product ..."
              className="border-2 rounded-full w-full px-2"
            />
            <img
              src={image4}
              className="absolute cursor-pointer right-1 translate-y-1 w-5 h-5"
            />
          </div>
        </div>
        <div className="flex gap-x-2 justify-between">
          <div className="shadow-md rounded-xl px-6 py-1 items-center justify-center">
            <img src={image1} className="w-6 h-6" />
          </div>
          <div className="shadow-md rounded-xl px-6 py-1 items-center justify-center">
            <img src={image2} className="w-6 h-6" />
          </div>
          <div className="shadow-md rounded-xl px-6 py-1 items-center justify-center">
            <img src={image3} className="w-6 h-6" />
          </div>
        </div>
      </div>
      {tableData ? (
        <div className="flex h-screen">
          <table className="bg-white h-screen table-auto border-separate border-spacing-4 items-center justify-center w-full">
            <thead>
              <tr>
                <th className="text-left text-sm text-gray-500 hidden md:table-cell">
                  Article No.
                </th>
                <th className="text-left text-sm text-gray-500">
                  Product/Service
                </th>
                <th className="text-left text-sm text-gray-500 hidden lg:table-cell">
                  In Price
                </th>
                <th className="text-left text-sm text-gray-500">Price</th>
                <th className="text-left text-sm text-gray-500 hidden md:table-cell">
                  Unit
                </th>
                <th className="text-left text-sm text-gray-500 hidden md:table-cell">
                  In Stock
                </th>
                <th className="text-left text-sm text-gray-500 hidden lg:table-cell">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((product) => (
                <tr key={product.article}>
                  <td className="whitespace-nowrap text-sm text-gray-900 border rounded-full hidden md:table-cell">
                    {product.article}
                  </td>
                  <td className="whitespace-nowrap text-sm text-gray-900 border rounded-full">
                    {product.product}
                  </td>
                  <td className="whitespace-nowrap text-sm text-gray-900 border rounded-full hidden lg:table-cell">
                    {product.inprice}
                  </td>
                  <td className="whitespace-nowrap text-sm text-gray-900 border rounded-full">
                    {product.price}
                  </td>
                  <td className="whitespace-nowrap p-1 text-sm text-gray-900 border rounded-full hidden md:table-cell">
                    {product.unit}
                  </td>
                  <td className="whitespace-nowrap p-1 text-sm text-gray-900 border rounded-full hidden md:table-cell">
                    {product.instock}
                  </td>
                  <td className="whitespace-nowrap p-1 text-sm text-gray-900 border rounded-full hidden lg:table-cell">
                    {product.desc}
                  </td>
                  <span className="cursor-pointer">···</span>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Server is Not Active</p>
      )}
    </div>
  );
};

export default PriceList;
