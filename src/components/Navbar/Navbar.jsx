import React, { useEffect, useState } from 'react'
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate()

    

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

    return (
<>hi</>
    )
}

export default Navbar
