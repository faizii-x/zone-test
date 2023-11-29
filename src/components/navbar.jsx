import { useState } from "react";
import Logo from "../assets/svg/logo.svg";
import Example from "./drawer";
import { useLocation } from "react-router-dom";
import Upnav from "./upnav";

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOnClose = () => setOpen(false);

  const { pathname } = useLocation();
  console.log("pathname", pathname);

  return (
    <>
      <Upnav />
      <div className="">
        <div className="container p-4 flex justify-between">
          <div className="flex items-center  justify-center gap-10">
            <div className="">
              <a href="/">
              <img src={Logo} alt="" className="cursor-pointer w-full h-[60px] -mt-2" />
              </a>
            </div>

            <div className="lg:block hidden lg:ml-12 ml-8">
              <div className="home-center gap-2">
                <a
                  href="/"
                  className="text-black font-inter text-[15px] font-bold  hover:text-[#FF7518] cursor-pointer"
                >
                  {pathname === "/" ? (
                    <div className="text-[#FF7518]">Home</div>
                  ) : (
                    "Home"
                  )}
                </a>

                <a
                  href="/service"
                  className="text-black font-inter text-[15px] font-bold  hover:text-[#FF7518] cursor-pointer"
                >
                  {pathname === "/service" ? (
                    <div className="text-[#FF7518]">Service</div>
                  ) : (
                    "Service"
                  )}
                </a>

                <a
                  href="/about"
                  className="text-black font-inter text-[15px] font-bold  hover:text-[#FF7518] cursor-pointer"
                >
                  {pathname === "/about" ? (
                    <div className="text-[#FF7518]">About us</div>
                  ) : (
                    "About us"
                  )}
                </a>

                <a
                  href="/payment"
                  className="text-black font-inter text-[15px] font-bold  hover:text-[#FF7518] cursor-pointer"
                >
                  {pathname === "/payment" ? (
                    <div className="text-[#FF7518]">Payment</div>
                  ) : (
                    "Payment"
                  )}
                </a>

                <a
                  href="/testimonials"
                  className="text-black font-inter text-[15px] font-bold  hover:text-[#FF7518] cursor-pointer"
                >
                  {pathname === "/testimonials" ? (
                    <div className="text-[#FF7518]">Testimonials</div>
                  ) : (
                    "Testimonials"
                  )}
                </a>

                <a
                  href="/sample"
                  className="text-black font-inter text-[15px] font-bold  hover:text-[#FF7518] cursor-pointer"
                >
                  {pathname === "/sample" ? (
                    <div className="text-[#FF7518]">Samples</div>
                  ) : (
                    "Samples"
                  )}
                </a>

                <a
                  href="/estimation"
                  className="text-black font-inter text-[15px] font-bold  hover:text-[#FF7518] cursor-pointer"
                >
                  {pathname === "/estimation" ? (
                    <div className="text-[#FF7518]">Estimation fee</div>
                  ) : (
                    "Estimation fee"
                  )}
                </a>

                <a
                  href="/contact"
                  className="text-black font-inter text-[15px] font-bold  hover:text-[#FF7518] cursor-pointer"
                >
                  {pathname === "/contact" ? (
                    <div className="text-[#FF7518]">Contact us</div>
                  ) : (
                    "Contact us"
                  )}
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-end bg-yellow-400 ">
            <button className="mt-[6px]  w-[149px] h-[42px] bg-[#FF7518] md:block hidden font-inter text-[16px] text-white rounded-[15px]">
              Get Estimate
            </button>

            <div className="visible md:invisible col-span-6 flex justify-end">
          <svg
            onClick={() => setOpen(true)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 self-center text-[#FF7518]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <Example open={open} setOpen={handleOnClose} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
