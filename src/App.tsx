import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HackathonsPage from "./components/pages/HackathonsPage";
import AdminPage from "./components/pages/AdminPanel/AdminPage";
import StatisticPage from "./components/pages/AdminPanel/StatisticPage";
import EditPage from "./components/pages/AdminPanel/EditPage";

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
      path: "/",
      children: [
        {
          path: "/admin-panel",
          element: <AdminPage />
        },
        {
          path: "admin-panel/statistic",
          element: <StatisticPage />
        },
        {
          path: "admin-panel/edit",
          element: <EditPage />
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
