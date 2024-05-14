import React, { useEffect, useState } from 'react'
import { logo, sound, animation, cross } from '../../assets'
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom'
import Lottie from 'lottie-react'


function Navbar() {

    const navigate = useNavigate()

    const activateNavbar = () => {

        document.querySelector('.navbar').classList.add('active')

        setTimeout(() => {
            document.querySelector("nav").style.position = "static"

        }, 200)

    }

    const activeTab = (id) => {

        document.querySelectorAll("nav .active").forEach((tab) => {
            tab.classList.remove('active')
        })

        document.querySelectorAll(`#${id}`).forEach((tab) => {
            tab.classList.add('active')
        })

        document.querySelector("nav").style.position = "fixed"

    }

    let [path, setPath] = useState(window.location.pathname.split("/")[1])

    useEffect(() => {
        if (path) {
            const activeTabs = document.querySelectorAll("nav active")

            activeTabs.forEach(tab => {
                tab.classList.remove('active')
            })

            const tabs = document.querySelectorAll(`#${path}`)

            tabs.forEach(tab => {
                tab.classList.add('active')
            })
        }
        else {
            const tabs = document.querySelectorAll(`nav #home`)

            tabs.forEach(tab => {
                tab.classList.add('active')
            })

        }
    }, [path])

    // const {View} = useLottie({animationData:animation,loop:true})

    return (
        <nav className='fixed w-full border-b border-b-[#c4c0c8] bg-[#242d32] z-50 '>
            <div className="nav flex items-center justify-between sm:w-[91%] xl:w-[81%] mx-auto px-4 z-40">

                <button onClick={activateNavbar} id="navbar-toggler" className="block lg:hidden text-xl py-[0.9rem] text-white"  >☰</button>

                <div className="lg:w-[10%]">
                    <div onClick={() => {
                         document.querySelectorAll("nav .active")?.forEach((tab) => {tab.classList.remove('active')}); document.querySelectorAll(`#home`).forEach(tab => tab?.classList.add('active')); navigate("/")
                    }}>
                        <div className="w-[5.65rem] h-[2rem]">
                            <img src={logo} className="w-full h-full object-fill" alt="" />
                        </div>
                    </div>
                </div>
                <ul className="hidden lg:flex items-center justify-end gap-2 text-sm list-none w-[54%]">
                    <Link onClick={() => activeTab("home")} id="home" to="/" className='py-6 px-4 cursor-pointer hover:text-[#54c7ee]'>Home</Link>
                    <Link onClick={() => activeTab("about")} id="about" to="/about" className='py-6 px-4 cursor-pointer hover:text-[#54c7ee] '>About</Link>
                    <Link onClick={() => activeTab("team")} id="team" to="/team" className='py-6 px-4 cursor-pointer hover:text-[#54c7ee] '>Our Team</Link>
                    <Link onClick={() => activeTab("documents")} id="documents" to="/documents" className='py-6 px-4 cursor-pointer hover:text-[#54c7ee] '>Documents</Link>
                    <Link onClick={() => activeTab("faq")} id="faq" to="/faq" className='py-6 px-4 cursor-pointer hover:text-[#54c7ee] '>FAQ</Link>
                </ul>
                <div className="hidden lg:flex items-center gap-2 w-[36%] justify-end">
                    <div className='btn1 bg-transparent rounded-sm border border-[#c4c0c8] px-8 w-[8rem] text-center'>Collections</div>
                    <div className='btn1 bg-transparent rounded-sm border border-[#c4c0c8] px-8 w-[8rem] text-center'>Presale</div>
                    <div className="w-[1.5rem]">
                        {<Lottie animationData={animation} loop={true} />}
                    </div>
                </div>
            </div>
            <div className="flex overflow-hidden z-[100]">
                <ul className="bg-[url(./assets/mountain.png)] bg-no-repeat bg-left-bottom bg-[_160rem_50rem] navbar z-[100] flex lg:hidden flex-col items-center gap-3 transition-all duration-200 ease-in px-8 py-10 lg:shadow-none shadow-xl fixed left-0 top-0 bg-[#242d32] text-center w-screen h-screen" id="navbar">
                    <div className="w-full flex justify-end">
                        <p className='text-right' onClick={() => { document.querySelector('.navbar').classList.remove('active'); document.querySelector('nav').style.position = "fixed" }}>
                            <img src={cross} className='w-8 h-8' alt="" />
                        </p>
                    </div>
                    <div className="w-[5rem] h-[1.9rem] my-2">
                        <img src={logo} className="w-full h-full object-fill" alt="" />
                    </div>
                    <Link onClick={() => activeTab("home")} id="home" to="/" className='py-5 px-4 cursor-pointer hover:text-[#54c7ee] w-[80%]'>Home</Link>
                    <Link onClick={() => activeTab("about")} id="about" to="/about" className='py-5 px-4 cursor-pointer hover:text-[#54c7ee] w-[80%]'>About</Link>
                    <Link onClick={() => activeTab("team")} id="team" to="/team" className='py-5 px-4 cursor-pointer hover:text-[#54c7ee] w-[80%]'>Our Team</Link>
                    <Link onClick={() => activeTab("documents")} id="documents" to="/documents" className='py-5 px-4 cursor-pointer hover:text-[#54c7ee] w-[80%]'>Documents</Link>
                    <Link onClick={() => activeTab("faq")} id="faq" to="/faq" className='py-5 px-4 cursor-pointer hover:text-[#54c7ee] w-[80%]'>FAQ</Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
