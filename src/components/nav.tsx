import React from "react";
import { Link } from "gatsby";

const Navbar: React.FC = () => {
  return (
    <nav className="left-section">
      <Link to="/" className="button"><h1>Josh Scragg</h1></Link>
      <Link to="/aboutpage" className="button nav">About</Link>
      <Link to="/projects" className="button nav">Projects</Link>
      <a href="/pdf/Josh_Resume.pdf" className="button nav">Resume</a>
    </nav>
  );
};

export default Navbar;
