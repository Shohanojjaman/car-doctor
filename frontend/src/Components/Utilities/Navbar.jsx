import { BsHandbag, BsSearch } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const logo =
    'https://raw.githubusercontent.com/Shohanojjaman/car-doctor/3e68a4cc81e52a9f6ce53f1c94b3d18f2649cbe1/frontend/public/assets/logo.svg';
  const links = (
    <>
      <NavLink to="/" className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
        Home
      </NavLink>
      <NavLink to="/about" className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
        About
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
        Services
      </NavLink>
      <NavLink to="/blog" className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
        Blog
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
        Contact
      </NavLink>
    </>
  );
  return (
    <header className="navbar container py-12 min-h-fit">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-4 font-semibold">
            {links}
          </ul>
        </div>
        <Link to="/" className="">
          <img src={logo} alt="Car Doctor" className="w-20 sm:w-24" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6 font-semibold">{links}</ul>
      </div>
      <div className="navbar-end space-x-5">
        <Link to="/cart">
          <BsHandbag className="text-xl"></BsHandbag>
        </Link>
        <BsSearch className="text-xl cursor-pointer"></BsSearch>
        <button className="btn btn-outline border-theme hover:border-theme text-theme hover:bg-theme text-xs">
          Appointment
        </button>
      </div>
    </header>
  );
};

export default Navbar;
