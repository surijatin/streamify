import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LeftSideBar from "./components/LeftSideBar";
import Header from "./components/Header";
import OverviewDashboard from "./components/OverviewDashboard";
import UnderDevelopmentComponent from "./components/UnderDevelopmentComponent";

export default function App() {
  return (
    <Router>
      <div className="h-screen flex">
        <div className="hidden md:block">
          <LeftSideBar />
        </div>
        <div className="flex flex-col w-full pr-4 border overflow-auto bg-zinc-50">
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/overview" />} />
            <Route path="/overview" element={<OverviewDashboard />} />
            <Route
              path="/sales-and-revenue"
              element={<UnderDevelopmentComponent />}
            />
            <Route
              path="/subscriptions"
              element={<UnderDevelopmentComponent />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
