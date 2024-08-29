import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Divider } from "antd";
import { Avatar } from "antd";

export default function LeftSideBar() {
  const [selectedItem, setSelectedItem] = useState("overview");
  const navigate = useNavigate();

  const handleSelection = (item: string, path: string) => {
    setSelectedItem(item);
    navigate(path);
  };

  return (
    <div className="text-white flex flex-col h-full p-4 w-64 bg-white sticky">
      <div>
        <img
          src="/logo.png"
          alt="Streamify Logo"
          className="mx-auto mb-2 h-8"
        />
      </div>
      <Divider />
      <ul className="menu-list space-y-4">
        <li
          className={`menu-item p-2 rounded text-lg flex justify-between items-center hover:cusros-pointer ${
            selectedItem === "overview"
              ? "text-black bg-orange-300 drop-shadow-lg"
              : "text-gray-500 bg-white hover:bg-orange-100"
          }`}
          onClick={() => handleSelection("overview", "/overview")}
        >
          <a href="#overview">Overview</a>
          {selectedItem === "overview" && <span className="ml-2">→</span>}
        </li>
        <li
          className={`menu-item p-2 rounded text-lg flex justify-between items-center hover:cusros-pointer ${
            selectedItem === "sales-and-revenue"
              ? "text-black bg-orange-300 drop-shadow-lg"
              : "text-gray-500 bg-white hover:bg-orange-100"
          }`}
          onClick={() =>
            handleSelection("sales-and-revenue", "/sales-and-revenue")
          }
        >
          <a href="#sales-and-revenue">Sales and Revenue</a>
          {selectedItem === "sales-and-revenue" && (
            <span className="ml-2">→</span>
          )}
        </li>
        <li
          className={`menu-item p-2 rounded text-lg flex justify-between items-center hover:cusros-pointer ${
            selectedItem === "subscriptions"
              ? "text-black bg-orange-300 drop-shadow-lg"
              : "text-gray-500 bg-white hover:bg-orange-100"
          }`}
          onClick={() => handleSelection("subscriptions", "/subscriptions")}
        >
          <a href="#subscriptions">Subscriptions</a>
          {selectedItem === "subscriptions" && <span className="ml-2">→</span>}
        </li>
      </ul>
      <div className="mt-auto flex items-center">
        <div className="min-h-14 bg-gray flex items-center p-2 rounded">
          <Avatar
            src="/avatar.png"
            size={"large"}
            className="text-white bg-gray-400 hover:cursor-pointer"
          />
          <div className="ml-2 flex flex-col">
            <span className="text-gray-800 font-semibold">Jatin Suri</span>
            <span className="text-gray-800 text-sm">surijatin16@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
