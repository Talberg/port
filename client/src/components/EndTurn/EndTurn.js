import React from 'react'
import './EndTurn.scss'

function EndTurn (props){
    let playerKey
    let playersObj = props.rooms.players
    let keyArray
    let nextPlayer 
    
    
   function ready (userEmail){
    playerKey= userEmail
    
    
   
       }
       
    function allReady(){
          keyArray = Object.keys(props.rooms.players)
          console.log(keyArray[playerKey])
       let i = 1
        keyArray.map(player=>{
            i++

           let playerEmail = playersObj[player].email
           let userEmail= props.user.user.email 
           if(playerEmail=== userEmail){
               ready(player)
               nextPlayer = `player${i}`

           }

           


          return(console.log(playersObj[player]))
        })
    }
    allReady()
    console.log(keyArray)
    console.log(keyArray)
    console.log(nextPlayer)
    console.log()
    console.log(playersObj.player1.character.speedIndex)
    let p1SpeedIndex = playersObj.player1.character.speedIndex
    let p1SpeedArray= playersObj.player1.character.speed
    console.log()
    let p1MoveSpeed = p1SpeedArray[p1SpeedIndex]
    let currentSpeedIndex = playersObj[playerKey].character.speedIndex
    let currentSpeedArray = playersObj[playerKey].character.speed
    let currentMoveSpeed = currentSpeedArray[currentSpeedIndex]
    console.log(currentMoveSpeed)



    //this is where the next players turn value must turn to true and my turn value goes to false 
    function endTurn(){
        //validation that checks to see if there is something at the next spot on the obj 
        // movement speed here 
        if ( props.rooms.players[nextPlayer]){
            
            let nextSpeedIndex = playersObj[nextPlayer].character.speedIndex
    let nextSpeedArray = playersObj[nextPlayer].character.speed
    let nextMoveSpeed = nextSpeedArray[nextSpeedIndex]
            console.log('if')
            console.log(currentMoveSpeed)
            console.log(playerKey)
              props.changeState(
            {
                ...props.rooms,
                players:{...props.rooms.players,
                  [playerKey]: {...props.rooms.players[playerKey], 
                   
                turn:false},
            [nextPlayer]:{...props.rooms.players[nextPlayer],
                movementSpeed:nextMoveSpeed,
            turn:true}  }
            }
        )
        }
        else{
            console.log('else')
            props.changeState(
                {
                    ...props.rooms,
                    players:{...props.rooms.players,
                      [playerKey]: {...props.rooms.players[playerKey], 
                    turn:false},
                player1:{...props.rooms.players.player1,
                    movementSpeed:p1MoveSpeed,
                turn:true}  }
                }
            )

        }

        //
      
    }
    

    return(<button onClick={endTurn} className='endTurn'>ENDTURN</button>)

}

export default EndTurn