import { useEffect, useState } from "react";
import axios from "axios";

const PriceList = () => {
  const headers = ["Article No.","Product/Service", "In Price","Price","Unit","In Stock","desc"];

  const [tableData, settableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios("https://74.50.64.34/api/prices/");
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
    <div className="flex-1 items-center justify-center">
      <div className="flex-1 md:flex justify-between space-y-4 p-2">
        <div className="flex flex-col justify-center gap-y-3 items-center">
          <div className="w-full">
            <input
              placeholder="Search Article No ..."
              className="border-2 rounded-full w-full px-2"
            />
          </div>
          <div className="w-full">
            <input
              placeholder="Search Product ..."
              className="border-2 rounded-full w-full px-2"
            />
          </div>
        </div>
        <div className="flex md:inline-flex gap-x-2 justify-between">
          <button className="border-1 rounded-md shadow-md shadow-gray-300  justify-end items-center">
            New Product
          </button>
          <button className="border-1 p-1 rounded-md shadow-md shadow-gray-300">
            Print List
          </button>
          <button className="border-1 p-1 rounded-md shadow-md shadow-gray-300">
            Advanced Mode
          </button>
        </div>
      </div>
      {tableData ? (
  <div className="flex overflow-y-auto h-screen">
    <table className="bg-white h-screen table-auto border-separate border-spacing-4 items-center justify-center w-full">
      <thead>
        <tr>
          <th className="text-left text-sm text-gray-500 hidden md:table-cell">Article No.</th>
          <th className="text-left text-sm text-gray-500">Product/Service</th>
          <th className="text-left text-sm text-gray-500 hidden lg:table-cell">In Price</th>
          <th className="text-left text-sm text-gray-500">Price</th>
          <th className="text-left text-sm text-gray-500 hidden md:table-cell">Unit</th>
          <th className="text-left text-sm text-gray-500 hidden md:table-cell">In Stock</th>
          <th className="text-left text-sm text-gray-500 hidden lg:table-cell">Description</th>
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
            <td className="whitespace-nowrap text-sm text-gray-900 border rounded-full hidden lg:table-cell">
              <span className="cursor-pointer">···</span>
            </td>
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
