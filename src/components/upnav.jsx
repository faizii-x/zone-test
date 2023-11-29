
import Whatsapp from "../assets/png/whatsapp.png"
import Message from "../assets/png/message.png"
import Facebookk from "../assets/png/facebookk.png"
import Linked from "../assets/png/linked.png"

function Upnav() {
  return (
    <>
    
    <div className="bg-[#2F2F2F] pb-3">
            <p className="text-[#FFF] text-[20px] font-normal font-inter text-center pt-2">TURNAROUND TIME 2-3 Days!</p>
            <div className="lg:block hidden">
            <div className="float-right flex mr-[196px] -mt-6 ">
                <img src={Whatsapp} alt="" className="w-[22px] h-[22px]"/>
                <p className="text-[#FDFDFD] text-[16px] font-inter font-semibold ml-3">+1 917 720 3892</p>
            </div>
            </div>
            <div className="bg-[#FF7518] rounded-3xl w-[285px] mx-auto mt-2 ">
                <p className="text-[#] font-inter text-center">Affordable Estimate(30% off)</p>
            </div>
            <div className="lg:block hidden">
            <div className="float-right flex mr-[58px] -mt-6">
                <img src={Message} alt="" className="w-[22px] h-[22px]"/>
                <p className="text-[#FDFDFD] text-[16px] font-inter font-semibold ml-3">faizanramzan670@gmail.com</p>
            <img src={Facebookk} alt="" className="w-[18px] h-[18px] -mt-3 cursor-pointer"/>
            <img src={Linked} alt="" className="w-[18px] h-[18px] -mt-3 cursor-pointer"/>
            </div>
            </div>
    </div>
    </>
  )
}

export default Upnav