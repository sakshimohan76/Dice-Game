import Dices from "../images/dices.png";

const StartGame = ({toggle}) => {
  return (
    <div className="container">
        <div className="left">
            <img src={Dices} alt="" />
        </div>
        <div className="right">
            <span>DICE GAME</span>
            <button onClick={toggle}>Play now</button>
        </div>
    </div>
  )
}

export default StartGame