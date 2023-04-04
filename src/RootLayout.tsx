import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
// import drwoy from "./assets/drwoy_one.mp4";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />

        <main className="mb-auto">
            <Outlet />  
        </main>

        <Footer />
    </div>
  )
}

export default RootLayout