
import Navbar from "./Navbar";
import BG1 from "../assets/img/BG1.jpg";

const Header = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={BG1}
          alt="Wooden pier over water"
          className="w-full h-full object-cover brightness-75"
        />
      </div>

      {/* Navbar - Now positioned absolutely */}
      <div className="absolute top-0 -left-[12vh] w-full z-20">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex h-full">
        {/* Left Side - Portfolio Text */}
        <div className="flex flex-col justify-center pl-20 w-1/3">
          <h1 className="text-white text-[20vh] mb-14  font-bold">
            POR
          </h1>
          <h1 className="text-white text-[20vh] mb-14 font-bold">
            TFO
          </h1>
          <h1 className="text-white text-[20vh] leading-none font-bold">LIO</h1>
        </div>

        {/* Right Side - Name and Title */}
        <div className="flex flex-col justify-center items-centerapa mb-[20vh] mr-32 right-10 w-2/3">
          <div className="text-right">
            <h2 className="text-white text-5xl italic font-light mb-2">
              Iurie Muhamad Farrel
            </h2>
            <h3 className="text-white text-2xl tracking-wider">
              FRONT-END DEVELOPER
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
