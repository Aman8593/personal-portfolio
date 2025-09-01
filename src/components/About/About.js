import React from "react";
import "./About.css";

const About = () => {
  const skills = [
    {
      icon: "fab fa-react",
      name: "React",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: "fab fa-js",
      name: "JavaScript",
      color: "text-yellow-500 dark:text-yellow-400",
    },
    {
      icon: "fab fa-python",
      name: "Python",
      color: "text-blue-500 dark:text-blue-300",
    },
    {
      icon: "fab fa-css3",
      name: "CSS",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: "fas fa-database",
      name: "SQL",
      color: "text-green-600 dark:text-green-400",
    },
    {
      icon: "fab fa-cuttlefish",
      name: "C++",
      color: "text-gray-700 dark:text-gray-300",
    },
    {
      icon: "fas fa-database",
      name: "MongoDB",
      color: "text-green-600 dark:text-green-400",
    },
    {
      icon: "fab fa-linux",
      name: "Linux",
      color: "text-black dark:text-gray-400",
    },
    {
      icon: "fab fa-git",
      name: "Git",
      color: "text-orange-600 dark:text-orange-400",
    },
    {
      icon: "fab fa-tailwindcss",
      name: "Tailwind CSS",
      color: "text-blue-400 dark:text-blue-300",
    },
    {
      icon: "fab fa-aws",
      name: "AWS",
      color: "text-orange-500 dark:text-orange-400",
    },
    {
      icon: "fab fa-docker",
      name: "Docker",
      color: "text-blue-500 dark:text-blue-400",
    },
    {
      icon: "fas fa-cogs",
      name: "DevOps",
      color: "text-gray-700 dark:text-gray-300",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            About Me
          </h1>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I'm Aman Wadgaonkar, a Computer Science graduate from MIT Academy of
            Engineering with expertise in C++, Python, React, AI, DevOps, and
            AWS cloud services. I specialize in building scalable cloud
            architectures and automating development workflows through CI/CD
            pipelines and infrastructure automation. My experience includes
            deploying applications across cloud environments and implementing
            efficient DevOps practices. A highlight of my work is a fintech
            application that combines AI, web scraping, and data processing
            capabilities. Through various full-stack projects, I've developed
            strong problem-solving skills and the ability to design end-to-end
            solutions for real-world challenges. I'm passionate about leveraging
            technology to solve complex problems and continuously exploring
            innovations in cloud computing, AI, and modern web development.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center mb-8">
            Technologies & Skills
          </h2>

          {/* Skills Slider */}
          <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow-lg py-8">
            <div className="skills-slider">
              <div className="skills-slider-inner flex items-center">
                {/* Render skills multiple times for seamless loop */}
                {[...Array(3)].map((_, setIndex) => (
                  <React.Fragment key={setIndex}>
                    {skills.map((skill, index) => (
                      <div
                        key={`${setIndex}-${index}`}
                        className="flex flex-col items-center mx-4 sm:mx-6 md:mx-8 flex-shrink-0"
                      >
                        <i
                          className={`${skill.icon} text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${skill.color} mb-2`}
                        ></i>
                        <span className="text-xs sm:text-sm md:text-base text-gray-900 dark:text-gray-100 text-center whitespace-nowrap">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Education
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              BTech in Computer Engineering
              <br />
              MIT Academy of Engineering
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Focus Areas
            </h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-1">
              <li>• Full-Stack Development</li>
              <li>• Cloud Architecture (AWS)</li>
              <li>• DevOps & CI/CD</li>
              <li>• Containerization</li>
              <li>• Gen AI</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
