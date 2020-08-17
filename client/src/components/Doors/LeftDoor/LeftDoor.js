import React from 'react'
import './LeftDoor.scss'
import { get } from 'mongoose';
import CardDisplay from '../../CardDisplay/CardDisplay';


function LeftDoor(props) {

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
    }


    {
        playersObj.player1.email.toString() === props.user.user.email.toString() ? set1() :
        playersObj.player2.email.toString() === props.user.user.email.toString() ? set2() :
            playersObj.player3.email === props.user.user.email ? set3() :
                playersObj.player4.email === props.user.user.email ? set4() : userLocation = "nope"
    }


    let player = props.location.toString() === userLocation.toString()
    console.log(props.location.toString())
    console.log(userLocation.toString())
    console.log(player)
    //function that will get a random number that can be use as the index to grab a room by "random"
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    //function that will make the player move left and is called every time the left button is clicked
    function goLeft() {

        let Array = props.rooms.GroundFloorRoomsArray

        let splitX = props.x.split('x')
        let newX = `x${splitX[1] - 1}`
        //new coor of the room that the player is moving to 
        const newRoom = (newX + props.y)
        //accesses the new rooms values and puts them in the open variable 
        let opened = props.rooms.GroundFloor[newRoom]

        console.log(`opened.open: ${opened.open} `)

        //if the new room is not open then the get new 
        if (!opened.open) {
            console.log(props.rooms.GroundFloorRoomsArray.length)
            if(props.rooms.GroundFloorRoomsArray.length){

            }

            randomGroundFloor(props)


        }
        else {

            moveLeft(props)
        }

        function moveLeft(props) {
            let movementSpeed = playersObj[playerKey].movementSpeed
            let Array = props.rooms.GroundFloorRoomsArray
            let newMovementSpeed = movementSpeed - 1

            const setRooms = props.changeState
            const doors = props.rooms.doors
            const GroundFloor = props.rooms.GroundFloor
            const roomStuff = GroundFloor[newRoom]
            let max = Object.keys(props.rooms.GroundFloorRooms).length - 1
            let newRoomIndex = getRandomInt(max)
            let index = props.rooms.GroundFloorRooms
            let newRoomObject = index[Array[newRoomIndex]]
            setRooms({
                ...props.rooms,
                players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom ,movementSpeed:newMovementSpeed} },


            })


        }

        function randomGroundFloor(props) {
            let movementSpeed = playersObj[playerKey].movementSpeed
            let newMovementSpeed = movementSpeed - 1
            let rArray2 = ['rl', 'rb', 'tr']
            let rArray3 = ['trl', 'trb', 'rbl']
            let doorString2 = rArray2[getRandomInt(3)]
            let doorString3 = rArray3[getRandomInt(3)]

            const setRooms = props.changeState
            const doors = props.rooms.doors
            const GroundFloor = props.rooms.GroundFloor
            const roomStuff = GroundFloor[newRoom]
            let index = props.rooms.GroundFloorRooms
            let max = Array.length - 1
            let newRoomIndex = getRandomInt(max)
            let chosenRoom = Array[newRoomIndex].toString()
            let newRoomObject = index[Array[newRoomIndex]]
            let newRoomsArray = Array.filter(data => data !== chosenRoom)
            let omens = props.rooms.Omen
            console.log(` max :${max}`)
            console.log(`Array${Array}`)
            let events = props.rooms.Event
            let eventsArray = props.rooms.EventArray
            let items= props.rooms.items
            let itemsArray = props.rooms.ItemArray


            // setRooms({
            //     ...props.rooms,
            //     GroundFloorRoomsArray:newRoomsArray,
            //      open: {
            //         ...props.rooms.open, [newRoom]: true
            //     },
            //     players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom } },
            //     GroundFloor: {
            //         ...GroundFloor, [newRoom]: {
            //             ...roomStuff,
            //             open: true,
            //             numDoors: 4,
            //             doors: 'trbl',
            //             name: newRoomObject.name,
            //             entry: 't'

            //         }
            //     },
            //     doors: { ...doors, [newRoom]: [doorString3] }
            // })

            if (newRoomObject.doors === 1) {
                let newDoors = 'r'
                if(newRoomObject.card){
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
                                    entry: 'r'
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
                                    entry: 'r'
                                    , card: newRoomObject.card

                                }
                            },
                            doors: { ...doors, [newRoom]: [newDoors] }
                        })



                    }
                    if (newRoomObject.card === 'i') {
                        //omen draw
                      
                       
                        let Index = getRandomInt(itemsArray.length)
                        let max = itemsArray.length - 1
                        let randomItemCard = itemsArray[Index]
                        let card = items[randomItemCard]
                        let cardObj =
                        {
                            ...card,
                            display: 'shown',
                            type: 'Item',
                            title: randomItemCard,
                        }
                        let newItemArray = itemsArray.filter(data => data !== randomItemCard)



                        setRooms({
                            ...props.rooms,
                            EventArray: newItemArray,
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
                                    entry: 'r'
                                    , card: newRoomObject.card

                                }
                            },
                            doors: { ...doors, [newRoom]: [newDoors] }
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
                                numDoors: newRoomObject.doors,
                                doors: newDoors,
                                name: newRoomObject.name,
                                entry: 'r'
                                , card: newRoomObject.card

                            }
                        },
                        doors: { ...doors, [newRoom]: [newDoors] }
                    })

                }

              
            }
            else if (newRoomObject.doors === 2) {
                if(newRoomObject.card){
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
                            players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom ,movementSpeed:newMovementSpeed} },
                            GroundFloor: {
                                ...GroundFloor, [newRoom]: {
                                    ...roomStuff,
                                    open: true,
                                    numDoors: newRoomObject.doors,
                                    doors: doorString2,
                                    name: newRoomObject.name,
                                    entry: 'r'
        
                                }
                            },
                            doors: { ...doors, [newRoom]: [doorString2] }
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
                            players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom ,movementSpeed:newMovementSpeed} },
                            GroundFloor: {
                                ...GroundFloor, [newRoom]: {
                                    ...roomStuff,
                                    open: true,
                                    numDoors: newRoomObject.doors,
                                    doors: doorString2,
                                    name: newRoomObject.name,
                                    entry: 'r'
        
                                }
                            },
                            doors: { ...doors, [newRoom]: [doorString2] }
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
                            players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom ,movementSpeed:newMovementSpeed} },
                            GroundFloor: {
                                ...GroundFloor, [newRoom]: {
                                    ...roomStuff,
                                    open: true,
                                    numDoors: newRoomObject.doors,
                                    doors: doorString2,
                                    name: newRoomObject.name,
                                    entry: 'r'
        
                                }
                            },
                            doors: { ...doors, [newRoom]: [doorString2] }
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
                        players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom ,movementSpeed:newMovementSpeed} },
                        GroundFloor: {
                            ...GroundFloor, [newRoom]: {
                                ...roomStuff,
                                open: true,
                                numDoors: newRoomObject.doors,
                                doors: doorString2,
                                name: newRoomObject.name,
                                entry: 'r'
    
                            }
                        },
                        doors: { ...doors, [newRoom]: [doorString2] }
                    })
                }

               
                if(newRoomObject.card){
                   //draw card function here using a switch case 

                
                }
            }
            else if (newRoomObject.doors === 3) {

                if(newRoomObject.card){
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
                            players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom ,movementSpeed:newMovementSpeed} },
                            GroundFloor: {
                                ...GroundFloor, [newRoom]: {
                                    ...roomStuff,
                                    open: true,
                                    numDoors: newRoomObject.doors,
                                    doors: doorString3,
                                    name: newRoomObject.name,
                                    entry: 'r'
        
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
                            players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom ,movementSpeed:newMovementSpeed} },
                            GroundFloor: {
                                ...GroundFloor, [newRoom]: {
                                    ...roomStuff,
                                    open: true,
                                    numDoors: newRoomObject.doors,
                                    doors: doorString3,
                                    name: newRoomObject.name,
                                    entry: 'r'
        
                                }
                            },
                            doors: { ...doors, [newRoom]: [doorString3] }
                        })



                    }
                    if (newRoomObject.card === 'i') {
                        //omen draw
                        let Index = getRandomInt(itemsArray.length)
                        let max = itemsArray.length - 1
                        let randomItemCard = itemsArray[Index]
                        let card = items[randomItemCard]
                        let cardObj =
                        {
                            ...card,
                            display: 'shown',
                            type: 'Item',
                            title: randomItemCard,
                        }
                        let newItemArray = itemsArray.filter(data => data !== randomItemCard)

                        setRooms({
                    
                            ...props.rooms,
                            EventArray: newItemArray,
                                    currentCard: cardObj,
                            GroundFloorRoomsArray: newRoomsArray,
                            open: {
                                ...props.rooms.open, [newRoom]: true
                            },
                            players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom ,movementSpeed:newMovementSpeed} },
                            GroundFloor: {
                                ...GroundFloor, [newRoom]: {
                                    ...roomStuff,
                                    open: true,
                                    numDoors: newRoomObject.doors,
                                    doors: doorString3,
                                    name: newRoomObject.name,
                                    entry: 'r'
        
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
                    players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom ,movementSpeed:newMovementSpeed} },
                    GroundFloor: {
                        ...GroundFloor, [newRoom]: {
                            ...roomStuff,
                            open: true,
                            numDoors: newRoomObject.doors,
                            doors: doorString3,
                            name: newRoomObject.name,
                            entry: 'r'

                        }
                    },
                    doors: { ...doors, [newRoom]: [doorString3] }
                })

                }

              
            }
            else {
                if(newRoomObject.card){
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
                            players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom,movementSpeed:newMovementSpeed } },
                            GroundFloor: {
                                ...GroundFloor, [newRoom]: {
                                    ...roomStuff,
                                    open: true,
                                    numDoors: 4,
                                    doors: 'trbl',
                                    name: newRoomObject.name,
                                    entry: 'r'
        
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
                            players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom,movementSpeed:newMovementSpeed } },
                            GroundFloor: {
                                ...GroundFloor, [newRoom]: {
                                    ...roomStuff,
                                    open: true,
                                    numDoors: 4,
                                    doors: 'trbl',
                                    name: newRoomObject.name,
                                    entry: 'r'
        
                                }
                            },
                            doors: { ...doors, [newRoom]: [doorString3] }
                        })


                    }
                    if (newRoomObject.card === 'i') {
                        //omen draw
                        let Index = getRandomInt(itemsArray.length)
                        let max = itemsArray.length - 1
                        let randomItemCard = itemsArray[Index]
                        let card = items[randomItemCard]
                        let cardObj =
                        {
                            ...card,
                            display: 'shown',
                            type: 'Item',
                            title: randomItemCard,
                        }
                        let newItemArray = itemsArray.filter(data => data !== randomItemCard)



                        setRooms({
                            ...props.rooms,
                            EventArray: newItemArray,
                            currentCard: cardObj,
                            GroundFloorRoomsArray: newRoomsArray,
                            open: {
                                ...props.rooms.open, [newRoom]: true
                            },
                            players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom,movementSpeed:newMovementSpeed } },
                            GroundFloor: {
                                ...GroundFloor, [newRoom]: {
                                    ...roomStuff,
                                    open: true,
                                    numDoors: 4,
                                    doors: 'trbl',
                                    name: newRoomObject.name,
                                    entry: 'r'
        
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
                        players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom,movementSpeed:newMovementSpeed } },
                        GroundFloor: {
                            ...GroundFloor, [newRoom]: {
                                ...roomStuff,
                                open: true,
                                numDoors: 4,
                                doors: 'trbl',
                                name: newRoomObject.name,
                                entry: 'r'
    
                            }
                        },
                        doors: { ...doors, [newRoom]: [doorString3] }
                    })
                }
                

            }










            // setRooms({
            //     ...props.rooms, open: {
            //         ...props.rooms.open, [newRoom]: true
            //     },
            //     players:{player1:{location:newRoom}},
            //     GroundFloor: {
            //         ...GroundFloor, [newRoom]: {
            //             ...roomStuff,
            //             open: true,
            //             numDoors: newRoomObject.doors,
            //             doors: doorString3,
            //             name: newRoomObject.name,
            //             entry: 'r'

            //         }
            //     },
            //     doors: { ...doors, [newRoom]: [doorString3] }
            // })

        }






    }
    return (

        <>

            {
                player ?
                playersObj[playerKey].movementSpeed > 0 ? 
                    playersObj[playerKey].turn ?
                    <><button disabled={false} onClick={goLeft} className={`leftDoor L${props.doors}`} ></button> </> :
                    <><button disabled={true} onClick={goLeft} className={`leftDoor disabledL L${props.doors}`} ></button></> :
                    <><button disabled={true} onClick={goLeft} className={`leftDoor disabledL L${props.doors}`} ></button> </>:
                    <><button disabled={true} onClick={goLeft} className={`leftDoor disabledL L${props.doors}`} ></button> </>
                    }
        </>


    )
}

export default LeftDoor