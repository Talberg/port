import React, {useState, useEffect} from 'react'
import './StartGame.scss'
import Popup from 'reactjs-popup'
import API from '../../utils/API'


function StartGame(props){

const [auto, setAuto] = useState(
    {
        players:[props.user.user.email],
        pushPlayer:''
    }
)
const handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    setAuto({...auto,
      [name]: value
    });
  };


let playerArr = []
function showPlayers(event){
  event.preventDefault()

  console.log(auto.players)
}


  function addPlayer(event){
    event.preventDefault()
  setAuto({
      ...auto,players:[...auto.players,auto.pushPlayer]
  })
  }

    return(<div className='startGame'>
        <Popup trigger={<button className='' > New Game</button>} position="right center">
       <form>
         <input type='text' ></input>
            <select id="inputState" name='pushPlayer' value={auto.pushPlayer} onChange={handleInputChange} class="form-control">
          <option selected>Select one...</option>
          {props.user.user.friends.map(
              friend=>{
                  console.log(friend)
              return(<option>{friend}</option>)}
          )}
       
          
        </select>
        <button onClick={addPlayer}  > Add Player</button>
        <button onClick={showPlayers}  > Show Players</button>
        {/* need to add in a a way to add the selected people in the players array */}
        <button onClick={()=>API.newGame(auto.players)} className=''> Start New Game </button>


</form>
      </Popup>
    </div>)
}

export default StartGame