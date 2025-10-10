import React from "react";

const HeroSection = () => {
  return (
    <section className="pt-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">Vivo V60 Series</h2>
          <p className="text-gray-700 mb-6">
            Experience the ultimate smartphone technology.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-500 transition">
            Buy Now
          </button>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img src="/path-to-vivo-v60.png" alt="Vivo V60" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
