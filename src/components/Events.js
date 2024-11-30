import React from 'react';

function Events() {
  return (
    <div className="px-[10vw] py-12">
      <h1 className="text-4xl font-bold uppercase mb-8">Events</h1>
      <div className="flex flex-col lg:flex-row lg:space-x-8 mb-8">
        <div className="flex-1 mb-8 lg:mb-0">
          <h2 className="text-2xl font-bold">Bishop’s Day</h2>
          <p className="mt-2"><strong>Location:</strong> Nyamathi ground, Naivasha, Nakuru county</p>
          <p className="mt-2"><strong>Date:</strong> 1st Dec</p>
          <p className="mt-2"><strong>Details:</strong> We are thrilled to invite you to a special day dedicated to celebrating our beloved Bishop Joseph Mwaura Kamau. Join us for an inspiring and joyous occasion as we honor his dedication, leadership, and incredible impact he has made to the church.</p>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold">Youth Convection</h2>
          <img src="/poster_1.jpg" alt="Youth Convection Poster" className="w-full h-auto mb-4 rounded-lg shadow-lg max-w-lg mx-auto lg:max-w-full" />
          <p className="mt-2"><strong>Location:</strong> Kahuho secondary school, Kiamboya mastore</p>
          <p className="mt-2"><strong>Date:</strong> 12th - 15th Dec</p>
          <p className="mt-2"><strong>Details:</strong> Youth convection is an annual meeting dedicated to youth and juniors where they are expected to experience deep spiritual renewal through powerful worship, prayer sessions, and sermons from dynamic speakers. Strengthen your relationship with God and discover new ways to live out your faith in everyday life.</p>
        </div>
      </div>
    </div>
  );
}

export default Events;