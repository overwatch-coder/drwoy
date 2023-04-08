import { MdClose } from "react-icons/md";

type shopProps = {
    shopDisplay: boolean,
    setShopDisplay: React.Dispatch<React.SetStateAction<boolean>>
}

const Shop = ({shopDisplay, setShopDisplay}: shopProps) => {

    // hide subscription when you click on overlay
    const hideShop = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        
        if((event.target as Element).id === "contact_overlay"){
            setShopDisplay(false);
        }
    }

  return (
    <div 
        onClick={hideShop} 
        id="contact_overlay" 
        className={`
            ${shopDisplay ? "-translate-y-[0%] scale-100" : "-translate-y-[99.99%] scale-50"} 
            absolute inset-0 flex flex-col items-center bg-black/50 scrollbar-hide overflow-y-scroll transition-all duration-1000 transform z-50 h-screen`
        }
    >
        <div className="w-[95%] md:max-w-2xl p-10 mt-32 md:mt-[200px] bg-white drop-shadow-2xl shadow-xl rounded-md">
            <MdClose 
                size={30} 
                className="float-right cursor-pointer absolute right-5 top-3" 
                onClick={() => setShopDisplay(false)}
            />

            <h2 className="text-center text-3xl animate-pulse font-semibold py-4">Coming Soon!</h2>
        </div>
    </div>
  )
}

export default Shop
