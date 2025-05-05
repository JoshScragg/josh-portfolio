import React from "react";
import Project from "./project";
import projectImage1 from "../images/class_dashboard.png";
import projectImage2 from "../images/dashboard.png";
import projectImage3 from "../images/discmd.png"

// Updated project data structure with GitHub repo URLs
const projectData = [
  {
    title: "Spatial Skills Tester",
    description: "This website allows instructors to create, management, assign and track quizzes for their students. These quizzes can be used for any subject, but we made it with Spatial Skills testing in mind. We ensured that individual questions could be timed, and that interactive questions are easily implemented to allow for this.",
    imageSrc: projectImage1,
    repoUrl: "https://github.com/uoa-compsci399-s2-2022/Website",
  },
  {
    title: "Climate Dashboard",
    description: "Climate Dashboard is a comprehensive web application for visualizing and monitoring climate data trends. It features interactive charts and maps that display critical climate metrics including global temperature anomalies, CO₂ concentrations, precipitation patterns, sea level rise, and ice extent data.",
    imageSrc: projectImage2,
    repoUrl: "https://github.com/JoshScragg/climate_dashboard",
  },
  {
    title: "DiscordCMD",
    description: "Simple headless client for discord allows users to send and recieve messages swap channels etc. Uses discords backend v3 api and a users api token",
    imageSrc: projectImage3,
    repoUrl: "https://github.com/JoshScragg/DiscordCMD",
  }
];

const ProjectsList: React.FC = () => {
  return (
    <div className="projects-content">
      {projectData.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          imageSrc={project.imageSrc}
          repoUrl={project.repoUrl}
          isAlternate={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default ProjectsList;