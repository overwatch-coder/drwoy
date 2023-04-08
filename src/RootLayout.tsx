import { Outlet } from "react-router-dom";
// import drwoy from "./assets/drwoy_darker.mp4";
import drwoy from "./assets/hero1.jpg";

const RootLayout = () => {
  return (
    <div>

      {/* Overlay Goes Here */}
      <div className="absolute inset-0 bg-black/40 h-screen"></div>

      {/* Video Background Goes Here */}
        {/* <video 
          className="fixed top-0 left-0 -z-10 min-w-full object-cover min-h-full" 
          loop 
          autoPlay 
          muted 
          disablePictureInPicture
          playsInline
        >
          <source 
            src={drwoy} 
            className="w-screen object-cover" 
            type="video/mp4"
          />
        </video> */}
        <img 
          src={drwoy} 
          alt="D RWOY" 
          className="fixed top-0 left-0 -z-10 min-w-full object-cover h-full aspect-square"
          loading="lazy"
        />

        {/* Main Content Goes Here */}
        <main className="z-50 w-screen overflow-y-hidden">
            <Outlet />  
        </main>
    </div>
  )
}

export default RootLayout