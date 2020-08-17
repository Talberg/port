import React from 'react'
import './TopDoor.scss'
import API from '../../../utils/API'

function TopDoor(props) {


    let playerKey
    let playersObj = props.rooms.players
    let keyArray

    function ready(userEmail) {
        playerKey = userEmail

        
    }

    function allReady() {
        keyArray = Object.keys(props.rooms.players)

        keyArray.map(player => {
            let playerEmail = playersObj[player].email
            let userEmail = props.user.user.email
            if (playerEmail === userEmail) {
                ready(player)

            }


            return (console.log(playersObj[player]))
        })
    }
    allReady()





    //make the game read the loacation ove the user by matching the user to the player opject 
    let userLocation = ""
    let playerNum
    let playerStuff
    function set1() {
        userLocation = playersObj.player1.location
        playerNum = 'player1'
        playerStuff = playersObj.player1
    }
    function set2() {
        userLocation = playersObj.player2.location
        playerNum = 'player2'
        playerStuff = playersObj.player2
    }
    function set3() {
        userLocation = playersObj.player3.location
        playerNum = 'player3'
        playerStuff = playersObj.player3
    }
    function set4() {
        userLocation = playersObj.player4.location
        playerNum = 'player4'
        playerStuff = playersObj.player4
    }


    {
        playersObj.player1.email.toString() === props.user.user.email.toString() ? set1() :
            playersObj.player2.email.toString() === props.user.user.email.toString() ? set2() :
                playersObj.player3.email === props.user.user.email ? set3() :
                    playersObj.player4.email === props.user.user.email ? set4() : userLocation = "nope"
    }

    if (playersObj.player2) {


    }
    if (playersObj.player3) {


    }
    if (playersObj.player4) {


    }




    //     props.rooms.players.map(player=>{
    //         let Email= player
    //         console.log(Email)

    //        {Email.email===props.user.user.email ? userLocation=Email.location  : userLocation='no user here'  }
    //     //    {player.email===props.user.user.email ? }
    //    })
    let player = props.location.toString() === userLocation.toString()
  
    function goUp() {
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        let splitY = props.y.split('y')
        let Y = parseInt(splitY[1])
        let splitX = props.x.split('x')
        let X = parseInt(splitX[1])
        let newY = `y${Y - 1}`
        const newRoom = (`x${X}${newY}`)
      
        let opened = props.rooms.GroundFloor[newRoom]

     
        const setRooms = props.changeState

        const GroundFloor = props.rooms.GroundFloor
        const roomStuff = GroundFloor[newRoom]
        

        if (!opened.open) {


            randomGroundFloor(props)
        }
        else {
            moveUp(props)

        }
        function moveUp(props) {
            let movementSpeed = playersObj[playerKey].movementSpeed
            let newMovementSpeed = movementSpeed - 1
            const setRooms = props.changeState
            const doors = props.rooms.doors
            const GroundFloor = props.rooms.GroundFloor
            const roomStuff = GroundFloor[newRoom]
            let newRoomIndex = getRandomInt(max)
            let index = props.rooms.GroundFloorRooms
            let Array = props.rooms.GroundFloorRoomsArray
            let max = Array.length - 1
            let newRoomObject = index[Array[newRoomIndex]]
            setRooms({
                ...props.rooms,
                //here
                players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom, movementSpeed: newMovementSpeed } },


            })


        }


        function randomGroundFloor(props) {

            let movementSpeed = playersObj[playerKey].movementSpeed
            let newMovementSpeed = movementSpeed - 1
            let rArray2 = ['bl', 'tb', 'rb']
            let rArray3 = ['rbl', 'tbl', 'trb']
            let doorString2 = rArray2[getRandomInt(3)]
            let doorString3 = rArray3[getRandomInt(3)]

            const setRooms = props.changeState
            const doors = props.rooms.doors
            const GroundFloor = props.rooms.GroundFloor
            const roomStuff = GroundFloor[newRoom]
            // let max = Object.keys(props.rooms.GroundFloorRooms).length - 1
            let index = props.rooms.GroundFloorRooms
            let Array = props.rooms.GroundFloorRoomsArray
            let max = Array.length
            let newRoomIndex = getRandomInt(max)
            let chosenRoom = Array[newRoomIndex].toString()
            let newRoomObject = index[Array[newRoomIndex]]
            let newRoomsArray = Array.filter(data => data !== chosenRoom)
            
            let events = props.rooms.Event
            let eventsArray = props.rooms.EventArray
            let items= props.rooms.items
            let itemsArray = props.rooms.ItemArray






            if (newRoomObject.doors === 1) {
                let newDoors = 'b'
                if (newRoomObject.card) {
                    newMovementSpeed = 0
                    //draw card here and then put it in a variable and then save it the same time that the player is moved 
                    if (newRoomObject.card === 'o') {
                        //omen draw
                        let omens = props.rooms.Omen
                        let omensArray = props.rooms.OmenArray
                        let omenIndex = getRandomInt(omensArray.length)
                        let max = omensArray.length - 1
                        let randomOmenCard = omensArray[omenIndex]
                        let card = omens[randomOmenCard]
                        let cardObj =
                        {
                            ...card,
                             display: 'shown',
                            type:'Omen',
                            title:randomOmenCard,
                        }
                    








                        let newOmenArray = omensArray.filter(data => data !== randomOmenCard)

                        setRooms({
                            ...props.rooms,
                            OmenArray: newOmenArray,
                            currentCard: cardObj,

                            GroundFloorRoomsArray: newRoomsArray,
                            open: {
                                ...props.rooms.open, [newRoom]: true
                            },

                            //// HERE
                            players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom, movementSpeed: newMovementSpeed } },
                            GroundFloor: {
                                ...GroundFloor, [newRoom]: {
                                    ...roomStuff,
                                    open: true,
                                    numDoors: newRoomObject.doors,
                                    doors: newDoors,
                                    name: newRoomObject.name,
                                    entry: 'b',
                                    card: newRoomObject.card

                                }
                            },
                            doors: { ...doors, [newRoom]: [newDoors] }
                        })
                     

                        //set newOmenArray , 

                    }
                    else if (newRoomObject.card === 'e') {
                        //event draw
                        let Index = getRandomInt(eventsArray.length -1)
                        
                        let randomEventCard = eventsArray[Index]
                        let card = events[randomEventCard]
                        let cardObj =
                        {
                            ...card,
                            display: 'shown',
                            type: 'Event',
                            title: randomEventCard,
                        }
                        let newEventArray = eventsArray.filter(data => data !== randomEventCard)
                       
                        setRooms({
                            ...props.rooms,
                            EventArray:newEventArray,
                            currentCard:cardObj,
        
                            GroundFloorRoomsArray: newRoomsArray,
                            open: {
                                ...props.rooms.open, [newRoom]: true
                            },
        
                            //// HERE
                            players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom, movementSpeed: newMovementSpeed } },
                            GroundFloor: {
                                ...GroundFloor, [newRoom]: {
                                    ...roomStuff,
                                    open: true,
                                    numDoors: newRoomObject.doors,
                                    doors: newDoors,
                                    name: newRoomObject.name,
                                    entry: 'b',
                                    card: newRoomObject.card
        
                                }
                            },
                            doors: { ...doors, [newRoom]: [newDoors] }
                        })

                        
                    }
                    else {
                        //item draw
                        let omens = props.rooms.Omen
                        let omensArray = props.rooms.OmenArray
                        let omenIndex = getRandomInt(omensArray.length)
                        let max = omensArray.length - 1
                        let randomOmenCard = omensArray[omenIndex]
                        let card = omens[randomOmenCard]
                        let cardObj = {
                            ...card,
                            display: 'block'
                        }

                        let newOmenArray = omensArray.filter(data => data !== randomOmenCard)

                        setRooms({
                            ...props.rooms,
                            OmenArray:newOmenArray,
                            currentCard:cardObj,
        
                            GroundFloorRoomsArray: newRoomsArray,
                            open: {
                                ...props.rooms.open, [newRoom]: true
                            },
        
                            //// HERE
                            players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom, movementSpeed: newMovementSpeed } },
                            GroundFloor: {
                                ...GroundFloor, [newRoom]: {
                                    ...roomStuff,
                                    open: true,
                                    numDoors: newRoomObject.doors,
                                    doors: newDoors,
                                    name: newRoomObject.name,
                                    entry: 'b',
                                    card: newRoomObject.card
        
                                }
                            },
                            doors: { ...doors, [newRoom]: [newDoors] }
                        })


                  
                    }

                }

               

              
            }
            else if (newRoomObject.doors === 2) {
                if (newRoomObject.card) {
                    newMovementSpeed = 0

                    if (newRoomObject.card === 'o') {
                        //omen draw
                        let omens = props.rooms.Omen
                        let omensArray = props.rooms.OmenArray
                        let omenIndex = getRandomInt(omensArray.length)
                        let max = omensArray.length - 1
                        let randomOmenCard = omensArray[omenIndex]
                        let card = omens[randomOmenCard]
                        let cardObj = {
                            ...card,
                             display: 'shown',
                            type:'Omen',
                            title:randomOmenCard,
                        }

                        let newOmenArray = omensArray.filter(data => data !== randomOmenCard)
                      

                        setRooms({
                            ...props.rooms,
                            GroundFloorRoomsArray: newRoomsArray,
                            OmenArray:newOmenArray,
                            currentCard:cardObj,
                            open: {
                                ...props.rooms.open, [newRoom]: true
                            },
                            //here
                            players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom, movementSpeed: newMovementSpeed } },
                            GroundFloor: {
                                ...GroundFloor, [newRoom]: {
                                    ...roomStuff,
                                    open: true,
                                    numDoors: newRoomObject.doors,
                                    doors: doorString2,
                                    name: newRoomObject.name,
                                    entry: 'b',
                                    card: newRoomObject.card
        
                                }
                            },
                            doors: { ...doors, [newRoom]: [doorString2] }
                        })
                        

                    }
                    else if (newRoomObject.card === 'e') {
                        //event draw
                        let Index = getRandomInt(eventsArray.length -1)
                        
                        let randomEventCard = eventsArray[Index]
                        let card = events[randomEventCard]
                        let cardObj =
                        {
                            ...card,
                            display: 'shown',
                            type: 'Event',
                            title: randomEventCard,
                        }
                        let newEventArray = eventsArray.filter(data => data !== randomEventCard)
                        setRooms({
                            ...props.rooms,
                            GroundFloorRoomsArray: newRoomsArray,
                            EventArray:newEventArray,
                            currentCard:cardObj,
                            open: {
                                ...props.rooms.open, [newRoom]: true
                            },
                            //here
                            players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom, movementSpeed: newMovementSpeed } },
                            GroundFloor: {
                                ...GroundFloor, [newRoom]: {
                                    ...roomStuff,
                                    open: true,
                                    numDoors: newRoomObject.doors,
                                    doors: doorString2,
                                    name: newRoomObject.name,
                                    entry: 'b',
                                    card: newRoomObject.card
        
                                }
                            },
                            doors: { ...doors, [newRoom]: [doorString2] }
                        })
                    }
                    else {
                        //item draw
                        let omens = props.rooms.Omen
                        let omensArray = props.rooms.OmenArray
                        let omenIndex = getRandomInt(omensArray.length)
                        let max = omensArray.length - 1
                        let randomOmenCard = omensArray[omenIndex]
                        let card = omens[randomOmenCard]
                        let cardObj = {
                            ...card,
                             display: 'shown',
                            type:'Omen',
                            title:randomOmenCard,
                        }

                        let newOmenArray = omensArray.filter(data => data !== randomOmenCard)
                     
                        setRooms({
                            ...props.rooms,
                            GroundFloorRoomsArray: newRoomsArray,
                            OmenArray:newOmenArray,
                            currentCard:cardObj,
                            open: {
                                ...props.rooms.open, [newRoom]: true
                            },
                            //here
                            players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom, movementSpeed: newMovementSpeed } },
                            GroundFloor: {
                                ...GroundFloor, [newRoom]: {
                                    ...roomStuff,
                                    open: true,
                                    numDoors: newRoomObject.doors,
                                    doors: doorString2,
                                    name: newRoomObject.name,
                                    entry: 'b',
                                    card: newRoomObject.card
        
                                }
                            },
                            doors: { ...doors, [newRoom]: [doorString2] }
                        })
                    }

                }

               
            }
            else if (newRoomObject.doors === 3) {

                if (newRoomObject.card) {
                    newMovementSpeed = 0
                    if (newRoomObject.card === 'o') {
                        //omen draw
                        let omens = props.rooms.Omen
                        let omensArray = props.rooms.OmenArray
                        let omenIndex = getRandomInt(omensArray.length)
                        let max = omensArray.length - 1
                        let randomOmenCard = omensArray[omenIndex]
                        let card = omens[randomOmenCard]
                        let cardObj = {
                            ...card,
                             display: 'shown',
                            type:'Omen',
                            title:randomOmenCard,
                        }

                        let newOmenArray = omensArray.filter(data => data !== randomOmenCard)
                     

                    }
                    else if (newRoomObject.card === 'e') {
                        //event draw
                        let Index = getRandomInt(eventsArray.length -1)
                        
                        let randomEventCard = eventsArray[Index]
                        let card = events[randomEventCard]
                        let cardObj =
                        {
                            ...card,
                            display: 'shown',
                            type: 'Event',
                            title: randomEventCard,
                        }
                        let newEventArray = eventsArray.filter(data => data !== randomEventCard)
                    
                        setRooms({
                            ...props.rooms,
                            EventArray:newEventArray,
                            currentCard:cardObj,
                            GroundFloorRoomsArray: newRoomsArray,
                            open: {
                                ...props.rooms.open, [newRoom]: true
                            },
                            //here
                            players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom, movementSpeed: newMovementSpeed } },
                            GroundFloor: {
                                ...GroundFloor, [newRoom]: {
                                    ...roomStuff,
                                    open: true,
                                    numDoors: newRoomObject.doors,
                                    doors: doorString3,
                                    name: newRoomObject.name,
                                    entry: 'b',
                                    card: newRoomObject.card
        
                                }
                            },
                            doors: { ...doors, [newRoom]: [doorString3] }
                        })
                    }
                    else {
                        //item draw
                        let omens = props.rooms.Omen
                        let omensArray = props.rooms.OmenArray
                        let omenIndex = getRandomInt(omensArray.length)
                        let max = omensArray.length - 1
                        let randomOmenCard = omensArray[omenIndex]
                        let card = omens[randomOmenCard]
                        let cardObj = {
                            ...card,
                             display: 'shown',
                            type:'Omen',
                            title:randomOmenCard,
                        }

                        let newOmenArray = omensArray.filter(data => data !== randomOmenCard)
                    
                        setRooms({
                            ...props.rooms,
                            OmenArray:newOmenArray,
                            currentCard:cardObj,
                            GroundFloorRoomsArray: newRoomsArray,
                            open: {
                                ...props.rooms.open, [newRoom]: true
                            },
                            //here
                            players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom, movementSpeed: newMovementSpeed } },
                            GroundFloor: {
                                ...GroundFloor, [newRoom]: {
                                    ...roomStuff,
                                    open: true,
                                    numDoors: newRoomObject.doors,
                                    doors: doorString3,
                                    name: newRoomObject.name,
                                    entry: 'b',
                                    card: newRoomObject.card
        
                                }
                            },
                            doors: { ...doors, [newRoom]: [doorString3] }
                        })
                    }

                }

               
            }
            else {
                if (newRoomObject.card) {
                    newMovementSpeed = 0
                    if (newRoomObject.card === 'o') {
                        //omen draw
                        let omens = props.rooms.Omen
                        let omensArray = props.rooms.OmenArray
                        let omenIndex = getRandomInt(omensArray.length)
                        let max = omensArray.length - 1
                        let randomOmenCard = omensArray[omenIndex]
                        let card = omens[randomOmenCard]
                        let cardObj = {
                            ...card,
                             display: 'shown',
                            type:'Omen',
                            title:randomOmenCard,
                        }

                        let newOmenArray = omensArray.filter(data => data !== randomOmenCard)
                   
                        setRooms({
                            ...props.rooms,
                            GroundFloorRoomsArray: newRoomsArray,
                            OmenArray:newOmenArray,
                            currentCard:cardObj,
                            open: {
                                ...props.rooms.open, [newRoom]: true
                            },
                            //here
                            players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom, movementSpeed: newMovementSpeed } },
                            GroundFloor: {
                                ...GroundFloor, [newRoom]: {
                                    ...roomStuff,
                                    open: true,
                                    numDoors: 4,
                                    doors: 'trbl',
                                    name: newRoomObject.name,
                                    entry: 'b',
                                    card: newRoomObject.card
        
                                }
                            },
                            doors: { ...doors, [newRoom]: [doorString3] }
                        })

                    }
                    else if (newRoomObject.card === 'e') {
                        //event draw
                        let Index = getRandomInt(eventsArray.length -1)
                        
                        let randomEventCard = eventsArray[Index]
                        let card = events[randomEventCard]
                        let cardObj =
                        {
                            ...card,
                            display: 'shown',
                            type: 'Event',
                            title: randomEventCard,
                        }
                        let newEventArray = eventsArray.filter(data => data !== randomEventCard)
                 
                        setRooms({
                            ...props.rooms,
                            GroundFloorRoomsArray: newRoomsArray,
                            EventArray:newEventArray,
                            currentCard:cardObj,
                            open: {
                                ...props.rooms.open, [newRoom]: true
                            },
                            //here
                            players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom, movementSpeed: newMovementSpeed } },
                            GroundFloor: {
                                ...GroundFloor, [newRoom]: {
                                    ...roomStuff,
                                    open: true,
                                    numDoors: 4,
                                    doors: 'trbl',
                                    name: newRoomObject.name,
                                    entry: 'b',
                                    card: newRoomObject.card
        
                                }
                            },
                            doors: { ...doors, [newRoom]: [doorString3] }
                        })
                    }
                    else {
                        //item draw
                        let omens = props.rooms.Omen
                        let omensArray = props.rooms.OmenArray
                        let omenIndex = getRandomInt(omensArray.length)
                        let max = omensArray.length - 1
                        let randomOmenCard = omensArray[omenIndex]
                        let card = omens[randomOmenCard]
                        let cardObj = {
                            ...card,
                             display: 'shown',
                            type:'Omen',
                            title:randomOmenCard,
                        }

                        let newOmenArray = omensArray.filter(data => data !== randomOmenCard)
                 
                        setRooms({
                            ...props.rooms,
                            GroundFloorRoomsArray: newRoomsArray,
                            OmenArray:newOmenArray,
                            currentCard:cardObj,
                            open: {
                                ...props.rooms.open, [newRoom]: true
                            },
                            //here
                            players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom, movementSpeed: newMovementSpeed } },
                            GroundFloor: {
                                ...GroundFloor, [newRoom]: {
                                    ...roomStuff,
                                    open: true,
                                    numDoors: 4,
                                    doors: 'trbl',
                                    name: newRoomObject.name,
                                    entry: 'b',
                                    card: newRoomObject.card
        
                                }
                            },
                            doors: { ...doors, [newRoom]: [doorString3] }
                        })
                    }

                }
                else{
                    setRooms({
                        ...props.rooms,
                        GroundFloorRoomsArray: newRoomsArray,
                        open: {
                            ...props.rooms.open, [newRoom]: true
                        },
                        players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom, movementSpeed:newMovementSpeed } },
                        GroundFloor: {
                            ...GroundFloor, [newRoom]: {
                                ...roomStuff,
                                open: true,
                                numDoors: 4,
                                doors: 'trbl',
                                name: newRoomObject.name,
                                entry: 't'
                                , card: newRoomObject.card
    
                            }
                        },
                        doors: { ...doors, [newRoom]: [doorString3] }
                    })
                }
               

            }

            //check to see what the card is that needs to be drawn here 














        }







    }


    return (<> {
        player ?
            playersObj[playerKey].movementSpeed > 0 ?
                playersObj[playerKey].turn ?
                    <><button disabled={false} onClick={goUp} className={`topDoor  T${props.doors}`} ></button> </> :
                    <><button disabled={true} onClick={goUp} className={`topDoor disabledT T${props.doors}`} ></button> </> :
                <><button disabled={true} onClick={goUp} className={`topDoor disabledT T${props.doors}`} ></button> </> :
            <><button disabled={true} onClick={goUp} className={`topDoor disabledT T${props.doors}`} ></button> </>
    }
    </>)
}

export default TopDoor