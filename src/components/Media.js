import React from 'react';

const pastors = [
  { id: 4, src: '/b4.jpg', alt: 'Bishop Joseph Mwaura', name: 'Bishop Joseph Mwaura' },
  { id: 1, src: '/b1.jpg', alt: 'Pastor Mwaura Kang\'ethe', name: 'Pastor Mwaura Kang\'ethe' },
  { id: 2, src: '/b2.jpg', alt: 'Pastor Baba Flaggy', name: 'Pastor Baba Flaggy' },
  { id: 3, src: '/b3.jpg', alt: 'Pastor Baba Njoroge', name: 'Pastor Baba Njoroge' },
  { id: 5, src: '/b5.jpg', alt: 'Pastor Josphat Wamiti', name: 'Pastor Josphat Wamiti' },
  { id: 6, src: '/b6.jpg', alt: 'Pastor Baba Ndung\'u', name: 'Pastor Baba Ndung\'u' },
  { id: 7, src: '/b7.jpg', alt: 'Pastor Samuel Roro', name: 'Pastor Samuel Roro' },
];

function Media() {
  return (
    <div className="px-[10vw] py-12">
      <h1 className="text-4xl font-bold uppercase mb-8">Church Pastors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {pastors.map(pastor => (
          <div key={pastor.id} className="relative w-full h-64 md:h-128 overflow-hidden">
            <img className="absolute top-0 left-0 w-full h-full object-cover object-top" src={pastor.src} alt={pastor.alt} />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-2">
              <p className={`text-lg md:text-xl font-semibold ${pastor.id === 4 ? 'text-yellow-400' : ''}`}>{pastor.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Media;