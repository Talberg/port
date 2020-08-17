import React from 'react'
import './BottomDoor.scss'

function BottomDoor(props) {

    let playerKey
    let playersObj = props.rooms.players
    let keyArray

    function ready(userEmail) {
        playerKey = userEmail

        console.log(player)
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
        //build out all 6 

    }


    {
        playersObj.player1.email.toString() === props.user.user.email.toString() ? set1() :
            playersObj.player2.email.toString() === props.user.user.email.toString() ? set2() :
                playersObj.player3.email === props.user.user.email ? set3() :
                    playersObj.player4.email === props.user.user.email ? set4() : userLocation = "nope"
    }

    let player = props.location.toString() === userLocation.toString()
    let player2 = false
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    function goDown() {


        // make the moveSpeed of the current player 
        let currentMoveSpeed = playersObj[playerNum]
        let newMoveSpeed = player

        let splitY = props.y.split('y')
        let Y = parseInt(splitY[1])
        let splitX = props.x.split('x')
        let X = parseInt(splitX[1])
        let newY = `y${Y + 1}`
        const newRoom = (`x${X}${newY}`)

        console.log(newRoom)
        const setRooms = props.changeState
        const open = props.rooms.open
        const doors = props.rooms.doors
        const GroundFloor = props.rooms.GroundFloor
        const roomStuff = GroundFloor[newRoom]
        let opened = props.rooms.GroundFloor[newRoom]
        console.log(doors)


        if (!opened.open) {
            randomGroundFloor(props)


        }
        else {
            moveDown(props)
        }

        function moveDown(props) {

            //movemnet speed number 
            let currentMoveSpeed = props.rooms.players[playerNum]
            console.log(currentMoveSpeed.movementSpeed)
            newMoveSpeed = currentMoveSpeed.movementSpeed - 1
            console.log(newMoveSpeed)

            const setRooms = props.changeState
            setRooms({
                ...props.rooms,
                players: {
                    ...playersObj, [playerNum]: {
                        ...playerStuff,
                        location: newRoom,
                        movementSpeed: newMoveSpeed,
                    }
                },


            })


        }



        function randomGroundFloor(props) {
            let movementSpeed = playersObj[playerKey].movementSpeed
            let newMovementSpeed = movementSpeed - 1
            let rArray2 = ['tl', 'tb', 'tr']
            let rArray3 = ['trl', 'trb', 'tbl']
            let doorString2 = rArray2[getRandomInt(3)]
            let doorString3 = rArray3[getRandomInt(3)]

            const setRooms = props.changeState
            const doors = props.rooms.doors
            const GroundFloor = props.rooms.GroundFloor
            const roomStuff = GroundFloor[newRoom]
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


            console.log(` max :${max}`)
            console.log(`Array${Array}`)
            console.log(newRoomIndex)
            console.log(newRoomObject)




            if (newRoomObject.doors === 1) {
                let newDoors = 't'
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
                        let cardObj =
                        {
                            ...card,
                            display: 'shown',
                            type: 'Omen',
                            title: randomOmenCard,
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
                            players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom, movementSpeed: newMovementSpeed } },
                            GroundFloor: {
                                ...GroundFloor, [newRoom]: {
                                    ...roomStuff,
                                    open: true,
                                    numDoors: newRoomObject.doors,
                                    doors: newDoors,
                                    name: newRoomObject.name,
                                    entry: 't'
                                    , card: newRoomObject.card

                                }
                            },
                            doors: { ...doors, [newRoom]: [newDoors] }
                        })



                    }
                    if (newRoomObject.card === 'e') {
                        //omen draw
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
                            EventArray: newEventArray,
                            currentCard: cardObj,
                            GroundFloorRoomsArray: newRoomsArray,
                            open: {
                                ...props.rooms.open, [newRoom]: true
                            },
                            players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom, movementSpeed: newMovementSpeed } },
                            GroundFloor: {
                                ...GroundFloor, [newRoom]: {
                                    ...roomStuff,
                                    open: true,
                                    numDoors: newRoomObject.doors,
                                    doors: newDoors,
                                    name: newRoomObject.name,
                                    entry: 't'
                                    , card: newRoomObject.card

                                }
                            },
                            doors: { ...doors, [newRoom]: [newDoors] }
                        })



                    }
                    if (newRoomObject.card === 'i') {
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
                            type: 'Omen',
                            title: randomOmenCard,
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
                            players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom, movementSpeed: newMovementSpeed } },
                            GroundFloor: {
                                ...GroundFloor, [newRoom]: {
                                    ...roomStuff,
                                    open: true,
                                    numDoors: newRoomObject.doors,
                                    doors: newDoors,
                                    name: newRoomObject.name,
                                    entry: 't'
                                    , card: newRoomObject.card

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
                        let cardObj =
                        {
                            ...card,
                            display: 'shown',
                            type: 'Omen',
                            title: randomOmenCard,
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
                            players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom, movementSpeed: newMovementSpeed } },
                            GroundFloor: {
                                ...GroundFloor, [newRoom]: {
                                    ...roomStuff,
                                    open: true,
                                    numDoors: newRoomObject.doors,
                                    doors: doorString2,
                                    name: newRoomObject.name,
                                    entry: 't'
                                    , card: newRoomObject.card,
        
        
                                }
                            },
                            doors: { ...doors, [newRoom]: [] }
                        })



                        



                    }
                    if (newRoomObject.card === 'e') {
                        //omen draw
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
                            EventArray: newEventArray,
                            currentCard: cardObj,
                            GroundFloorRoomsArray: newRoomsArray,
                            open: {
                                ...props.rooms.open, [newRoom]: true
                            },
                            players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom, movementSpeed: newMovementSpeed } },
                            GroundFloor: {
                                ...GroundFloor, [newRoom]: {
                                    ...roomStuff,
                                    open: true,
                                    numDoors: newRoomObject.doors,
                                    doors: doorString2,
                                    name: newRoomObject.name,
                                    entry: 't'
                                    , card: newRoomObject.card,
        
        
                                }
                            },
                            doors: { ...doors, [newRoom]: [] }
                        })



                        



                    }
                    if (newRoomObject.card === 'i') {
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
                            type: 'Omen',
                            title: randomOmenCard,
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
                            players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom, movementSpeed: newMovementSpeed } },
                            GroundFloor: {
                                ...GroundFloor, [newRoom]: {
                                    ...roomStuff,
                                    open: true,
                                    numDoors: newRoomObject.doors,
                                    doors: doorString2,
                                    name: newRoomObject.name,
                                    entry: 't'
                                    , card: newRoomObject.card,
        
        
                                }
                            },
                            doors: { ...doors, [newRoom]: [] }
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
                        let cardObj =
                        {
                            ...card,
                            display: 'shown',
                            type: 'Omen',
                            title: randomOmenCard,
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
                            players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom, movementSpeed: newMovementSpeed } },
                            GroundFloor: {
                                ...GroundFloor, [newRoom]: {
                                    ...roomStuff,
                                    open: true,
                                    numDoors: newRoomObject.doors,
                                    doors: doorString3,
                                    name: newRoomObject.name,
                                    entry: 't'
                                    , card: newRoomObject.card
        
                                }
                            },
                            doors: { ...doors, [newRoom]: [doorString3] }
                        })



                        



                    }
                    if (newRoomObject.card === 'e') {
                        //omen draw
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
                            EventArray: newEventArray,
                            currentCard: cardObj,
                            GroundFloorRoomsArray: newRoomsArray,
                            open: {
                                ...props.rooms.open, [newRoom]: true
                            },
                            players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom, movementSpeed: newMovementSpeed } },
                            GroundFloor: {
                                ...GroundFloor, [newRoom]: {
                                    ...roomStuff,
                                    open: true,
                                    numDoors: newRoomObject.doors,
                                    doors: doorString3,
                                    name: newRoomObject.name,
                                    entry: 't'
                                    , card: newRoomObject.card
        
                                }
                            },
                            doors: { ...doors, [newRoom]: [doorString3] }
                        })



                        



                    }
                    if (newRoomObject.card === 'i') {
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
                            type: 'Omen',
                            title: randomOmenCard,
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
                            players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom, movementSpeed: newMovementSpeed } },
                            GroundFloor: {
                                ...GroundFloor, [newRoom]: {
                                    ...roomStuff,
                                    open: true,
                                    numDoors: newRoomObject.doors,
                                    doors: doorString3,
                                    name: newRoomObject.name,
                                    entry: 't'
                                    , card: newRoomObject.card
        
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
                        let cardObj =
                        {
                            ...card,
                            display: 'shown',
                            type: 'Omen',
                            title: randomOmenCard,
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
                            players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom, movementSpeed: newMovementSpeed } },
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
                    if (newRoomObject.card === 'e') {
                        //omen draw
                           
                        let Index = getRandomInt(eventsArray.length)
                        
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
                            EventArray: newEventArray,
                            currentCard: cardObj,
                            GroundFloorRoomsArray: newRoomsArray,
                            open: {
                                ...props.rooms.open, [newRoom]: true
                            },
                            players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom, movementSpeed: newMovementSpeed } },
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
                    if (newRoomObject.card === 'i') {
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
                            type: 'Omen',
                            title: randomOmenCard,
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
                            players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom, movementSpeed: newMovementSpeed } },
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
                else{
                    setRooms({
                        ...props.rooms,
                    
                        GroundFloorRoomsArray: newRoomsArray,
                        open: {
                            ...props.rooms.open, [newRoom]: true
                        },
                        players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom, movementSpeed: newMovementSpeed } },
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











        }












    }

    //if movement speed is  < 0
    return (<>
        {
            player ?
                playersObj[playerKey].movementSpeed > 0 ?
                    playersObj[playerKey].turn ?
                        <><button disabled={false} onClick={goDown} className={`bottomDoor B${props.doors}`} ></button> </> :
                        <> <button disabled={true} onClick={goDown} className={`bottomDoor disabledB B${props.doors}`} ></button> </> :
                    <><button disabled={true} onClick={goDown} className={`bottomDoor disabledB B${props.doors}`} ></button></> :
                <><button disabled={true} onClick={goDown} className={`bottomDoor disabledB B${props.doors}`} ></button></>}
    </>)
}

export default BottomDoor