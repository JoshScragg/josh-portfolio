import React from "react";
import Navbar from "../components/nav";
import Footer from "../components/footer";
import ProjectsList from "../components/projectslist";

const ProjectsPage: React.FC = () => {
  return (
    <main className="container">
      <Navbar />
      <ProjectsList />
      <Footer />
    </main>
  );
};

export default ProjectsPage;