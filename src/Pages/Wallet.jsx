import React, { useState } from 'react'
import { W, ada, atom, avax, binance, blockto, bnb, brave, btc, coinbase, cross, doge, ethereum, flash, icp, math, metamask, opera, polygon, safepal, sch, shibh, stx, tp, trust, uni, usdc, wallet98, wbtc, xrp } from '../assets'
import Footer from '../components/Footer/Footer'
import '../App.css'

function Wallet() {

  const [data, setData] = useState([{ src: polygon, name: 'matic' }, { src: xrp, name: 'xrp' }, { src: doge, name: 'doge' }, { src: usdc, name: 'usdc' }, { src: ada, name: 'ada' }, { src: btc, name: 'btc' }, { src: icp, name: 'icp' }, { src: shibh, name: 'shib' }, { src: stx, name: 'stx' }, { src: avax, name: 'avax' }, { src: bnb, name: 'bnb' }, { src: atom, name: 'atom' }, { src: wbtc, name: 'wbtc' }, { src: uni, name: 'uni' }, { src: sch, name: 'sch' }, { src: ethereum, name: 'eth' }, { src: polygon, name: 'matic' }, { src: xrp, name: 'xrp' }, { src: doge, name: 'doge' }, { src: usdc, name: 'usdc' }, { src: ada, name: 'ada' }, { src: btc, name: 'btc' }, { src: icp, name: 'icp' }, { src: shibh, name: 'shib' }, { src: stx, name: 'stx' }, { src: avax, name: 'avax' }, { src: bnb, name: 'bnb' }, { src: atom, name: 'atom' }, { src: wbtc, name: 'wbtc' }, { src: uni, name: 'uni' }, { src: sch, name: 'sch' }, { src: ethereum, name: 'eth' },])
  const [walletData, setWalletData] = useState([{ src: wallet98, name: '98 wallet' },{ src: binance, name: 'binance' },{ src: tp, name: 'tp wallet' },{ src: metamask, name: 'metamask' },{ src: coinbase, name: 'coinbase' },{ src: trust, name: 'trust' },{ src: blockto, name: 'blockto' },{ src: brave, name: 'brave' },{ src: math, name: 'math' },{ src: opera, name: 'opera' },{ src: safepal, name: 'safepal' },{ src: W, name: 'Wallet Connect' },])

  const connectModal = (e) => {

    const query = document.querySelector('.connectModal')

    query.style.display = 'flex'

  }

  const closeModal = () => {
    document.querySelector('.connectModal').style.display = 'none'
  }

  return (
    <div className=''>
      <div className="flex flex-col items-center gap-12 w-full px-[2rem] md:px-[5rem] xl:px-[11rem] mx-auto capitalize py-[6rem] bg-[url(./assets/mountain.png)] bg-bottom min-h-screen bg-no-repeat font-['Roboto_Condensed',sans-serif]">

        <div className="flex flex-col items-center justify-center gap-1 lg:w-[75%] text-center">
          <p className='text-[30px] font-semibold'>crypto dust converter</p>
          <p className='text-sm text-center text-[#A1A7AA]'>convert small token amounts</p>
        </div>

        <div className="bg-[#2e3a41] border border-[#5c666c] flex flex-col gap-2 p-3 rounded-md">

          <div className="grid grid-cols-4 place-items-center gap-x-12 gap-y-6 3xl:gap-x-[6rem] 3xl:gap-y-10 bg-[#242d32] p-4 rounded-lg h-[20rem] 3xl:h-[34rem] overflow-y-auto">

            {
              data?.map((crypto, index) => (
                <div key={index} className="flex flex-col gap-1 items-center text-center">
                  <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem]">
                    <img src={crypto.src} className='w-full h-full object-cover' alt="" />
                  </div>
                  <p className='uppercase text-sm'>{crypto.name}</p>
                </div>
              ))
            }

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
                <div className="w-5">
                  <img src={flash} className='w-full h-full object-cover' alt="" />
                </div>
                <p className='text-lg'>Connect wallet</p>
              </div>
              <div onClick={closeModal} className="w-6 3xl:w-12 cursor-pointer">
                <img src={cross} className='w-full h-full object-cover' alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 place-items-center gap-x-2 gap-y-6 3xl:gap-x-[6rem] 3xl:gap-y-10 rounded-lg p-4">

              {
                walletData?.map((wData, index) => (
                  <div key={index} className="flex flex-col gap-1 items-center text-center">
                    <div className="w-[2rem] h-[2rem] 3xl:h-[4rem] 3xl:w-[4rem] rounded-lg overflow-hidden">
                      <img src={wData.src} className='w-full h-full object-cover' alt="" />
                    </div>
                    <p className='uppercase text-xs'>{wData.name}</p>
                  </div>
                ))
              }

            </div>
          </div>
        </div>


      </div>
      <Footer path='/wallet' />
    </div>
  )
}

export default Wallet
