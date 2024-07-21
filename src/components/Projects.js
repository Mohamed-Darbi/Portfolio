import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Trucking Software',
    description: 'A marketplace for loads with an integrated logbook using the MERN stack.',
    link: '#',
  },
  {
    title: 'Elevator Emulator',
    description: 'An STM32F103RB based project with a serial connection and RTOS.',
    link: '#',
  },
  {
    title: 'Snack Distributing Robot',
    description: 'A robot that follows a black line and distributes snacks, with various sensors.',
    link: '#',
  },
  {
    title: 'Blindness Detection Model',
    description: 'An AI model to detect blindness in diabetic retinopathy with 77.68% accuracy.',
    link: '#',
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;