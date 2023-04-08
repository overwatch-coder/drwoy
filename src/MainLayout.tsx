import { Outlet } from "react-router-dom"
import { useState } from "react";
import Footer from "./Footer"
import Header from "./Header"
import Music from "./components/Music";
import { musics } from "./lib";
import Contact from "./components/Contact";


const MainLayout = () => {
    const [musicDisplay, setMusicDisplay] = useState<boolean>(false);
    const [contactDisplay, setContactDisplay] = useState<boolean>(false);

  return (
    <div className="overflow-y-hidden">
        <div className="border-2 border-t-0 flex flex-col min-h-screen mx-4">
        <Header 
            setMusicDisplay={setMusicDisplay} 
            setContactDisplay={setContactDisplay} 
            musicDisplay={musicDisplay}
            contactDisplay={contactDisplay}
        />

        <Music 
            musics={musics} 
            musicDisplay={musicDisplay} 
            setMusicDisplay={setMusicDisplay} 
        />

        <Contact 
            contactDisplay={contactDisplay} 
            setContactDisplay={setContactDisplay} 
        />

        <section className="mb-auto">
            <Outlet />
        </section>

        <Footer />
            
        </div>
    </div>
  )
}

export default MainLayout