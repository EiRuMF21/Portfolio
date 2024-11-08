import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

interface Repo {
  imageUrl: string;
  name: string;
  description: string;
  languageColor: string;
  language: string;
  stars: number;
  link: string;
}

const Portfolio = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://portfolio-be-seven.vercel.app/api/pinned-repos")
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch((error) => console.error(error));
  }, []);

  const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
  };

  const items = repos.map((repo, index) => (
    <div className="px-4 w-full" key={index}>
      <div className="bg-gradient-to-b from-[#D6314F] to-[#701A2A] p-4 rounded-md shadow-md space-y-5">
        <div className="bg-[#701A2A] p-5 rounded-md">
          <h3 className="text-white font-sans text-xl font-bold">
            {repo.name}
          </h3>
        </div>
        <div className="flex flex-col bg-transparent border border-white p-6 rounded-md h-[60vh] justify-center items-start">
          <img
            src={repo.imageUrl}
            alt={repo.name}
            className="w-full h-40 mb-4 object-cover rounded-md"
          />
          <span className="text-yellow-400 text-sm mt-40">⭐ {repo.stars}</span>
          <a
            href={repo.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm w-full"
          >
            <button className="flex flex-row space-x-2 items-center w-full mt-5 h-12 hover:bg-gray-700 rounded-md transition-colors justify-center border border-gray-700">
              <p className="font-sans">View Project</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  ));

  return (
    <section
      className="relative py-20 min-h-screen w-full overflow-hidden bg-black"
      id="Portfolio"
    >
      <div className="w-[200vh] px-8">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          autoPlay
          autoPlayInterval={2000}
          infinite
          keyboardNavigation
          renderPrevButton={() => {
            return (
              <button className="p-4 absolute left-4 top-1/2 -translate-y-1/2 bg-black border border-gray-700 text-white rounded-full opacity-75 hover:opacity-100 z-10">
                {"<"}
              </button>
            );
          }}
          renderNextButton={() => {
            return (
              <button className="p-4 absolute right-4 top-1/2 -translate-y-1/2 bg-black border border-gray-700 text-white rounded-full opacity-75 hover:opacity-100 z-10">
                {">"}
              </button>
            );
          }}
          disableDotsControls={false}
          paddingLeft={80}
          paddingRight={80}
        />
      </div>
    </section>
  );
};

export default Portfolio;