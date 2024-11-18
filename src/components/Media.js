import React from 'react';

const pastors = [
  { id: 1, src: '/b1.jpg', alt: 'Pastor 1' },
  { id: 2, src: '/b2.jpg', alt: 'Pastor 2' },
  { id: 3, src: '/b3.jpg', alt: 'Pastor 3' },
  { id: 4, src: '/b4.jpg', alt: 'Pastor 4' },
  { id: 5, src: '/b5.jpg', alt: 'Pastor 5' },
  { id: 6, src: '/b6.jpg', alt: 'Pastor 6' },
  { id: 7, src: '/b7.jpg', alt: 'Pastor 7' },
];

function Media() {
  return (
    <div className="px-[10vw] py-12">
      <h1 className="text-4xl font-bold uppercase mb-8">Church Pastors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {pastors.map(pastor => (
          <div key={pastor.id} className="relative w-full h-64 md:h-128 overflow-hidden">
            <img className="absolute top-0 left-0 w-full h-full object-cover object-center" src={pastor.src} alt={pastor.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Media;