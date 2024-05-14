import React from 'react'

function IntroCard({img,title,desc}) {
    return (
        <div className="flex flex-col items-center gap-4 md:w-[34%] xl:w-[26.65%]  md:border-l md:border-r border-b border-[#767f84] h-[16rem] xs:h-[17rem] sm:h-[15rem] md:h-[26rem] lg:h-[21rem] px-4 py-4 lg:px-8 lg:py-10">
            <div className="w-12 ">
                <img src={img} alt="" className='w-full h-full object-fill' />
            </div>
            <p className='font-semibold text-xl'>{title}</p>
            <p className='text-sm lg:text-xs  xs:w-[70%] text-[#c0c4c6] text-center'>{desc}</p>
        </div>
    )
}

export default IntroCard
