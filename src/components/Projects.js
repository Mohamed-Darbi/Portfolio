import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faBuilding, faRobot, faCode, faChartLine, faDatabase, faFireBurner, faBook, faShieldHalved, faAddressBook, faMosque, faGem, faStore, faGamepad, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const projects = [
  {
    title: 'Tutor Hub',
    description: 'A tutor and student matchmaker, tutors can set their hourly rate, topics and available times and students can filter available tutors based on what they are looking for.',
    link: 'http://tutorhub.mitsukaki.com/',
    icon: faBook,
    languages: 'JavaScript, Tailwind, HTML, MongoDB, Node.JS'
  },
  {
    title: 'IoT smart oven detector',
    description: 'An arduino based project that detects smoke in the oven and alerts users via email and plays and a loud alarm to alert nearby users.',
    link: '#',
    icon: faFireBurner,
    languages: 'C++, Arduino'
  },
  {
    title: 'Trucking Software',
    description: 'A marketplace for loads with an integrated logbook using the MERN stack.',
    link: 'https://freightshield.csproject.org/',
    icon: faTruck,
    languages: 'MongoDB, Express, React, Node.js'
  },
  {
    title: 'GemSeekers',
    description: 'An educational game for kids to learn about geology and puzzle solving as they delve into different dungeons. Launched on the MKTV platform as a flagship game in 2023.',
    link: 'https://muslimkids.tv/new/',
    icon: faGem,
    languages: 'COnstruct 3, Javascript'
  },
  {
    title: 'Shopkeeper Showdown',
    description: 'An entertaining game for kids where the goal is keep the lineup moving while stopping the thief. Launched on the MKTV platform as a flagship game in 2023.',
    link: 'https://muslimkids.tv/new/',
    icon: faStore,
    languages: 'Construct 3, javascript'
  },
  {
    title: 'Many smaller games',
    description: 'A wide variety of simple games to either educate or entertain children on the MKTV platform.',
    link: 'https://muslimkids.tv/new/',
    icon: faGamepad,
    languages: 'Construct 3, Javascript'
  },
  {
    title: 'ISR Website',
    description: 'A community driven website that serves the muslim community in my local area. Complete with donation functionlaity, prayer times and upcoming events.',
    link: 'https://isrregina.ca/',
    icon: faMosque,
    languages: 'HTML, CSS, JavaScript'
  },
  {
    title: 'Portfolio',
    description: 'This website that serves as my portfolio showcasing my previous projects and contact information.',
    link: '#',
    icon: faAddressBook,
    languages: 'React, CSS'
  },
  {
    title: 'Early Maya Animation',
    description: 'An animation that showcases different weapons from different eras and the country they originate from.',
    link: 'https://www.youtube.com/watch?v=tHZT2LtdtwE',
    icon: faShieldHalved,
    languages: 'Autodesk Maya'
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>/projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>
              <FontAwesomeIcon icon={project.icon} className="icon-spacing" /> 
              {project.title}
            </h3>
            <p>{project.description}</p>
            <p className="languages-used"><strong>Languages Used:</strong> {project.languages}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="learn-more-icon">
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
