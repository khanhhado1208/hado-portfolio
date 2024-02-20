import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="text-white">
      <p className="text-center py-4">&copy; Ha Do • Built with <span className="font-bold">ReactJS, Tailwindcss</span> • Hosted on <Link to="https://github.com/khanhhado1208/hado-portfolio" className="text-blue-500" target="_blank" rel="noopener noreferrer">GitHub</Link></p>
    </footer>
  );
}

export default Footer;
