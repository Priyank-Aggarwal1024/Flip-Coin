import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "../components";
import Hero from "../components/Hero";
import ConnectWallet from "../components/ConnectWallet";
import FlipCoin from "../components/FlipCoin";
import CardFlipCoin from "../components/CardFlipCoin";
import GameStarted from "../components/GameStarted";
import Loose from "../components/Loose";
import Win from "../components/Win";
import Wallet from './Wallet';

function Home({ setOpenWallet }) {
    return (
        <div className="h-full min-h-screen flex flex-col">
            <Navbar />
            <div className="lg:w-[80%] 3xl:w-[1504px] w-full px-4 max-w-full mx-auto ">
                <Routes>
                    <Route path="/" element={<ConnectWallet />} />
                    <Route path="/home" element={<Hero setOpenWallet={setOpenWallet} />} />
                    <Route path="/flip-coin" element={<FlipCoin />} />
                    <Route path="/choose-flip-coin" element={<CardFlipCoin />} />
                    <Route path="/start" element={<GameStarted />} />
                    <Route path="/loose" element={<Loose />} />
                    <Route path="/win" element={<Win />} />
                    <Route path="/wallet" element={<Wallet />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default Home;