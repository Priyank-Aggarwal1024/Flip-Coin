import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer/Footer'
import { icon, leftArrow, rightArrow } from '../assets'
import '../App.css'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Document() {

  const { id } = useParams()
  const navigate = useNavigate()

  const data = [
    { id: "current-state", title: "The current state of project launches on solana", desc: "" },
    { id: "launchpad", title: "nimbi launchpad", desc: "" },
    { id: "user-flow", title: "user flow for solster launchpad", desc: "" },
    { id: "economics", title: "token economics", desc: "" },
    { id: "burn", title: "token burn", desc: "" },
    { id: "road", title: "road to nimbi success", desc: "" },
    { id: "chapter", title: "chapter name", desc: "" },
    { id: "testnet", title: "testnet launch", desc: "" },
  ]

  const [title, setTitle] = useState("The current state of project launches on solana")
  const [index, setIndex] = useState(0)

  useEffect(() => {

    if (!id) {
      document.querySelectorAll('.document.active').forEach(doc => doc.classList.remove('active'))
      
      document.querySelectorAll('.docTitle').forEach((doc, index) => {
        doc.childNodes[0]?.classList.remove('active')
      })

      document.querySelector('.docHead').classList.add('active')
      document.querySelector('.document').classList.add('active')
    }
    else {
      setTitle(data.filter(obj => obj.id === id)[0]?.title)
      
      document.querySelectorAll('.document.active').forEach(doc => doc.classList.remove('active'))
      
      document.querySelectorAll('.docTitle').forEach((doc, index) => {
        doc.childNodes[0]?.classList.remove('active')
      })

      document.querySelector(`#${id}`).classList.add('active')

      document.querySelectorAll('.docTitle').forEach((doc, index) => {
        doc.childNodes[1].childNodes.forEach((li) => {
          if (li.classList.contains('active')) {
            doc.childNodes[0]?.classList.add('active')
            return;
          }
        })
      })
    }

  }, [id])

  const activeTab = (id) => {

    if (document.querySelector(`.${id} ~ .docContent`).classList.contains('active')) {
      document.querySelector(`.${id} ~ .docContent`).classList.remove('active')
      document.querySelector(`.${id} img`).style.transform = "rotate(0deg)"
    }
    else {
      document.querySelector(`.${id} ~ .docContent`).classList.add('active')
      document.querySelector(`.${id} img`).style.transform = "rotate(90deg)"
    }
  }

  return (
    <div className=''>

      <div className='flex capitalize pt-16 sm:flex-row flex-col'>

        <div className="sm:w-[33%] flex flex-col gap-4 items-center sm:items-end sm:min-h-screen border-r border-r-[#c4c0c8] py-6">
          <div className="w-[90%] xl:w-[75%] flex flex-col gap-2 px-2">
            <p className='uppercase text-left font-semibold'>overview</p>
            <div className="flex flex-col gap-2 docTitle">
              <div onClick={() => activeTab('launchTab')} className={`launchTab docHead flex items-center justify-between bg-transparent rounded-lg py-2 px-4 cursor-pointer`}>
                <p className=''>launchpad</p>
                <img src={icon} className='w-3 h-3 rotate-90' alt="" />
              </div>
              <ul className='docContent active pl-8 text-sm flex flex-col gap-1'>
                <Link to="/documents/current-state" id="current-state" className='document'>The current state of project launches on solana</Link>
                <Link to="/documents/launchpad" id="launchpad" className='document '>nimbi launchpad</Link>
                <Link to="/documents/user-flow" id="user-flow" className='document'>user flow for solster launchpad</Link>
              </ul>
            </div>
          </div>
          <div className="w-[90%] xl:w-[75%] flex flex-col gap-2 px-2 bg-[#242d32]">
            <p className='uppercase text-left font-semibold'>tokenomics</p>
            <div className="flex flex-col gap-2">

              <ul className='docContent active pl-8 text-sm flex flex-col gap-1'>
                <Link to="/documents/economics" id="economics" className='document'>token economics</Link>
                <Link to="/documents/burn" id="burn" className='document'>token burn</Link>
              </ul>
            </div>
          </div>
          <div className="w-[90%] xl:w-[75%] flex flex-col gap-2 px-2 bg-[#242d32]">
            <p className='uppercase text-left font-semibold'>roadmap</p>
            <div className="flex flex-col gap-2">

              <ul className='docContent active pl-8 text-sm flex flex-col gap-1'>
                <Link to="/documents/road" id="road" className='document'>road to nimbi success</Link>
                <Link to="/documents/chapter" id="chapter" className='document'>chapter name</Link>
              </ul>
            </div>
          </div>
          <div className="w-[90%] xl:w-[75%] flex flex-col gap-2 px-2 bg-[#242d32]">
            <p className='uppercase text-left font-semibold'>testnet launch</p>
            <div className="flex flex-col gap-2">

              <ul className='docContent active pl-8 text-sm flex flex-col gap-1'>
                <Link to="/documents/testnet" id="testnet" className='document'>how to receive testnet tokens</Link>
              </ul>
            </div>
          </div>
        </div>

        <div className="px-[3rem] md:px-[3rem] sm:w-[67%] md:w-[67%] pb-4 capitalize bg-[url('./assets/mountain.png')] bg-cover bg-right-bottom bg-no-repeat font-['Inter',sans-serif]">
          <div className="flex flex-col gap-10">
            <div className="w-full border-b border-b-[#c4c0c8] py-6 font-['Roboto',sans-serif]">
              <p className='uppercase text-3xl font-semibold text-left py-3'>{title}</p>
            </div>

            <div className='text-base leading-loose'>
              <p>IDO Launchpad for Decentralized Fundraising<br />
                Conventional launchpads rely on first come and first clicks. Unlike them, our launchpad is fair and equitable for all and yet rewards token holders.<br />
                The Solster launchpad doesn’t have high financial barriers to get into the market. It also doesn’t have whitelist spots based on first form fillers.<br />
                The Nimbi launchpad fundraising will follow the trilogy system marked in three rounds. The system ensures guaranteed fund allocation to the participants based on the quality of Solster Tokens they own.<br />
                Take a look at our trilogy system for fund allocation:<br />
                Round 1:<br />
                This round will have<br />
                All token holders in the pool fulfilling the base requirements of staked STR tokens.<br />
                STR Token Holders can contribute based on<br />
                <ul className='list-disc px-8'>
                  <li>The staked quantity of STR tokens.</li>
                  <li>The weight of their pool.</li>
                  <li>KYC</li>
                </ul>
                Each fundraising would last over a six-hour period and will be allocated through an initial distribution offering (IDO) for new projects.<br />
                Round 2:<br />
                It is optional. This round will have<br />
                <ul className='list-disc px-8'>
                  <li>All token holders who have STR tokens in their wallets irrespective of staking</li>
                  <li>KYC</li>
                  <li>Whitelisting</li>
                </ul>
                All users will be allotted six hours to buy tokens. It’s the same time frame when they can contribute to the given IDO projects. All users will get confirmed allocation based on their eligibility.<br />
                Round 3:<br />
                The third round will only take place if IDO projects have any unsold/spare tokens in Round 2. The round is open for everyone and no criteria of staked STR token applies here.<br />
                The only criteria the users need to meet is whitelisting criteria.<br />
                Note: IDO projects will determine international regulations, KYC, and other sales requirements.</p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-2">
              <div onClick={() => { if(index!==0) { setTimeout(navigate(`/documents/${data[index === 0 ? data.length - 1 : index - 1].id}`),10); setIndex(index === 0 ? data.length - 1 : index - 1) }}} className={`flex items-center gap-1 lg:gap-3 border border-[#334047] bg-transparent hover:bg-[#28343b66] cursor-pointer py-3 px-4 rounded-lg w-full ${index!==0?'active:text-[#00ace6]':''}`}>
                <img src={leftArrow} alt="" className='w-4 h-3' />
                <div className="flex flex-col gap-2">
                  <p className='text-sm'>Previous</p>
                  <p className='text-sm lg:text-sm font-semibold text-white'>{data[index === 0 ? data.length - 1 : index - 1].title}</p>
                </div>
              </div>
              <div onClick={() => { if(index!==data.length-1) { setTimeout(navigate(`/documents/${data[index === data.length - 1 ? 0 : index + 1]?.id}`),10); setIndex(index === data.length - 1 ? 0 : index + 1) }}} className={`flex items-center justify-end gap-1 lg:gap-3 border border-[#334047] bg-transparent hover:bg-[#28343b66] cursor-pointer py-3 px-4 rounded-lg w-full ${index!==data.length-1?'active:text-[#00ace6]':''}`}>
                <div className="flex flex-col gap-2 text-right  ">
                  <p className='text-sm'>Next</p>
                  <p className='text-sm lg:text-sm font-semibold text-white'>{data[index === data.length - 1 ? 0 : index + 1].title}</p>
                </div>
                <img src={rightArrow} alt="" className='w-4 h-3' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer path='/documents' />
    </div>
  )
}

export default Document
