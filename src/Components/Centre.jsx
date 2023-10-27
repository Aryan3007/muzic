import Items from "./Items"
import Navbar from "./Navbar"

function Centre() {
  return (
    <div className="py-4 px-3 h-full w-full">
      <Navbar/>
      <div className="h-full w-full py-6 flex flex-wrap justify-center gap-4 overflow-auto">
        <Items/>
      </div>
    </div>
  )
}

export default Centre
