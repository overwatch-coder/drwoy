import { AiFillCheckCircle } from "react-icons/ai";
type successProps = {
    setSubscribeDisplay: React.Dispatch<React.SetStateAction<boolean>>,
    message: {
        message: string,
        header: string
    }
}
const Success = ({setSubscribeDisplay, message} : successProps) => {
  return (
    <div className="flex flex-col items-center gap-y-5 text-center">
        <AiFillCheckCircle className="text-6xl text-green-600" />
        <h2 className="text-2xl font-bold">{message.header}</h2>
        <p className="text-lg font-medium">{message.message}</p>
        <button 
            className="bg-gray-800 text-white px-3 py-2 uppercase rounded hover:bg-gray-700"
            onClick={() => setSubscribeDisplay(false)}
        >
            Return to homepage
        </button>
    </div>
  )
}

export default Success