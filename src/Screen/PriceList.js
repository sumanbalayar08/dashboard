import { useTheme } from "@mui/material";
import { tokens } from "../theme.js";
import { useEffect, useState } from "react";
import axios from "axios";

const PriceList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "Article No.", flex: 0.5 },
    { field: "registrarId", headerName: "Product/Service" },
    {
      field: "name",
      headerName: "In Price",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Unit",
      flex: 1,
    },
    {
      field: "email",
      headerName: "In Stock",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Description",
      flex: 1,
    },
  ];

  const headers = [
    "Article No.",
    "Product/Service",
    "In Price",
    "Price",
    "Unit",
    "In Stock",
    "Unit",
  ];

  const[tableData,settableData]=useState([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios("http://127.0.0.1:8000/api/prices/")
        settableData(res.data.prices);
      } catch (err) {
        console.log("Error Fetching the data", err);
      }
    }

    fetchData();
  }, []);

  // Log the updated state when it changes
  useEffect(() => {
    console.log(tableData);
  }, [tableData]);

  return (
    <div className="flex-col p-2">
    <div className="flex justify-between">
        <div className="flex flex-col justify-center gap-y-3">
          <input placeholder="Search Article No ..." className="border-2 rounded-full w-52 px-2" />
          <input placeholder="Search Product ..." className="border-2 rounded-full w-52 px-2" />
        </div>
        <div className="space-x-2">
          <button className="border-1 p-1 rounded-md shadow-md shadow-gray-300  justify-end items-center">New Product</button>
          <button className="border-1 p-1 rounded-md shadow-md shadow-gray-300">Print List</button>
          <button className="border-1 p-1 rounded-md shadow-md shadow-gray-300">Advanced Mode</button>
        </div>
      </div>
      {tableData?
    <table className="bg-white min-h-screen table-auto border-separate border-spacing-4">
      <thead>
      <tr className="">
            {headers.map((header, index) => (
              <th
                key={index}
                className="text-left text-sm text-gray-500 tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
      </thead>
      <tbody>
        {tableData.map(product => (
          <tr key={product.article} className="items-center justify-center">
            <td className="whitespace-nowrap text-sm text-gray-900 border rounded-full">{product.article}</td>
            <td className="whitespace-nowrap text-sm text-gray-900 border rounded-full">{product.product}</td>
            <td className="whitespace-nowrap text-sm text-gray-900 border rounded-full">{product.inprice}</td>
            <td className="whitespace-nowrap text-sm text-gray-900 border rounded-full">{product.price}</td>
            <td className="whitespace-nowrap text-sm text-gray-900 border rounded-full">{product.unit}</td>
            <td className="whitespace-nowrap text-sm text-gray-900 border rounded-full">{product.instock}</td>
            <td className="whitespace-nowrap text-sm text-gray-900 border rounded-full">{product.desc}</td>
            <span className="cursor-pointer">···</span>
          </tr>
        ))}
      </tbody>
    </table>
    :<div>Server is Not Active</div>}
  </div>
  
  );
};

export default PriceList;
