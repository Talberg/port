import React from 'react'
import './PlayerCard.scss'

function PlayerCard(props) {

    // set the movement speed to the current speed when the game loads 

console.log(props.playerObject)
    let character = props.character
    let playerObject = props.rooms.players[props.player]
    return (<div className={ `playerCard ${character.color}`} >
        <div className='playerNumber'>
            <p> {props.player}</p>
        </div>
        <strong><hr></hr></strong>
        <div className="characterName">
            <p ><strong>{props.character.name}</strong></p>
        </div>
        <hr className='line1'></hr>
        <div className='speedMight'>
            <ul>
            <strong><u>
                <li>Speed: {character.speed[character.speedIndex]} </li>
                <li>Might: {character.might[character.mightIndex]} </li>
                </u></strong>
            </ul>
        </div>
        <div className='knowledgeSanity'>
            <ul>
            <strong><u>
                <li>Knowledge: {character.knowledge[character.knowledgeIndex]} </li>
                <li>Sanity: {character.sanity[character.sanityIndex]} </li>
                </u></strong>
            </ul>
        </div>
        <div className='items'  >
            <h3>Items :</h3>
            <hr></hr>
            <ul>
                {props.playerObject.item.map( item=>{
                    return(
                    <li><button>{item.title}</button></li>
                    )
                })}
            </ul>
        </div>
        <hr className='line2'  ></hr>
        <div className='movementSpeed' >
            <p>Moves Left : {props.playerObject.movementSpeed} </p>
        </div>




    </div>)

}


export default PlayerCard