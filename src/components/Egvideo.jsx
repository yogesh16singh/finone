import React from 'react';

const Egvideo = () => {
  return (
    <div className="mt-12 w-full h-[100vh] relative bg-gray-900">
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline>
        <source src="https://res.cloudinary.com/dimvweshf/video/upload/v1715794033/2287871d2c1141f7915513f53ff5338f_mdlam8.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 text-white text-center">
        <h1 className="text-4xl font-bold">Hello, World!</h1>
        <p className="text-lg">This is some content over the video background.</p>
      </div>
    </div>
  );
};

export default Egvideo;
