import { MdClose } from "react-icons/md";
import { useEffect } from "react";

type contactProps = {
    subscribeDisplay: boolean,
    setSubscribeDisplay: React.Dispatch<React.SetStateAction<boolean>>
}

const SubscribeMail = ({subscribeDisplay, setSubscribeDisplay}: contactProps) => {
    useEffect(() => {
       let openPopup = setTimeout(() => {
            setSubscribeDisplay(true);
        }, 5000);

        return () => {
            clearTimeout(openPopup);
        }

    }, [])
    
    // hide subscription when you click on overlay
    const hideSubscribe = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        
        if((event.target as Element).id === "contact_overlay"){
            setSubscribeDisplay(false);
        }
    }

  return (
    <div 
        onClick={hideSubscribe} 
        id="contact_overlay" 
        className={`
            ${subscribeDisplay ? "-translate-y-[0%] scale-100" : "-translate-y-[99.99%] scale-50"} 
            absolute inset-0 flex flex-col items-center bg-black/50 scrollbar-hide overflow-y-scroll transition-all duration-1000 transform z-50 h-screen`
        }
    >
        <div className="w-[95%] md:max-w-2xl p-10 md:mt-[56px] md:bg-white drop-shadow-2xl shadow-xl rounded-md">
            <div className="relative">
                <iframe 
                    src={import.meta.env.VITE_SENDBLUE_URL}  
                    allowFullScreen 
                    className="block mx-auto max-w-full w-[600px] h-[600px] rounded-md"
                >
                </iframe>

                <MdClose 
                    className="ml-auto black text-3xl cursor-pointer absolute top-2 right-1 md:top-0 md:right-0" 
                    onClick={() => setSubscribeDisplay(false)} 
                />

            </div>
        </div>
    </div>
  )
}

export default SubscribeMail
