type headerProps = {
  setMusicDisplay: React.Dispatch<React.SetStateAction<boolean>>,
  setContactDisplay: React.Dispatch<React.SetStateAction<boolean>>
  musicDisplay: boolean,
  contactDisplay: boolean
}

const Header = ({setMusicDisplay, setContactDisplay, musicDisplay, contactDisplay}: headerProps) => {
  return (
    <header className={`text-white sticky top-0 left-0 ${(musicDisplay || contactDisplay) ? "-z-10" : "z-50"}`}>
        <nav className='flex items-center justify-around'>
            <button 
              className='w-full uppercase cursor-pointer md:text-xl rounded-b-full border-2 hover:bg-white hover:text-black hover:font-medium py-2' 
              onClick={() => setMusicDisplay(true)}
            >
              Music
            </button>

            <a href="https://drwoy.myshopify.com/" target='_blank' className='w-full uppercase rounded-b-full border-2 hover:bg-white hover:text-black hover:font-medium py-2 text-center cursor-pointer md:text-xl'>Shop</a>

            <button 
              className='uppercase cursor-pointer md:text-xl w-full rounded-b-full border-2 hover:bg-white hover:text-black hover:font-medium py-2' 
              onClick={() => setContactDisplay(true)}
            >
              Contact
            </button>
        </nav>
    </header>
  )
}

export default Header