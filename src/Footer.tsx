import { socials } from "./lib"

const Footer = ({setSubscribeDisplay} : {setSubscribeDisplay: React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <footer className="text-center text-white flex flex-col items-center gap-y-5 z-20 -top-20 relative md:-top-5">

      <div className="flex flex-col items-center gap-y-10 md:flex-row md:justify-between md:space-x-10">

        <div className="flex items-center justify-center space-x-5">
          {socials?.map((social, index) => (
            <a href={social.link} key={index} className="cursor-pointer hover:scale-125">
              <social.icon className="text-xl" />
            </a>
          ))}
        </div>

        <button 
           className='uppercase cursor-pointer md:text-xl hover:text-white hover:underline hover:font-medium py-2 md:p-2' 
           onClick={() => setSubscribeDisplay(true)}
         >
           D RWOY Letters
         </button>
        
        {/* <a 
          href="http://eepurl.com/ioGGjs" 
          target="_blank"
          className="text-lg border-2 p-1 hover:bg-gray-800 transition-all"
        >
          D RWOY Letters
        </a> */}


      </div>


      {/* <Form className="md:ml-auto flex items-center space-x-2 md:mr-5 mt-3 md:mt-0" method="POST">
        <input 
          type="email" 
          placeholder="EMAIL ADDRESS" 
          className="bg-transparent border-b-2 py-2 focus:border-b-[3px] outline-none"
          required
        />
        <button className="uppercase hover:scale-110">subscribe</button>
      </Form> */}

      <p className="mt-3 text-[10px] md:text-xs">&copy; D RWOY</p>
    </footer>
  )
}

export default Footer