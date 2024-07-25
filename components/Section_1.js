import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default function Section_1() {
  return (
    <section className="text-black body-font md:px-24">
      <div className="container px-5 lg:pt-24 mx-auto lg:px-4 lg:py-4 ">
        <div className="flex flex-col w-full mb-24 text-left md:text-center grid justify-items-center md:bg-sec_1_coin bg-no-repeat bg-center bg-contain">
          <img
            alt="feature"
            class="object-cover object-center h-fit w-96"
            src="./Assets/Number/10.10.png"
          ></img>
          <h3 className="mb-2 text-3xl text-center font-bold tracking-tighter text-warm-white lg:text-5xl md:text-2xl">
            <br className="hidden lg:block"></br>
            <span className="text-yellow">100%</span> DEPOSIT BONUS<br></br>
            BOOST YOUR TRADING POWER
          </h3>
          <p className="text-md text-center md:text-xl font-light leading-relaxed text-warm-white lg:w-2/3">
            Seize the opportunity to double your capital and enhance your
            trading positions with a 100% Bonus on your first deposit, up to
            $100. Trade Forex, Gold and 500+ assets with a trusted and regulated
            broker
          </p>
          <h4 className="mt-6 text-3xl text-center font-bold tracking-tighter text-warm-white lg:text-4xl md:text-2xl">
            Claim your bonus now!
          </h4>
          {/* button */}
          <div className="w-full">
            <div className="my-6 flex md:flex-row flex-col gap-2 justify-center ">
              <button className="px-4 py-4 mt-2 text-sm font-semibold text-black bg-white transition duration-500 ease-in-out transform bg-transparent rounded-md md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                New Clients
              </button>
              <button className="px-4 py-4 mt-2 text-sm font-semibold text-warm-white bg-white-opacity-10 border border-white transition duration-500 ease-in-out transform bg-transparent rounded-md md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                Existing Clients
              </button>
            </div>
            <div className="">
              <p className="text-warm-white underline text-center font-light">
                Terms and Conditions apply
              </p>
            </div>
          </div>
          {/* //end button */}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full lg:px-28">
          <div className="max-w-sm p-6 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-hero_years bg-no-repeat bg-center p-10 w-full ">
            <p className="text-3xl font-semibold tracking-tight text-dark-purple dark:text-warm-white pt-20 text-center">
              14
            </p>
            <p className="mb-3 font-normal text-warm-white text-center">
              Years
            </p>
          </div>

          <div className="max-w-sm p-6 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-hero_user bg-no-repeat bg-center p-10 w-full ">
            <p className="text-3xl font-semibold tracking-tight text-dark-purple dark:text-warm-white pt-20 text-center">
              3.5 M +
            </p>
            <p className="mb-3 font-normal text-warm-white text-center">
              Users
            </p>
          </div>

          <div className="max-w-sm p-6 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-hero_lang bg-no-repeat bg-center p-10 w-full ">
            <p className="text-3xl font-semibold tracking-tight text-dark-purple dark:text-warm-white pt-20 text-center">
              27
            </p>
            <p className="mb-3 font-normal text-warm-white text-center">
              Languages
            </p>
          </div>

          <div className="max-w-sm p-6 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-hero_awards bg-no-repeat bg-center p-10 w-full ">
            <p className="text-3xl font-semibold tracking-tight text-dark-purple dark:text-warm-white pt-20 text-center">
              60 +
            </p>
            <p className="mb-3 font-normal text-warm-white text-center">
              Industry Awards
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
