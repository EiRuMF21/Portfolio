import React, { useEffect, useState } from "react";
import axios from "axios";

interface Repo {
  imageUrl: string;
  name: string;
  description: string;
  languageColor: string;
  language: string;
  stars: number;
  link: string;
}

const Portfolio: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    axios
      .get("/api/pinned-repos")
      .then((response) => {
        setRepos(response.data as Repo[]); // Assert that response.data is an array of Repo
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <section
      className="relative h-screen w-screen overflow-hidden bg-black"
      id="Portfolio"
    >
      <div className="grid grid-cols-3 gap-4 p-4">
        {repos.map((repo, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-md shadow-md">
            <img
              src={repo.imageUrl}
              alt={repo.name}
              className="w-full h-32 object-cover mb-4 rounded-md"
            />
            <h3 className="text-white text-lg font-bold">{repo.name}</h3>
            <p className="text-gray-400 text-sm">{repo.description}</p>
            <div className="flex items-center mt-2">
              <span
                style={{ backgroundColor: repo.languageColor }}
                className="w-3 h-3 rounded-full mr-2"
              ></span>
              <span className="text-gray-400 text-sm">{repo.language}</span>
            </div>
            <div className="flex items-center mt-2">
              <span className="text-yellow-400 text-sm">⭐ {repo.stars}</span>
            </div>
            <a
              href={repo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-sm mt-2"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
