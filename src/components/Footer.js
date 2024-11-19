import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:px-[10vw] px-2">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold uppercase">Ambassadors of Christ Fellowship Church</h2>
          <p className="mt-2">Nairobi, P.O BOX, 551-10600</p>
          <p className="mt-2">Phone: (070) 365-6466</p>
          <p className="mt-2">Email: info@ambassadorsofchristfellowship</p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <nav className="mb-4">
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/explore" className="hover:underline">Explore</Link></li>
              <li><Link to="/media" className="hover:underline">Media</Link></li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <a href="https://facebook.com/groups/2185686638394654/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaTwitter className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center md:text-left">
        <p>&copy; {new Date().getFullYear()} Ambassadors of Christ Fellowship Church. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;