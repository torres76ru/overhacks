import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import WhatAreYouSeek from "./pages/WhatAreYouSeek/WhatAreYouSeek";
import MainLayout from "./layouts/MainLayout";
import HackathonsPage from "./pages/Hackathons/HackathonsPage";
import HackathonDetails from "./pages/HackathonDetails/HackathonDetails";
import People from "./pages/People/People";
import Root from "./components/Root/Root";
import AdminPage from "./pages/AdminPanel/AdminPage";
import StatisticPage from "./pages/AdminPanel/StatisticPage";
import EditPage from "./pages/AdminPanel/EditPage";
import HackathonRegistration from "./pages/HackathonRegistration/HackathonRegistration";
import ProjectPage from "./pages/Projects/ProjectPage";
import TasksPage from "./pages/Tasks/TasksPage";
import ProfilePage from "./pages/Profile/ProfilePage";

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
          path: "/project/:id",
          element: <ProjectPage />
        },
        {
          path: "/hackathons/:id/project/:id",
          element: <ProjectPage />
        },
        {
          path: "/people",
          element: <People />
        },
        {
          path: "/earn",
          element: <TasksPage />
        },
        {
          path: "/profile",
          element: <ProfilePage />
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
        },
        {
          path: "/hackathons/:id/registration",
          element: <HackathonRegistration />
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
