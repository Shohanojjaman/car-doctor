import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Utilities/Navbar';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
