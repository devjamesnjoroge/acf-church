import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-12 flex justify-between items-center">
      <div className="text-gray-800 text-xl font-bold uppercase">
        <div>Ambassadors of Christ</div>
        <div>Fellowship Church</div>
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>
      <div className={`md:flex space-x-16 ${isOpen ? 'block' : 'hidden'} md:block`}>
        <a href="#home" className="block mt-4 tracking-widest md:inline-block md:mt-0 text-gray-800 hover:underline uppercase">Home</a>
        <a href="#about" className="block mt-4 tracking-widest md:inline-block md:mt-0 text-gray-800 hover:underline uppercase">About</a>
        <a href="#explore" className="block mt-4 tracking-widest md:inline-block md:mt-0 text-gray-800 hover:underline uppercase">Explore</a>
        <a href="#media" className="block mt-4 tracking-widest md:inline-block md:mt-0 text-gray-800 hover:underline uppercase">Media</a>
      </div>
    </nav>
  );
}

export default Navbar;