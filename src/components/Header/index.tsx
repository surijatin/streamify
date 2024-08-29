import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const getTitle = () => {
    switch (location.pathname) {
      case "/overview":
        return "Overview";
      case "/sales-and-revenue":
        return "Sales and Revenue";
      case "/subscriptions":
        return "Subscriptions";
      default:
        return "Dashboard";
    }
  };

  return (
    <div className="py-4 px-6">
      <div className="font-bold text-gray-900 text-2xl tracking-wide border text-center bg-white rounded-2xl py-2">
        {getTitle()}
      </div>
    </div>
  );
}
