import React from 'react';

function Hero() {
  return (
    <div className="relative w-full h-[40vh]">
      <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold uppercase">Welcome to Ambassadors of Christ Fellowship</h1>
        <button className="mt-12 px-6 py-2 bg-white text-gray-800 uppercase font-semibold">Button</button>
      </div>
    </div>
  );
}

export default Hero;