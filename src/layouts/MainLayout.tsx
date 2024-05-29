import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <Outlet />
      <Navbar />
      <ScrollRestoration />
    </>
  );
};

export default MainLayout;
