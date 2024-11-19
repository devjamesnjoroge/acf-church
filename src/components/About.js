import React from 'react';

const bishop = {
  id: 4,
  src: '/b4.jpg',
  alt: 'Bishop Joseph Mwaura',
  name: 'Bishop Joseph Mwaura',
  parish: 'Overseer'
};

const pastors = [
  { id: 1, src: '/b1.jpg', alt: 'Pastor Mwaura Kang\'ethe', name: 'Pastor Mwaura Kang\'ethe', parish: 'Nairobi Parish' },
  { id: 2, src: '/b2.jpg', alt: 'Pastor Joseph Mwangi', name: 'Pastor Joseph Mwangi', parish: 'Naivasha Parish' },
  { id: 3, src: '/b3.jpg', alt: 'Pastor Paul Mohair Njoroge', name: 'Pastor Paul Mohair Njoroge', parish: 'Gakoe Parish' },
  { id: 5, src: '/b5.jpg', alt: 'Pastor Josphat Wamiti', name: 'Pastor Josphat Wamiti', parish: 'Maella Parish' },
  { id: 6, src: '/b6.jpg', alt: 'Pastor John Mathenge', name: 'Pastor John Mathenge', parish: 'Bahati Parish' },
  { id: 7, src: '/b7.jpg', alt: 'Pastor Samuel Roro', name: 'Pastor Samuel Roro', parish: 'Central Parish' },
];

function About() {
  return (
    <div className="px-[10vw] py-12">
      <h1 className="text-4xl font-bold uppercase mb-8">Church Leaders</h1>
      <div className="mb-12">
        <h2 className="text-3xl font-bold uppercase mb-4 text-yellow-400">Bishop</h2>
        <div className="relative w-full h-64 md:h-128 overflow-hidden">
          <img className="absolute top-0 left-0 w-full h-full object-cover object-top" src={bishop.src} alt={bishop.alt} />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-2">
            <p className="text-lg md:text-xl font-semibold text-yellow-400">{bishop.name}</p>
            <p className="text-sm md:text-md">{bishop.parish}</p>
          </div>
        </div>
      </div>
      <h2 className="text-3xl font-bold uppercase mb-4">Pastors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {pastors.map(pastor => (
          <div key={pastor.id} className="relative w-full h-64 md:h-128 overflow-hidden">
            <img className="absolute top-0 left-0 w-full h-full object-cover object-top" src={pastor.src} alt={pastor.alt} />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-2">
              <p className="text-lg md:text-xl font-semibold">{pastor.name}</p>
              <p className="text-sm md:text-md">{pastor.parish}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;