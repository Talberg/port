import React from 'react'
import './RoomName.scss'

function RoomName(props){
console.log(props.name)    


return(<p className={`roomName ${props.x}N ${props.y}N `}  value={props.name}>{props.name}</p>)
}

export default RoomName