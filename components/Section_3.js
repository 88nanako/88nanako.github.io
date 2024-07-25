import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default function Section_3() {
  return (
    <section className="text-black body-font lg:pt-2 mt-24 md:bg-sec_3_coin_v2 bg-no-repeat bg-contain bg-bottom pb-12 px-4">
      <div className="container px-2 pt-8 mx-auto mx:px-5">
        <div className="flex flex-col w-full mb-2  text-left md:text-center ">
          <div className="grid grid-cols-1 gap-4 md:px-24 lg:grid-cols-2">
            <div className="flex flex-col items-end w-full lg:-mt-40 -mt-0">
              <img
                alt="feature"
                className="object-cover object-center w-full "
                src="./Assets/Others/mobile-isometric.png"
              ></img>

              <div className="flex flex-col lg:-mt-20 mt-0 w-full">
                <p className="text-warm-white pb-2 text-center mb-4">
                   Get started with HFM App today!
                </p>
                <div className="flex flex-row gap-4 justify-center ">
                  <div>
                    <img
                      src="./Assets/Others/qr-code.png"
                      className="md:h-1/2 h-3/5"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <img src="./Assets/Others/button-google-play.svg" />
                    <img src="./Assets/Others/button-apple-store.svg" />
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div>
                <h4 className="mb-6 text-3xl font-bold  text-warm-white lg:text-4xl lg:text-left text-center">
                  Trade Anywhere, Anytime
                </h4>
                <div className="flex lg:flex-row flex-col gap-4 mb-6">
                  <div className="flex justify-center md:items-start">
                    <img
                      src="./Assets/App Award/app-award-desktop.svg"
                      className="w-2/5 lg:w-full"
                    ></img>
                  </div>
                  <div className="flex flex-col">
                    <p className="mb-2 text-xl font-normal text-center lg:text-left text-warm-white lg:w-2/3">
                      BEST ONLINE TRADING APP 2023
                    </p>
                    <p className="mb-6 text-md font-light text-center lg:text-left text-warm-white lg:w-4/5">
                      Invest in 500+ financial instruments with real-time
                      updates and instant trade execution.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="max-w-sm p-6 rounded-lg bg-gradient-to-r from-white-opacity-10 via-black via-opacity-10 to-black-opacity-10">
                  <p className="mb-2 text-2xl text-yellow text-left font-semibold tracking-tight text-white dark:text-white ">
                    Forex
                  </p>
                  <p className="mb-3 font-normal text-sm text-left text-warm-white dark:text-white">
                    Trade USD/THB, THB/JPY, and 10+ major, minor and exotic
                    pairs
                  </p>
                </div>

                <div className="max-w-sm p-6 rounded-lg bg-gradient-to-r from-white-opacity-10 via-black via-opacity-10 to-black-opacity-10">
                  <p className="mb-2 text-2xl text-yellow text-left font-semibold tracking-tight text-white dark:text-white ">
                    Gold
                  </p>
                  <p className="mb-3 font-normal text-sm text-left text-warm-white dark:text-white">
                    Invest in XAU/USD with up to 1:2000 leverage
                  </p>
                </div>

                <div className="max-w-sm p-6 rounded-lg bg-gradient-to-r from-white-opacity-10 via-black via-opacity-10 to-black-opacity-10">
                  <p className="mb-2 text-2xl text-yellow text-left font-semibold tracking-tight text-white dark:text-white ">
                    Stocks
                  </p>
                  <p className="mb-3 font-normal text-sm text-left text-warm-white dark:text-white">
                    Discover Nvidia, Meta, Netflix and other leading stocks
                  </p>
                </div>

                <div className="max-w-sm p-6 rounded-lg bg-gradient-to-r from-white-opacity-10 via-black via-opacity-10 to-black-opacity-10">
                  <p className="mb-2 text-2xl text-yellow text-left font-semibold tracking-tight text-white dark:text-white ">
                    Indices
                  </p>
                  <p className="mb-3 font-normal text-sm text-left text-warm-white dark:text-white">
                    Discover Nvidia, Meta, Netflix and other leading stocks
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 md:py-12 py-3">
            <h4 className="mb-2 text-4xl font-bold tracking-tighter text-warm-white lg:text-4xl md:text-2xl text-center">
              Bonus Period
            </h4>
            <div className="w-full flex justify-center py-6">
              <img src="./Assets/Date/event-period.svg" className="" />
            </div>
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
                <p className="text-warm-white underline font-light text-center">
                  Terms and Conditions apply
                </p>
              </div>
            </div>
            {/* //end button */}
          </div>
        </div>
      </div>
    </section>
  );
}
