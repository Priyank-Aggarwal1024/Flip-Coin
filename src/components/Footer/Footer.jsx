import React from 'react'
import { discordIcon, telegramIcon, twitterIcon, xIcon } from '../../assets'

function Footer({path="/"}) {
  return (
    <div className="capitalize text-xs flex flex-col gap-4 bg-[#1c2327] px-[2rem] lg:px-[4rem] xl:px-[8rem] py-8 border-t border-[#767f84]">
        <div className={`flex items-center gap-4 flex-col  justify-between ${path==="/"?'pt-4 border-t border-[#767f84]':""}  3xl:w-[90%] mx-auto`}>
          <div className="flex flex-col items-center gap-1">
            <p className='text-[#a1a7aa]'>our community</p>
            <ul className="list-none flex gap-2 items-center">
              <li><img src={telegramIcon} className='w-5 rounded-sm cursor-pointer' alt="" /></li>
              <li><img src={discordIcon} className='w-5 rounded-sm cursor-pointer' alt="" /></li>
              <li><img src={twitterIcon} className='w-5 rounded-sm cursor-pointer' alt="" /></li>
              <li><img src={xIcon} className='w-5 rounded-sm cursor-pointer' alt="" /></li>
            </ul>
          </div>
          <p className='normal-case'>Copyright &copy; 2024 NIMBI.COM | All rights reserved</p>
        </div>
      </div>
  )
}

export default Footer
