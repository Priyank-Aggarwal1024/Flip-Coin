import React from 'react'
import { logo1 } from '../../assets'

function NFTCard({ img }) {
    return (
        <>
            {
                img &&
                <div className='h-[18rem] xs:h-[14rem] 4xl:h-[314px] 4xl:w-[286px] relative font-bold text-black z-0'>

                    <img src={img} alt="" className='w-full h-full object-cover' />

                    <div className="absolute top-2 left-2">
                        <p className='text-white bg-black/25 rounded-xl font-normal py-1 px-1.5 text-xs'>@author</p>
                    </div>
                    <div className="absolute w-full bottom-0 flex justify-between items-center bg-[#eff2f3] opacity-80 backdrop-blur-3xl">
                        <div className="flex gap-2 items-center justify-center p-2 pb-2">
                            <div className="w-8 overflow-hidden">
                                <img src={logo1} alt="" className='w-full h-full object-fill' />
                            </div>
                            <div className="">
                                <p className='text-xs'>Nimbi #50</p>
                                <p className='text-[0.625rem] font-medium'>@author</p>
                            </div>
                        </div>
                        <p className='font-bold text-sm text-black pr-2'>152.2 <span className='font-semibold'>ETH</span></p>
                    </div>
                </div>
            }
            {
                !img &&
                <div className='h-full w-full bg-transparent hidden xl:block'>

                </div>
            }
            </>
    )
}

export default NFTCard
