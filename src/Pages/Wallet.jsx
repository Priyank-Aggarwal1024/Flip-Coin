import React from 'react'
import { W, ada, atom, avax, binance, blockto, bnb, brave, btc, coinbase, cross, doge, ethereum, flash, icp, math, metamask, opera, polygon, safepal, sch, shibh, stx, tp, trust, uni, usdc, wallet98, wbtc, xrp } from '../assets'
import Footer from '../components/Footer/Footer'
import '../App.css'

function Wallet() {

  const connectModal = (e) => {

    const query = document.querySelector('.connectModal')
    
    query.style.display='flex'
    
  }

  const closeModal =()=>{
    document.querySelector('.connectModal').style.display='none'
  }

  return (
    <div className=''>
      <div className="flex flex-col items-center gap-12 w-full px-[2rem] md:px-[5rem] xl:px-[11rem] mx-auto capitalize py-[6rem] bg-[url(./assets/mountain.png)] bg-bottom min-h-screen bg-no-repeat font-['Roboto_Condensed',sans-serif]">

        <div className="flex flex-col items-center justify-center gap-1 lg:w-[75%] text-center">
          <p className='text-[44px] font-semibold'>crypto dust converter</p>
          <p className='text-lg text-center text-[#A1A7AA]  '>convert small token amounts</p>
        </div>

        <div className="bg-[#2e3a41] border border-[#5c666c] flex flex-col gap-2 p-3 rounded-md">

          <div className="grid grid-cols-4 place-items-center gap-x-12 gap-y-6 3xl:gap-x-[6rem] 3xl:gap-y-10 bg-[#242d32] p-4 rounded-lg h-[20rem] 3xl:h-[34rem] overflow-y-auto">
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem]">
                <img src={polygon} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm 3xl:text-lg'>Matic</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem]">
                <img src={xrp} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm 3xl:text-lg'>xrp</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem]">
                <img src={doge} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm 3xl:text-lg'>doge</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem]">
                <img src={usdc} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm 3xl:text-lg'>usdc</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem]">
                <img src={ada} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm 3xl:text-lg'>ada</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem]">
                <img src={btc} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm 3xl:text-lg'>btc</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem]">
                <img src={icp} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm 3xl:text-lg'>icp</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem]">
                <img src={shibh} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm 3xl:text-lg'>shib</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem]">
                <img src={stx} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm 3xl:text-lg'>stx</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem]">
                <img src={avax} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm 3xl:text-lg'>avax</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem]">
                <img src={bnb} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm 3xl:text-lg'>bnb</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem]">
                <img src={atom} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm 3xl:text-lg'>atom</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem]">
                <img src={wbtc} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm 3xl:text-lg'>wbtc</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem]">
                <img src={uni} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm 3xl:text-lg'>uni</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem]">
                <img src={sch} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm 3xl:text-lg'>sch</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem]">
                <img src={ethereum} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm 3xl:text-lg'>eth</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem]">
                <img src={polygon} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm 3xl:text-lg'>Matic</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem]">
                <img src={xrp} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm 3xl:text-lg'>xrp</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem]">
                <img src={doge} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm 3xl:text-lg'>doge</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem]">
                <img src={usdc} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm 3xl:text-lg'>usdc</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem]">
                <img src={ada} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm 3xl:text-lg'>ada</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem]">
                <img src={btc} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm 3xl:text-lg'>btc</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem]">
                <img src={icp} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm 3xl:text-lg'>icp</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem]">
                <img src={shibh} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm 3xl:text-lg'>shib</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem]">
                <img src={stx} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm 3xl:text-lg'>stx</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem]">
                <img src={avax} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm 3xl:text-lg'>avax</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem]">
                <img src={bnb} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm 3xl:text-lg'>bnb</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem]">
                <img src={atom} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm 3xl:text-lg'>atom</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem]">
                <img src={wbtc} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm 3xl:text-lg'>wbtc</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem]">
                <img src={uni} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm 3xl:text-lg'>uni</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem]">
                <img src={sch} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm 3xl:text-lg'>sch</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem]">
                <img src={ethereum} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm 3xl:text-lg'>eth</p>
            </div>
          </div>

          <button onClick={connectModal} className='btn w-full text-base text-center flex items-center gap-1 justify-center'>
            <div className="w-[1.5rem] 3xl:w-12">
              <img src={flash} className='w-full h-full object-cover' alt="" />
            </div>
            <p className='3xl:text-3xl'>Connect wallet</p>
          </button>
        </div>

        <div className="connectModal fixed top-0 backdrop-blur-[1.5px] h-screen w-screen z-[100] hidden justify-center items-center ">
          <div className="bg-[#2e3a41] mt-[6rem] 3xl:mt-0 flex flex-col gap-2 w-[20.75rem] 3xl:w-[30rem]  border border-[#5c666c] px-4 rounded-lg">
            <div className="flex justify-between items-center border-b border-b-[#5c666c] py-4">
              <div className="flex gap-2 items-center">
                <div className="w-5 3xl:w-14">
                  <img src={flash} className='w-full h-full object-cover' alt="" />
                </div>
                <p className='text-lg 3xl:text-3xl'>Connect wallet</p>
              </div>
              <div onClick={closeModal} className="w-6 3xl:w-12 cursor-pointer">
                <img src={cross} className='w-full h-full object-cover' alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 place-items-center gap-x-2 gap-y-6 3xl:gap-x-[6rem] 3xl:gap-y-10 rounded-lg p-4">
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem] rounded-lg overflow-hidden">
                <img src={wallet98} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-xs 3xl:text-sm'>98 wallet</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem] rounded-lg overflow-hidden">
                <img src={binance} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-xs 3xl:text-sm'>binance</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem] rounded-lg overflow-hidden">
                <img src={tp} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-xs 3xl:text-sm'>tp wallet</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem] rounded-lg overflow-hidden">
                <img src={metamask} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-xs 3xl:text-sm'>metamask</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem] rounded-lg overflow-hidden">
                <img src={coinbase} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-xs 3xl:text-sm'>coinbase</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem] rounded-lg overflow-hidden">
                <img src={trust} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-xs 3xl:text-sm'>trust</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem] rounded-lg overflow-hidden">
                <img src={blockto} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-xs 3xl:text-sm'>blockto</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem] rounded-lg overflow-hidden">
                <img src={brave} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-xs 3xl:text-sm'>brave</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem] rounded-lg overflow-hidden">
                <img src={math} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-xs 3xl:text-sm'>math</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem] rounded-lg overflow-hidden">
                <img src={opera} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-xs 3xl:text-sm'>opera</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem] rounded-lg overflow-hidden">
                <img src={safepal} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-xs 3xl:text-sm'>safepal</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem] rounded-lg overflow-hidden">
                <img src={W} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-xs 3xl:text-sm'>wallet connect</p>
            </div>
            
            
          </div>
          </div>
        </div>


      </div>
      <Footer path='/wallet' />
    </div>
  )
}

export default Wallet
