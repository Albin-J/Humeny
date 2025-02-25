import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center px-4 sm:px-6 lg:flex-row lg:px-12">
        {/* Left Text Section */}
        <div className="text-center lg:w-3/5 lg:text-left">
          <div className="inline-block rounded-md bg-blue-100 px-6 py-3 font-medium text-blue-700 sm:px-8 sm:py-4">
            Welcome to your health care destination!
          </div>
          <h1 className="mt-4 text-4xl font-bold leading-snug text-gray-800 sm:text-5xl sm:leading-tight">
            Your <span className="text-blue-600">Health</span>, Our Priority
            <br />
            Expert <span className="text-blue-600">Care</span> You Can Trust!
          </h1>
          <p className="mt-6 px-2 text-base leading-relaxed text-gray-600 sm:px-0 sm:text-lg">
            Get the care you need with our friendly team of doctors and staff.
            We’re here to help you feel better and stay healthy. Learn about our
            services and reach out to us anytime!
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            {/* <button className="rounded-md bg-blue-600 px-8 py-5 text-base text-white shadow-lg hover:bg-blue-700 sm:px-8 sm:py-4 sm:text-lg">
              Book a Meeting
            </button> */}
            {/* <button className="bg-gray-200 text-gray-800 px-8 py-5 sm:px-8 sm:py-4 text-base sm:text-lg rounded-md shadow-lg hover:bg-gray-300">
              Read More
            </button> */}
          </div>
        </div>
        {/* Right Image Section */}
        <div className="flex justify-center px-4 sm:px-2">
          <img
            src={"/images/Home(0).png"}
            alt="Doctors"
            className="shadow-5xl w-full max-w-sm rounded-xl ps-3 sm:w-3/4 lg:w-auto lg:max-w-none"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
