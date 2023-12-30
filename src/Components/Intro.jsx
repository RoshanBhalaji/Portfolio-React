import React from 'react';
import './intro.css';
import { FaUserPlus } from 'react-icons/fa';
import person from '../assets/Person1.png';
import pdf from '../assets/RoshanBhalajiGK.pdf';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introcontent">
        <span className="hello">Hello,</span>
        <span className="introtext">
          I'm <span className="introname">Roshan</span>
          <br />
          Website Designer
        </span>
        <p className="intropara">
          I am a skilled and passionate web designer with experience in creating <br></br>visually appealing and user-friendly websites.
        </p>
        <a href={pdf} download="RoshanBhalajiGK.pdf" className="anchor-btn">
          <FaUserPlus className="hire-me-icon" />
          Download CV
        </a>
      </div>
      <img src={person} alt="" className="bg" />
    </section>
  );
};

export default Intro;
