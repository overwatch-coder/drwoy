import { Outlet } from "react-router-dom";
// import drwoy from "./assets/drwoy_darker.mp4";
import drwoy from "./assets/hero2.jpg";

const RootLayout = () => {
  return (
    <div>
      {/* Overlay Goes Here */}
      <div className="absolute inset-0 h-screen bg-black/40"></div>

      {/* Video Background Goes Here */}
      {/* <video 
          className="fixed top-0 left-0 object-cover min-w-full min-h-full -z-10" 
          loop 
          autoPlay 
          muted 
          disablePictureInPicture
          playsInline
        >
          <source 
            src={drwoy} 
            className="object-cover w-screen" 
            type="video/mp4"
          />
        </video> */}
      <img
        src={drwoy}
        alt="D RWOY"
        className="fixed top-0 left-0 object-cover min-w-full min-h-full -z-10 aspect-square"
        loading="lazy"
      />

      {/* Main Content Goes Here */}
      <main className="z-50 w-screen overflow-y-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
