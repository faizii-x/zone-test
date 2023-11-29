import Blue from "../assets/svg/blue.svg";
import Drive from "../assets/svg/drive.svg";

function Background() {
  return (
    <>
      <div className="background-image">
        <div className="content grid grid-cols-5 lg:grid-cols-8 gap-8 container mx-auto">
          <div className="col-span-8 lg:col-span-2  mt-24">
            <div className="flex justify-center ">
              <button className=" w-[214px] h-[70px] bg-[#FF7518] font-inter  font-semibold text-[14px] text-white rounded-md">
                UPLOAD YOUR PLANS
              </button>
            </div>
            <div className="flex justify-center mt-4">
              <img src={Blue} alt="" />
              <img src={Drive} alt="" />
            </div>
          </div>
          <div className="col-span-6 lg:block hidden mt-24">
            <p className="text-[30px] font-black">
              For a quick quote based on your project scope, call us at
              <br />
              <span className="underline">+1-917-300</span>-1079 or email us at{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Background;
