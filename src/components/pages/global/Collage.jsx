const Collage = ({ bgColor }) => {
  return (
    <div
      className={`bg-take_care_bg px-4 sm:px-10 lg:py-10`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex items-center justify-center rounded-lg text-center xl:p-20">
        <div className="flex flex-col items-center justify-center gap-4 lg:pt-10 xl:flex-row">
          <div className="relative hidden scale-75 p-5 sm:block xl:block xl:w-1/2 xl:scale-100">
            {/* Middle Image */}
            <img
              src="/images/about-us.jpg"
              alt="About Us"
              className="mb-5 rounded-lg shadow-lg"
            />
            {/* Bottom Right image */}
            <img
              src="/images/hero.jpg"
              alt="About Us"
              className="absolute right-0 top-3/4 mb-5 w-2/6 -rotate-6 scale-110 transform rounded-lg shadow-lg"
            />
            {/* Top Left Image */}
            <img
              src="/images/about-us-2.jpg"
              alt="About Us"
              className="scale-120 absolute -left-12 top-[-40px] mb-5 w-1/3 -rotate-12 transform rounded-lg shadow-lg xl:left-0 xl:top-[-100px]"
            />
            {/* Top Right Image */}
            <img
              src="/images/about-us-3.jpg"
              alt="About Us"
              className="absolute right-0 top-[-30px] mb-5 w-1/5 rotate-2 scale-110 transform rounded-lg shadow-lg"
            />
            {/* Bottom Left Image */}
            <img
              src="/images/about-us-4.jpg"
              alt="About Us"
              className="absolute left-[-20px] top-[350px] mb-5 w-2/5 rotate-3 scale-110 transform rounded-lg shadow-lg lg:top-[450px] xl:top-[350px]"
            />
          </div>

          <div className="px-4 pb-10 md:p-5 xl:relative xl:w-1/2">
            <p className="mb-3 pt-10 text-center text-5xl font-bold text-take_care_primary lg:mb-10">
              About Us
            </p>
            {/* Small image for mobile viewers */}
            <div className="relative flex w-full flex-wrap p-5 sm:hidden xl:hidden">
              <img
                src="/images/about-us.jpg"
                alt="About Us"
                className="mb-5 rounded-lg shadow-lg"
              />  
            </div>
            <p className="text-lg lg:mt-5">
              <span className="font-semibold text-take_care_primary">
              Humey Home  Nursing Service
              </span>{" "}
              is a home care agency that provides compassionate care for your
              loved ones. We provide personalized care plans tailored to meet
              the unique needs of each individual.
            </p>
            <p className="mt-5 text-lg">
            At HUMENY HOME NURSING SERVICE, we bring 18 years of trusted experience in delivering compassionate and professional home healthcare. Our highly trained team of nurses is dedicated to providing personalized care tailored to each client's unique needs, whether it's post-operative recovery, elderly assistance, or chronic illness management. With 24/7 availability, a commitment to quality, and a focus on building meaningful relationships, we ensure comfort, safety, and peace of mind for you and your loved ones, all from the comfort of home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collage;
