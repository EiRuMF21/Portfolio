import { useEffect, useRef } from "react";
import gsap from "gsap";
import PP from "../assets/img/pp.jpg";

const About = () => {
  const backgroundTextRef = useRef(null);

  useEffect(() => {
    const marqueeAnimation = gsap.fromTo(
      backgroundTextRef.current,
      { xPercent: 0 }, // Start from the beginning
      {
        xPercent: -100, // Move to the left to create the scroll effect
        duration: 20,
        ease: "linear",
        repeat: -1, // Infinite loop
      }
    );

    return () => {
      marqueeAnimation.kill();
    };
  }, []);

  return (
    <section
      className="relative h-[120vh] w-screen bg-black overflow-hidden"
      id="about"
    >
      {/* Background Text Effect */}
      <div
        ref={backgroundTextRef}
        className="absolute top-0 left-0 whitespace-nowrap font-semibold font-sans text-white"
        style={{ fontSize: "20vh", opacity: 0.8 }}
      >
        ABOUT ME <span className="text-stroke-white">ABOUT ME</span> ABOUT ME
      </div>

      {/* Main Content */}
      <div className="z-10 flex justify-center h-full items-start space-x-5 mt-60">
        {/* Left Column: About and Education */}
        <div className="flex flex-col space-y-5">
          {/* About */}
          <div className="w-[600px] h-[300px] border border-gray-500 p-6 rounded-xl bg-black/50 backdrop-blur text-white">
            <p className="text-lg leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it.
            </p>
          </div>

          {/* Education */}
          <div className="w-[600px] h-[300px] border border-gray-500 p-6 rounded-xl bg-black/50 backdrop-blur text-white">
            <h2 className="text-xl font-bold mb-4">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">SMPI Al - Azhar 36</h3>
                <p className="text-sm">2012-2017</p>
                <hr className="border-t border-gray-500 mt-2" />
              </div>
              <div>
                <h3 className="font-semibold">SMKN 4 Bandung</h3>
                <p className="text-sm">2021-2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Photo, Skills, and Tools */}
        <div className="flex flex-col space-y-5 ">
          {/* Photo and Skills Container */}
          <div className="flex space-x-3">
            {/* Photo */}
            <div className="w-[300px] h-[400px] border border-gray-500 p-0 rounded-xl bg-black/50 backdrop-blur">
              <img
                src={PP}
                alt="Profile"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Skills */}
            <div className="w-[500px] h-[400px] border border-gray-500 p-6 rounded-xl bg-black/50 backdrop-blur text-white">
              <h2 className="text-xl font-bold mb-4">Skills</h2>
              <ul className="space-y-2 text-lg">
                <li>React Vite</li>
                <li>Typescript</li>
                <li>TailwindCSS</li>
                <li>ExpressJS</li>
                <li>Axios</li>
              </ul>
            </div>
          </div>

          {/* Tools */}
          <div className="w-[810px] h-[200px] border border-gray-500 p-6 rounded-xl bg-black/50 backdrop-blur text-white">
            <h2 className="text-xl font-bold mb-4">Tools</h2>
            <div className="flex space-x-4 mt-2">
              <img
                src="path/to/vscode-icon.png" // Replace with actual icon paths
                alt="VS Code"
                className="w-12 h-12 object-contain"
              />
              <img
                src="path/to/aftereffects-icon.png"
                alt="After Effects"
                className="w-12 h-12 object-contain"
              />
              <img
                src="path/to/other-tool-icon.png"
                alt="Other Tool"
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
