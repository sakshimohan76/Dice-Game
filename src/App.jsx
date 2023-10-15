import { useState } from "react";
import "./App.scss";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

function App() {
  const[isGameStarted, setIsGameStarted]=useState(false);

  const toggleGamePlay=()=>{
    setIsGameStarted((prev)=>!prev);
  }
  return (
    <>
    {isGameStarted ? <GamePlay/>: <StartGame toggle={toggleGamePlay}/>}
    </>
  );
}

export default App;
