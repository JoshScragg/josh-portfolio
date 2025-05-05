import React from "react";

type ProjectProps = {
  title: string;
  description: string;
  imageSrc: string;
  repoUrl: string;
  isAlternate?: boolean;
};

const Project: React.FC<ProjectProps> = ({ title, description, imageSrc, repoUrl, isAlternate }) => {
  return (
    <section className={`project ${isAlternate ? "alternate" : ""}`}>
      <div className="project-image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className={`project-description ${isAlternate ? "alternate" : ""}`}>
        <h2>
          <a href={repoUrl} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default Project;