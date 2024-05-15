import React, { useEffect, useState } from 'react'
import { W, ada, atom, avax, binance, blockto, bnb, brave, btc, coinbase, cross, doge, ethereum, flash, icp, kazi, logo, math, metamask, mlogo, nimbi, opera, plus, polygon, reload, safepal, sch, shibh, stx, tick, tp, trust, uni, usdc, wallet98, wbtc, xrp } from '../assets'
import Footer from '../components/Footer/Footer'
import '../App.css'
import { useNavigate } from 'react-router-dom'

function Wallet() {

  const navigate = useNavigate()

  const [data, setData] = useState([{ src: polygon, name: 'matic' }, { src: xrp, name: 'xrp' }, { src: doge, name: 'doge' }, { src: usdc, name: 'usdc' }, { src: ada, name: 'ada' }, { src: btc, name: 'btc' }, { src: icp, name: 'icp' }, { src: shibh, name: 'shib' }, { src: stx, name: 'stx' }, { src: avax, name: 'avax' }, { src: bnb, name: 'bnb' }, { src: atom, name: 'atom' }, { src: wbtc, name: 'wbtc' }, { src: uni, name: 'uni' }, { src: sch, name: 'sch' }, { src: ethereum, name: 'eth' }, { src: polygon, name: 'matic' }, { src: xrp, name: 'xrp' }, { src: doge, name: 'doge' }, { src: usdc, name: 'usdc' }, { src: ada, name: 'ada' }, { src: btc, name: 'btc' }, { src: icp, name: 'icp' }, { src: shibh, name: 'shib' }, { src: stx, name: 'stx' }, { src: avax, name: 'avax' }, { src: bnb, name: 'bnb' }, { src: atom, name: 'atom' }, { src: wbtc, name: 'wbtc' }, { src: uni, name: 'uni' }, { src: sch, name: 'sch' }, { src: ethereum, name: 'eth' },])
  const [walletData, setWalletData] = useState([{ src: wallet98, name: '98 wallet' }, { src: binance, name: 'binance' }, { src: tp, name: 'tp wallet' }, { src: metamask, name: 'metamask' }, { src: coinbase, name: 'coinbase' }, { src: trust, name: 'trust' }, { src: blockto, name: 'blockto' }, { src: brave, name: 'brave' }, { src: math, name: 'math' }, { src: opera, name: 'opera' }, { src: safepal, name: 'safepal' }, { src: W, name: 'Wallet Connect' },])
  const [connected, setConnected] = useState(false)
  const [cryptoData, setCryptoData] = useState([])
  const [loading, setLoading] = useState(true)

  let newCryptoData = [{ src: stx, name: 'stacks', symbol: 'stx', amount: 458.2, token: 0.0025 }, { src: xrp, name: 'ripple', symbol: 'xrp', amount: 458.2, token: 0.058 }, { src: doge, name: 'Dogecoin', symbol: 'doge', amount: 458.2, token: 0.0025 }, { src: ada, name: 'cardano', symbol: 'ada', amount: 458.2, token: 0.0025 }, { src: icp, name: 'internet computer protocol', symbol: 'icp', amount: 458.2, token: 0.0025 }, { src: stx, name: 'stacks', symbol: 'stx', amount: 458.2, token: 0.0025 }, { src: avax, name: 'avalanche', symbol: 'avax', amount: 0.002, token: 0.0025 }, { src: wbtc, name: 'Wrapper Bitcoin', symbol: 'wbtc', amount: 458.2, token: 0.0025 }, { src: uni, name: 'uniswap', symbol: 'uni', amount: 458.2, token: 0.0025 }, { src: polygon, name: 'matic polygon', symbol: 'matic', amount: 458.2, token: 0.0025 }, { src: stx, name: 'stacks', symbol: 'stx', amount: 458.2, token: 0.0025 },]

  const activateNavbar = () => {

    document.querySelector('.navbar').classList.add('active')

    setTimeout(() => {
      document.querySelector("nav").style.position = "static"

    }, 200)

  }

  const connectModal = (e) => {

    const query = document.querySelector('.connectModal')

    query.style.display = 'flex'

    query.addEventListener('click', (e) => {
      if (!document.querySelector('.modal').contains(e.target)) {
        query.style.display = 'none'
      }
    })

  }

  const closeModal = () => {
    document.querySelector('.connectModal').style.display = 'none'
  }

  const handleClick = () => {
    document.querySelector('.connectModal').style.display = 'none'
    setConnected(true)
    setTimeout(() => setLoading(false), 1000)
  }

  const convert = () => {
    setConnected(false)
    document.querySelector('.walletBalance').style.display ='none'
  }

  const updateSlippage = (e) => {
    document.querySelectorAll(".slippage").forEach(slip => {
      slip.classList.remove('active')
    })

    e.target.classList.add('active')
  }

  const selectAll = () => {
    cryptoData.length === 0 ? setCryptoData(newCryptoData) : setCryptoData([])
  }

  const walletUpdate = () => {
    document.querySelector('.walletBalance').style.display = document.querySelector('.walletBalance').style.display === 'flex' ? 'none' : 'flex'
    // window.addEventListener('click',(e)=>{
    //   if(!document.querySelector('.walletBalance').contains(e.target)){
    //     document.querySelector('.walletBalance').style.display='none'
    //   }
    // })
  }

  return (
    <div className='capitalize'>

      <div className="fixed w-full">
        <nav className='lg:w-[80%] 2xl:w-[1504px] mx-auto border-b border-b-[#5c666c] bg-[#242d32] z-50 '>
          <div className="nav flex items-center justify-between w-full mx-auto px-4 z-40">

            <button onClick={activateNavbar} id="navbar-toggler" className="hidden text-xl py-[0.9rem] text-white"  >☰</button>

            <div className="lg:w-[10%]">
              <div onClick={() => { navigate("/") }}>
                <div className="hidden md:block sm:w-[7rem] h-[2.5rem] cursor-pointer">
                  <img src={logo} className="w-full h-full object-fill" alt="" />
                </div>
                <div className="md:hidden sm:w-[7rem] h-[2.5rem] cursor-pointer">
                  <img src={mlogo} className="w-full h-full object-fill" alt="" />
                </div>
              </div>
            </div>

            <div className="flex justify-end items-center gap-2 w-[60%] py-3.5 relative">
              <div className="flex items-center gap-2 md:gap-[22px]">
                <p className='text-sm cursor-pointer hover:text-[#00ACE6] transition-all px-1 md:px-4 py-1.5'>Home</p>
                <p className='text-sm cursor-pointer hover:text-[#00ACE6] transition-all px-[1.05rem] py-3'>FAQ</p>
                {
                  !connected &&
                  <div onClick={connectModal} className='btn1 bg-transparent rounded-sm border border-[#5c666c] px-2 py-1.5  text-sm flex items-center gap-1'>
                    <div className="w-4 h-4">
                      <img src={flash} alt="" className='w-full h-full object-cover' />
                    </div>
                    <p className='px-1'>Connect Wallet</p>
                  </div>
                }
                {
                  connected &&
                  <div onClick={walletUpdate} className='btn1 bg-transparent rounded-sm border border-[#5c666c] px-2 py-1.5  text-sm flex items-center gap-1'>
                    <div className="w-4 h-4">
                      <img src={tick} alt="" className='w-full h-full object-cover' />
                    </div>
                    <p className='px-1'>Connected</p>
                  </div>
                }
              </div>
              <div className="walletBalance hidden flex-col gap-3 w-[284px] absolute right-0 top-20 bg-[#242d32] border border-[#5c666c] p-3.5 rounded-sm">
                <div className="flex items-center justify-between border-b pb-3 border-b-[#5c666c]">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4">
                      <img src={tick} className='w-full h-full object-cover' alt="" />
                    </div>
                    <p className='text-[#a1a7aa] text-xs'>nimbithebest.xtsyvd</p>
                  </div>
                  <p className='text-[#a1a7aa] text-xs'>Exit</p>
                </div>
                <div className="flex items-center justify-between border-b pb-3 border-b-[#5c666c]">
                  <p className='font-semibold text-xs'>Rank</p>
                  <p className='text-[#ed8700] text-xs'>VIP Wolfpack</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6">
                      <img src={kazi} alt="" className='w-full h-full object-cover' />
                    </div>
                    <p className='font-semibold text-xs'>KAZI</p>
                  </div>
                  <p className='text-sm'>40.0222</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6">
                      <img src={nimbi} alt="" className='w-full h-full object-cover' />
                    </div>
                    <p className='font-semibold text-xs'>NIMBI</p>
                  </div>
                  <p className='text-sm'>75.0236</p>
                </div>
                <p className='font-bold text-xs uppercase'>nimbi wolfpack</p>
                <button className='btn w-full text-base text-center rounded-md'>
                  <p className='font-["Inter",sans-serif] font-medium text-sm'>access cdc</p>
                </button>
                <button className='btn w-full text-base text-center rounded-md'>
                  <p className='font-["Inter",sans-serif] font-medium text-sm'>open lottery</p>
                </button>
                <button className='btn w-full text-base text-center rounded-md'>
                  <p className='font-["Inter",sans-serif] font-medium text-sm'>dust runner game</p>
                </button>

              </div>
            </div>

          </div>
        </nav>
      </div>



      <div className="flex flex-col items-center gap-11 w-full px-[1rem] md:px-[5rem] xl:px-[11rem] mx-auto capitalize py-[6rem] bg-[url(./assets/mountain.png)] bg-bottom bg-cover min-h-screen bg-no-repeat font-['Roboto_Condensed',sans-serif]">

        <div className="flex flex-col items-center justify-center gap-1 lg:w-[75%] text-center">
          <p className='text-[30px] font-medium'>crypto dust converter</p>
          <p className='text-sm text-center text-[#A1A7AA]'>convert small token amounts</p>
        </div>

        {
          !connected &&
          <div className="bg-[#2e3a41] border border-[#5c666c] flex flex-col gap-2 rounded-md sm:w-[405px] h-[428px] px-4 py-3.5">

            <div className="grid grid-cols-4 place-items-center bg-[#242d32] p-4 rounded-sm sm:w-[375px] h-[343px] px-3.5 py-3.5 overflow-y-auto">

              {
                data?.map((crypto, index) => (
                  <div key={index} className="flex flex-col gap-2 items-center text-center px-3 py-2.5">
                    <div className="w-[2rem] h-[2rem]">
                      <img src={crypto.src} className='w-full h-full object-cover' alt="" />
                    </div>
                    <p className='uppercase text-sm font-["Inter"]'>{crypto.name}</p>
                  </div>
                ))
              }

            </div>

            <button onClick={connectModal} className='btn w-full text-base text-center flex items-center gap-1 justify-center'>
              <div className="w-[1.5rem]">
                <img src={flash} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='font-["Inter",sans-serif]'>Connect wallet</p>
            </button>
          </div>
        }

        <div className="connectModal fixed top-0 backdrop-blur-[1.5px] h-screen w-screen z-[100] hidden justify-center items-center ">
          <div className="modal bg-[#2e3a41] -mt-[12rem] 3xl:mt-[-14rem] flex flex-col w-[18.75rem] h-[20rem] border border-[#5c666c] px-4 py-3.5 rounded-sm">
            <div className="flex justify-between items-center border-b border-b-[#5c666c] pb-3">
              <div className="flex gap-2 items-center">
                <div className="w-5">
                  <img src={flash} className='w-full h-full object-cover' alt="" />
                </div>
                <p className='text-lg'>Connect wallet</p>
              </div>
              <div onClick={closeModal} className="w-6 cursor-pointer">
                <img src={cross} className='w-full h-full object-cover' alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-x-3 gap-y-[25px] rounded-sm p-3 mt-3 w-[17.25rem] h-[15rem]">

              {
                walletData?.map((wData, index) => (
                  <div onClick={handleClick} key={index} className="flex flex-col gap-1 items-center text-center">
                    <div className="w-[2.185rem] h-[2.185rem] rounded-sm overflow-hidden">
                      <img src={wData.src} className='w-full h-full object-cover' alt="" />
                    </div>
                    <p className='uppercase text-[10px] font-["Roboto"] font-normal'>{wData.name}</p>
                  </div>
                ))
              }

            </div>
          </div>
        </div>

        {
          connected &&
          <div className='font-["Inter"] w-full md:w-[464px] flex flex-col gap-1.5'>
            <div className="bg-[#2e3a41] border border-[#5c666c] flex flex-col rounded-md w-full px-4 py-3.5">
              <p className='font-semibold text-sm'>Welcome</p>
              <p className='capitalize text-[#a1a7aa] text-xs'>nimbithebest.xtsyvd</p>
            </div>
            <div className="bg-[#2e3a41] border border-[#5c666c] flex flex-col gap-2.5 rounded-md font-['Inter'] w-full h-auto max-h-[675px] px-4 py-3.5">

              <div onClick={selectAll} className="flex items-center justify-end gap-2 w-[91%]">
                <p className='text-sm'>select all</p>
                <div className="w-4 h-4">
                  <img src={plus} alt="" />
                </div>
              </div>

              <div className=" bg-[#242d32] p-4 rounded-sm w-full md:w-[432px] h-[410px] px-3.5 py-3.5 ">
                <div className="flex flex-col justify-center items-center gap-[4px] overflow-y-auto h-[382px]">
                  {
                    cryptoData.length > 0 && !loading &&
                    cryptoData?.map((crypto, index) => (
                      <div key={index} className="flex w-full gap-2 items-center rounded-sm justify-between text-center px-3 py-1 bg-[#2e3a41]">
                        <div className="flex items-center gap-2">
                          <div className="w-[1.5rem] h-[1.5rem]">
                            <img src={crypto.src} className='w-full h-full object-cover' alt="" />
                          </div>
                          <div className="flex flex-col text-left">
                            <p className='text-xs'><span className='font-bold uppercase'>{crypto.symbol}</span> <span className='capitalize text-[#a1a7aa]'>{crypto.name.length > 4 ? crypto.name.slice(0, 4) + '...' : crypto.name}</span></p>
                            <p className='text-[10px]'>{crypto.amount > 0.01 ? crypto.amount.toFixed(3) : '<0.01'}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <p className='text-[#a1a7aa] text-sm'>{crypto.token} KAZI</p>
                          <div className="w-6 h-6">
                            <img src={index < 3 ? cross : plus} alt="" />
                          </div>
                        </div>
                      </div>
                    ))
                  }
                  {
                    cryptoData.length === 0 && !loading &&
                    <p className='text-[#a1a7aa] text-sm'>There are no tokens available</p>
                  }
                  {
                    loading &&
                    <>
                      <p className='border-8 rounded-[50%] border-[#334047] animate-spin border-t-[#00ACE6] w-12 h-12'></p>
                      <p className='pt-2 text-sm'>Loading Tokens...</p>
                    </>
                  }
                </div>
              </div>

              {
                !loading &&
                <div className="overflow-auto bg-[#242d32] p-4 rounded-sm w-full md:w-[432px] h-[148px] px-3.5 py-3.5 text-sm font-['Inter'] font-semibold flex flex-col justify-center gap-3">

                  <div className="flex items-center justify-between">
                    <p className=''>Token</p>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6">
                        <img src={kazi} alt="" className='w-full h-full object-cover' />
                      </div>
                      <p>KAZI</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className=''>Minimum converted</p>
                    <div className="flex flex-col justify-end items-end text-right">
                      <p className='font-medium'>0 KAZI</p>
                      <p className='font-normal text-[10px] text-[#C0C4C6]'>{'>'} $0.01</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className=''>Slippage</p>
                    <div className="flex items-center gap-2 font-medium">
                      <div onClick={updateSlippage} className="slippage active">1%</div>
                      <div onClick={updateSlippage} className="slippage">2%</div>
                      <div onClick={updateSlippage} className="slippage">5%</div>
                      <div onClick={updateSlippage} className="slippage">10%</div>
                    </div>
                  </div>

                </div>
              }

              <button onClick={convert} className='btn w-full text-base text-center flex items-center gap-2.5 justify-center'>
                <div className="w-[1.25rem] h-[1.25rm]">
                  <img src={reload} className='w-full h-full object-cover' alt="" />
                </div>
                <p className='font-["Inter",sans-serif] font-medium'>Convert small amounts</p>
              </button>
            </div>
          </div>
        }


      </div>
      <Footer path='/wallet' />
    </div>
  )
}

export default Wallet
