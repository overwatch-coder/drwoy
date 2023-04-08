import { Outlet } from "react-router-dom"
import { useState } from "react";
import Footer from "./Footer"
import Header from "./Header"
import Music from "./components/Music";
import { musics } from "./lib";
import Subscribe from "./components/Subscribe";
import Shop from "./components/Shop";


const MainLayout = () => {
    const [musicDisplay, setMusicDisplay] = useState<boolean>(false);
    const [subscribeDisplay, setSubscribeDisplay] = useState<boolean>(false);
    const [shopDisplay, setShopDisplay] = useState<boolean>(false);

  return (
    <div className="overflow-y-hidden">
        <div className="border-2 border-t-0 flex flex-col min-h-screen mx-4">
        <Header 
            setMusicDisplay={setMusicDisplay} 
            setShopDisplay={setShopDisplay} 
            musicDisplay={musicDisplay}
            subscribeDisplay={subscribeDisplay}
        />

        <Music 
            musics={musics} 
            musicDisplay={musicDisplay} 
            setMusicDisplay={setMusicDisplay} 
        />

        <Subscribe 
            subscribeDisplay={subscribeDisplay} 
            setSubscribeDisplay={setSubscribeDisplay} 
        />

        <Shop 
            shopDisplay={shopDisplay}
            setShopDisplay={setShopDisplay}
        />

        <section className="mb-auto">
            <Outlet />
        </section>

        <Footer 
            setSubscribeDisplay={setSubscribeDisplay}
        />
            
        </div>
    </div>
  )
}

export default MainLayout