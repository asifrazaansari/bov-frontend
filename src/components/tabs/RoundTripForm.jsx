import React from "react";

const RoundTripForm = () => {
  return (
    <form className="flex flex-col md:flex-row md:justify-between md:items-center md:space-x-4 space-y-4 md:space-y-0 w-full max-w-4xl mx-auto bg-gray-100 p-6 shadow-lg rounded-lg">
      <div className="flex flex-col w-full md:w-1/4">
        <label className="text-sm font-medium text-gray-700 mb-1">From</label>
        <input
          type="text"
          placeholder="Enter Location"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <div className="flex flex-col w-full md:w-1/4">
        <label className="text-sm font-medium text-gray-700 mb-1">To</label>
        <input
          type="text"
          placeholder="Enter Location"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <div className="flex flex-col w-full md:w-1/4">
        <label className="text-sm font-medium text-gray-700 mb-1">
          Pickup At
        </label>
        <input
          type="datetime-local"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <div className="flex flex-col w-full md:w-1/4">
        <label className="text-sm font-medium text-gray-700 mb-1">
          Return At
        </label>
        <input
          type="datetime-local"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <div className="w-full md:w-1/4 flex justify-center mt-10 relative">
        <button className="w-1/2 md:w-full bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg focus:outline-none hover:bg-blue-600 transition duration-300 -mb-6">
          Search
        </button>
      </div>
    </form>
  );
};

export default RoundTripForm;
