import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const Banner = () => {
  return (
    <div className="carousel w-full max-h-[37rem] mb-16">
      <div id="slide1" className="carousel-item relative w-full rounded-xl overflow-hidden">
        <div
          className="hero min-h-screen place-items-start"
          style={{
            backgroundImage:
              'url(https://github.com/Shohanojjaman/car-doctor/blob/master/frontend/public/assets/images/banner/1.jpg?raw=true)',
          }}>
          <div className="hero-overlay bg-gradient-to-r from-[rgba(21, 21, 21, 0.50)] to-[#15151500]"></div>
          <div className="hero-content justify-start h-full text-white p-10 sm:p-24">
            <div className="lg:w-1/2">
              <h1 className="mb-5 text-4xl sm:text-5xl font-bold">Affordable Price For Car Servicing</h1>
              <p className="mb-5">
                There are many variations of passages of available, but the majority have suffered alteration in some
                form
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-6">
                <button className="btn btn-primary bg-theme border-theme hover:bg-white hover:text-theme hover:border-white">
                  Discover More
                </button>
                <button className="btn btn-outline border-white hover:border-theme text-white hover:text-theme hover:bg-transparent max-sm:text-xs">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 right-5 md:right-12 bottom-1 md:bottom-12  gap-4">
          <a href="#slide6" className="btn btn-circle bg-[#FFFFFF33] border-none text-white hover:bg-theme">
            <BsArrowLeft className="text-xl font-bold"></BsArrowLeft>
          </a>
          <a href="#slide2" className="btn btn-circle bg-[#FFFFFF33] border-none text-white hover:bg-theme">
            <BsArrowRight></BsArrowRight>
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full rounded-xl overflow-hidden">
        <div
          className="hero min-h-screen place-items-start"
          style={{
            backgroundImage:
              'url(https://github.com/Shohanojjaman/car-doctor/blob/master/frontend/public/assets/images/banner/2.jpg?raw=true)',
          }}>
          <div className="hero-overlay bg-gradient-to-r from-[rgba(21, 21, 21, 0.50)] to-[#15151500]"></div>
          <div className="hero-content justify-start h-full text-white p-24">
            <div className="sm:w-1/2">
              <h1 className="mb-5 text-5xl font-bold">Affordable Price For Car Servicing</h1>
              <p className="mb-5">
                There are many variations of passages of available, but the majority have suffered alteration in some
                form
              </p>
              <div className="flex gap-6">
                <button className="btn btn-primary bg-theme border-theme hover:bg-white hover:text-theme hover:border-white">
                  Discover More
                </button>
                <button className="btn btn-outline border-white hover:border-theme text-white hover:text-theme hover:bg-transparent max-sm:text-xs">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 right-12 bottom-12 gap-4">
          <a href="#slide1" className="btn btn-circle bg-[#FFFFFF33] border-none text-white hover:bg-theme">
            <BsArrowLeft className="text-xl font-bold"></BsArrowLeft>
          </a>
          <a href="#slide3" className="btn btn-circle bg-[#FFFFFF33] border-none text-white hover:bg-theme">
            <BsArrowRight></BsArrowRight>
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full rounded-xl overflow-hidden">
        <div
          className="hero min-h-screen place-items-start"
          style={{
            backgroundImage:
              'url(https://github.com/Shohanojjaman/car-doctor/blob/master/frontend/public/assets/images/banner/3.jpg?raw=true)',
          }}>
          <div className="hero-overlay bg-gradient-to-r from-[rgba(21, 21, 21, 0.50)] to-[#15151500]"></div>
          <div className="hero-content justify-start h-full text-white p-24">
            <div className="sm:w-1/2">
              <h1 className="mb-5 text-5xl font-bold">Affordable Price For Car Servicing</h1>
              <p className="mb-5">
                There are many variations of passages of available, but the majority have suffered alteration in some
                form
              </p>
              <div className="flex gap-6">
                <button className="btn btn-primary bg-theme border-theme hover:bg-white hover:text-theme hover:border-white">
                  Discover More
                </button>
                <button className="btn btn-outline border-white hover:border-theme text-white hover:text-theme hover:bg-transparent max-sm:text-xs">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 right-12 bottom-12 gap-4">
          <a href="#slide2" className="btn btn-circle bg-[#FFFFFF33] border-none text-white hover:bg-theme">
            <BsArrowLeft className="text-xl font-bold"></BsArrowLeft>
          </a>
          <a href="#slide4" className="btn btn-circle bg-[#FFFFFF33] border-none text-white hover:bg-theme">
            <BsArrowRight></BsArrowRight>
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full rounded-xl overflow-hidden">
        <div
          className="hero min-h-screen place-items-start"
          style={{
            backgroundImage:
              'url(https://github.com/Shohanojjaman/car-doctor/blob/master/frontend/public/assets/images/banner/4.jpg?raw=true)',
          }}>
          <div className="hero-overlay bg-gradient-to-r from-[rgba(21, 21, 21, 0.50)] to-[#15151500]"></div>
          <div className="hero-content justify-start h-full text-white p-24">
            <div className="sm:w-1/2">
              <h1 className="mb-5 text-5xl font-bold">Affordable Price For Car Servicing</h1>
              <p className="mb-5">
                There are many variations of passages of available, but the majority have suffered alteration in some
                form
              </p>
              <div className="flex gap-6">
                <button className="btn btn-primary bg-theme border-theme hover:bg-white hover:text-theme hover:border-white">
                  Discover More
                </button>
                <button className="btn btn-outline border-white hover:border-theme text-white hover:text-theme hover:bg-transparent max-sm:text-xs">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 right-12 bottom-12 gap-4">
          <a href="#slide3" className="btn btn-circle bg-[#FFFFFF33] border-none text-white hover:bg-theme">
            <BsArrowLeft className="text-xl font-bold"></BsArrowLeft>
          </a>
          <a href="#slide5" className="btn btn-circle bg-[#FFFFFF33] border-none text-white hover:bg-theme">
            <BsArrowRight></BsArrowRight>
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full rounded-xl overflow-hidden">
        <div
          className="hero min-h-screen place-items-start"
          style={{
            backgroundImage:
              'url(https://github.com/Shohanojjaman/car-doctor/blob/master/frontend/public/assets/images/banner/5.jpg?raw=true)',
          }}>
          <div className="hero-overlay bg-gradient-to-r from-[rgba(21, 21, 21, 0.50)] to-[#15151500]"></div>
          <div className="hero-content justify-start h-full text-white p-24">
            <div className="sm:w-1/2">
              <h1 className="mb-5 text-5xl font-bold">Affordable Price For Car Servicing</h1>
              <p className="mb-5">
                There are many variations of passages of available, but the majority have suffered alteration in some
                form
              </p>
              <div className="flex gap-6">
                <button className="btn btn-primary bg-theme border-theme hover:bg-white hover:text-theme hover:border-white">
                  Discover More
                </button>
                <button className="btn btn-outline border-white hover:border-theme text-white hover:text-theme hover:bg-transparent max-sm:text-xs">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 right-12 bottom-12 gap-4">
          <a href="#slide4" className="btn btn-circle bg-[#FFFFFF33] border-none text-white hover:bg-theme">
            <BsArrowLeft className="text-xl font-bold"></BsArrowLeft>
          </a>
          <a href="#slide6" className="btn btn-circle bg-[#FFFFFF33] border-none text-white hover:bg-theme">
            <BsArrowRight></BsArrowRight>
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full rounded-xl overflow-hidden">
        <div
          className="hero min-h-screen place-items-start"
          style={{
            backgroundImage:
              'url(https://github.com/Shohanojjaman/car-doctor/blob/master/frontend/public/assets/images/banner/6.jpg?raw=true)',
          }}>
          <div className="hero-overlay bg-gradient-to-r from-[rgba(21, 21, 21, 0.50)] to-[#15151500]"></div>
          <div className="hero-content justify-start h-full text-white p-24">
            <div className="sm:w-1/2">
              <h1 className="mb-5 text-5xl font-bold leading-tight">Affordable Price For Car Servicing</h1>
              <p className="mb-5">
                There are many variations of passages of available, but the majority have suffered alteration in some
                form
              </p>
              <div className="flex gap-6">
                <button className="btn btn-primary bg-theme border-theme hover:bg-white hover:text-theme hover:border-white">
                  Discover More
                </button>
                <button className="btn btn-outline border-white hover:border-theme text-white hover:text-theme hover:bg-transparent max-sm:text-xs">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 right-12 bottom-12 gap-4">
          <a href="#slide5" className="btn btn-circle bg-[#FFFFFF33] border-none text-white hover:bg-theme">
            <BsArrowLeft className="text-xl font-bold"></BsArrowLeft>
          </a>
          <a href="#slide1" className="btn btn-circle bg-[#FFFFFF33] border-none text-white hover:bg-theme">
            <BsArrowRight></BsArrowRight>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
