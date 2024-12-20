import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4 sm:px-[10vw] px-2 md:p-12 flex justify-between items-center">
      <Link to="/" className="text-gray-800 text-xl font-bold uppercase">
        <div>Ambassadors of Christ</div>
        <div>Fellowship Church</div>
      </Link>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>
      <div className={`md:flex space-x-12 ${isOpen ? 'block' : 'hidden'} md:block`}>
        <Link to="/" className="block mt-4 md:mt-0 text-gray-800 hover:underline uppercase">Home</Link>
        <Link to="/about" className="block mt-4 md:mt-0 text-gray-800 hover:underline uppercase">About</Link>
        <Link to="/explore" className="block mt-4 md:mt-0 text-gray-800 hover:underline uppercase">Explore</Link>
        <Link to="/media" className="block mt-4 md:mt-0 text-gray-800 hover:underline uppercase">Media</Link>
      </div>
    </nav>
  );
}

export default Navbar;