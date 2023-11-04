import { Outlet } from 'react-router-dom';
import Footer from '../Components/Utilities/Footer';
import Navbar from '../Components/Utilities/Navbar';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default MainLayout;
