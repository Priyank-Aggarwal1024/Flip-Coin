import React, { useState } from 'react'
import Footer from '../components/Footer/Footer'
import { cross, ellipse, telegram } from '../assets'
import { TeamCard } from '../components'
import { card1, card2, card3, card4, card5, card6, card7, card8 } from '../assets'
import '../App.css'

function Team() {

  const [modal, setModal] = useState({})

  const handleClick = ({ img, position, title, desc, id }) => {

    document.querySelector(`.modal`).classList.add('active')

    document.querySelector(`.team-page`).classList.add('fixed')
    
    setModal({ img, position, title, desc, id })
    
    const query = document.querySelector(`.modal-card`)
    
    setTimeout(()=>{
      document.addEventListener('click', (e) => {
        if (!query.contains(e.target)) {
          closeModal()
        }
      },50)

    })
  }

  const closeModal = () => {
    document.querySelector(`.modal`)?.classList.remove('active')
    setModal({})
    document.querySelector(`.team-page`).classList.remove('fixed')

  }

  return (
    <div className=''>
      <div className="team-page flex flex-col justify-center gap-12 w-full px-[2rem] md:px-[5rem] xl:px-[11rem] mx-auto capitalize py-16 bg-[url(./assets/whaleLeft.png),url(./assets/mountain.png),url('./assets/bigEllipse.png')] team bg-no-repeat font-['Inter',sans-serif]">

        <div className="w-full border-b border-b-[#c4c0c8] py-6 font-['Roboto_Condensed',sans-serif]">
          <p className='uppercase text-3xl font-semibold text-left py-3'>The people behind the scenes</p>
          <p className='text-[16px] text-center md:text-left py-3'>Decentralized Collaboration is at the heart of our mission. We are proud to partner with industry leaders, innovators, and like-minded projects to drive forward our vision of a decentralized future. Together, we're building bridges, fostering innovation, and creating opportunities for growth and advancement in the blockchain space.</p>
        </div>

        <div className="flex flex-col gap-16">
          <div className="relative w-max">
            <div className="btn bg-[#5c666c] px-2 py-1 w-max font-bold text-base uppercase z-10"><p>Founders</p></div>
            <img src={ellipse} className='absolute -top-6 -right-10 w-[5rem] -z-0' alt="" />
          </div>

          <div id={modal.id} className="modal hidden h-screen w-full fixed top-0 left-0 z-30 items-center justify-center bg-black/40">
            <div className='modal-card team relative capitalize z-40 h-[20rem] w-[20rem] md:h-[25rem] md:w-[25rem] lg:h-[26rem] xl:h-[26rem] 3xl:h-[41rem] lg:w-[26rem] xl:w-[26rem] 3xl:w-[60rem] mx-auto flex flex-col gap-2 bg-[#334047] border border-[#5c666c] p-2 '>
              <div className="xs:h-[16rem] xl:h-[18rem] 3xl:h-[31rem]">
                <img src={modal.img} alt="" className='w-full h-full object-cover' />
              </div>
              <div className="absolute w-10 h-10 right-3 top-3 ">
                <img src={telegram} alt="" className='w-full h-full object-cover' />
              </div>
              <div className="absolute w-10 h-10 left-3 top-3 cursor-pointer hover:opacity-100 opacity-50">
                <img onClick={closeModal} src={cross} alt="" className='w-full h-full object-cover' />
              </div>
              <p className="uppercase font-semibold text-[#00ace6] text-[0.83rem]">{modal.position}</p>
              <p className="text-white underline text-2xl font-semibold cursor-pointer">{modal.title}</p>
              <p className="text-[#e4e5e6] text-[0.67rem] font-light">{modal.desc}</p>
            </div>
          </div>


          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            <TeamCard handleClick={handleClick} id="teamCard1" img={card8} position="ceo and founder" title="dack thomas" desc="Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project" />
            <TeamCard handleClick={handleClick} id="teamCard2" img={card8} position="ceo and founder" title="dack thomas" desc="Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project" />
            <TeamCard handleClick={handleClick} id="teamCard3" img={card8} position="ceo and founder" title="dack thomas" desc="Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project" />
            <TeamCard handleClick={handleClick} id="teamCard4" img={card8} position="ceo and founder" title="dack thomas" desc="Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project" />
          </div>

          <div className="relative w-max">
            <div className="btn bg-[#5c666c] px-2 py-1 w-max font-bold text-base uppercase z-10"><p>Game design team</p></div>
            <img src={ellipse} className='absolute -top-6 -right-10 w-[5rem] -z-0' alt="" />
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            <TeamCard handleClick={handleClick} id="teamCard5" img={card7} position="backend dev" title="nimbi token" desc="Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project" />
            <TeamCard handleClick={handleClick} id="teamCard6" img={card2} position="ui/ux" title="nimbi token" desc="Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project" />
            <TeamCard handleClick={handleClick} id="teamCard7" img={card3} position="technical officer" title="nimbi token" desc="Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project" />
            <TeamCard handleClick={handleClick} id="teamCard8" img={card3} position="technical officer" title="nimbi token" desc="Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project" />
          </div>

          <div className="relative w-max">
            <div className="btn bg-[#5c666c] px-2 py-1 w-max font-bold text-base uppercase z-10"><p>Web3 dev team</p></div>
            <img src={ellipse} className='absolute -top-6 -right-10 w-[5rem] -z-0' alt="" />
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            <TeamCard handleClick={handleClick} id="teamCard9" img={card4} position="smart contract dev" title="nimbi token" desc="Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project" />
            <TeamCard handleClick={handleClick} id="teamCard10" img={card5} position="marketing" title="nimbi token" desc="Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project" />
            <TeamCard handleClick={handleClick} id="teamCard11" img={card6} position="frontend dev" title="nimbi token" desc="Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project" />
            <TeamCard handleClick={handleClick} id="teamCard12" img={card6} position="frontend dev" title="nimbi token" desc="Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project" />
          </div>

          <div className="relative w-max">
            <div className="btn bg-[#5c666c] px-2 py-1 w-max font-bold text-base uppercase z-10"><p>marketing</p></div>
            <img src={ellipse} className='absolute -top-6 -right-10 w-[5rem] -z-0' alt="" />
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            <TeamCard handleClick={handleClick} id="teamCard13" img={card7} position="backend dev" title="nimbi token" desc="Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project" />
            <TeamCard handleClick={handleClick} id="teamCard14" img={card2} position="ui/ux" title="nimbi token" desc="Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project" />
            <TeamCard handleClick={handleClick} id="teamCard15" img={card1} position="community moderation" title="nimbi token" desc="Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project" />
            <TeamCard handleClick={handleClick} id="teamCard16" img={card1} position="community moderation" title="nimbi token" desc="Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project" />
          </div>
        </div>
      </div>
      <Footer path='/about' />
    </div>
  )
}

export default Team
