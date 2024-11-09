import PP from "../assets/logo/Profile.jpg";

const About = () => {
  return (
    <section
      className="relative flex items-center justify-center h-full w-screen bg-black overflow-hidden"
      id="about"
    >
      {/* Main Content */}
      <div className="z-10 flex justify-center h-full items-start space-x-5 mt-16">
        {/* Left Column: About and Education */}
        <div className="flex flex-col space-y-5">
          {/* About */}
          <div className="w-[600px] h-[300px] border-2 border-gray-500 p-6 rounded-xl bg-black/50 backdrop-blur text-white">
            <p className="text-lg leading-relaxed">
              Hello, nice to meet you all. I'm Iurie Muhamad Farrel, a web
              developer who is always learning from the experiences I go
              through. I'm glad to be able to share my journey with all of you.
            </p>
          </div>

          {/* Education */}
          <div className="w-[600px] h-[300px] border-2 border-gray-500 p-6 rounded-xl bg-black/50 backdrop-blur text-white">
            <h2 className="text-xl font-bold mb-4">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">SMKN 4 Bandung</h3>
                <p className="text-sm">2022-2025</p>
                <hr className="border-t border-gray-500 mt-2" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Photo, Skills, and Tools */}
        <div className="flex flex-col space-y-5">
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
            <div className="w-[500px] h-[400px] border-2 border-gray-500 p-6 rounded-xl bg-black/50 backdrop-blur text-white">
              <h2 className="text-xl font-bold mb-4">Skills</h2>
              <ul className="space-y-2 text-lg">
                <li>Learning New Technologies Quickly</li>
                <li>Problem Solving</li>
                <li>Teamwork & Pair Programming</li>
                <li>Multitasking Effectively</li>
              </ul>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="w-[810px] h-auto border-2 border-gray-500 p-6 rounded-xl bg-black/50 backdrop-blur text-white">
            <h2 className="text-xl font-bold mb-4">Tools & Tech</h2>
            <div className="flex flex-wrap gap-4 mt-2">
              <img
                src="https://skillicons.dev/icons?i=html"
                alt="HTML"
                className="w-12 h-12"
              />
              <img
                src="https://skillicons.dev/icons?i=css"
                alt="CSS"
                className="w-12 h-12"
              />
              <img
                src="https://skillicons.dev/icons?i=tailwind"
                alt="Tailwind CSS"
                className="w-12 h-12"
              />
              <img
                src="https://skillicons.dev/icons?i=react"
                alt="React"
                className="w-12 h-12"
              />
              <img
                src="https://skillicons.dev/icons?i=typescript"
                alt="TypeScript"
                className="w-12 h-12"
              />

              <img
                src="https://skillicons.dev/icons?i=mysql"
                alt="MySQL"
                className="w-12 h-12"
              />
              <img
                src="https://skillicons.dev/icons?i=figma"
                alt="Figma"
                className="w-12 h-12"
              />
              <img
                src="https://skillicons.dev/icons?i=ae"
                alt="After Effects"
                className="w-12 h-12"
              />
              <img
                src="https://skillicons.dev/icons?i=vscode"
                alt="VS Code"
                className="w-12 h-12"
              />
              <img
                src="https://skillicons.dev/icons?i=github"
                alt="GitHub"
                className="w-12 h-12"
              />
              <img
                src="https://skillicons.dev/icons?i=discord"
                alt="Discord"
                className="w-12 h-12"
              />
              <img
                src="https://skillicons.dev/icons?i=postman"
                alt="Postman"
                className="w-12 h-12"
              />
              <img
                src="https://skillicons.dev/icons?i=chatgpt"
                alt="ChatGPT"
                className="w-12 h-12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
