type headerProps = {
  setMusicDisplay: React.Dispatch<React.SetStateAction<boolean>>,
  setShopDisplay: React.Dispatch<React.SetStateAction<boolean>>
  musicDisplay: boolean,
  subscribeDisplay: boolean
}

const Header = ({setMusicDisplay, setShopDisplay, musicDisplay, subscribeDisplay}: headerProps) => {
  return (
    <header className={`text-white/70 sticky top-0 left-0 ${(musicDisplay || subscribeDisplay) ? "-z-10" : "z-50"}`}>
        <nav className='flex items-center justify-around mt-4'>
            <button 
              className='uppercase cursor-pointer text-sm md:text-xl px-2 hover:text-white hover:font-medium py-2' 
              onClick={() => setMusicDisplay(true)}
            >
              Music
            </button>

            {/* <a href="https://drwoy.myshopify.com/" target='_blank' className='uppercase px-2 hover:text-white hover:font-medium py-2 text-center cursor-pointer text-sm md:text-xl'>Shop</a> */}

            <button 
              className='uppercase px-2 hover:text-white hover:font-medium py-2 text-center cursor-pointer text-sm md:text-xl' 
              onClick={() => setShopDisplay(true)}
            >
              Shop
            </button>
            <a 
              href="https://us12.list-manage.com/contact-form?u=bc78c11dfad31039844b529fb&form_id=cbabaffdf9822e3bd600164525351274" 
              className='uppercase cursor-pointer text-sm md:text-xl px-2 hover:text-white hover:font-medium py-2 text-center'
              target="_blank"
            >Write to me</a>
        </nav>
    </header>
  )
}

export default Header