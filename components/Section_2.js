import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
// import registerSvg from '../public/Assets/Icon/step-register'; // Import the SVG file
// import registerIcon from '../public/Assets/Icon/hero-wreath-laurel.svg'
export default function Section_2() {
  return (
    <section className="text-black body-font lg:pt-6 my-6 px-6 ">
      <div className="container lg:pt-6 mx-auto lg:py-4 my-6">
        <div className="flex flex-col w-full mb-2 text-left ">
          <h4 className="mb-2 text-3xl font-bold tracking-tighter text-warm-white text-center">
            How to get your bonus
          </h4>
          <p className="mx-auto text-xl font-light leading-relaxed text-warm-white text-center my-6">
            Double your first deposit in 3 easy steps
          </p>

          {/* Card */}
          <div className="w-full flex flex-col lg:flex-row justify-center items-center">
            <div className="max-w-sm p-16 flex-auto bg-step_1 bg-no-repeat bg-center  ">
              <div className="flex items-center mt-12">
                <div className="flex flex-none w-14">
                  <img
                    alt="feature"
                    className="object-cover object-center h-10 w-10 items-right"
                    src="./Assets/Icon/step-register.svg"
                  ></img>
                </div>

                <div className="flex flex-auto w-64">
                  <p className="mb-3 font-normal text-warm-white">
                    Register and open a Top-Up Bonus Account in myHF
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-sm p-16 flex-auto bg-step_2 bg-no-repeat bg-center ">
              <div className="flex items-center mt-12">
                <div className="flex flex-none w-14">
                  <img
                    alt="feature"
                    className="object-cover object-center h-10 w-10 items-right"
                    src="./Assets/Icon/step-add-fund.svg"
                  ></img>
                </div>

                <div className="flex flex-auto w-64">
                  <p className="mb-3 font-normal text-warm-white">
                    Fund your Top-Up Bonus Account
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-sm p-16 flex-auto bg-step_2 bg-no-repeat bg-center ">
              <div className="flex items-center mt-8">
                <div className="flex flex-none w-14">
                  <img
                    alt="feature"
                    className="object-cover object-center h-10 w-10 items-right"
                    src="./Assets/Icon/step-get-bonus.svg"
                  ></img>
                </div>

                <div className="flex flex-auto w-64">
                  <p className="mb-3 pt-2 font-normal text-warm-white">
                    Get your Bonus! Your account will be credited instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h4 className="mb-2 text-3xl font-bold tracking-tighter text-warm-white lg:text-4xl my-6 text-center">
            Limited time offer!
          </h4>
          <p className="mx-auto text-xl font-light leading-relaxed text-warm-white text-center dark:text-gray-300 lg:w-2/3 my-6">
            Claim your bonus before{" "}
            <span className="font-bold">18 October</span>
          </p>
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
    </section>
  );
}
