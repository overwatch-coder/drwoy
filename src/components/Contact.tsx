import { MdClose } from "react-icons/md";
import { Form } from "react-router-dom";

type contactProps = {
    contactDisplay: boolean,
    setContactDisplay: React.Dispatch<React.SetStateAction<boolean>>
}

const Contact = ({contactDisplay, setContactDisplay}: contactProps) => {

    const hideContact = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        
        if((event.target as Element).id === "contact_overlay"){
            setContactDisplay(false);
        }
    }

  return (
    <div 
        onClick={hideContact} 
        id="contact_overlay" 
        className={`
            ${contactDisplay ? "-translate-y-[0%] scale-100" : "-translate-y-[99.99%] scale-50"} 
            absolute inset-0 flex flex-col items-center bg-black/50 scrollbar-hide overflow-y-scroll transition-all duration-1000 transform z-50 min-h-full`
        }
    >
        <div className="w-[95%] md:max-w-2xl p-10 mt-20 md:mt-32 bg-white drop-shadow-2xl shadow-xl rounded-md">

            <h2 className="flex items-center justify-center mb-5">
                <span className="text-2xl uppercase font-[georgia] ml-auto text-black font-semibold">Contact</span>
                <MdClose 
                    className="ml-auto black text-3xl cursor-pointer" 
                    onClick={() => setContactDisplay(false)} 
                />
            </h2>

            <Form className="flex flex-col gap-y-5" method="POST">
                <div className="flex flex-col items-start space-y-3">
                    <label 
                        htmlFor="name" 
                        className="font-medium flex items-center space-x-1"
                    >
                        <span>Name</span>
                        <span className="text-red-600 text-lg">*</span>
                    </label>
                    <input 
                        type="text" 
                        placeholder="eg. Ken Addams" 
                        className="w-full rounded border-[1px] border-gray-700 px-4 py-2 focus:border-2 focus:border-gray-900"
                        name="name"
                        required
                    />
                </div>

                <div className="flex flex-col items-start space-y-3">
                    <label 
                        htmlFor="email" 
                        className="font-medium flex items-center space-x-1"
                    >
                        <span>Email</span>
                        <span className="text-red-600 text-lg">*</span>
                    </label>
                    <input 
                        type="email" 
                        placeholder="eg. kenaddams@gmail.com" 
                        className="w-full rounded border-[1px] border-gray-700 px-4 py-2 focus:border-2 focus:border-gray-900"
                        name="email"
                        required
                    />
                </div>

                <div className="flex flex-col items-start space-y-3">
                    <label 
                        htmlFor="message" 
                        className="font-medium flex items-center space-x-1"
                    >
                        <span>Message</span>
                        <span className="text-red-600 text-lg">*</span>
                    </label>
                    <textarea 
                        placeholder="eg. Ken Addams" 
                        className="w-full rounded border-[1px] border-gray-700 px-4 py-2 focus:border-2 focus:border-gray-900 h-52"
                        name="message"
                        required
                    />
                </div>
                <button 
                    type="submit"
                    className="w-full bg-gray-800 py-3 text-white text-center uppercase rounded-md hover:bg-gray-900"
                >
                    submit
                </button>
            </Form>

            
        </div>
    </div>
  )
}

export default Contact

// export const ContactAction = async ({request}) => {
//     const formData = await request.formData();
//     console.log(formData);
// }