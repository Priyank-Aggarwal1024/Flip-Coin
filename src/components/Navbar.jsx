import { Link } from "react-router-dom";
import { flash, logo } from "../assets";

function Navbar() {
    return (
        <>
            <div className="sticky top-0 w-full z-50 px-4 backdrop-blur-md">
                <nav className='lg:w-[80%] 3xl:w-[1504px] mx-auto border-b border-b-[#5c666c]'>
                    <div className="nav flex items-center justify-between w-full mx-auto p-[20px_8px_16px_0px] z-40">
                        <img src={logo} alt="Logo" />
                        <div className="links flex items-center gap-[22px]">
                            <Link to={"/"} className="h-9 px-3 py-1.5 rounded justify-center items-center gap-1 inline-flex text-center text-white text-sm font-medium font-['Inter'] leading-normal">Home</Link>
                            <Link to={"/"} className="h-9 px-3 py-1.5 rounded justify-center items-center gap-1 inline-flex text-center text-white text-sm font-medium font-['Inter'] leading-normal">FAQ</Link>
                            <div className="h-9  px-2 py-1.5 border border-[#4e5055] justify-center items-center gap-1 xs:inline-flex hidden">
                                <div className="w-4 h-4 relative">
                                    <img src={flash} className="w-4 h-4 left-0 top-0 absolute" />
                                </div>
                                <div className="px-1 justify-start items-start gap-2.5 flex">
                                    <div className="text-center text-[#ebeced] text-sm font-medium font-['Inter'] leading-normal">Connect Wallet</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        </>
    );
}

export default Navbar;