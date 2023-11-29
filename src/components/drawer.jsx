import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import FootLog from "../assets/png/footLog.png";

export default function Example({ open, setOpen }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 " />
        </Transition.Child>
        <div className="">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-xs pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-[#FF7518] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FF7518]"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex  h-full flex-col overflow-y-scroll bg-[#2F2F2F] py-6 shadow-xl">
                    <div className="container grid grid-cols-1 p-3">
                      <img src={FootLog} />
                      <a href="/">
                        <p className="hover:text-hover font-montserrat text-white pt-5">
                          Home
                        </p>
                      </a>
                      <a href="/service">
                        <p className="hover:text-hover font-montserrat text-white pt-5">
                          Service
                        </p>
                      </a>
                      <a href="/about">
                        <p className="hover:text-hover font-montserrat text-white pt-5">
                          About Us
                        </p>
                      </a>
                      <a href="/payment">
                        <p className="hover:text-hover font-montserrat text-white pt-5">
                          Payment
                        </p>
                      </a>
                      <a href="/testimonials">
                        <p className="hover:text-hover font-montserrat text-white pt-5">
                          Testimonials
                        </p>
                      </a>
                      <a href="/sample">
                        <p className="hover:text-hover font-montserrat text-white pt-5">
                          Samples
                        </p>
                      </a>
                      <a href="/estimation">
                        <p className="hover:text-hover font-montserrat text-white pt-5">
                          Estimation fee
                        </p>
                      </a>
                      <a href="/contact">
                        <p className="hover:text-hover font-montserrat text-white pt-5">
                          Contact
                        </p>
                      </a>

                      <button className="mt-[18px] w-[149px] h-[42px] bg-white hover:bg-[#FF7518] font-inter text-[16px] text-black rounded-[15px]">
                        Get Estimate
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
