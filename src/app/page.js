// Using React Server Component
"use client"; // Required for framer-motion components
import Image from 'next/image';
import projectsData from '@/../data/projects.json'; // Adjust path as necessary
import { motion } from 'framer-motion';

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Helper function to generate image path (assumes consistent naming)
const getImagePath = (title) => {
  const imageName = title.toLowerCase().replace(/\s+/g, '-') + '.png';
  // Handle specific known image names and typos
  if (title === "YouTube Home Page Clone") return "/images/youtube-clone.png";
  if (title === "Amazon Website Clone") return "/images/amazone-clone.png"; // Note: 'amazone'
  if (title === "Job Listing Platform") return "/images/job-listing.png";
  if (title === "AI-Based Note Taking App") return "/images/AI-note-takeing-app-home.png"; // Note: 'takeing'
  if (title === "To-Do List") return "/images/todo-list-app.png";
  if (title === "Movie Streaming Website") return "/images/movie-streaming-app.png";
  // Fallback or default image if no specific match
  return `/images/${imageName}`; // This might not always find an image if names differ
};

export default function Home() {
  const { projects } = projectsData;

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 sm:p-8 md:p-12 lg:p-24 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <motion.section 
        id="hero" 
        className="w-full max-w-5xl text-center py-16 md:py-24 lg:py-32 border-b border-gray-300 dark:border-gray-700 flex flex-col items-center"
        initial="hidden"
        animate="visible" // Animate hero immediately on load
        variants={sectionVariants}
      >
        <motion.div 
          className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-8 rounded-full overflow-hidden shadow-lg border-4 border-white dark:border-gray-700"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Image
            src="/images/img-1.png"
            alt="Biruk's Profile Picture"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            priority // Load image faster as it's in the hero section
          />
        </motion.div>
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Biruk Bejiga
        </motion.h1>
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Passionate Software Engineering Student | Web Developer
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a 
            href="#projects" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-md"
          >
            View My Projects
          </a>
          <a 
            href="https://drive.google.com/file/d/1SmRlnEm2bGPcgwZw-iH43joxJYJpwNMt/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-md"
          >
            Download CV
          </a>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="w-full max-w-5xl py-16 md:py-24 border-b border-gray-300 dark:border-gray-700"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">About Me</h2>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 text-center leading-relaxed">
          I am a passionate software engineering student with a strong focus on web development and emerging technologies. I am eager to apply my knowledge in programming and web development to build innovative solutions. My goal is to secure freelancing opportunities, gain industry experience, and continuously improve my skills to stay ahead in the tech world.
        </p>
        {/* Add more about content: skills list, photo, etc. */}
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        className="w-full max-w-5xl py-16 md:py-24 border-b border-gray-300 dark:border-gray-700"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Trigger when 10% of section is visible
        variants={sectionVariants}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.5 }} // Stagger animation
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
              <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
                <Image 
                  src={getImagePath(project.title)} 
                  alt={project.title} 
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                  className="transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm flex-grow">{project.description}</p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, idx) => (
                    <span key={idx} className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-2 py-1 rounded-full text-xs">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              {project.url && (
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block mt-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 text-center text-sm"
                >
                  View Project
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="w-full max-w-5xl py-16 md:py-24 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Get In Touch</h2>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6">
          Feel free to reach out for collaborations or just a chat!
        </p>
        <a href="mailto:birukbejga8@gmail.com" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300">
          Email Me
        </a>
        <div className="mt-8 flex justify-center space-x-6">
          <a href="https://github.com/Biruk-bejiga" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
            GitHub
          </a>
          <a href="https://x.com/biruk2094566534" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
            Twitter
          </a>
          <a href="https://www.linkedin.com/in/biruk-b-456b72289/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
            LinkedIn
          </a>
        </div>
        {/* Add contact form, etc. */}
      </motion.section>
    </main>
  );
}
