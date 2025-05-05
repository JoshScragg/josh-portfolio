import React from "react";

type ProjectProps = {
  title: string;
  description: string;
  imageSrc: string;
  isAlternate?: boolean;
};

const Project: React.FC<ProjectProps> = ({ title, description, imageSrc, isAlternate }) => {
  return (
    <section className={`project ${isAlternate ? "alternate" : ""}`}>
      <div className="project-image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className={`project-description ${isAlternate ? "alternate" : ""}`}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default Project;