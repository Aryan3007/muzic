import { AiFillPlayCircle } from "react-icons/ai";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { PiQueue } from "react-icons/pi";
const Player = () => {
  return (
    <div className="w-96 h-full  player p-2">
        <div className="h-16 w-full  flex justify-center items-center ">
            <h1 className="text-3xl">Muzic Player</h1>
        </div>
      <div className="flex flex-col music rounded-xl w-full h-1/2 overflow-hidden">
        <div className="w-full rounded-xl h-[80%] border-2 border-white">
          <img src="" alt="" />
        </div>
        <div className="flex flex-row justify-center items-center mt-3 gap-3">
          <MdSkipPrevious className="text-4xl" />
          <AiFillPlayCircle className="text-4xl" />
          <MdSkipNext className="text-4xl" />
        </div>
      </div>
      <hr className="my-2" />
      <div className="queue h-full mt-4">
        <h1 className="ml-4">Next in Oueue...</h1>
        <div className="flex justify-start items-center gap-3 ml-3 my-2">
          <PiQueue className="text-2xl"/>
          <h1>Ganpati bappa moriya</h1>
        </div>
        <div className="flex justify-start items-center gap-3 ml-3 my-2">
          <PiQueue className="text-2xl"/>
          <h1>Ganpati bappa moriya</h1>
        </div>
        <div className="flex justify-start items-center gap-3 ml-3 my-2">
          <PiQueue className="text-2xl"/>
          <h1>Ganpati bappa moriya</h1>
        </div>
        <div className="flex justify-start items-center gap-3 ml-3 my-2">
          <PiQueue className="text-2xl"/>
          <h1>Ganpati bappa moriya</h1>
        </div>
        <div className="flex justify-start items-center gap-3 ml-3 my-2">
          <PiQueue className="text-2xl"/>
          <h1>Ganpati bappa moriya</h1>
        </div>
      </div>
    </div>
  );
};

export default Player;
