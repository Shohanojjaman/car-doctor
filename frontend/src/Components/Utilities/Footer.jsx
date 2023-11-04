import { BsGoogle, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
  const logo =
    'https://raw.githubusercontent.com/Shohanojjaman/car-doctor/4a0ebd4a1df60bac88345c567f9e58a4e25ec7c1/frontend/public/assets/logo_v2.svg';
  return (
    <div className=" bg-heading">
      <footer className="footer grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 py-32 container text-white">
        <aside className="max-sm:justify-items-center w-full max-sm:text-center gap-5">
          <img src={logo} alt="Car Doctor" />
          <p className='text-base'>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
          <div className="flex gap-2">
            <button className="btn btn-circle bg-[#2c2c2c] text-white border-none hover:text-[#2c2c2c]">
              <BsGoogle></BsGoogle>
            </button>
            <button className="btn btn-circle bg-[#2c2c2c] text-white border-none hover:text-[#2c2c2c]">
              <BsTwitter></BsTwitter>
            </button>
            <button className="btn btn-circle bg-[#2c2c2c] text-white border-none hover:text-[#2c2c2c]">
              <BsInstagram></BsInstagram>
            </button>
            <button className="btn btn-circle bg-[#2c2c2c] text-white border-none hover:text-[#2c2c2c]">
              <BsLinkedin></BsLinkedin>
            </button>
          </div>
        </aside>
        <nav className="sm:justify-center w-full">
          <header className="footer-title text-xl text-white mb-10">About</header>
          <Link className="link link-hover text-light-bg">Home</Link>
          <Link className="link link-hover text-light-bg">Service</Link>
          <Link className="link link-hover text-light-bg">Contact</Link>
        </nav>
        <nav className="sm:justify-center w-full">
          <header className="footer-title text-xl text-white mb-10">Company</header>
          <Link className="link link-hover text-light-bg">Why Car Doctor</Link>
          <Link className="link link-hover text-light-bg">About</Link>
        </nav>
        <nav className="sm:justify-center w-full">
          <header className="footer-title text-xl text-white mb-10">Support</header>
          <a className="link link-hover text-light-bg">Support Center</a>
          <a className="link link-hover text-light-bg">Feedback</a>
          <a className="link link-hover text-light-bg">Accesbility</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
