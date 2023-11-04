import { Outlet } from 'react-router-dom';
import Footer from '../Components/Utilities/Footer';
import Navbar from '../Components/Utilities/Navbar';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
