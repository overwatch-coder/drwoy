import { Outlet } from "react-router-dom";
import drwoy from "./assets/drwoy_darker.mp4";

const RootLayout = () => {
  return (
    <div className="flex flex-col">

      {/* Overlay Goes Here */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Video Background Goes Here */}
        <video 
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
        </video>

        {/* Main Content Goes Here */}
        <main className="z-50 w-screen">
            <Outlet />  
        </main>
    </div>
  )
}

export default RootLayout