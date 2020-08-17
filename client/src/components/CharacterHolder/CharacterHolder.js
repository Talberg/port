import React from 'react'
import './CharacterHolder.scss'
import Player1Dot from '../playerdots/Player1Dot/Player1Dot'
import Player2Dot from '../playerdots/Player2Dot/Player2Dot'
import Player3Dot from '../playerdots/Player3Dot/Player3Dot'
import Player4Dot from '../playerdots/Player4Dot/Player4Dot'
import Player5Dot from '../playerdots/Player5Dot/Player5Dot'
import Player6Dot from '../playerdots/Player6Dot/Player6Dot'

function CharacterHolder(props){


    let player = props.location.toString() 
    console.log(props.rooms.players.player1)
    let player2Location 
    let player3Location 
    let player4Location 
    let player5Location 
    let player6Location 
    let player1Location = props.rooms.players.player1.location.toString()
    if(props.rooms.players.player2){
    
    player2Location = props.rooms.players.player2.location.toString()
        
    }
    if(props.rooms.players.player3){
       player3Location = props.rooms.players.player3.location.toString()
        
    }
    if(props.rooms.players.player4){
         player4Location = props.rooms.players.player4.location.toString()
        
    }
    if(props.rooms.players.player5){
         player5Location = props.rooms.players.player5.location.toString()
        
    }
    if(props.rooms.players.player6){
       player6Location = props.rooms.players.player6.location.toString()
        
    }
   
    
    let location = props.location.toString()
    let show = player1Location === location

    

    //need to put in the player icons player 1-6  
    return(
    <div className={`characterHolder  ${props.doorLetters}${props.doorCount} `} >
    <div className='characterHolder1 '> 
    {/* if player1 is here then it should show them here if not then show nothing  */}
    {player1Location === location ?  <Player1Dot props={props} ></Player1Dot> : <></> }
    {player2Location=== location? <Player2Dot props={props} ></Player2Dot>:<></>}
    {player3Location ===location ? <Player3Dot props={props}></Player3Dot>:<></> }
    </div> 

    <div className='characterHolder2'>
        {player4Location === location ? <Player4Dot props={props}></Player4Dot>:<></>}
        {player5Location === location ? <Player5Dot props={props}></Player5Dot>:<></>}
        {player6Location === location ? <Player6Dot props={props}></Player6Dot>:<></>}
    
    </div>


    </div>)
}
export default CharacterHolder