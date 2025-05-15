import React from 'react';
import Image from 'next/image';
import projectsData from '../../data/projects.json';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id} // Assuming each project has a unique id
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500} // Adjust width and height as needed
                height={300}
                objectFit="cover"
                className="w-full h-48"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
