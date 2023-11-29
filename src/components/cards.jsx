import Glasses from "../assets/png/glasses.png";
import Two from "../assets/png/two.png";
import One from "../assets/png/one.jpg";

function Cards() {
  return (
    <>
      <div className="grid grid-cols-1 w-[85%] lg:w-[40%] mt-20 container mx-auto">
        <div className="bg-[#FF7518] rounded-md pl-6 pr-6">
          <div className="bg-[#2F2F2F] text-white">
            <img src={Two} alt="" className="mx-auto pt-2 w-[60px]" />
            <h1 className="text-white font-inter text-[16px] font-medium text-center">
              Our Mission
            </h1>
            <p className="text-white font-inter text-[14px] font-light text-center mt-4 p-2">
              Our vision is to build and maintain a successful business
              <br />
              relationship which includes providing uncompromising quality,
              <br />
              reliable accuracy, and fast turnaround time to General
              Contractors,
              <br /> Home Builders, Subcontractors, Architects, Developers, and
              Home
              <br /> Owners
            </p>
          </div>
        </div>
      </div>
      {/* ................................. */}
      <div className="grid grid-cols-1 w-[85%] lg:w-[40%] lg:mt-20 mt-8 container mx-auto">
        <div className="bg-[#FF7518] rounded-md pl-6 pr-6">
          <div className="bg-[#2F2F2F] text-white">
            <img src={Glasses} alt="" className="mx-auto pt-2 w-[60px]" />
            <h1 className="text-white font-inter text-[16px] font-medium text-center">
              Our Vision
            </h1>
            <p className="text-white font-inter text-[14px] font-light text-center mt-4 p-2">
              We are driven by the goal of establishing and nurturing enduring,
              <br />
              fruitful business connections with our clients. We achieve this by
              <br />
              ensuring their complete contentment in terms of Turnaround time,
              <br />
              Price, and above all, consistent Accuracy. If you're interested in
              <br />
              discovering more about our services, industry background, and
              <br />
              examples of our work, please don't hesitate to inquire.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 container mx-auto md:w-[70%] w-[100%] lg:mt-[150px] mt-[65px]">
        <img src={One} alt=""/>
      </div>
    </>
  );
}

export default Cards;
