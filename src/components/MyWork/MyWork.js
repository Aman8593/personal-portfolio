import React from 'react';

// Sample data for projects
const projects = {
  webdev: [
    {
      title: 'Blog App',
      description: 'A role-based access control(RBAC) admin dashboard built with Next.js for efficient user, role and permission management.',
      image: 'webd-project1.png',
      githubLink: 'https://github.com/Aman8593/RBAC-UI.git',
    },
    {
      title: 'Tesla Clone',
      description: 'A sleek and responsive Tesla website clone built with modern web technologies for an immersive user experience. ⚡🚗',
      image: 'webd-project2.png',
      githubLink: 'https://github.com/Aman8593/Tesla-Clone.git',
      
    },
    {
      title: 'Ai Image Gallery',
      description: 'image gallery built with modern web technologies for seamless browsing and exploration',
      image: 'webd-project3.png',
      githubLink: 'https://github.com/Aman8593/Ai-image-gallery.git',
      
    },
  ],
  Cloud: [
    {
      title: 'E-commerce car selling website',
      description: 'Cloud CI/CD pipeline automating application deployment and updates using AWS services for scalability, reliability, and efficiency. 🚀',
      image: 'cloud-project1.png',
      githubLink: 'https://github.com/Aman8593/Cloud_CICD.git',
      
    },
    {
      title: 'Cloud Based Banking Application',
      description: 'Cloud-based banking app with robust security, cost optimization, AWS deployment, enhanced compliance, scalability, and seamless transactions. 💳☁️',
      image: 'cloud-project2.png',
      githubLink: 'https://github.com/Aman8593/Major-UnicornBank.git',
      
    },
    {
      title: 'Kubernetes Services and Deployments',
      description: 'Kubernetes deployments and services for scalable, efficient container orchestration with automation, load balancing, and high availability. ⚡🚀',
      image: 'cloud-project3.png',
      githubLink: 'https://github.com/Aman8593/K8s-deployments-services.git',
      
    },
    {
      title: 'Jenkins CICD on Kubernetes',
      description: 'Jenkins-powered CI/CD pipeline on Kubernetes for seamless automation, efficient deployments, and scalable infrastructure management. ⚡🚀',
      image: 'cloud-project4.jpg',
      githubLink: 'https://github.com/Aman8593/jenkins-cicd-on-k8-s.git',
      
    },
  ],
  // deeplearning: [
  //   {
  //     title: 'Project 1',
  //     description: 'Description for Deep Learning Project 1',
  //     image: 'https://via.placeholder.com/300',
  //     githubLink: 'https://github.com/your-repo/project1',
      
  //   },
    
  // ],
};

const Work = () => {
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">My Work</h1>

      {Object.keys(projects).map((category) => (
        <section key={category} className="mb-12 w-full max-w-6xl">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100 text-center">
            {category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects[category].map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden flex flex-col items-center"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 text-center">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">{project.description}</p>
                  <div className="flex space-x-4 mt-4">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        GitHub
                      </a>
                    )}
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 dark:text-green-400 hover:underline"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Work;
