const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    window.lenis?.scrollTo(element);
  }
};

const Navbar = () => {
  return (
    <nav className="p-6 flex justify-end">
      <div className="space-x-8">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about-me");
          }}
          className="text-white hover:text-gray-300 transition-colors px-4 py-2 uppercase text-xl font-semibold tracking-wider"
        >
          About Me
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("work");
          }}
          className="text-white hover:text-gray-300 transition-colors px-4 py-2 uppercase text-xl font-semibold tracking-wider before:w-0 before:h-[1px]  before:bg-white before:transition-all before:duration-300 hover:before:w-full"
        >
          Work
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("portfolio");
          }}
          className="text-white hover:text-gray-300 transition-colors px-4 py-2 uppercase text-xl font-semibold tracking-wider"
        >
          Portfolio
        </a>
        {/* <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
          className="text-white hover:text-gray-300 transition-colors px-4 py-2 uppercase text-xl font-bold tracking-wider"
        >
          Contact
        </a> */}
      </div>
    </nav>
  );
};

export default Navbar;
