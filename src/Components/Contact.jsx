import React, { useRef } from 'react';
import './contact.css';
import { FaGithub, FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const linkedin='https://www.linkedin.com/in/roshan-bhalaji-309238259/'
    const github='https://github.com/RoshanBhalaji'
    const insta='https://www.instagram.com/__rose.aa__/'

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_lay6p8y', 'template_v5v1pio', form.current, 'RmgR_26PFvfPAULL1')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent !')
          }, (error) => {
              console.log(error.text);
          })};

    return (
        <div id="contact">
            <h1 className='contactpagetitle'>Contact Me</h1>
            <span className="contactdesc">Please fill out the form below to discuss any work opportunities.</span>
            <form onSubmit={sendEmail} className="contactform" ref={form}>
                <input type="text" className='name' placeholder='Your Name' name='your_name'/>
                <input type="email" className='email' placeholder='Your Email' name='your_email'/>
                <textarea className='msg' name='message' rows='3' placeholder='Your Message'/>
                <button value='send' className="submitBtn">Submit</button>
                <div className="links">
                        <a href={github} target='_blank' rel="noopener noreferrer">
                        <FaGithub className="icon-link" />
                        </a>
                        <a href="mailto:roshanbhalaji5@gmail.com" target='_blank' rel="noopener noreferrer">
                            <FaEnvelope className="icon-link" />
                        </a>
                        <a href={linkedin} target='_blank' rel="noopener noreferrer">
                            <FaLinkedin className="icon-link" />
                        </a>
                        <a href={insta} target='_blank' rel="noopener noreferrer">
                            <FaInstagram className="icon-link" />
                        </a>
                </div>
            </form>
        </div>
    );
}

export default Contact;
