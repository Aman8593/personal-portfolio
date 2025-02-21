import React from "react";
import SkillsCube from "./SkillsCube"; // Import the SkillsCube component

const Body = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-6 bg-gray-100 dark:bg-gray-800 min-h-screen">
      <div className="flex-1 max-w-lg pl-4 md:pl-8 mb-8 md:mb-0">
        <p className="text-lg leading-relaxed  text-gray-700 dark:text-gray-300 animate-fadeInSlideUp mb-6">
          <span className="text-4xl">Hi, I'm Aman Wadgaonkar,</span>
          <br></br>
          <p className="text-2xl">
            A passionate developer with experience in React.js and a love for
            creating dynamic and responsive web applications. Skilled in AWS and
            DevOps, with expertise in cloud infrastructure, CI/CD, and
            automation. Explore my projects, learn more about my skills, and
            feel free to reach out!
          </p>
        </p>
        <div className="flex items-center justify-start mb-6">
          <a
            href="mailto:amanwadgaonkar8593@gmail.com" // Replace with your actual email address
            className="px-6 py-3 bg-blue-600 dark:bg-blue-400 text-white dark:text-gray-900 font-semibold rounded-md shadow-lg hover:bg-blue-700 dark:hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-lg"
          >
            Hire Me
          </a>
        </div>
        <div className="flex-col justify-center space-x-4">
          <a
            href="https://github.com/Aman8593"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            href="https://twitter.com/AmanWadgaonkar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/aman-wadgaonkar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-700 transition-colors"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <SkillsCube /> {/* Replace the image with the SkillsCube component */}
      </div>
    </div>
  );
};

export default Body;
