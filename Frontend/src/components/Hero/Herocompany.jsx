import React from "react";
import Hero from "../../assets/HeroCompany.jpg";

const Herocompany = () => {
  return (
    <section
      className=" dark:text-gray-100 "
      style={{
        backgroundImage: `url(${Hero})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leadi sm:text-5xl text-white mb-40">
          Our Job is to Help to Find a Job
        </h1>
      </div>
      <div className="flex flex-row justify-center items-center w-1/3 mx-auto ">
        <input
          type="text"
          placeholder="Search for a company"
          className="w-3/5  rounded-l-lg sm:w-2/3"
        />
        <button
          type="button"
          className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-blue-600 text-white"
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default Herocompany;
