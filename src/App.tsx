import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HackathonsPage from "./components/pages/Hackathons/HackathonsPage";
import AdminPage from "./components/pages/AdminPanel/AdminPage";
import StatisticPage from "./components/pages/AdminPanel/StatisticPage";
import EditPage from "./components/pages/AdminPanel/EditPage";
import WhatAreYouSeek from "./components/pages/WhatAreYouSeek/WhatAreYouSeek";
import Root from "./components/Root/Root";
import People from "./components/pages/People/People";
import MainLayout from "./layouts/MainLayout";
import Profile from "./components/pages/Profile/Profile";
import HackathonDetails from "./components/pages/HackathonDetails/HackathonDetails";

export const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <WhatAreYouSeek />
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/hackathons",
          element: <HackathonsPage />
        },
        {
          path: "/hackathons/:id",
          element: <HackathonDetails />
        },
        {
          path: "/people",
          element: <People />
        },
        {
          path: "/profile",
          element: <Profile />
        }
      ]
    },
    {
      path: "/",
      element: <Root />,
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
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
