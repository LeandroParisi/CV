import React from 'react';
import projectsDB from '../data/projects_DB';
import './style_sheets/Projects.css';

class Projects extends React.Component {
  render() {
    return (
      <section className="project-page">
        <div>Projects</div>
        <section className="projects-grid">
          {projectsDB.map(project => <section className="project-container">
            <h3>{project.name}</h3>
            <img src={project.image} alt={project.name} width="250px" />
          </section>)}
        </section>
      </section>
    );
  };
}

export default Projects;
