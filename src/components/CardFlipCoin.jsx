import { useState } from "react";
import { arrowBack, circle, coinh, coint } from "../assets";
import { Link } from "react-router-dom";

function CardFlipCoin() {
    const [coinSide, setCoinSide] = useState("");
    return (
        <>
            <Link to={"/home"} className="p-2 flex items-center gap-1 w-fit">
                <img src={arrowBack} alt="" />
                <div className="px-1">
                    <div className="text-center text-[#ebeced] text-sm font-medium font-['Inter'] leading-normal">back</div>
                </div>
            </Link>
            <div className="justify-center flex py-5 w-full">
                <div className="w-[405px] max-w-full min-h-[412px] p-5 bg-black/25 backdrop-blur-md flex-col justify-start items-center gap-12 inline-flex">
                    <div className="min-h-[280px] flex-col justify-start items-center gap-[23px] flex">
                        <div className="min-h-[82px] flex-col justify-start items-center gap-[15px] flex">
                            <div className="text-[44px] font-extrabold font-['Roboto'] uppercase leading-[43px] flex justify-center flex-wrap gap-2">
                                <span className="text-white">Flip coin</span>
                                <span className="text-[#d9cb00]">5000</span>
                            </div>
                            <div className="text-center text-white text-base font-normal font-['Roboto'] leading-normal">Amount: 5000</div>
                        </div>
                        <div className="min-h-[175px] flex-col justify-start items-center gap-[23px] flex">
                            <div className="justify-start items-start gap-[23px] inline-flex">
                                <div className="relative">
                                    <img src={coinh} alt="Coin H" onClick={() => setCoinSide("head")} />
                                    {
                                        coinSide == "head" && <img className="absolute bottom-0 left-0" src={circle} alt="Circle" />
                                    }
                                </div>
                                <div className="relative">
                                    <img src={coint} alt="Coin H" onClick={() => setCoinSide("tail")} />
                                    {
                                        coinSide == "tail" && <img className="absolute bottom-0 right-0" src={circle} alt="Circle" />
                                    }
                                </div>
                            </div>
                            <div className="text-center text-white text-xl font-normal font-['Roboto'] leading-normal">
                                {coinSide == "" ? "Select Coin Side" : "x.. selected"}
                            </div>
                        </div>
                    </div>
                    <Link to={"/start"} className={`btn-yel w-full ${coinSide == "" && "opacity-50"}`}>
                        Start
                    </Link>
                </div>
            </div >
        </>
    );
}

export default CardFlipCoin;