import React,{useEffect} from 'react'
import './CharacterSelect.scss'
import CharacterCard from '../CharacterCard/CharacterCard'
import Ready from '../Ready/Ready'
import Start from '../Start/Start'

function CharacterSelect(props) {
   


    function AllReady (){
        let trueBoi = true
        Object.keys(props.rooms.players).map(ready=>
            {
                let ifReady = props.rooms.players[ready]
                if(!ifReady){
                    trueBoi = false
                }

            }
            
        )
        console.log(trueBoi)
    }

    console.log(props.rooms.CharacterArray)


    return (
        <div className='characterSelect'>
<CharacterCard save={props.save} user={props.user} changeState={props.changeState} rooms={props.rooms} ></CharacterCard>
<Ready save={props.save} user={props.user} changeState={props.changeState} rooms={props.rooms}></Ready>
<Start changeState={props.changeState} rooms={props.rooms} ></Start>

{/* need a start button here  */}



       







        </div>
    )
}
export default CharacterSelect