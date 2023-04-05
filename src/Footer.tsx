import { Form } from "react-router-dom"
import { socials } from "./lib"

const Footer = () => {
  return (
    <footer className="text-center text-white flex flex-col items-center gap-y-5 z-20 -top-10 relative md:-top-0">
      <div className="flex items-center justify-center space-x-5">
        {socials?.map((social, index) => (
          <a href={social.link} key={index} className="cursor-pointer hover:scale-125">
            <social.icon className="text-xl" />
          </a>
        ))}
      </div>

      <Form className="md:ml-auto flex items-center space-x-2 md:mr-5 mt-3 md:mt-0" method="POST">
        <input 
          type="email" 
          placeholder="EMAIL ADDRESS" 
          className="bg-transparent border-b-2 py-2 focus:border-b-[3px] outline-none"
          required
        />
        <button className="uppercase hover:scale-110">subscribe</button>
      </Form>

      <p className="mt-3 text-[10px]">&copy; D RWOY</p>
    </footer>
  )
}

export default Footer