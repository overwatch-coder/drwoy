
const Home = () => {
  return (
    <div className="flex flex-col items-center text-center space-y-5 text-white absolute inset-0 justify-center">
      <h1 className="font-[georgia] text-7xl uppercase">
        D RWOY
      </h1>
      <h3 className="font-[georgia] text-5xl">Soft Life</h3>
      <a 
        href="https://drwoy.myshopify.com/" 
        target="_blank"
        className="rounded-full px-5 py-2 border-2 uppercase hover:bg-white hover:text-black hover:font-semibold transition-all duration-500 animate-bounce"
      >
          Out Now
        </a>
    </div>
  )
}

export default Home