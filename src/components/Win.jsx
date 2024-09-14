import { wincat } from "../assets";

function Win() {
    return (
        <div className="flex justify-center w-full py-5">
            <div className="min-h-[544px] px-5 pt-[49px] pb-5 bg-black/25 backdrop-blur-md flex-col justify-start items-center gap-12 inline-flex">
                <div className="text-white text-[32px] font-extrabold font-['Roboto'] uppercase leading-[43px]">yOU wIN!</div>
                <div className="w-[193px] max-w-full text-center text-white text-[44px] font-normal font-['Roboto'] leading-normal">10,000 K</div>
                <img className="max-w-full w-[97.75px] min-h-40 relative" src={wincat} />
                <div className="min-h-[104px] flex-col justify-start items-start gap-4 flex">
                    <div className="btn-yel w-full">
                        Play again
                    </div>
                    <div className="px-3.5 py-2.5 rounded border border-white justify-center items-start gap-2.5 inline-flex">
                        <div className="px-1 justify-start items-start gap-2.5 flex">
                            <div className="text-center text-white text-base font-medium font-['Inter'] leading-normal">Back to rooms</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Win;