type headerProps = {
  setMusicDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  setShopDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  musicDisplay: boolean;
  subscribeDisplay: boolean;
};

const Header = ({
  setMusicDisplay,
  setShopDisplay,
  musicDisplay,
  subscribeDisplay,
}: headerProps) => {
  return (
    <header
      className={`text-white/70 sticky top-0 left-0 ${
        musicDisplay || subscribeDisplay ? "-z-10" : "z-50"
      }`}
    >
      <nav className="flex items-center justify-around mt-4">
        <button
          className="px-2 py-2 text-sm uppercase cursor-pointer md:text-xl hover:text-white hover:font-medium"
          onClick={() => setMusicDisplay(true)}
        >
          Music
        </button>

        <button
          className="px-2 py-2 text-sm text-center uppercase cursor-pointer hover:text-white hover:font-medium md:text-xl"
          onClick={() => setShopDisplay(true)}
        >
          Shop
        </button>

        <a
          href="mailto:drwoymusic@gmail.com?subject=Contact D RWOY"
          className="px-2 py-2 text-sm text-center uppercase cursor-pointer md:text-xl hover:text-white hover:font-medium"
          target="_blank"
        >
          Write to me
        </a>

        {/* <a href="https://drwoy.myshopify.com/" target='_blank' className='px-2 py-2 text-sm text-center uppercase cursor-pointer hover:text-white hover:font-medium md:text-xl'>Shop</a> */}
        {/* <a 
              href="https://us12.list-manage.com/contact-form?u=bc78c11dfad31039844b529fb&form_id=cbabaffdf9822e3bd600164525351274" 
              className='px-2 py-2 text-sm text-center uppercase cursor-pointer md:text-xl hover:text-white hover:font-medium'
              target="_blank"
            >Write to me</a> */}
      </nav>
    </header>
  );
};

export default Header;
