import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            {/* Add your profile picture here */}
            <img
              src="/images/profile.jpg" // Replace with your image path
              alt="Profile Picture"
              className="rounded-full w-48 h-48 mx-auto object-cover"
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Write a brief introduction about yourself, your skills, and your passion for development.
              Mention your experience and what you are looking for.
            </p>
            {/* Add more paragraphs or details as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
