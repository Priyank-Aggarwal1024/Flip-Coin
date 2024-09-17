import { Link } from "react-router-dom";
import { cat } from "../assets";

function Loose() {
    return (
        <div className="flex justify-center w-full py-5">

            <div className="w-[405px] max-w-full min-h-[504px] px-5 pt-[49px] pb-5 bg-black/25 backdrop-blur-md flex-col justify-start items-center gap-12 inline-flex">
                <div className="min-h-[75px] flex-col justify-start items-center gap-2 flex">
                    <div className="text-white text-[32px] font-extrabold font-['Roboto'] uppercase leading-[43px]">yOU loose!</div>
                    <div className="text-center text-white text-base font-normal font-['Roboto'] leading-normal">Never give up</div>
                </div>
                <div className="w-[90.69px] h-40 relative">
                    <img src={cat} alt="Cat" />
                </div>
                <div className="min-h-[104px] flex-col justify-start items-start gap-4 flex w-full">
                    <Link to={"/flip-coin"} className="btn-yel w-full">
                        Try again
                    </Link>
                    <Link to={"/home"} className="px-3.5 py-2.5 rounded border border-white justify-center items-start gap-2.5 inline-flex w-full">
                        <div className="px-1 justify-start items-start gap-2.5 flex w-full">
                            <div className="text-center text-white w-full text-base font-medium font-['Inter'] leading-normal">Back to rooms</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Loose;