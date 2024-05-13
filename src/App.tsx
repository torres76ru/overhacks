import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HackathonsPage from "./components/pages/HackathonsPage";
import AdminPage from "./components/pages/AdminPage";
import StatisticPage from "./components/pages/StatisticPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HackathonsPage />
    },
    {
      path: "/hackathons",
      element: <HackathonsPage />
    },
    {
      path: "/admin-panel",
      element: <AdminPage />
    },
    {
      path: "/statistic",
      element: <StatisticPage />
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
