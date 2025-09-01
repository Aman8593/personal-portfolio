import React from "react";
import { motion } from "framer-motion";
import SkillsCube from "./SkillsCube"; // Import the SkillsCube component

const Body = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center px-4 py-4 md:px-8 md:py-6 bg-gray-100 dark:bg-gray-800 h-[calc(100vh-4rem)]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex-1 max-w-lg pl-4 md:pl-8 mb-8 md:mb-0">
        <motion.p
          className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 animate-fadeInSlideUp mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-lg">
            Hi, I'm Aman Wadgaonkar,
          </span>
          <br />
          <p className="text-2xl">
            A passionate developer with experience in React.js and a love for
            creating dynamic and responsive web applications. Skilled in AWS and
            DevOps, with expertise in cloud infrastructure, CI/CD, and
            automation. Explore my projects, learn more about my skills, and
            feel free to reach out!
          </p>
        </motion.p>

        <div className="flex items-center justify-start mb-6 space-x-4">
          <motion.a
            href="mailto:amanwadgaonkar8593@gmail.com"
            className="px-6 py-3 bg-blue-500 dark:bg-blue-400 text-white dark:text-gray-900 font-semibold rounded-md shadow-lg hover:bg-blue-700 dark:hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-lg transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Hire Me
          </motion.a>
          <motion.a
            href="/resume.pdf" // Update with the correct path to your resume file
            download
            className="px-6 py-3 bg-gray-900 dark:bg-gray-500 text-white dark:text-gray-900 font-semibold rounded-lg shadow-md hover:bg-gray-700 dark:hover:bg-gray-400 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 text-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Download Resume
          </motion.a>
        </div>

        <div className="flex space-x-4">
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

      <motion.div
        className="flex-1 flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <SkillsCube />
      </motion.div>
    </motion.div>
  );
};

export default Body;
