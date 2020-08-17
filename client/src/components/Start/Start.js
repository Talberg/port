import React from 'react'
import './Start.scss'
import LeftDoor from '../Doors/LeftDoor/LeftDoor'
import Room from '../Room/Room'

function Start (props){

    
    //set the allready to true 
    function AllReady (event){
    event.preventDefault()
  






    props.changeState(
        {...props.rooms,allReady:true}
    )
function startTheGame(event){
    
}}

    return (<div className='start'>
        <button onClick={AllReady} className='startButton'>Start Your Game</button>
    </div>)
}

export default Start 