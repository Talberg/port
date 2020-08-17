import React from 'react'
import './CardDisplay.scss'
import API from '../../utils/API'

function CardDisplay(props){
    let rollFunction = API.roll
    let currentCard = props.rooms.currentCard
    let closedCard = {...props.rooms.currentCard , display:'hidden'}
    function closeCard (){
        //map through all the players and check if the email is the same 
        let playerKeys =Object.keys(props.rooms.players)
        let groundFloorKeys = Object.keys(props.rooms.GroundFloor)
        let GroundFloorObject = props.rooms.GroundFloor



        // player trait - or + player
        // do a currentCard.action.map()
       

        
        

        


        console.log(props.user.user.email)
        playerKeys.map( player=>{
            if (props.user.user.email === props.rooms.players[player].email) {
               let character = props.rooms.players[player].character 
               let playerObj = props.rooms.players[player]
            
               let newItemArray = props.rooms.players[player].item
               let newKnowledge = props.rooms.players[player].character.knowledgeIndex
               let newMight = props.rooms.players[player].character.mightIndex
               let newSpeed = props.rooms.players[player].character.speedIndex
               let newSanity = props.rooms.players[player].character.sanityIndex
               let speed = character.speed[character.speedIndex]
               let might = character.might[character.mightIndex]
               let knowledge = character.knowledge[character.knowledgeIndex]
               let sanity = character.sanity[character.sanityIndex]
               
               
               
               
               console.log(newKnowledge)
               
               
                currentCard.action.map(action =>{
              
                    
                    if (action === 'item'){
                        console.log('made it to the item') 
                        newItemArray.push(currentCard)
                    }
                    let actionArray = action.split('-')

                    if(actionArray[0]==='knowledge'){
                      
                        if(actionArray[1]==='Up'){
                            console.log(` ${player} ${actionArray[0]} goes up by  ${actionArray[2]}`)
                            //make knowledge on the players character needs to go up 
                            newKnowledge = (parseInt(newKnowledge) + parseInt(actionArray[2]))
                            console.log(newKnowledge)
                            let knowledgeIndex = newKnowledge
                            console.log(knowledgeIndex)
            
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                            knowledgeIndex:knowledgeIndex,
                                            
                                        
                                        }
                                        } }
            
                                }
                            )

                            console.log(props.rooms.players[player].character.knowledgeIndex)
                           

                        }
                        if(actionArray[1]==='Down'){
                            console.log(` ${player} knowledge goes down by  ${actionArray[2]}`)
                        }
                    }
                    if(actionArray[0]==='might'){
                      
                        if(actionArray[1]==='Up'){
                            console.log(` ${player} ${actionArray[0]} goes up by  ${actionArray[2]}`)
                            //make knowledge on the players character needs to go up 
                            newMight = (parseInt(newMight) + parseInt(actionArray[2]))
                            console.log(newMight)
                            let mightIndex = newMight
                            console.log(mightIndex)
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                            mightIndex:mightIndex
                                        }
                                        } }
            
                                }
                            )

                            console.log(props.rooms.players[player].character.mightIndex)
                           

                        }
                        if(actionArray[1]==='Down'){
                            console.log(` ${player} knowledge goes down by  ${actionArray[2]}`)
                        }
                    }
                    if(actionArray[0]==='speed'){
                      
                        if(actionArray[1]==='Up'){
                            console.log(` ${player} ${actionArray[0]} goes up by  ${actionArray[2]}`)
                            //make knowledge on the players character needs to go up 
                            newSpeed = (parseInt(newSpeed) + parseInt(actionArray[2]))
                            console.log(newSpeed)
                            let speedIndex = newSpeed
                            console.log(speedIndex)
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           speedIndex:speedIndex
                                        }
                                        } }
            
                                }
                            )

                            console.log(props.rooms.players[player].character.knowledgeIndex)
                           

                        }
                        if(actionArray[1]==='Down'){
                            console.log(` ${player} knowledge goes down by  ${actionArray[2]}`)
                        }
                    }
                    if(actionArray[0]==='sanity'){
                      
                        if(actionArray[1]==='Up'){
                            console.log(` ${player} ${actionArray[0]} goes up by  ${actionArray[2]}`)
                            //make knowledge on the players character needs to go up 
                            newSanity = (parseInt(newSpeed) + parseInt(actionArray[2]))
                            console.log(newSanity)
                            let sanityIndex = newSanity
                            console.log(sanityIndex)
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           sanityIndex:sanityIndex
                                        }
                                        } }
            
                                }
                            )

                            console.log(props.rooms.players[player].character.knowledgeIndex)
                           

                        }
                        if(actionArray[1]==='Down'){
                            console.log(` ${player} knowledge goes down by  ${actionArray[2]}`)
                        }
                    }
                    if(action === 'graveDirt'){

                        console.log('NOTE: NEEDS WORK')
                        //player might roll of 4 or greater is needed to gain 1 might
                        //if roll < 4 then  take one point of physical damage every start of the turn.  do the item function here 
                        //physical damage selector component needs to be built out 
                        //this needs work 
                      
                       let mightRoll =  rollFunction(might)
                       if(mightRoll < 4){
                           //make the player take damage 1 physical damage 
                           console.log('1 physical damage needs to be activated and shown to the correct player so the passthrough should be the amount that is needed to be taken also what type and want should they do if and that the damage picker needs to be displayed after this card is closed ')
                       }
                       else{
                        newMight = (parseInt(newMight) + parseInt(1))
                        console.log(newMight)
                        let mightIndex = newMight
                        console.log(mightIndex)
                        props.changeState(
                            {
                                ...props.rooms,
                                currentCard :closedCard,
                                players: {...props.rooms.players , 
                                    [player] : {...props.rooms.players[player],  item:newItemArray, 
                                    character:{
                                        ...props.rooms.players[player].character,
                                        mightIndex:mightIndex
                                    }
                                    } }
        
                            }
                        )

                       }
                       


                    




                    }
                    if(action === 'funeral'){
                        //sanity roll 
                        //4+ : +1 sanity
                        //2-3 : lose 1 sanity 
                        //0-1 : -1 sanit and - 1 might move to the crypt, or grave yard 

                        let sanity = character.sanity[newSanity]
                        let roll = rollFunction(sanity)
                        if(roll>3){
                            //sanity up 1 index 
                            newSanity= parseInt(newSanity)+1 
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           sanityIndex:newSanity
                                        }
                                        } }
            
                                }
                            )
                        }
                        if(roll === 2 || 3){
                            //donw sanity 
                            newSanity = parseInt(newSanity)-1
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           sanityIndex:newSanity
                                        }
                                        } }
            
                                }
                            )

                        }
                        if(roll === 0 || 1 ){
                            let newLocation = props.rooms.players[player].location
                            newSanity = parseInt(newSanity)-1
                            newMight = parseInt(newMight)-1
                            // map through the open doors and 
                            groundFloorKeys.map(
                                floor=>{
                                   let roomName=  GroundFloorObject[floor].name
                                   if (roomName === 'Graveyard'){

                                       //set new location to here 
                                       newLocation = floor

                                       props.changeState(
                                        {
                                            ...props.rooms,
                                            currentCard :closedCard,
                                            players: {...props.rooms.players , 
                                                [player] : {...props.rooms.players[player],location:newLocation,  item:newItemArray, 
                                                character:{
                                                    ...props.rooms.players[player].character,
                                                   sanityIndex:newSanity,
                                                   mightIndex:newMight
                                                }
                                                } }
                    
                                        }
                                    )


                                   }
                                   else{
                                    props.changeState(
                                        {
                                            ...props.rooms,
                                            currentCard :closedCard,
                                            players: {...props.rooms.players , 
                                                [player] : {...props.rooms.players[player],  item:newItemArray, 
                                                character:{
                                                    ...props.rooms.players[player].character,
                                                   sanityIndex:newSanity,
                                                   mightIndex:newMight
                                                }
                                                } }
                    
                                        }
                                    )

                                   }
                                }
                            )
                           
                           
                            
                        }
                        console.log()
                    }
                    if(action === 'bite'){
                        props.changeState(
                            {
                                ...props.rooms,
                                currentCard :closedCard,
                                players: {...props.rooms.players , 
                                    [player] : {...props.rooms.players[player],  item:newItemArray, 
                                    character:{
                                        ...props.rooms.players[player].character,
                                       
                                    }
                                    } }
        
                            }
                        )
                    }
                    if(action === 'footSteps'){
                        //if player is in chapel then 2 
                        let playerLocation = props.rooms.players[player].location
                        let isInChapel =  GroundFloorObject[playerLocation] === 'Chapel' 
                        console.log(isInChapel) 
                        if(isInChapel){
                            //roll 2 dice
                            let nearestExplorer 
                            let roll= rollFunction(2)
                            if(roll === 4){
                                newMight = parseInt(newMight)+1
                                props.changeState(
                                    {
                                        ...props.rooms,
                                        currentCard :closedCard,
                                        players: {...props.rooms.players , 
                                            [player] : {...props.rooms.players[player],  item:newItemArray, 
                                            character:{
                                                ...props.rooms.players[player].character,
                                               mightIndex:newMight
                                            }
                                            } }
                
                                    }
                                )

                                
                            }
                            if(roll === 3){
                                newMight = parseInt(newMight)+1
                                props.changeState(
                                    {
                                        ...props.rooms,
                                        currentCard :closedCard,
                                        players: {...props.rooms.players , 
                                            [player] : {...props.rooms.players[player],  item:newItemArray, 
                                            character:{
                                                ...props.rooms.players[player].character,
                                               mightIndex:newMight
                                            }
                                            } }
                
                                    }
                                )

                            }
                            if(roll === 2){
                                newSanity = parseInt(newSanity)-1
                                props.changeState(
                                    {
                                        ...props.rooms,
                                        currentCard :closedCard,
                                        players: {...props.rooms.players , 
                                            [player] : {...props.rooms.players[player],  item:newItemArray, 
                                            character:{
                                                ...props.rooms.players[player].character,
                                               sanityIndex:newSanity
                                            }
                                            } }
                
                                    }
                                )

                                
                            }
                            if(roll === 1){
                                newSpeed= parseInt(newSpeed)-1
                                props.changeState(
                                    {
                                        ...props.rooms,
                                        currentCard :closedCard,
                                        players: {...props.rooms.players , 
                                            [player] : {...props.rooms.players[player],  item:newItemArray, 
                                            character:{
                                                ...props.rooms.players[player].character,
                                               speedIndex:newSpeed
                                            }
                                            } }
                
                                    }
                                )

                            }
                            if(roll === 0){
                                console.log('NEEDS TO BE PROGRAMED')

                            }
                            
                        }
                        if(!isInChapel){
                            //roll 1 die 
                           let roll =  rollFunction(1)
                           if(roll === 4){
                            newMight = parseInt(newMight)+1
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           mightIndex:newMight
                                        }
                                        } }
            
                                }
                            )

                            
                        }
                        if(roll === 3){
                            newMight = parseInt(newMight)+1
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           mightIndex:newMight
                                        }
                                        } }
            
                                }
                            )

                        }
                        if(roll === 2){
                            newSanity = parseInt(newSanity)-1
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           sanityIndex:newSanity
                                        }
                                        } }
            
                                }
                            )

                            
                        }
                        if(roll === 1){
                            newSpeed= parseInt(newSpeed)-1
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           speedIndex:newSpeed
                                        }
                                        } }
            
                                }
                            )

                        }
                        if(roll === 0){
                            console.log('NEEDS TO BE PROGRAMED')

                        }

                        }

                        
                    }
                    if(action === 'dripDripDrip'){
                        // this makes the players in the room have to roll 1 less die
                        let currentRoom = GroundFloorObject[props.rooms.players[player].location]
                        let newRoomObject = {...currentRoom,token:[...currentRoom.token,'dripDripDrip']}
                        console.log(newRoomObject)



                        props.changeState(
                            {
                                ...props.rooms,
                                currentCard :closedCard,
                             GroundFloor:{...GroundFloorObject,[props.rooms.players[player].location]:newRoomObject}
        
                            }
                        )

                        
                    }
                    if(action === 'disquietingSounds'){
                        let roll = rollFunction(6)
                        let omenCount = props.rooms.omenCount
                        if(roll >= omenCount ){
                            newSanity = parseInt(newSanity)+1

                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           sanityIndex:newSanity
                                        }
                                        } }
            
                                }
                            )
                        }
                        if(roll< omenCount){
                            newSanity =  parseInt(newSanity)-1
                            //need to add in a mental damage thing here 

                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           sanityIndex:newSanity
                                        }
                                        } }
            
                                }
                            )
                            
                        }
                    }
                    if(action === 'debris'){
                        let speed = character.speed[character.speedIndex]
                        let roll = rollFunction(speed)
                        if(roll>2){
                            newSpeed = parseInt(newSpeed)+1

                        }
                        if(roll === 2 ||1){
                            //1 physical damage here
                            newSpeed =  parseInt(newSpeed)-1
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           speedIndex:newSpeed
                                        }
                                        } }
            
                                }
                            )

                        }
                        if(roll === 0 ){
                            //take 2 physical damage
                            //need to add  this card to the items array

                            newSpeed = parseInt(newSpeed)-2
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           speedIndex:newSpeed
                                        }
                                        } }
            
                                }
                            )
                        }
                    }
                    if(action === 'creepyPuppet'){
                        let might = character.might[character.mightIndex]
                        let block = rollFunction(might) 
                        let attack = rollFunction(4)
                        if(attack>block){
                            let damage = attack - block
                            newMight =  parseInt(newMight)-parseInt(damage)
                            //if a player has the spear then give that player +2 might




                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           mightIndex:newMight
                                        }
                                        } }
            
                                }
                            )



                            
                        }
                        else{

                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                   
            
                                }
                            )

                        }
                    }
                    if(action === 'creepyCrawlies'){
                        let sanity = character.sanity[character.sanityIndex]
                        let roll = rollFunction(sanity)
                        if(roll>4){
                            newSanity = parseInt(newSanity)+1

                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           sanityIndex:newSanity
                                        }
                                        } }
            
                                }
                            )
                        }
                        if(roll === 4||3||2||1){
                            newSanity =  parseInt(newSanity)-1

                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           sanityIndex:newSanity
                                        }
                                        } }
            
                                }
                            )

                        }
                        if(roll ===0 ){
                            newSanity = parseInt(newSanity)-2 
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           sanityIndex:newSanity
                                        }
                                        } }
            
                                }
                            )

                        }
                    }
                    if(action === 'burningMan'){
                        let sanity = character.sanity[character.sanityIndex]
                        let roll = rollFunction(sanity)
                        if(roll>3){
                            newSanity = parseInt(newSanity) +1
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           sanityIndex:newSanity
                                        }
                                        } }
            
                                }
                            )
                        }
                        if(roll === 2||3){
                            // player location to start x7y5 
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray,
                                            location:'x7y5' 
                                                                                 
                                        } }
            
                                }
                            )
                        }
                        if(roll === 1||0){
                            //1 mental and 1 physical damage
                            newSanity =  parseInt(newSanity) -1
                            newMight = parseInt(newMight)-1

                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           sanityIndex:newSanity
                                        }
                                        } }
            
                                }
                            )
                            
                        }
                    }
                    if(action === 'bloodyVision'){
                        let sanity = character.sanity[character.sanityIndex]
                        let roll = rollFunction(sanity)

                        if(roll >3){
                            newSanity = parseInt(newSanity)+1
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           sanityIndex:newSanity
                                        }
                                        } }
            
                                }
                            )
                        }
                        if(roll === 2||3){
                            newSanity = parseInt(newSanity)-1
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           sanityIndex:newSanity
                                        }
                                        } }
            
                                }
                            )
                        }
                        if(roll<2){
                            // if there is a player next to the current player then 
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                   
            
                                }
                            )
                        }
                    }
                    if(action === 'closetDoor'){
                        let currentRoom = GroundFloorObject[props.rooms.players[player].location]
                        let newRoomObject = {...currentRoom,token:[...currentRoom.token,'closetDoor']}
                        props.changeState(
                            {
                                ...props.rooms,
                                currentCard :closedCard,
                             GroundFloor:{...GroundFloorObject,[props.rooms.players[player].location]:newRoomObject}
        
                            }
                        )
                    }
                    if(action === 'aMomentOfHope'){
                        let currentRoom = GroundFloorObject[props.rooms.players[player].location]
                        let newRoomObject = {...currentRoom,token:[...currentRoom.token,action]}

                        props.changeState(
                            {
                                ...props.rooms,
                                currentCard :closedCard,
                             GroundFloor:{...GroundFloorObject,[props.rooms.players[player].location]:newRoomObject}
        
                            }
                        )

                                                
                    }
                    if(action === 'skeletons'){
                        let currentRoom = GroundFloorObject[props.rooms.players[player].location]
                        let newRoomObject = {...currentRoom,token:[...currentRoom.token,action]}

                        props.changeState(
                            {
                                ...props.rooms,
                                currentCard :closedCard,
                             GroundFloor:{...GroundFloorObject,[props.rooms.players[player].location]:newRoomObject}
        
                            }
                        )

                    }
                    if(action === 'webs'){
                        let might = character.might[character.mightIndex]
                        let roll = rollFunction(might)
                        if(roll >3){
                            newMight = parseInt(newMight)+1

                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           mightIndex:newMight
                                        }
                                        } }
            
                                }
                            )

                        }
                        if(roll<4){
                            newItemArray = [...newItemArray,action]
                        }

                    }
                    if(action === 'angryBeing'){
                        let speed =character.speed[character.speedIndex]
                        let roll = rollFunction(speed)
                        console.log(`Roll Total: ${roll}`)
                        if(roll>4){
                            newSpeed = parseInt(newSpeed) + 1
                            console.log(`${player} Speed +1`)
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           speedIndex:newSpeed
                                        }
                                        } }
            
                                }
                            )
                        }
                        if(roll === 2||3||4){
                            //mental damage
                            newKnowledge = parseInt(newKnowledge) - 1
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                          knowledgeIndex:newKnowledge
                                        }
                                        } }
            
                                }
                            )
                        }
                        if(roll === 0 || 1 ){
                            newKnowledge = parseInt(newKnowledge) - 1
                            newSpeed = parseInt(newSpeed)
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                          knowledgeIndex:newKnowledge
                                        }
                                        } }
            
                                }
                            )

                        }

                    }
                    if(action === 'theVoice'){
                        let knowledge = character.knowledge[character.knowledgeIndex]
                        let roll = rollFunction(knowledge)
                        console.log(`Roll Total: ${roll}`)
                        
                        if(roll>3){
                            console.log('draw an item card here not programed yet,sorry')
                     
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                 
            
                                }
                            )
                        }
                        if(roll<4){
                            
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                 
            
                                }
                            )
                        }
                    }
                    if(action === 'spider'){
                        //pick a trait here
                        let speed = character.speed[character.speedIndex]
                        let sanity = character.sanity[character.sanityIndex]
                        let trait 

                        let highest
                        
                        if(speed>sanity){
                            highest = speed
                            trait = 'speed'
                            
                        }
                        if(sanity>speed){
                            highest = sanity
                            trait = 'sanity'
                        }
                        let roll = rollFunction(highest)
                        console.log(`Roll Total: ${roll}`)
                        if(roll > 3){
                            if(trait === 'speed'){
                                newSpeed = parseInt(newSpeed)+1
                                console.log(`${player} Speed +1`)
                                
                                props.changeState(
                                    {
                                        ...props.rooms,
                                        currentCard :closedCard,
                                        players: {...props.rooms.players , 
                                            [player] : {...props.rooms.players[player],  item:newItemArray, 
                                            character:{
                                                ...props.rooms.players[player].character,
                                               speedIndex:newSpeed
                                            }
                                            } }
                
                                    }
                                )
                            }
                            if(trait ==='sanity'){
                                newSanity = parseInt(newSanity)+1
                                console.log(`${player} Sanity +1`)
                                props.changeState(
                                    {
                                        ...props.rooms,
                                        currentCard :closedCard,
                                        players: {...props.rooms.players , 
                                            [player] : {...props.rooms.players[player],  item:newItemArray, 
                                            character:{
                                                ...props.rooms.players[player].character,
                                               sanityIndex:newSanity
                                            }
                                            } }
                
                                    }
                                )
                            }
                            
                        }
                        if(roll === 1 ||2||3){
                            //physical damage here
                            newSpeed = parseInt(newSpeed) -1 
                            console.log(`${player} Speed -1`)
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           speedIndex:newSpeed
                                        }
                                        } }
            
                                }
                            )

                        }
                        if(roll === 0 ){
                            //physical damage
                            newSpeed = parseInt(newSpeed)-2
                            console.log(`${player} Speed -2`)

                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           speedIndex:newSpeed
                                        }
                                        } }
            
                                }
                            )
                        }
                        
                    }
                    if(action === 'somethingSlimy'){
                        let roll = rollFunction(speed)
                        console.log(`Roll Total: ${roll}`)
                        if(roll>3){
                            newSpeed = parseInt(newSpeed) +1
                            console.log(`${player} Speed +1`)
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           speedIndex:newSpeed
                                        }
                                        } }
            
                                }
                            )

                        }
                        if(roll === 1||2||3){
                            newMight = parseInt(newMight)-1
                            console.log(`${player} Might -1`)
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           speedIndex:newSpeed
                                        }
                                        } }
            
                                }
                            )

                        }
                        if(roll === 0 ){
                            newMight = parseInt(newMight)-1
                            newSpeed = parseInt(newSpeed)-1
                            console.log(`${player} Might -1`)
                            console.log(`${player} Speed -1`)
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           speedIndex:newSpeed
                                        }
                                        } }
            
                                }
                            )

                        }
                    }
                    if(action === 'somethingHidden'){
                        let roll = rollFunction(knowledge)
                        console.log(`Roll Total: ${roll}`)
                        if(roll>3){
                            console.log('Draw item card, sorry not here yet')
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    
            
                                }
                            )

                            
                        }
                        if(roll<4){
                            newSanity = parseInt(newSanity) - 1
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           sanityIndex:newSanity
                                        }
                                        } }
            
                                }
                            )

                        }
                        
                    }
                    if(action === 'rotten'){
                        let roll = rollFunction(sanity)
                        console.log(`Roll Total: ${roll}`)
                        
                        if(roll > 4){
                            newSanity = parseInt(newSanity)+1
                            console.log(`${player} Sanity +1`)
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           sanityIndex:newSanity
                                        }
                                        } }
            
                                }
                            )

                        }
                        if(roll===2||3||4){
                            newMight = parseInt(newMight)-1
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           mightIndex:newMight
                                        }
                                        } }
            
                                }
                            )

                        }
                        if(roll ===1){
                            newMight = parseInt(newMight) -1
                            newSpeed = parseInt(newSpeed) -1
                            console.log(`${player} Might -1`)
                            console.log(`${player} Speed -1`)
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           speedIndex:newSpeed,mightIndex:newMight
                                        }
                                        } }
            
                                }
                            )
                        }
                        if(roll === 0){
                            newMight = parseInt(newMight) -1
                            newSpeed = parseInt(newSpeed) -1
                            newKnowledge = parseInt(newKnowledge) -1
                            newSanity = parseInt(newSanity) -1
                            console.log(`${player} Might -1`)
                            console.log(`${player} Speed -1`)
                            console.log(`${player} Sanity -1`)
                            console.log(`${player} Knowledge -1`)
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           speedIndex:newSpeed,mightIndex:newMight,sanityIndex:newSanity,knowledgeIndex:newKnowledge
                                        }
                                        } }
            
                                }
                            )

                        }
                    }
                    if(action === 'phoneCall'){
                        let roll = rollFunction(2)
                        console.log(`Roll Total: ${roll}`)
                        if(roll===4){
                            newSanity = parseInt(newSanity)+1
                            console.log(`${player} Sanity +1`)

                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           sanityIndex:newSanity
                                        }
                                        } }
            
                                }
                            )


                           
                        }
                        if(roll===3){
                            newKnowledge = parseInt(newKnowledge)+1
                            console.log(`${player} Knowledge +1`)
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           knowledgeIndex:newKnowledge
                                        }
                                        } }
            
                                }
                            )
                        }
                        if(roll === 1||2){
                            let damage= rollFunction(1)
                            console.log(`Roll Total: ${damage}`)
                            newSanity = parseInt(newSanity) -damage
                            console.log(`${player} Knowledge -${damage}`)
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           sanityIndex:newSanity
                                        }
                                        } }
            
                                }
                            )
                            

                        }
                        if(roll === 0){
                            let damage= rollFunction(2)
                            console.log(`Roll Total: ${damage}`)
                            newSanity = parseInt(newSanity) -damage
                            console.log(`${player} Knowledge -${damage}`)
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           sanityIndex:newSanity
                                        }
                                        } }
            
                                }
                            )
                            

                        }
                    }
                    if(action === 'nightView'){
                        let roll = rollFunction(knowledge)
                        console.log(`Roll Total: ${roll}`)
                        if(roll>4){
                            newKnowledge = parseInt(newKnowledge) +1
                            console.log(`${player} Knowledge +1`)
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           knowledgeIndex:newKnowledge
                                        }
                                        } }
            
                                }
                            )

                        }
                        if(roll<5){
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                   
            
                                }
                            )
                        }
                    }
                    if(action === 'groundskeeper'){
                        let roll = rollFunction(knowledge)
                        console.log(`Roll Total: ${roll}`)
                        if(roll>3){
                            console.log('draw item here, not finished yet ')
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                   
            
                                }
                            )

                        }
                        if(roll <4){
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                   
            
                                }
                            )
                        }
                    }
                    if(action === 'jonahsTurn'){
                        let itemArrayKeys = Object.keys(playerObj.item)
                        let PuzzleBox 
                        itemArrayKeys.map(item=>{
                            if(item === 'PuzzleBox'){
                               PuzzleBox = true
                            }

                        })

                        if(PuzzleBox){
                            newSanity= parseInt(newSanity)+1
                            console.log(`${player} Knowledge +1`)
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           sanityIndex:newSanity
                                        }
                                        } }
            
                                }
                            )

                            
                            
                        }
                        else{
                            newSanity = parseInt(newSanity)-1
                            console.log(`${player} Knowledge +1`)
                            props.changeState(
                                {
                                    ...props.rooms,
                                    currentCard :closedCard,
                                    players: {...props.rooms.players , 
                                        [player] : {...props.rooms.players[player],  item:newItemArray, 
                                        character:{
                                            ...props.rooms.players[player].character,
                                           sanityIndex:newSanity
                                        }
                                        } }
            
                                }
                            )


                        }



                    }

                    

                    console.log(actionArray[1])
                    console.log(actionArray[2])
                    console.log(actionArray[3])
                    console.log(newKnowledge)

                    
                  
                }
        
                )
                
                 //if there is a function on the card then it should run here and then 
             
               
               
               
                // here is where the item will be put into the players array 
               
            }
        }

             
        )
        
       
    }
    console.log(currentCard)
    return(<div className={`cardDisplay ${currentCard.display}`} >
        <div className='cardType'>
            <h2> {currentCard.type} </h2>
        </div>
        <hr></hr>
        <div className='cardTitle'>
            <h2> {currentCard.title} </h2>
        </div>
        <div className='cardFlavorText'>
<p>{currentCard.flavorText}</p>
        </div>
        <div className='cardDescription'>
<p>{currentCard.description}</p>
        </div>
        {/* show this if there is a roll that is needed from the player */}
        <div className='rollButton'> 
        <button>Roll</button>
        </div>
        <div className='acceptButton'>
            <button onClick={closeCard}>ACCEPT</button>
        </div>
    </div>)
}



export default CardDisplay