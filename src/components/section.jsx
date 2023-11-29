import Image from "../assets/png/image.png";

function Section() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="col-span-1 lg:mt-16 mt-8 mb-6">
          <h1 className="text-[#2F2F2] text-[36px] ml-8 font-black font-inter">
            About{" "}
            <span className="text-[#FF7518]">
              PROCORE <br /> Estimators
            </span>{" "}
          </h1>
          <p className="text-[#000] font-inter font-normal text-[20px] ml-8 leading-normal">
            <span className="text-[#FF7518] font-inter font-bold text-[26px]">
              Procore Estimators
            </span>{" "}
            offers Cost Estimating, Quantities & Material Takeoff, and
            Scheduling services to Contractors, subcontractors, material
            suppliers, and manufacturers . As we understand each client unique
            requirements, our experts generate accurate and reliable estimates,
            eliminating alternatives. We have successfully served various
            developments, architectural firms, and contracting companies across
            America.
          </p>
        </div>
        <div className="col-span-1">
          <img src={Image} alt="" className="" />
        </div>
      </div>
    </>
  );
}

export default Section;
