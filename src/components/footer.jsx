import FootLog from "../assets/png/footLog.png";
import Locate from "../assets/png/locate.png";
import Message from "../assets/png/message.png";
import Whatsapp from "../assets/png/whatsapp.png";

function Footer() {
  return (
    <>
      <div className="bg-black p-8 lg:mt-20 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] container mx-auto">
          <div className="col-span-1">
            <img src={FootLog} alt="" />
            <p className="text-[#FDFDFD] text-[14px] font-inter font-light mt-4">
              <span className="text-[#FF7518]">PROCORE Estimators</span> are an
              industry leader in
              <br /> providing accurate and reliable construction cost
              <br /> estimation services. We specialize in Quantity
              <br /> and Material Takeoff, Scheduling, and Planning
              <br /> for your project management needs. Our experts
              <br /> use advanced softwares and we pay close
              <br /> attention to detail to ensure accurate estimates.
              <br />
              We provide you with accurate information in a<br /> timely manner,
              enabling you to make informed
              <br /> decisions and execute projects efficiently. Rely
              <br /> on{" "}
              <span className="text-[#FF7518]">PROCORE Estimators</span> for
              precise and prompt
              <br />
              cost estimation in construction.
            </p>
          </div>
          <div className="col-span-1">
            <p className="text-[35px] font-bold font-inter text-white md:text-center text-start mt-8">
              Navigation
            </p>

            <nav className="flex md:justify-center justify-start">
              <ul>
                <li className="text-white text-[26px] font-inter font-medium text-center hover:text-[#FF6400] mt-6">
                  <a href="/service">Service</a>
                </li>
                <li className="text-white text-[26px] font-inter font-medium text-center hover:text-[#FF6400] mt-4">
                  <a href="/about">About us</a>
                </li>
                <li className="text-white text-[26px] font-inter font-medium text-center hover:text-[#FF6400] mt-4">
                  <a href="/payment">Payment</a>
                </li>
                <li className="text-white text-[26px] font-inter font-medium text-center hover:text-[#FF6400] mt-4">
                  <a href="/sample">Sample</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-span-1 ml-0 lg:ml-16">
            <p className="text-[35px] font-bold font-inter text-white mt-8">
              Contact
            </p>

            <div className="flex justify-start gap-3 mt-6">
              <img src={Locate} alt="" className="w-[30px] h-[30px]" />
              <p className="text-white hover:text-[#FF6400] cursor-pointer">255 Bedford Ave, Brooklyn USA</p>
            </div>

            <div className="flex justify-start gap-3 mt-6">
              <img src={Whatsapp} alt="" className="w-[30px] h-[30px]" />
              <p className="text-white hover:text-[#FF6400] cursor-pointer">+1274849776</p>
            </div>

            <div className="flex justify-start gap-3 mt-6">
              <img src={Message} alt="" className="w-[30px] h-[30px]" />
              <p className="text-white hover:text-[#FF6400] cursor-pointer">faizanramzan670@gmail.com</p>
            </div>
          </div>
        </div>

        <p className="text-[#FDFDFD] font-inter font-normal text-[16px] text-center mt-10">
          Copyright © 2023 Procore Estimators Designed By{" "}
          <span className="text-[#008000]">MF</span>{" "}
          <span className="text-[#FF6400]">Bzone</span>{" "}
          <span className="text-[8px]">R</span>
        </p>
      </div>
    </>
  );
}

export default Footer;
