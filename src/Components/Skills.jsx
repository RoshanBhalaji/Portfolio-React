import React from 'react';
import './skills.css';
import web from '../assets/web.png';
import problem from '../assets/problem.png';
import python from '../assets/python.png';

const Skills = () => {
  return (
    <section id="skills">
      <span className="skilltitle">What I Do</span>
      <span className="skilldesc"> Crafting captivating web experiences is my true passion. Through my portfolio, I proudly exhibit my unwavering dedication to designing visually striking and user-friendly websites.</span>

      <div className="skillbars">
        <div className="skillbar">
          <img src={web} alt="WebDesign" className="skillbarimg" id="skillbar" />
          <div className="skillbartext"  >
            <h3 className='txthead'>Web Design</h3>
            <p>I excel in the art of crafting innovative web interfaces that seamlessly blend aesthetics with functionality. With my profound expertise in HTML, CSS, JavaScript, and essential React skills, I assure impeccable designs and seamless user experiences.</p>
          </div>
        </div>

        <div className="skillbar">
          <img src={problem} alt="ProblemSolving" className="skillbarimg" />
          <div className="skillbartext" >
            <h3>Problem Solving</h3>
            <p> Proficient in problem-solving, I possess the ability to analyze intricate issues and devise effective solutions. By utilizing logical thinking and creativity, I successfully tackle challenges, ensuring efficient resolutions and achieving optimal project outcomes.</p>
          </div>
        </div>

        <div className="skillbar">
          <img src={python} alt="Python" className="skillbarimg" />
          <div className="skillbartext" >
            <h3>Python Basics and Django</h3>
            <p>I possess a strong foundational knowledge in Python programming and have recently ventured into the field of web development using Django. With a firm grasp of Python fundamentals and an introduction to Django's framework, I am eager to enhance my skills and make valuable contributions to web applications by leveraging the capabilities provided by Django.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
