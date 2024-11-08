import { FaYoutube, FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 w-screen h-[25vh] ">
      <div className="text-center">
        <p className="text-lg font-semibold">
          Looking forward to connecting on future projects!
        </p>
        <p className="text-md">Don’t hesitate to contact me</p>

        <div className="flex flex-row justify-end mr-52 space-x-4   mt-4">
          <a
            href="https://www.youtube.com/@eirumv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white
            hover:text-red-500"
          >
            <FaYoutube size={20} />
          </a>
          <a
            href="https://github.com/EiRuMF21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white
            hover:text-red-500"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.instagram.com/eirumf/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white
            hover:text-red-500"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.tiktok.com/@uriemf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white
            hover:text-red-500"
          >
            <FaTiktok size={20} />
          </a>
        </div>

        {/* Divider Line */}
        <hr className="border-t-2 border-gray-200 my-4 mx-auto w-3/4" />
      </div>
    </footer>
  );
};

export default Footer;
