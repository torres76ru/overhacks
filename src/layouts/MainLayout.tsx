import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import TonConnectButton from '../components/TonConnectButton/TonConnectButton';

const MainLayout = () => {
  return (
    <>
      <TonConnectButton />
      <Outlet />
      <Navbar />
      <ScrollRestoration />
    </>
  );
};

export default MainLayout;
