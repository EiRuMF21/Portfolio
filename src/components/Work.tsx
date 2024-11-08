import React from "react";
import Phoenix from "../assets/img/Phoenix.png";
import iurie from "../assets/img/iurie.png";
import iurie2 from "../assets/img/Iurie2.png";
import Portfolio2 from "../assets/img/Portfolio2_1.png";
import Portfolio2_2 from "../assets/img/Portofolio2_2.png";
import Portfolio2_3 from "../assets/img/Portofolio2_3.png";
import Tefa from "../assets/img/Tefa.png";
import Mobile1 from "../assets/img/Mobile.png";
import Mobile2 from "../assets/img/Mobile2.png";
import { FaYoutube, FaGithub } from "react-icons/fa";

const Work = () => {
  return (
    <section
      className="flex items-center h-screen w-screen bg-black text-white relative"
      id="Work"
    >
      {/* Text on the left */}
      <div className="flex flex-col justify-center items-start ml-10 ">
        <div className="flex flex-col justify-center items-start space-y-2">
          <h1 className="font-sans text-6xl whitespace-nowrap">
            Website & Video
          </h1>
          <h1 className="opacity-60 font-sans text-6xl">created by my</h1>
          <h1 className="text-6xl font-sans">experience</h1>
          <h1 className="text-6xl font-sans ">and</h1>
          <h1 className="text-white/60 font-sans text-6xl">
            with{" "}
            <span className=" font-bold text-white">Details</span>
          </h1>
        </div>

        <div className="flex flex-row space-x-3 items-center mt-10">
          <a
            href="https://www.youtube.com/@eirumv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <button className="flex flex-row space-x-2 items-center w-36">
              <FaYoutube size={30} />
              <p className="font-sans">EiRu MV</p>
            </button>
          </a>
          <a
            href="https://github.com/EiRuMF21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <button className="flex flex-row space-x-2 items-center w-36">
              <FaGithub size={30} />
              <p className="font-sans">EiRuMF21</p>
            </button>
          </a>
        </div>
      </div>

      {/* Main container for images with relative positioning */}
      <div className="flex flex-col items-end justify-center w-full h-full">
        {/* Bagian 1 */}
        <div className="flex flex-row mr-10">
          <div className="flex justify-center items-center mb-5 bg-gradient-to-b mr-5 from-[#1E88E5] to-[#1E1E1E] w-[320px] h-[190px] rounded-lg">
            <img
              src={Tefa}
              alt=""
              className="w-[270px] h-[144.27px] shadow-3xl "
            />
          </div>
          <div className="flex justify-center items-center bg-gradient-to-b from-[#EEA322] to-[#593E10] w-[350px] h-[190px] rounded-lg">
            <img src={Phoenix} alt="" className="w-[250px] h-[123.61px]" />
          </div>
        </div>
        {/* Bagian 2 */}
        <div className="flex flex-row mr-10">
          <div className="flex flex-col justify-center items-center mb-10 bg-gradient-to-b from-[#D6314F] to-[#701A2A] w-[250px] h-[332.41px] rounded-lg  overflow-hidden">
            <img src={Portfolio2_2} alt="" className="w-[200px] h-[97.95px]" />
            <img
              src={Portfolio2}
              alt=""
              className="w-[200px] h-[97.95px] mt-5 mb-5"
            />
            <img src={Portfolio2_3} alt="" className="w-[200px] h-[100.95px]" />
          </div>
          {/* Bagian 3 */}
          <div className="flex flex-col ml-5">
            <div className="flex justify-center items-center mb-5 bg-gradient-to-b mr-5 from-[#676767] to-[#383839] w-[100px] h-[87.12px] rounded-lg">
              <img src="" alt="" />
            </div>
            <div className="flex justify-center items-center mb-5 bg-gradient-to-b mr-5 from-[#676767] to-[#383839] w-[100px] h-[225px] rounded-lg">
              <p className="text-center">VIEW ALL PROJECT</p>
            </div>
          </div>
          {/* Bagian 4 */}
          <div className="flex flex-col ">
            <div className="flex flex-row justify-center items-center  bg-gradient-to-b  from-[#4558E3] to-[#202D87] w-[300px] h-[123.99px] rounded-lg overflow-hidden">
              <img
                src={Mobile1}
                alt=""
                className="w-[110px] h-[158.28px] mr-10 mt-10"
              />
              <img
                src={Mobile2}
                alt=""
                className="w-[100px] h-[138.79px] rotate-180 mb-10"
              />
            </div>
            <div className="flex justify-center items-center bg-gradient-to-b mt-5  from-[#3CE6DC] to-[#1E5652] w-[300.86px] h-[190px] rounded-lg">
              <img
                src={iurie}
                alt=""
                className="w-[240px] h-[111.75px] mt-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
