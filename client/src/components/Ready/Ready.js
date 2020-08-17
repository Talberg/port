import React , {useState} from 'react'
import './Ready.scss'
import { CircleIndicator } from 'react-indicators';
function Ready (props){
    
    console.log(props.rooms.players)
    
    return(
    <div className='ready'>
        {Object.keys(props.rooms.players).map(
            player=>{

                let name= props.rooms.players[player]

                console.log(name)

                return(<div className='player'>
                   <h5>{name.email} : <CircleIndicator fill='green'  progress={name.ready}  ></CircleIndicator> {name.ready ? <>Ready</>:<>  Waiting </>} </h5>
                </div>)
                
            }
        )}
<CircleIndicator   ></CircleIndicator>
    </div>
)}


export default Ready 


