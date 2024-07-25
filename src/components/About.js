import React from 'react';
import './about.css';
import { useRef } from 'react';

function About() {
  const beforeName = "Hi, My name is ";
  const name = "Mohamed Darbi";
  const afterName = " and I am a 24 year-old developer. I have used Python, C++, and Javascript with frameworks like React and Next.js in order to create my projects. I have also worked for one of the biggest children's entertainment platforms in the world where I made games for kids.";
  const fullText = beforeName + name + afterName;

  const showScrollButton = useRef(false);

  function handleScroll() {
    showScrollButton.current = window.scrollY > 600;
    console.log("This is scrolly", window.scrollY);
  }

  window.addEventListener('scroll', handleScroll);

  let nameStartIndex = beforeName.length;
  let nameEndIndex = nameStartIndex + name.length;

  return (
    <div className="about">
      <div className='navNewContainer'>
        <nav className='nav'>
          <ul>
            <h1><a href="#about">/about</a></h1>
            <h1><a href="#projects">/projects</a></h1>
            <h1><a href="#contact">/contact</a></h1>
          </ul>
        </nav>
      </div>

      <div className="text-container">
        {fullText.split('').map((char, index) => (
          <span 
            key={index} 
            className={index >= nameStartIndex && index < nameEndIndex ? 'name' : ''} 
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}

export default About;
