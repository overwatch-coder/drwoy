import { MdClose } from "react-icons/md";
import { MusicType } from "../types";

type musicProps = {
    musics: MusicType[],
    musicDisplay: boolean,
    setMusicDisplay: React.Dispatch<React.SetStateAction<boolean>>
}

const Music = ({musics, musicDisplay, setMusicDisplay}: musicProps) => {

    const hideMusic = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        
        if((event.target as Element).id === "music_overlay"){
            setMusicDisplay(false);
        }
    }

  return (
    <div onClick={hideMusic} id="music_overlay" className={`${musicDisplay ? "-translate-y-[0%] scale-100" : "-translate-y-[99.99%] scale-0"} absolute inset-0 flex flex-col items-center z-50 bg-black/50 scrollbar-hide overflow-y-scroll transition-all duration-1000 transform`}>
        <div className="w-full md:max-w-xl px-5 py-10 bg-black/90 md:bg-black/90">

            <h2 className="text-white flex items-center justify-center mb-5">
                <span className="text-xl uppercase font-[georgia] ml-auto">Music</span>
                <MdClose 
                    className="ml-auto text-white text-3xl cursor-pointer" 
                    onClick={() => setMusicDisplay(false)} 
                />
            </h2>

            <div className="text-white text-center pb-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-7">
                {musics?.map((music, index) => (
                    <div key={index} className="flex flex-col items-center space-y-5">
                        <img src={music.thumbnail} alt={music.title} className="object-cover w-full sm:w-[400px] sm:h-[250px]" />
                        <h3 className="uppercase">{music.title}</h3>

                        <a 
                            href={music.link} 
                            target="_blank"
                            className="uppercase rounded-full border-2 px-4 py-2 hover:bg-white hover:text-black transition"
                        >
                            Listen Now
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Music