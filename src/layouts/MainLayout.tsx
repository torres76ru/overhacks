import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";

const MainLayout = () => {
  return (
    <>
      {/* <TonConnectButton /> */}
      <Header />
      <Outlet />
      <Navbar />
      <ScrollRestoration />
    </>
  );
};

export default MainLayout;
