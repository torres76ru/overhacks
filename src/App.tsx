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
import { THEME, TonConnectUIProvider } from "@tonconnect/ui-react";
import PerfectMatch from "./components/PerfectMatch/PerfectMatch";
import { QueryClient, QueryClientProvider } from "react-query";
import { setUserData } from "./api";

export const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const queryClient = new QueryClient({});
  const initData = window.Telegram.WebApp.initDataUnsafe;
  if (typeof initData !== 'undefined' && initData.user) {
    const user = Object.assign(initData.user, { "chatId": initData.user.id });
    setUserData(JSON.stringify({ user }))
  }

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
        },
        {
          path: "/perfect-match",
          element: <PerfectMatch />
        }
      ]
    }
  ]);
  return (
    <>
      <TonConnectUIProvider
        manifestUrl="https://overhacks.com/tonconnect-manifest.json"
        uiPreferences={{ theme: THEME.DARK }}
      >
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </TonConnectUIProvider>
    </>
  );
}

export default App;
