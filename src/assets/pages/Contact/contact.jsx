import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";

function Contact() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-8">
      <p className="text-center md:text-left md:mr-8 mb-4 md:mb-0">
        Let's connect and explore opportunities! Feel free to reach out to me via LinkedIn, GitHub, or email. I'm always open to new collaborations and exciting projects.
      </p>
      <div className="flex justify-center md:justify-start">
        <a href="https://www.linkedin.com/in/hakhanhdo/" target="_blank" rel="noopener noreferrer" className="icon-link mr-4">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/khanhhado1208" target="_blank" rel="noopener noreferrer" className="icon-link mr-4">
          <FaGithub size={30} />
        </a>
        <a href="mailto:khanhhado1208@gmail.com" className="icon-link">
          <FaEnvelope size={30} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
