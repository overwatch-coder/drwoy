import { MdClose } from "react-icons/md";
import { useState } from "react";
import jsonp from "jsonp";
import { toast } from "react-toastify";
import Success from "./Success";

type contactProps = {
    subscribeDisplay: boolean,
    setSubscribeDisplay: React.Dispatch<React.SetStateAction<boolean>>
}

const Contact = ({subscribeDisplay, setSubscribeDisplay}: contactProps) => {

    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [birthday, setBirthday] = useState<string>("");
    const [success, setSuccess] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState({
        message: "",
        header: ""
    });

    // hide subscription when you click on overlay
    const hideSubscribe = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        
        if((event.target as Element).id === "contact_overlay"){
            setSubscribeDisplay(false);
        }
    }

    // subscribe to newsletter code
    const handleSubscription = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        if(email !== "" || name !== "" || birthday !== ""){
            let bMonth = Number(birthday.split("/")[0]);
            let bDay = Number(birthday.split("/")[1]);

            const url = import.meta.env.VITE_MAIL_CHIMP_URL; // you can use .env file to replace this
            jsonp(`${url}&EMAIL=${email}&FNAME=${name}&BIRTHDAY[month]=${bMonth}&BIRTHDAY[day]=${bDay}`, { param: 'c' }, (_, { msg }) => {
                // console.log(msg);
                if(msg == "Thank you for subscribing!"){
                    setSuccess(true);
                    setMessage({
                        message: "I can't wait to write to you!",
                        header: "Yay"
                    })
                }else if(msg.includes("has too many recent signup requests")){
                    toast.error("This email is already subscribed");
                }else if(msg.includes("We need to confirm your email address")){
                    setSuccess(true);
                    setMessage({
                        message: "We need to confirm your email address. To complete the subscription process, please click the link in the email we just sent you.",
                        header: "Almost finished!"
                    })
                }else{
                    toast.error("Oops. An error has occured!. Try again later");
                }

                setTimeout(() => {
                    setSuccess(false);
                }, 8000);

                setLoading(false);
                
                    
                setEmail(() => "");
                setName(() => "");
                setBirthday(() => "");

            });
        };
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
        <div className="w-[95%] md:max-w-2xl p-10 mt-10 md:mt-[56px] bg-white drop-shadow-2xl shadow-xl rounded-md">

            {!success ? <>
                <h2 className="flex items-center justify-center mb-5">
                <span className="text-2xl uppercase font-[georgia] ml-auto text-black font-semibold tracking-wide">
                    DRWOY Letters
                </span>
                <MdClose 
                    className="ml-auto black text-3xl cursor-pointer" 
                    onClick={() => setSubscribeDisplay(false)} 
                />
            </h2>

            <form className="flex flex-col gap-y-5" method="POST" onSubmit={handleSubscription}>
                <div className="flex flex-col items-start space-y-3">
                    <label 
                        htmlFor="mce-FNAME"
                        className="font-medium flex items-center space-x-1"
                    >
                        <span>First Name</span>
                        <span className="text-red-600 text-lg">*</span>
                    </label>

                    <input 
                        type="text" 
                        placeholder="eg. Daniel" 
                        className="w-full rounded border-[1px] border-gray-700 px-4 py-2 focus:border-2 focus:border-gray-900"
                        name="FNAME"
                        required
                        id="mce-FNAME"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="flex flex-col items-start space-y-3">
                    <label 
                        htmlFor="mce-EMAIL" 
                        className="font-medium flex items-center space-x-1"
                    >
                        <span>Email</span>
                        <span className="text-red-600 text-lg">*</span>
                    </label>
                    <input 
                        type="email" 
                        placeholder="eg. danielmitechll@gmail.com" 
                        className="w-full rounded border-[1px] border-gray-700 px-4 py-2 focus:border-2 focus:border-gray-900"
                        name="EMAIL"
                        required
                        id="mce-EMAIL"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="flex flex-col items-start space-y-3">
                    <label 
                        htmlFor="mce-BIRTHDAY" 
                        className="font-medium flex items-center space-x-1"
                    >
                        <span>Let me wish you a happy birthday</span>
                        <span className="text-red-600 text-lg">*</span>
                    </label>
                    <input 
                        type="text" 
                        placeholder="MM/DD" 
                        className="w-full rounded border-[1px] border-gray-700 px-4 py-2 focus:border-2 focus:border-gray-900"
                        name="BIRTHDAY"
                        required
                        id="mce-BIRTHDAY"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        size={5}
                        maxLength={5}
                    />
                </div>
                <button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gray-800 py-3 text-white text-center uppercase rounded-md hover:bg-gray-900"
                >
                    {!loading ? "subscribe" : "subscribing..."}
                </button>
            </form>
            </>
            : 
            <Success setSubscribeDisplay={setSubscribeDisplay} message={message} />
            }

            
        </div>
    </div>
  )
}

export default Contact
