import { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
// import axios from "axios";
const Navbar = () => {
  const CLIENT_ID = "13568f3f540d4527b05f0734ba4de8b4";
  const REDIRECT_URL = "http://localhost:5173/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");

  useEffect(()=>{
    const hash=window.location.hash
    let token=window.localStorage.getItem("token")
    console.log(hash)

    if(!token && hash){
      token=hash.substring(1).split("&").find(elem=>elem.startsWith("access_token")).split("=")[1]
      console.log(token)

      window.location.hash=""
      window.localStorage.setItem("token", token)
      setToken(token)
    }
  },[])
  return (
    <div className="flex flex-row justify-center items-center gap-6">
      <div className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Search your song here"
        />
        <button className="search__button">
          <svg className="search__icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
        </button>
      </div>
      <div className="w-10 flex justify-center items-center rounded-full bg-white h-10 darkmode">
        <MdDarkMode className="text-2xl" />
      </div>
      {!token ?

        <a className="w-24 login rounded-2xl flex justify-center items-center h-10"
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}`}
        >Login        
      </a>

      :<button className="w-24 login rounded-2xl flex justify-center items-center h-10">
      Logout
    </button>
      }

    </div>
  );
};

export default Navbar;
