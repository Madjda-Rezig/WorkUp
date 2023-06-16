import home from "../../assets/Home.jpg";
const Herohome = () => {
  return (
    <section
      className="bg-white text-blue-600 h-screen"
      style={{
        backgroundImage: `url(${home})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leadi sm:text-6xl">
            Find the Job of your Dream
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 text-gray-600">
            With the best recrutement Web site in Algéria
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="Offres"
              className="px-8 py-3 text-lg font-semibold rounded bg-blue-600 text-white"
            >
              Our Jobs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herohome;
