import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "../components";
import Hero from "../components/Hero";
import ConnectWallet from "../components/ConnectWallet";
import FlipCoin from "../components/FlipCoin";

function Home() {
    return (
        <div className="h-full min-h-screen flex flex-col">
            <Navbar />
            <div className="lg:w-[80%] 3xl:w-[1504px] w-full px-4 max-w-full mx-auto ">
                <Routes>
                    <Route path="/" element={<ConnectWallet />} />
                    <Route path="/home" element={<Hero />} />
                    <Route path="/flip-coin" element={<FlipCoin />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default Home;