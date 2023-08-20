import { socials } from "./lib";

const Footer = ({
  setSubscribeDisplay,
}: {
  setSubscribeDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <footer className="relative z-20 flex flex-col items-center text-center text-white gap-y-5 -top-20 md:-top-5">
      <div className="flex flex-col items-center gap-y-10 md:flex-row md:justify-between md:space-x-10">
        <div className="flex items-center justify-center space-x-5">
          {socials?.map((social, index) => (
            <a
              href={social.link}
              key={index}
              target="_blank"
              className="cursor-pointer hover:scale-125"
            >
              <social.icon className="text-xl" />
            </a>
          ))}
        </div>

        <button
          className="py-2 uppercase cursor-pointer md:text-xl hover:text-white hover:underline hover:font-medium md:p-2"
          onClick={() => setSubscribeDisplay(true)}
        >
          D RWOY Letters
        </button>

        {/* <a 
          href="http://eepurl.com/ioGGjs" 
          target="_blank"
          className="p-1 text-lg transition-all border-2 hover:bg-gray-800"
        >
          D RWOY Letters
        </a> */}
      </div>

      {/* <Form className="flex items-center mt-3 space-x-2 md:ml-auto md:mr-5 md:mt-0" method="POST">
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
  );
};

export default Footer;
