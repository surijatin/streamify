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
    <div className="p-8">
      <h1 className="font-bold text-xl text-zinc-800">{getTitle()}</h1>
    </div>
  );
}
