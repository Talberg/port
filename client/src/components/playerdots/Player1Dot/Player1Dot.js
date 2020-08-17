import React from 'react'
import './Player1Dot.scss'


function Player1Dot (props){
    console.log(props.props.rooms.players.player1)


    //put in an image here that will then be used to show that the player is there 
    // need to write code to make it show the correct color on the room using the color of the character 

return(    <div className={` player1Dot  ${props.props.rooms.players.player1.character.color}1`} > <p className='p'>1</p> </div>)}



export default Player1Dot