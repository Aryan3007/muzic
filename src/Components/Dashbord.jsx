import { GoHomeFill } from "react-icons/go";
import { FaHeadphones,FaHeart, FaMusic  } from "react-icons/fa";
import { FiSearch, FiRadio } from "react-icons/fi";
import { VscLibrary } from "react-icons/vsc";
import { MdContactPage } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
const Dashbord = () => {
  return (
    <div className="h-full w-80 p-4 dashboard">
        <div className="menu ">
            <div className="flex flex-row justify-start items-center rounded-3xl p-2 px-6 gap-3 mb-4 pri-btn">
        <GoHomeFill className="text-2xl "/>
        <h1 className="text-lg">Menu</h1>
            </div>
            <div className="flex justify-start items-center gap-3 ml-3 dash-btn my-2">
                <FaHeadphones/>
                <h1>Discover</h1>
            </div>
            <div className="flex justify-start items-center gap-3 ml-3 dash-btn my-2">
                <FiSearch/>
                <h1>Search</h1>
            </div>
            <div className="flex justify-start items-center gap-3 ml-3 dash-btn my-2">
                <VscLibrary/>
                <h1>Library</h1>
            </div>
            <div className="flex justify-start items-center gap-3 ml-3 dash-btn my-2">
                <FiRadio/>
                <h1>Radio</h1>
            </div>
        </div>
        <div className="library ">
        <div className="flex flex-row justify-start items-center  rounded-3xl p-2 px-6 gap-3 my-4 pri-btn">
        <VscLibrary className="text-2xl "/>
        <h1 className="text-lg  ">Library</h1>
            </div>
            <div className="flex justify-start items-center gap-3 ml-3 dash-btn my-2">
                <FaHeadphones/>
                <h1>Recently Played</h1>
            </div>
            <div className="flex justify-start items-center gap-3 ml-3 dash-btn my-2">
                <FaHeart/>
                <h1>Favorite Song</h1>
            </div>
            <div className="flex justify-start items-center gap-3 ml-3 dash-btn my-2">
                <MdContactPage/>
                <h1>Album</h1>
            </div>
            <div className="flex justify-start items-center gap-3 ml-3 dash-btn my-2">
                <BsFillPersonFill/>
                <h1>Artist</h1>
            </div>
        </div>
        <div className="playlist ">
        <div className="flex flex-row justify-start items-center  rounded-3xl p-2 px-6 gap-3 my-4 pri-btn">
        <FaMusic className="text-xl "/>
        <h1 className="text-lg">Playlist</h1>
            </div>
            <div className="flex justify-start items-center gap-3 ml-3 dash-btn my-2">
                <FaHeart/>
                <h1>My Favorite Song</h1>
            </div>
            <div className="flex justify-start items-center gap-3 ml-3 dash-btn my-2">
                <FaMusic/>
                <h1>Music of Summer</h1>
            </div>
            <div className="flex justify-start items-center gap-3 ml-3 dash-btn my-2">
                <VscLibrary/>
                <h1>Library</h1>
            </div>
            <div className="flex justify-start items-center gap-3 ml-3 dash-btn my-2">
                <FiRadio/>
                <h1>Radio</h1>
            </div>
        </div>
      
    </div>
  )
}

export default Dashbord
