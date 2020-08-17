import React from 'react'
import './Player2Dot.scss'

function Player2Dot (props){

    //put in an image here that will then be used to show that the player is there 
    // need to write code to make it show the correct color on the room using the color of the character 

return(    <div className={` player2Dot  ${props.props.rooms.players.player2.character.color}2`} > <p className='p'>2</p> </div>)}



export default Player2Dot