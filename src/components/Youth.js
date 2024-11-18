import React from 'react';
import { FaFacebook } from 'react-icons/fa';

function Youth() {
  return (
    <div className="px-[10vw] py-12">
      <h1 className="text-4xl font-bold uppercase mb-8">Youth</h1>
      <div className="mb-8">
        <img className="w-full h-auto object-cover" src="/a10.jpeg" alt="Youth" />
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Youth Events</h2>
        <ul className="list-disc list-inside mt-2">
          <li>10th Nov - Youth Sunday</li>
          <li>17th Nov - Youth Leader Meeting</li>
          <li>10th - 14th Dec - Youth Convection</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Youth Leaders</h2>
        <p className="mt-2">[Add later]</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold">Social Media</h2>
        <div className="flex space-x-4 mt-2">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-400">
            <FaFacebook className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Youth;