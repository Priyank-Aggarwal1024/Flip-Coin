import React, { useEffect, useRef } from 'react'
import '../App.css'
import { IntroCard, NFTCard, Navbar } from '../components'
import { hero, svg1, svg2, svg3, author1, author2, author3, author4, author5, sec1, ellipse, goldWolf, bigEllipse, discord, icon, telegram, x, github, vector, tick, mask, mountain, indicator, round, animation, whaleLeft, roadmap, hero1, hero2, mountain1, border, mountainThumbnail } from '../assets'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(useGSAP, ScrollTrigger)
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';

function Home() {

  const main = useRef()
  const width = window.innerWidth

  useGSAP(() => {

    const container = document.querySelector(".container");
    const sections = gsap.utils.toArray(".container section");
    const mask = document.querySelector(".mask");

    var xPercent = 0, from = 0, to = 0, sectionStart = 0;

    if (width >= 1720) { xPercent = -100 * (sections.length - 3); from = '32.8%'; to = '79.8%'; sectionStart = 13.5 }
    else if (width >= 1024) { xPercent = -100 * (sections.length - 3); from = '32.8%'; to = '79.8%'; sectionStart = (11.5 + 1) }
    else if (width > 0) { xPercent = -100 * (sections.length - 1); from = '30%'; to = '100%'; sectionStart = (11.5 + 1) }
    // else { from = '0%'; to = '100%' }

    gsap.fromTo(mask, {
      width: from
    }, {
      width: to,
      ease: width > 1720 ? "slow(0.1,0.2,false)" : "power4.in",
      scrollTrigger: {
        trigger: ".roadmap-container",
        start: width > 1720 ? "top -12%" : "top 310%",
        end: width > 1720 ? "bottom 64%" : "bottom -4%",
        scrub: 1,
        // markers: 1
      }
    });

    gsap.to('.mountain', {
      x: -750,
      ease: "none",
      scrollTrigger: {
        trigger: ".roadmap-container",
        start: "top 0%",
        end: width < 1720 ? "bottom -10%" : "bottom 25%",
        scrub: 1,
        // markers:1
      }
    });

    let scrollTween = gsap.to(sections, {
      xPercent: xPercent,
      ease: "none",
      duration: 3,
      scrollTrigger: {
        trigger: ".roadmap-container",
        pin: true,
        scrub: 1,
        end: "+=800",
        // markers: true,
      }
    });

    sections.forEach((section, index) => {
      if (index !== 0) {
        gsap.from(section, {
          x: 0,
          opacity: 0,
          duration: 0.75,
          delay: index * 1 / 12,
          scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: `left ${index * sectionStart + 33}%`,
            // markers: 1,
          }
        });
      }
    });

    gsap.from('.roadmap', {
      y: 100,
      opacity: 0,
      duration: 4.5,
      scrollTrigger: {
        trigger: '.roadmap-container',
        start: `top 60%`,
        end: `top -80%`,
        scrub: 1
      }
    });

    gsap.from('.whaleLeft', {
      x: 200,
      opacity: 0,
      duration: 4.5,
      scrollTrigger: {
        trigger: '.roadmap-container',
        start: `top 80%`,
        end: `top -100%`,
        scrub: 1
      }
    });

    // else {
    //   sections.forEach((section, index) => {
    //     if (index !== 0) {
    //       gsap.from(section, {
    //         y: 20,
    //         opacity: 0,
    //         duration: 0.75,
    //         delay: index * 1 / 32,
    //         scrollTrigger: {
    //           trigger: section,
    //           start: `top ${60}%`,
    //           // markers: 1
    //         }
    //       });
    //     }
    //   });
    // }



    if (width > 1280) {
      gsap.to('.collectionLeft', { x: -1500, duration: 2, scrollTrigger: { trigger: '.collectionLeft', start: width > 1536 ? "bottom 85%" : "bottom 98%", end: "top -300%", scrub: true, } })
      gsap.to('.collectionRight', { x: 1500, duration: 2, scrollTrigger: { trigger: '.collectionRight', start: width > 1536 ? "bottom 85%" : "bottom 98%", end: "top -150%", scrub: true } })
    }

  }, { dependencies: [width], scope: main });

  return (
    <>

      <Navbar />

      <div className="z-0 capitalize pt-[4.4rem]" ref={main}>

        <div className="relative w-[90%] mx-auto h-[40vw] xl:h-[69vh] xl:w-[80%] 2xl:h-[76vh]  3xl:h-[694px] carousel">
          <img src={mountainThumbnail} className='absolute bottom-0 -left-64 w-[70rem] ' alt="" />
          <Swiper
            style={{
              "--swiper-navigation-color": "#000",
              "--swiper-navigation-size": "25px",
              "--swiper-pagination-color": "#ffffff",
              "--swiper-pagination-bullet-inactive-color": "#999999",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "8.6px",
              "--swiper-pagination-bullet-horizontal-gap": "3.5px"
            }}
            spaceBetween={30}
            autoplay={{
              delay: 7000,
              // disableOnInteraction: true,
            }}
            speed={1200}
            loop={true}
            navigation={true}
            modules={[Autoplay, Navigation, Pagination]}
            pagination={{
              dynamicBullets: false,
            }}
            className="mySwiper relative h-full w-full"
          >
            <SwiperSlide>
              <img src={hero} className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hero1} className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hero2} className="w-full h-full object-cover" />
            </SwiperSlide>

          </Swiper>
        </div>

        <div className="flex md:flex-row flex-col items-center justify-center border-t border-b border-[#767f84] bg-[#1c2327]">
          <IntroCard img={svg1} title="Buy-Back System" desc="Nimbi uses a smart contract to purchase $NIMBI tokens from public exchanges on a daily basis. These purchases are financed through a portion of the revenue. During this buying process the $NIMBI price goes automatically up." />
          <IntroCard img={svg2} title="Automatic Token Burn" desc="The smart contract automatically burns half of the purchased $NIMBI tokens each day. This process reduces the circulating $NIMBI supply, which makes the remaining tokens more valuable." />
          <IntroCard img={svg3} title="Daily Profits" desc="The other half of the tokens obtained through the buyback process will be automatically transferred to the Nimbi Staking Pool. This staking pool then distributes rewards daily to $NIMBI holders based on the number of tokens they hold, generating daily profits for them." />
        </div>


        <div className="overflow-hidden ">
          <div className="flex xl:flex-row flex-col justify-between gap-4 xl:gap-0 items-center lg:items-end w-[85%] 2xl:w-[80%] mx-auto pt-[6rem] md:pt-[8rem] h-[150rem] xs:h-[86rem] md:h-[84rem] lg:h-[75rem] xl:h-[42rem] 3xl:h-[50rem] z-0">
            <div className="collectionLeft flex flex-col gap-8 w-full xl:w-[45%]">
              <div className="relative">
                <div className="btn bg-[#5c666c] w-max font-semibold py-[5px] px-[10px] z-10 text-sm 3xl:text-lg"><p>Collection</p></div>
                <img src={ellipse} className='absolute -top-6 3xl:-top-8 left-[3.5rem] w-[4.875rem] 3xl:w-[6.375rem] -z-0' alt="" />
              </div>
              <div className="flex flex-col gap-[28px] ">
                <p className="text-[3.25rem] md:text-[5rem] xl:text-[4.5rem] 3xl:text-[6rem] font-['Roboto_Condensed',sans-serif] leading-[1.2] tracking-wide font-bold uppercase text-[#5c666c]">Discover Our Exclusive NFT Collection</p>
                <p className="text-2xl font-medium font-['Roboto_Condensed',sans-serif]">Discover Our Exclusive NFT Collection.</p>
                <p className='text-sm w-[70%]'>Explore our curated selection of digital artworks, each a unique masterpiece created by talented artists from around the world. From stunning visual designs to thought-provoking concepts, our NFTs offer a glimpse into the vibrant world of digital art.</p>
                <p className='btn w-[16rem] text-sm text-center'>Explore the Collection</p>
              </div>
            </div>
            <div className="collectionRight grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-5 py-6 xl:py-0 w-full xl:w-[60%] 4xl:w-[941px] z-0">
              <NFTCard />
              <NFTCard img={author1} />
              <NFTCard img={author2} />
              <NFTCard img={author3} />
              <NFTCard img={author4} />
              <NFTCard img={author5} />
            </div>
          </div>
        </div>

        <div className="lg:block hidden border-t mt-16 xl:mt-[5rem] xl:pb-0 -translate-x-[50%]"></div>

        <div className="roadmap-container  bg-[url(./assets/bigEllipse.png)] sm:bg-[_33rem_33rem] bg-contain bg-[center_17rem] sm:bg-[152vw_6rem] xl:bg-[72vw_6rem] 3xl:bg-[77vw_6rem] bg-no-repeat flex flex-col sm:gap-0 overflow-x-hidden overflow-y-visible pt-[6.5rem] 3xl:pt-[9rem] ">

          <div className="flex flex-col gap-4 sm:gap-8 3xl:gap-[6rem] w-[80%] mx-auto">
            <div className="relative">
              <div className="btn bg-[#5c666c] w-max font-semibold py-[5px] px-[10px] z-10 text-sm 3xl:text-lg"><p>roadmap</p></div>
              <img src={ellipse} className='absolute -top-6 3xl:-top-8 left-[3.5rem] w-[4.875rem] 3xl:w-[6.375rem] -z-0' alt="" />
            </div>

            <p className='text-xs md:text-sm 3xl:text-lg xs:w-[70%] pt-6 sm:pt-2'>We follow these roadmap for launching the Nimbi ecosystem. We may experience certain setbacks while developing the whole Nimbi ecosystem, but our team has a right attitude to stick to the course, no matter what!
            </p>

            <div className="relative">
              <img src={whaleLeft} className='whaleLeft absolute -top-[23rem] lg:-top-[46rem] right-[100rem] md:-right-[28rem] -z-50' alt="" />
              <img src={roadmap} className='roadmap absolute top-[8rem] md:-top-[0rem] -right-[0] 3xl:right-14 5xl:right-48 -z-40' alt="" />
            </div>
          </div>

          <div className="wrapper sm:mt-0">
            <section className='md:static relative w-screen md:h-0'>
              {
                (width > 768) &&
                <div className="md:w-[250rem] relative ">
                  <img src={mountain1} className='mountain absolute bg-blend-soft-light opacity-60 -top-[17.5rem] sm:-top-[16rem] 3xl:-top-[7.5rem] w-[150rem] 3xl:w-[205rem] left-[35rem] sm:left-[50rem] md:left-[0rem] h-[20rem] sm:h-[34rem] -z-50' alt="" />
                </div>
              }

              <svg className={`absolute -z-10 top-[14.8rem] xs:top-[16.3rem] sm:top-[15.6rem] md:top-[16.5rem] lg:top-[16.4rem] xlg:top-[16.3rem] xl:top-[15.95rem] 2xl:top-[15.7rem] 3xl:top-[23.9rem] 4xl:top-[23.8rem] 5xl:top-[23.6rem] 6xl:top-[23.3rem] 7xl:top-[23rem] md:left-0  w-[220vw] md:w-[100vw]`} viewBox="0 0 1920 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter='url(#filter0_d_230_5843)'>
                  <rect y="42.5" height="0.05" width="5000" fill="#767F84" />
                </g>
                <filter id="filter0_d_230_5843" filterUnits="userSpaceOnUse" style={{ colorInterpolation: "sRGB" }}>
                  <feFlood style={{ floodOpacity: 0 }} result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.64 0 0 0 0 1 0 0 0 1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_230_5843" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_230_5843" result="shape" />
                </filter>
              </svg>

              {/* <svg className={`absolute -z-10 top-[14.8rem] xs:top-[16.3rem] sm:top-[15.8rem] md:top-[16.75rem] lg:top-[16.4rem] xlg:top-[16.3rem] xl:top-[15.95rem] 2xl:top-[15.7rem] 3xl:top-[23.9rem] 4xl:top-[23.8rem] 5xl:top-[23.6rem] 6xl:top-[23.3rem] 7xl:top-[23rem] md:left-0  w-[220vw] md:w-[100vw]`} viewBox="0 0 1920 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter='url(#filter1_d_1261_1133)'>
                  <rect y="42.5" height="2.8" className='mask' fill="#33BDEB" />
                </g>
              </svg> */}

            </section>
            <div className="container scrollx ">
              <section>
                <div className="phase ">
                  <ul className='list-none z-40 text-xs xs:text-sm 3xl:text-lg flex flex-col relative gap-2 3xl:gap-4 lg:w-[90%] xl:w-[70%] px-12 xs:px-6 sm:px-6 md:px-0 md:mx-auto'>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={tick} alt="" />Launch Website</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={tick} alt="" />Market Strategy Planning</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={tick} alt="" />White Paper creation</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={tick} alt="" />Market research</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={tick} alt="" />feasability analysis</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={tick} alt="" />competitor analysis</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={tick} alt="" />tokenomics development</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={tick} alt="" />smart contract development</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={tick} alt="" />secure initial funding</li>
                    <img src={round} className="w-8 h-8 absolute  top-[15rem] xs:left-[0rem] xs:top-[17rem] 3xl:top-[25.5rem] z-[500] " />
                    <img src={ellipse} className="w-[5rem] h-[5rem] absolute left-[1.5rem] top-[13.5rem] xs:-left-[1.6rem] xs:top-[15.5rem] 3xl:top-[24rem]" />
                    <svg className={`w-[75rem] absolute top-[13.75rem] xs:top-[15.75rem] 3xl:top-[24.25rem] -left-[70rem] xs:-left-[75rem] z-10`} viewBox="0 0 1920 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter='url(#filter1_d_1261_1133)'>
                        <rect className='z-10' width='100%' y="55" height="150" fill="#33BDEB" />
                      </g>
                      <filter id="filter1_d_1261_1133" x="0" y="33" height="24.0001" filterUnits="userSpaceOnUse" style={{ colorInterpolation: "sRGB" }}>
                        <feFlood style={{ floodOpacity: 0 }} result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        {/* <feGaussianBlur stdDeviation="1" /> */}
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.64 0 0 0 0 1 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1261_1133" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1261_1133" result="shape" />
                      </filter>
                    </svg>
                  </ul>
                  <div className="lg:w-[70%] px-12 xs:px-6 flex flex-col 3xl:gap-3 py-6 sm:px-16 md:px-0 md:mx-auto">
                    <p className='text-[#a1a7aa] text-base'><span className='text-[#00ace6] font-semibold'>PRE-SALE PHASE:</span> 2023 Q1</p>
                    <p className='text-[30px] font-semibold text-white'>Phase 01</p>
                    <p className='text-[#2b3338] text-[44px] font-extrabold -translate-y-3 '>2023</p>
                  </div>
                </div>
              </section>
              <section>
                <div className="phase ">
                  <ul className='list-none z-40 text-xs xs:text-sm 3xl:text-lg flex flex-col relative gap-2 3xl:gap-4 lg:w-[90%] xl:w-[70%] px-12 xs:px-6 sm:px-6 md:px-0 md:mx-auto'>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />community building</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />partnerships and collaborations</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />building CDR</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />completing private sale</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />completing launchpad launch</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />KYC and AUDIT</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />AMA's twitter spaces</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />airdrops</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />Pre-Sale alert</li>
                    <img src={indicator} className="w-8 h-8 absolute top-[15rem] xs:left-[0rem] xs:top-[17rem] 3xl:top-[25.5rem] z-[500] " />
                    <svg className={`w-[75rem] absolute top-[13.75rem] xs:top-[15.75rem] 3xl:top-[24.25rem] -left-[70rem] xs:-left-[75rem] z-10`} viewBox="0 0 1920 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter='url(#filter1_d_1261_1133)'>
                        <rect className='z-10' width='100%' y="55" height="150" fill="#33BDEB" />
                      </g>
                    </svg>
                  </ul>
                  <div className="lg:w-[70%] px-12 xs:px-6 flex flex-col 3xl:gap-3 py-6 sm:px-16 md:px-0 md:mx-auto">
                    <p className='text-[#a1a7aa] text-base'><span className='text-[#00ace6] font-semibold'>PRE-SALE PHASE:</span> 2024 Q3</p>
                    <p className='text-[30px] font-semibold text-white'>Phase 02</p>
                    <p className='text-[#2b3338] text-[44px] font-extrabold -translate-y-3 '>2024</p>
                  </div>
                </div>
              </section>
              <section>
                <div className="phase ">
                  <ul className='relative list-none z-40 text-xs xs:text-sm 3xl:text-lg flex flex-col gap-2 3xl:gap-4 lg:w-[90%] xl:w-[70%] px-12 xs:px-6 sm:px-6 md:px-0 md:mx-auto'>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />community building</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />partnerships and collaborations</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />building CDR</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />completing private sale</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />completing launchpad launch</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />KYC and AUDIT</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />AMA's twitter spaces</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />Pre-Sale alert</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />airdrops</li>
                    <img src={indicator} className="w-8 h-8 absolute top-[15rem] xs:left-[0rem] xs:top-[17rem] 3xl:top-[25.5rem] z-[500] " />
                    <svg className={`w-[75rem] absolute top-[13.75rem] xs:top-[15.75rem] 3xl:top-[24.25rem] -left-[70rem] xs:-left-[75rem] z-10`} viewBox="0 0 1920 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter='url(#filter1_d_1261_1133)'>
                        <rect className='z-10' width='100%' y="55" height="150" fill="#33BDEB" />
                      </g>
                    </svg>
                  </ul>
                  <div className="lg:w-[70%] px-12 xs:px-6 flex flex-col 3xl:gap-3 py-6 sm:px-16 md:px-0 md:mx-auto">
                    <p className='text-[#a1a7aa] text-base'><span className='text-[#00ace6] font-semibold'>PRE-SALE PHASE:</span> 2024 Q3</p>
                    <p className='text-[30px] font-semibold text-white'>Phase 03</p>
                    <p className='text-[#2b3338] text-[44px] font-extrabold -translate-y-3 '>2024</p>
                  </div>
                </div>
              </section>
              <section>
                <div className="phase ">
                  <ul className='relative list-none z-40 text-xs xs:text-sm 3xl:text-lg flex flex-col gap-2 3xl:gap-4 lg:w-[90%] xl:w-[70%] px-12 xs:px-6 sm:px-6 md:px-0 md:mx-auto'>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />community building</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />partnerships and collaborations</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />building CDR</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />completing private sale</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />completing launchpad launch</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />KYC and AUDIT</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />AMA's twitter spaces</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />airdrops</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />Pre-Sale alert</li>
                    <img src={indicator} className="w-8 h-8 absolute top-[15rem] xs:left-[0rem] xs:top-[17rem] 3xl:top-[25.5rem] z-[500] " />
                    <svg className={`w-[75rem] absolute top-[13.75rem] xs:top-[15.75rem] 3xl:top-[24.25rem] -left-[70rem] xs:-left-[75rem] z-10`} viewBox="0 0 1920 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter='url(#filter1_d_1261_1133)'>
                        <rect className='z-10' width='100%' y="55" height="150" fill="#33BDEB" />
                      </g>
                    </svg>
                  </ul>
                  <div className="lg:w-[70%] px-12 xs:px-6 flex flex-col 3xl:gap-3 py-6 sm:px-16 md:px-0 md:mx-auto">
                    <p className='text-[#a1a7aa] text-base'><span className='text-[#00ace6] font-semibold'>PRE-SALE PHASE:</span> 2024 Q3</p>
                    <p className='text-[30px] font-semibold text-white'>Phase 04</p>
                    <p className='text-[#2b3338] text-[44px] font-extrabold -translate-y-3 '>2025</p>
                  </div>
                </div>
              </section>
              <section>
                <div className="phase ">
                  <ul className='relative list-none z-40 text-xs xs:text-sm 3xl:text-lg flex flex-col gap-2 3xl:gap-4 lg:w-[90%] xl:w-[70%] px-12 xs:px-6 sm:px-6 md:px-0 md:mx-auto'>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />community building</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />partnerships and collaborations</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />building CDR</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />completing private sale</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />completing launchpad launch</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />KYC and AUDIT</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />AMA's twitter spaces</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />airdrops</li>
                    <li className='flex gap-3 items-center'><img className='w-4 h-4' src={vector} alt="" />Pre-Sale alert</li>
                    <img src={indicator} className="w-8 h-8 absolute top-[15rem] xs:left-[0rem] xs:top-[17rem] 3xl:top-[25.5rem] z-[500] " />
                    <svg className={`w-[75rem] absolute top-[13.75rem] xs:top-[15.75rem] 3xl:top-[24.25rem] -left-[70rem] xs:-left-[75rem] z-10`} viewBox="0 0 1920 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter='url(#filter1_d_1261_1133)'>
                        <rect className='z-10' width='100%' y="55" height="150" fill="#33BDEB" />
                      </g>
                    </svg>
                  </ul>
                  <div className="lg:w-[70%] px-12 xs:px-6 flex flex-col 3xl:gap-3 py-6 sm:px-16 md:px-0 md:mx-auto">
                    <p className='text-[#a1a7aa] text-base'><span className='text-[#00ace6] font-semibold'>PRE-SALE PHASE:</span> 2024 Q3</p>
                    <p className='text-[30px] font-semibold text-white'>Phase 05</p>
                    <p className='text-[#2b3338] text-[44px] font-extrabold -translate-y-3 '>2026</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="py-12">
          <img src={sec1} alt="" className='w-full' />
        </div>

        <div className="bg-[url(./assets/wolfMask.png)] wolfMask bg-no-repeat">
          <div className="flex mx-auto w-[80%] items-center justify-between lg:flex-row gap-6 3xl:gap-[60px] flex-col pt-16 3xl:pb-16">
            <div className="flex flex-col gap-4 3xl:gap-[77px] lg:w-[55%]">
              <div className="relative">
                <div className="btn bg-[#5c666c] w-max font-semibold text-sm 3xl:text-lg py-[5px] px-[10px]">Supporting dapps</div>
                <img src={ellipse} className='absolute -top-8 left-[6rem] 3xl:left-[8rem] w-[6.375rem]' alt="" />
              </div>
              <p className="text-[#a1a7aa] text-[2.625rem] md:text-[5rem] lg:text-[4rem] xlg:[5rem] 3xl:text-[6.25rem] font-bold font-['Roboto_Condensed',sans-serif] py-4 md:py-12 leading-[1.03] tracking-[0.12rem]">NIMBI VIP LOYALTY WOLF PACK</p>
            </div>
            <p className='md:w-[90% lg:w-[45%] text-xs 3xl:text-base'>👋 Say goodbye to rigged games and hello to fairness and transparency! 🔍🚫 No more wondering if the odds are stacked against you, because with Crypto Lotto, everything is open source! 📜💻 We've taken the power from the greedy hands of the centralized lotto gods and put it back into the hands of the people! 💪💰 Want to win big while knowing you're not being hoodwinked? Look no further! 🌟 Participate in our decentralized lottery and enjoy the thrill of a fair game. #NoMoreRiggedGames Play Crypto Lotto today and experience the excitement of a true equal opportunity lottery! 🎊💸💪
              nimbi knows you should only play the open sourced, decentralized and transparent lotto. convert your crypto dust to nimbi token, become part of the wolfpack and use all of our crypto dust to stand strong together.</p>
          </div>
          <div className="border-b border-[#767f84]">
          </div>
          <div className="flex lg:flex-row flex-col-reverse gap-[77px] mx-auto w-[80%] lg:text-left items-center justify-between pb-16">
            <p className='md:w-[90% lg:w-[45%] text-xs 3xl:text-base'>👋 Say goodbye to rigged games and hello to fairness and transparency! 🔍🚫 No more wondering if the odds are stacked against you, because with Crypto Lotto, everything is open source! 📜💻 We've taken the power from the greedy hands of the centralized lotto gods and put it back into the hands of the people! 💪💰 Want to win big while knowing you're not being hoodwinked? Look no further! 🌟 Participate in our decentralized lottery and enjoy the thrill of a fair game. #NoMoreRiggedGames Play Crypto Lotto today and experience the excitement of a true equal opportunity lottery! 🎊💸💪
              nimbi knows you should only play the open sourced, decentralized and transparent lotto. convert your crypto dust to nimbi token, become part of the wolfpack and use all of our crypto dust to stand strong together.</p>
            <div className="lg:w-[45%] flex flex-col gap-6 md:gap-0">
              <p className="uppercase text-[#a1a7aa] text-[2.625rem] md:text-[5rem] lg:text-[4rem] xlg:[5rem] 3xl:text-[6.25rem] font-bold font-['Roboto_Condensed',sans-serif] py-4 md:py-12 leading-[1.03] tracking-[0.12rem]">Open-Source Decentralized Lottery</p>
              <p className="text-2xl font-['Roboto_Condensed',sans-serif] text-white lg:pb-0 pb-8">Introducing Crypto Lotto, the web 3 Dapp 🎉 that puts all those centralized lotto's to shame!</p>
            </div>
          </div>
          {/* <div className="border-b w-[80%] border-[#767f84]">
          </div> */}
        </div>

        <div className="relative sm:h-[85rem] md:h-[70rem] lg:h-[74rem] xl:h-[70rem] 3xl:h-[75rem] ">

          <div className="bg-[url(./assets/sec2.png)] relative w-full h-[35rem] xs:h-[50rem] sm:h-[50rem] md:h-[70rem] lg:h-[74rem] xl:h-[70rem] 3xl:h-[75rem] xl:bg-center bg-[-30rem_0rem] xs:bg-[-45rem_0rem] sm:bg-[-39rem_-0.5rem] md:bg-right bg-no-repeat bg-cover bg-white sm:pb-[4rem] md:pb-0">
          </div>
          <div className="sm:h-[40rem] lg:h-[46rem] xl:h-[40rem] flex flex-col -translate-y-[3rem] xs:-translate-y-[5rem] sm:translate-y-0 sm:absolute bottom-0 xl:bottom-28 md:top-28 lg:top-[18rem] xl:top-[22rem] 3xl:top-[25rem] pl-8 pr-8 pt-12 pb-12 xs:pr-12 xs:pl-12 md:pr-0 md:pt-[rem] lg:pt-[0rem] 3xl:pl-[16rem] xl:pb-[8rem] xl:pl-[6rem] w-full md:w-[63%] lg:w-[60%] 3xl:w-[40%] gap-6 xl:gap-12 items-center md:items-start justify-around lg:justify-center text-[#151b1e] bg-white md:bg-transparent">
            <p className="text-[3.25rem] lg:text-[5.125rem] 3xl:text-[6.125rem] font-bold uppercase leading-tight font-['Roboto_Condensed',sans-serif]">Web3 Crypto Dust Runner Game</p>
            <p className='text-base xl:text-lg font-medium tracking-tighter md:w-[73%] lg:w-[75%] 3xl:w-full'>Introducing Crypto Dust Runner, the web 3 game that's here to bring the heat to those corporate whales invading our precious crypto space! 🌬️🐺</p>
            <p className='text-base font-medium block md:w-[73%] lg:w-[75%] 3xl:w-full'>👋 In this epic quest, you'll join forces with Nimbi, the fearless white wolf, as he races through a treacherous frozen gulch, fueled by the magnificent power of crypto dust! 💪✨ His mission? To collect as much of this precious resource as possible and transform into a legendary force against those pesky corporate giants. 😎🐋Picture this: you're in control of the nimble Nimbi, dodging obstacles, jumping over icy chasms, and racing against time ⏰ to reach power-up spots that will elevate your game to a whole new level! 💯✨ Discover abandoned crypto mines that will boost Nimbi's dust collection abilities, allowing him to dominate the leaderboard like a true crypto champ! 🏆💰</p>
            <div className="w-full text-left">
              <p className="btn w-[12rem] text-center">Launch APP</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1c2327] flex lg:flex-row gap-4 flex-col items-center justify-center lg:gap-12 pt-16 pb-8 ">
          <div className="w-[20rem] lg:w-[27rem] relative">
            <img src={goldWolf} className='w-full h-full object-fill z-20' alt="" />
            <img src={bigEllipse} className='absolute top-0 lg:-right-[15rem] w-[30rem] z-20' alt="" />
          </div>
          <div className="flex flex-col w-[80%] lg:text-start lg:w-[40%] gap-6 justify-center pb-10  text-[#a1a7aa]">
            <p className="text-[3rem] xs:text-[3.625rem] leading-tight font-extrabold uppercase font-['Roboto_Condensed',sans-serif]">KAZI token </p>
            <p className='text-sm sm:text-lg font-medium text-white'>Your Bridge to Streamlined Crypto Conversion! 🌉💱</p>
            <p className='text-sm '>KAZI Token stands as a beacon of efficiency in the world of cryptocurrency. As an ERC-20 token, it serves as the perfect conduit for users looking to convert their wallet crypto dust into tangible value. Whether you're a seasoned investor or just dipping your toes into the crypto waters, KAZI Token offers a seamless and accessible pathway to transform those fractions of cryptocurrency left lingering in your wallet into meaningful assets.
              With KAZI Token, say goodbye to the frustration of unused cryptocurrency fragments and hello to a practical solution for maximizing your digital assets. Join the movement towards streamlined crypto conversion today with KAZI Token – where every fragment counts towards your financial success. 💼🚀</p>
            <div className="w-full lg:text-left z-30">
              <Link to="/wallet" className="btn text-center w-[12rem] cursor-pointer">Buy KAZI</Link>
            </div>
          </div>
        </div>

        <div className="bg-[url(./assets/whaleRight.png)] w-full h-[78rem] sm:h-[66rem] md:h-[68rem] lg:pt-[11rem] bg-[-5rem_40rem] lg:bg-[10rem_-2rem] bg-[_50rem_30rem] lg:bg-[_90rem_70rem] bg-no-repeat flex flex-col items-center gap-8 md:gap-16 justify-center relative">
          <div className="flex items-center justify-center">
            <div className="bg-[#1c2327] bg-[url(./assets/logoMask.png)] bg-no-repeat bg-[_25rem_20rem] md:bg-contain flex md:flex-row gap-10 md:gap-4 flex-col items-center px-[2rem] lg:px-[14rem] xl:px-[18rem] 2xl:px-[24rem] 3xl:px-[18rem] justify-between py-8">
              <div className="flex flex-col gap-6 md:w-[50%] text-left w-[90%] xs:w-[85%]">
                <p className="text-[3.125rem] leading-tight font-semibold font-['Roboto_Condensed',sans-serif]">Join our community </p>
                <p className='text-sm'>Join us as we celebrate the launch of our project by offering exclusive rewards to our early supporters. By participating in our ecosystem, you'll have the opportunity to receive free token airdrops and access to exciting perks. Don't miss out on this chance to be part of our growing community!</p>
              </div>
              <div className="w-full xs:w-[90%] md:w-[40%] flex flex-col gap-4">
                <div className="flex items-center justify-between gap-4 cursor-pointer bg-[#242d32] rounded-md px-4 py-2">
                  <div className="flex items-center justify-between gap-4 ">
                    <img src={discord} alt="" className='w-10' />
                    <div className="">
                      <p className='font-semibold text-sm'>Discord</p>
                      <p className='text-xs'>Get Involved</p>
                    </div>
                  </div>
                  <img src={icon} alt="" />
                </div>
                <div className="flex items-center justify-between gap-4 cursor-pointer hover:bg-[#242d32] rounded-md px-4 py-2">
                  <div className="flex items-center justify-between gap-4 ">
                    <img src={telegram} alt="" className='w-10' />
                    <div className="">
                      <p className='font-semibold text-sm'>telegram</p>
                      <p className='text-xs'>join discussion</p>
                    </div>
                  </div>
                  <img src={icon} alt="" />
                </div>
                <div className="flex items-center justify-between gap-4 cursor-pointer hover:bg-[#242d32] rounded-md px-4 py-2">
                  <div className="flex items-center justify-between gap-4 ">
                    <img src={x} alt="" className='w-10' />
                    <div className="">
                      <p className='font-semibold text-sm'>x</p>
                      <p className='text-xs'>read the latest</p>
                    </div>
                  </div>
                  <img src={icon} alt="" />
                </div>
                <div className="flex items-center justify-between gap-4 cursor-pointer hover:bg-[#242d32] rounded-md px-4 py-2">
                  <div className="flex items-center justify-between gap-4 ">
                    <img src={github} alt="" className='w-10' />
                    <div className="">
                      <p className='font-semibold text-sm'>github</p>
                      <p className='text-xs'>build with us</p>
                    </div>
                  </div>
                  <img src={icon} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-[85%] xl:w-[50%]  md:px-0 items-center text-center">
            <p className="text-[3rem] xs:text-[3.625rem] leading-tight font-semibold uppercase font-['Roboto_Condensed',sans-serif]">Whitepaper </p>
            <p className='text-sm'>Explore the Nimbi whitepaper and get an in-depth breakdown of the unique benefits, innovative features, and overall vision of the NIMBI ecosystem and its native token. This clear, concise, and expertly crafted informational report will help you understand exactly what sets NIMBI apart from other crypto projects.<br /><br />Dive into our educational white paper and find out why taking this journey with us is an absolute no-brainer!</p>
            <div className="btn border border-[#00ace6] bg-transparent text-[#00ace6] hover:text-[#c4c0c8] w-[12rem] text-center">Access the whitepaper</div>
            <div className="w-full hidden lg:flex justify-end" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
              <img src={icon} className=' absolute right-24 w-8 bg-[#43545e] px-3 -rotate-90 py-2.5 cursor-pointer' alt="" />
            </div>
          </div>
        </div>

        <Footer />

      </div>
    </>
  )
}

export default Home
