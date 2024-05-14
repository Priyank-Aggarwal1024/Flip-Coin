import React from 'react'
import { leftWolf, rightWolf } from '../assets'
import Footer from '../components/Footer/Footer'
import '../App.css'

function About() {
  return (
    <div className=''>
      <div className="flex flex-col items-center justify-center gap-12 w-full px-[2rem] md:px-[5rem] xl:px-[11rem] mx-auto capitalize py-16 bg-[url(./assets/whaleLeft.png),url(./assets/mountain.png)] about bg-no-repeat font-['Roboto_Condensed',sans-serif]">

        <div className="w-full border-b border-b-[#c4c0c8] py-6">
          <p className='uppercase text-[44px] font-semibold text-left py-3'>About us</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 lg:w-[75%] text-center">
          <p className='text-[40px] font-semibold'>What Is Nimbi Token?</p>
          <p className='text-[24px] font-medium tracking-tight'>Come Join The Nimbi Vip Loyalty Program And Help Unite The Nimbi Wolfpack Team.</p>
          <p className='text-[16px] text-center'>Nimbi Token Is A Groundbreaking decentralized eco-system merging unity and blockchain technology together as d-power. Operating on the erc-404 token protocol, early adopters to the nimbi community will receive airdrops and become a nimbi wolfpack vip partner. As an early adopter you will become part of the wolfpack and enjoy these perks for free. This will give you free access and be the first to play a web3 decentralized game(Crypto Dust Runner) that is currently in development. you will also be able to convert your crypto dust to the nimbi ecosystem that gives you even more power. The ecosystem will also support the Decentralized Lotto with your old crypto dust. hold on to your nimbi token as long as you can because even more dapps are in development to support the nimbi ecosystem.</p>
        </div>

        <div className="flex justify-center gap-4 lg:gap-8 items-center flex-col lg:flex-row-reverse ">
          <div className="rounded-lg overflow-hidden xs:w-[70%] md:w-[50%] mx-auto">
            <img src={rightWolf} alt="" className='w-full h-full object-cover' />
          </div>
          <div className="flex flex-col gap-4 lg:gap-8 py-6 lg:w-[50%] text-center lg:text-start">
            <p className='text-[40px] font-semibold'>About NIMBI</p>
            <p className='text-[16px]'>nimbi is an actual 2 year old white wolfdog that lives high in the mountains where he can see far. he is also a white wolfdog character in a web3 video game. you will enjoy and be part of the UX where you take to control and guide him around a map where he fights off the evil powers trying to invade and dismantle the decentralized structure that we are all trying to preserve. nimbi will be leading the wolfpack on both fronts.</p>
            <p className='text-[24px] font-medium tracking-tight'>unite with nimbi as a part of the wolfpack</p>
          </div>
        </div>
        <div className="flex justify-center gap-4 lg:gap-8 items-center flex-col lg:flex-row ">
          <div className="rounded-lg overflow-hidden xs:w-[70%] md:w-[50%] mx-auto">
            <img src={leftWolf} alt="" className='w-full h-full object-cover' />
          </div>
          <div className="flex flex-col gap-4 lg:gap-8 py-6 lg:w-[50%] text-center lg:text-start">
            <p className='text-[40px] font-semibold'>Mission</p>
            <p className='text-[16px]'>Nimbi's mission is to keep everything decentralized, transparent and immutable. corporations have become way too powerful and nimbi knows---now is the time to unity against their greed and power. let's all collect our crypto dust and stand up to their tyranny.</p>
            <p className='text-[24px] font-medium tracking-tight'>We make participating in airdrops very easy.</p>
          </div>
        </div>


      </div>
      <Footer path='/about' />
    </div>
  )
}

export default About
