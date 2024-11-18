import React from 'react';
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center sm:px-[10vw] px-2 py-12 gap-4">
      <div className="relative w-full md:w-1/2 h-[40vh] group">
        <img className="absolute top-0 left-0 w-full h-full object-cover" src="/a6.jpeg" alt="Events" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <Link to="/events" className="text-white text-4xl md:text-5xl font-bold uppercase hover:underline group-hover:cursor-pointer">Events</Link>
        </div>
      </div>
      <div className="relative w-full md:w-1/2 h-[40vh] group">
        <img className="absolute top-0 left-0 w-full h-full object-cover" src="/a10.jpeg" alt="Youth" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <Link to="/youth" className="text-white text-4xl md:text-5xl font-bold uppercase hover:underline group-hover:cursor-pointer">Youth</Link>
        </div>
      </div>
    </div>
  );
}

export default Cards;