import React from 'react';

function SundayService() {
  return (
    <div className="px-[10vw] py-12">
      <h1 className="text-4xl font-bold uppercase mb-8">Sunday Service Information</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Sunday</h2>
        <p className="mt-2">Your journey of faith starts here. Join us for Sunday service in our various churches across the country. We usually hold two sessions: 8:30-10am Sunday school service, 10-12:30pm main service.</p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Mid Week Fellowship</h2>
        <p className="mt-2">Every church conducts weekday fellowship according to the agreement between members. It is a nice moment that you cannot wish to miss.</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold">Reach Us</h2>
        <p className="mt-2">You can join us in our various churches in the following parishes:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Nyamathi parish - Head office</li>
          <li>Nairobi parish</li>
          <li>Central parish</li>
          <li>Langa langa parish</li>
          <li>Bahati parish</li>
          <li>Maella parish</li>
          <li>Gakoe parish</li>
        </ul>
      </div>
    </div>
  );
}

export default SundayService;