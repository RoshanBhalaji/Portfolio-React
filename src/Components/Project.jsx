import React from 'react';
import './project.css';
import p1 from '../assets/p1.png';
import quotes from '../assets/quotes.png';
import { FaGithub } from 'react-icons/fa';

const Project = () => {
  const project1='https://github.com/RoshanBhalaji/Ecommerce-Using-Django';
  const project2='https://roshanbhalaji.github.io/RandomQuote/';
  return (
    <section id="projects">
      <span className="project-title">Projects</span>
      <span className="project-description">
        I'm passionate about crafting engaging web experiences. My portfolio showcases my dedication to creating visually stunning and user-friendly websites.
      </span>

      <div className="project-bars">
        <div className="project-bar">
          <img src={p1} alt="DjangoEcommerce" className="project-bar-img" />
          <div className="project-bar-text">
            <h3 className='project-head'>Django E-commerce Site</h3>
            <p>
              I have hands-on experience building an e-commerce site using Django. I developed custom functionalities and incorporated secure payment gateways to ensure seamless transactions. My role involved implementing user authentication, managing product inventory, and creating an intuitive shopping experience for customers.
            </p>
            <a href={project1} className="github-link" target='_blank'>
              <FaGithub className="github-icon" />
              View on GitHub
            </a>
          </div>
        </div>

        <div className="project-bar">
          <img src={quotes} alt="RandomQuotes" className="project-bar-img"  id="p2img"  />
          <div className="project-bar-text">
            <h3 className='project-head'>Random Quotes Generation</h3>
            <p>
            This project uses React hooks, effects, and state to dynamically fetch and display thought-provoking quotes from an external API, providing users with an engaging experience
            </p>
            <a href={project2} className="github-link" target='_blank'>
              <FaGithub className="github-icon" />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
