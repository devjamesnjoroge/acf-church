import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaTiktok } from 'react-icons/fa';

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
            </ul>
          </nav>
          <div className="flex space-x-4">
            <a href="https://facebook.com/groups/2185686638394654/" className="hover:text-gray-400"><FaFacebook size={24} /></a>
            <a href="https://www.twitter.com" className="hover:text-gray-400"><FaTwitter size={24} /></a>
            <a href="https://www.tiktok.com/@ambassador0035?_t=8rWAcG1wcae&_r=1" className="hover:text-gray-400"><FaTiktok size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;