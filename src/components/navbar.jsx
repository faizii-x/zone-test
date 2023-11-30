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
      <div className="bg-[#E1E3E5]">
        <div className=" p-4 flex justify-between">
          <a href="/">
            <img
              src={Logo}
              alt=""
              className="cursor-pointer w-full h-[60px] "
            />
          </a>

          <div className="flex items-center  justify-center gap-3">
            <div className="md:block hidden">
              <div className="home-center gap-6">
                <a
                  href="/"
                  className="fonty text-black font-inter text-[15px] font-bold  hover:text-[#FF7518] cursor-pointer"
                >
                  {pathname === "/" ? (
                    <div className="text-[#FF7518]">Home</div>
                  ) : (
                    "Home"
                  )}
                </a>

                <a
                  href="/service"
                  className="fonty text-black font-inter text-[15px] font-bold  hover:text-[#FF7518] cursor-pointer"
                >
                  {pathname === "/service" ? (
                    <div className="text-[#FF7518]">Service</div>
                  ) : (
                    "Service"
                  )}
                </a>

                <a
                  href="/about"
                  className="fonty text-black font-inter text-[15px] font-bold  hover:text-[#FF7518] cursor-pointer"
                >
                  {pathname === "/about" ? (
                    <div className="text-[#FF7518]">About us</div>
                  ) : (
                    "About us"
                  )}
                </a>

                <a
                  href="/payment"
                  className="fonty text-black font-inter text-[15px] font-bold  hover:text-[#FF7518] cursor-pointer"
                >
                  {pathname === "/payment" ? (
                    <div className="text-[#FF7518]">Payment</div>
                  ) : (
                    "Payment"
                  )}
                </a>

                <a
                  href="/testimonials"
                  className=" media fonty text-black font-inter text-[15px] font-bold  hover:text-[#FF7518] cursor-pointer"
                >
                  {pathname === "/testimonials" ? (
                    <div className="text-[#FF7518]">Testimonials</div>
                  ) : (
                    "Testimonials"
                  )}
                </a>

                <a
                  href="/sample"
                  className="media fonty text-black font-inter text-[15px] font-bold  hover:text-[#FF7518] cursor-pointer"
                >
                  {pathname === "/sample" ? (
                    <div className="text-[#FF7518]">Samples</div>
                  ) : (
                    "Samples"
                  )}
                </a>

                <a
                  href="/estimation"
                  className="media fonty text-black font-inter text-[15px] font-bold  hover:text-[#FF7518] cursor-pointer"
                >
                  {pathname === "/estimation" ? (
                    <div className="text-[#FF7518]">Estimation fee</div>
                  ) : (
                    "Estimation fee"
                  )}
                </a>

                <a
                  href="/contact"
                  className="fonty text-black font-inter text-[15px] font-bold  hover:text-[#FF7518] cursor-pointer"
                >
                  {pathname === "/contact" ? (
                    <div className="text-[#FF7518]">Contact us</div>
                  ) : (
                    "Contact us"
                  )}
                </a>
              </div>
            </div>
            <div className="btny">
              <button className=" mt-[2px]  w-[149px] h-[42px] bg-[#FF7518] md:block hidden font-inter text-[16px] text-white rounded-[15px]">
                Get Estimate
              </button>

              <div className="visible md:invisible flex justify-end">
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
      </div>
    </>
  );
}

export default Navbar;
