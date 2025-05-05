import React from "react";
import Project from "./project";
import projectImage1 from "../images/class_dashboard.png";
import projectImage2 from "../images/dashboard.png";

const projectData = [
  {
    title: "Spatial Skills Tester",
    description: "This website allows instructors to create, management, assign and track quizzes for their students. These quizzes can be used for any subject, but we made it with Spatial Skills testing in mind. We ensured that individual questions could be timed, and that interactive questions are easily implemented to allow for this.",
    imageSrc: projectImage1,
  },
  {
    title: "Climate Dashboard",
    description: "This creative project addresses real-world challenges...",
    imageSrc: projectImage2,
  },
  {
    title: "Project 3 Title",
    description: "This project does amazing things...",
    imageSrc: projectImage2,
  },
  {
    title: "Project 4 Title",
    description: "This creative project addresses real-world challenges...",
    imageSrc: projectImage2,
  },
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
          isAlternate={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default ProjectsList;