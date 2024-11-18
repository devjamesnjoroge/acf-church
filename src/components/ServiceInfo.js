import React from 'react';
import { Link } from 'react-router-dom';

function ServiceInfo() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center sm:px-[10vw] px-2 py-12 gap-8">
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold uppercase">Service Information</h2>
        <div className="mt-6">
          <Link to="/sunday-service">
            <button className="px-6 py-2 bg-white border border-gray-800 text-gray-800 uppercase font-semibold hover:bg-gray-100">
              More Info
            </button>
          </Link>
        </div>
      </div>
      <div className="relative w-full md:w-1/2 h-[40vh]">
        <img className="absolute top-0 left-0 w-full h-full object-cover" src="/a7.jpeg" alt="Service Information" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>
    </div>
  );
}

export default ServiceInfo;