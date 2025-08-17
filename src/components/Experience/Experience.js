import React from "react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Development Intern",
      company: "Mobirey Technologies",
      location: "Remote",
      description: [
        "Fetched U.S. stock market financial data using SEC EDGAR APIs for fundamental analysis.",
        "Performed technical analysis using TA-Lib to compute indicators such as RSI, MACD, and Bollinger Bands.",
        "Parsed and summarized Form 10-K filings using LLMs to extract key financial and strategic insights.",
        "Developed a simple UI to retrieve 10-K report URLs by stock ticker and automate the analysis workflow.",
        "Retrieved options chain data and implemented 10 options trading strategies, including long call and iron condor.",
        "Calculated strategy-wise profit and loss (PnL) based on market data and contract parameters.",
        "Built a React-based frontend with a FastAPI backend to visualize options strategies, PnL, and key financial data interactively.",
      ],
      technologies: [
        "React",
        "Python",
        "FastApi",
        "Postgres",
        "Technical Analysis",
        "Docker",
      ],
    },
    {
      id: 2,
      title: "Product Management Intern",
      company: "Preskilet",
      location: "Pune, India",
      description: [
        "Conducted market research to understand customer needs and analyze market trends for strategic decision making.",
        "Collected and analyzed user feedback to enhance product features and improve user experience.",
        "Collaborated with cross-functional teams to align product development with business goals.",
        "Developed skills in market research, user feedback analysis, stakeholder communication, and analytics dashboard creation and modification.",
        "Optimized cloud costs and managed cloud resources efficiently to improve overall performance.",
      ],
      technologies: [
        "Javascript",
        "Technical Documentation",
        "Product Development",
        "Problem Solving",
        "Market Research and Analysis",
        "Scrum",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey through internships and hands-on learning
            experiences
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="mb-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-700/50 p-8 hover:shadow-xl dark:hover:shadow-gray-700/70 transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                    {exp.title}
                  </h3>
                  <h4 className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {exp.company}
                  </h4>
                </div>
                <div className="text-gray-600 dark:text-gray-300 md:text-right">
                  <p>{exp.location}</p>
                </div>
              </div>

              <div className="mb-6">
                <ul className="space-y-2">
                  {exp.description.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">
                        •
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                  Technologies Used:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
