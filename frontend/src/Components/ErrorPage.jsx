import Navbar from './Utilities/Navbar';
const errorImg =
  'https://github.com/Shohanojjaman/car-doctor/blob/master/frontend/public/assets/images/error.png?raw=true';
const ErrorPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center py-20 ">
        <img src={errorImg} alt="404" />
        <p className='text-3xl font-bold text-theme'>Page Not Found</p>
      </div>
    </div>
  );
};

export default ErrorPage;
