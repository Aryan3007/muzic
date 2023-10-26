import Centre from "./Components/Centre";
import Dashbord from "./Components/Dashbord";
import Player from "./Components/Player";

function App() {
  return (
    <div className="p-6 flex justify-center items-center h-screen w-screen background">
      <div className="w-[95%] h-[95%] flex flex-row rounded-3xl glassback overflow-hidden">
      <Dashbord/>
      <Centre/>
      <Player/>
      </div>
    </div>
  );
}

export default App;
