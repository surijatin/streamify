import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Divider, Avatar } from "antd";

export default function LeftSideBar() {
  const menuItems = [
    { name: "overview", label: "Overview", path: "/overview" },
    {
      name: "sales-and-revenue",
      label: "Sales and Revenue",
      path: "/sales-and-revenue",
    },
    { name: "subscriptions", label: "Subscriptions", path: "/subscriptions" },
    {
      name: "artist-overview",
      label: "Artist Overview (New)",
      path: "/artist-overview",
    },
  ];

  const [selectedItem, setSelectedItem] = useState(() => {
    const path = window.location.pathname;
    const item = menuItems.find((menuItem) => menuItem.path === path);
    return item ? item.name : "overview";
  });
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
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`menu-item p-2 rounded text-lg flex justify-between items-center hover:cursor-pointer ${
              selectedItem === item.name
                ? "text-black bg-orange-300 drop-shadow-lg"
                : "text-gray-500 bg-white hover:bg-orange-100"
            }`}
            onClick={() => handleSelection(item.name, item.path)}
          >
            <span>{item.label}</span>
            {selectedItem === item.name && <span className="ml-2">→</span>}
          </li>
        ))}
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
