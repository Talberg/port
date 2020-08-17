/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import React from 'react'
import './Room.scss'
import { PromiseProvider } from 'mongoose'
import LeftDoor from '../Doors/LeftDoor/LeftDoor'
import RightDoor from '../Doors/RightDoor/RightDoor'
import BottomDoor from '../Doors/BottomDoor/BottomDoor'
import TopDoor from '../Doors/TopDoor/TopDoor'
import RoomName from '../RoomName/RoomName'
import CharacterHolder from '../CharacterHolder/CharacterHolder'


function Room(props) {
    let coor = props.coor

    let doorString = props.rooms.doors[coor]

    let currentRoom = props.rooms.GroundFloor[coor]

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }



    function pickRoom() {
        switch (currentRoom.numDoors) {
            // eslint-disable-next-line default-case
            case 1: switch (currentRoom.entry) {
                case 'r': return (<div className={`${props.x} ${props.color} room ${props.y}`}><RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                                <CharacterHolder doorLetters={currentRoom.doors} doorCount={1} user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></CharacterHolder>

                </div>);
                case 't': return (<div className={`${props.x} ${props.color} room ${props.y}`}><TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />         
                       <CharacterHolder doorLetters={currentRoom.doors} doorCount={1} user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></CharacterHolder>
                </div>);
                case 'b': return (<div className={`${props.x} ${props.color} room ${props.y}`}><BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                                <CharacterHolder doorLetters={currentRoom.doors} doorCount={1} user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></CharacterHolder>
 </div>);
                case 'l': return (<div className={`${props.x} ${props.color} room ${props.y}`}><LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                                <CharacterHolder doorLetters={currentRoom.doors} doorCount={1} user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></CharacterHolder>
</div>);

            };
            // eslint-disable-next-line no-fallthrough
            // eslint-disable-next-line default-case
            // eslint-disable-next-line no-fallthrough
            // eslint-disable-next-line default-case
            // eslint-disable-next-line no-fallthrough
            // eslint-disable-next-line default-case
            // eslint-disable-next-line no-fallthrough
            case 2: switch (props.room.entry) {
                case 'r':
                    // eslint-disable-next-line default-case
                    switch (currentRoom.doors) {
                        case 'rl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                            <RightDoor  user={props.user} save={props.save} doors='rl' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                            <LeftDoor user={props.user} save={props.save} doors='rl' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                            <CharacterHolder doorLetters={currentRoom.doors} doorCount={2} doorCount={2} user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></CharacterHolder>

                        </div>);
                        case 'rb': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                            <RightDoor  user={props.user} save={props.save} doors='rb' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                            <BottomDoor user={props.user} save={props.save} doors='rb' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                            <CharacterHolder doorLetters={currentRoom.doors} doorCount={2} user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></CharacterHolder>

                        </div>);
                        case 'tr': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                            <TopDoor user={props.user} save={props.save} doors='tr' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                            <RightDoor  user={props.user} save={props.save} doors='tr' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                            <CharacterHolder doorLetters={currentRoom.doors} doorCount={2} user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></CharacterHolder>

                        </div>);

                    };
                // eslint-disable-next-line no-fallthrough
                case 't': switch (currentRoom.doors) {
                    case 'tr': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <TopDoor user={props.user} save={props.save} doors='tr' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                        <RightDoor  user={props.user} save={props.save} doors='tr' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                        <CharacterHolder doorLetters={currentRoom.doors} doorCount={2} user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></CharacterHolder>

                    </div>);
                    case 'tb': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                        <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                        <CharacterHolder doorLetters={currentRoom.doors} doorCount={2} user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></CharacterHolder>

                    </div>);
                    case 'tl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                        <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                        <CharacterHolder doorLetters={currentRoom.doors} doorCount={2} user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></CharacterHolder>


                    </div>);


                };
                // eslint-disable-next-line no-fallthrough
                case 'b': switch (currentRoom.doors) {
                    case 'tb': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                        <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                        <CharacterHolder doorLetters={currentRoom.doors} doorCount={2} user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></CharacterHolder>

                    </div>);
                    case 'rb': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                        <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                        <CharacterHolder doorLetters={currentRoom.doors} doorCount={2} user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></CharacterHolder>

                    </div>);
                    case 'bl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                        <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                        <CharacterHolder doorLetters={currentRoom.doors} doorCount={2} user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></CharacterHolder>

                    </div>);

                }
                    ;
                case 'l': switch (currentRoom.doors) {
                    case 'bl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                        <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                        <CharacterHolder doorLetters={currentRoom.doors} doorCount={2} user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></CharacterHolder>

                    </div>);
                    case 'tl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                        <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                        <CharacterHolder doorLetters={currentRoom.doors} doorCount={2} user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></CharacterHolder>


                    </div>);
                    case 'rl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <RightDoor  user={props.user} save={props.save} doors='rl' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                        <LeftDoor user={props.user} save={props.save} doors='rl' rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                        <CharacterHolder doorLetters={currentRoom.doors} doorCount={2} user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></CharacterHolder>

                    </div>);
                };

            };
            case 3: switch (props.room.entry) {
                case 't': switch (currentRoom.doors) {
                    case 'trb': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                        <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                        <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                        <CharacterHolder doorLetters={currentRoom.doors} doorCount={3} doorCount={3} user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></CharacterHolder>

                    </div>);
                    case 'trl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                        <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                        <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                        <CharacterHolder doorLetters={currentRoom.doors} doorCount={3} user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></CharacterHolder>

                    </div>);
                    case 'tbl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                        <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                        <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                        <CharacterHolder doorLetters={currentRoom.doors} doorCount={3} user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></CharacterHolder>

                    </div>);

                }
                case 'r': switch (currentRoom.doors) {
                    case 'rbl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                        <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                        <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                        <CharacterHolder doorLetters={currentRoom.doors} doorCount={3} user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></CharacterHolder>

                    </div>);
                    case 'trl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                        <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                        <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                        <CharacterHolder doorLetters={currentRoom.doors} doorCount={3} user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></CharacterHolder>

                    </div>);
                    case 'trl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                        <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                        <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                        <CharacterHolder doorLetters={currentRoom.doors} doorCount={3} user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></CharacterHolder>

                    </div>);
                        case 'trb': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                        <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                        <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                        <CharacterHolder doorLetters={currentRoom.doors} doorCount={3} user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></CharacterHolder>

                    </div>);


                }
                case 'l': switch (currentRoom.doors) {
                    case 'rbl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                        <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                        <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                        <CharacterHolder doorLetters={currentRoom.doors} doorCount={3} user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></CharacterHolder>

                    </div>);
                    case 'trl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                        <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                        <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                        <CharacterHolder doorLetters={currentRoom.doors} doorCount={3} user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></CharacterHolder>

                    </div>);
                    case 'trb': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                        <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                        <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                        <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                        <CharacterHolder doorLetters={currentRoom.doors} doorCount={3} user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></CharacterHolder>

                    </div>);
                          case 'tbl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                          <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                          <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                          <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                          <CharacterHolder doorLetters={currentRoom.doors} doorCount={3} user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></CharacterHolder>

                      </div>);
                }
                case 'b' : switch(currentRoom.doors){
                    case 'trb': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                    <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                    <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                    <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                    <CharacterHolder doorLetters={currentRoom.doors} doorLetters={currentRoom.doors} doorCount={3} user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></CharacterHolder>

                </div>);
                case 'rbl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                <CharacterHolder doorCount={3} doorLetters={currentRoom.doors} user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></CharacterHolder>

            </div>);
                case 'trl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                <CharacterHolder doorCount={3} doorLetters={currentRoom.doors} user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></CharacterHolder>

            </div>);
                  case 'tbl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                  <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                  <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                  <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                  <CharacterHolder doorCount={3} doorLetters={currentRoom.doors} user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></CharacterHolder>

              </div>);
                    
                }


            };
            case 4: return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
                <CharacterHolder doorLetters={currentRoom.doors} doorCount={4} user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></CharacterHolder>
            </div>);

            case 'tr': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
            </div>);
            case 'tb': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
            </div>);
            case 'tl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>

            </div>);
            case 'rb': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
            </div>);
            case 'rl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
            </div>);
            case 'bl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
            </div>);
            case 'trb': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
            </div>);
            case 'trl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
            </div>);
            case 'tbl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
            </div>);
            case 'rbl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>
                <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
            </div>);
            case 'trbl': return (<div className={`${props.x} ${props.color} room ${props.y}`}>>
                <TopDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} />
                <RightDoor  user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></RightDoor>
                <BottomDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`}></BottomDoor>
                <LeftDoor user={props.user} save={props.save} doors={currentRoom.doors} rooms={props.rooms} changeState={props.changeState} open={props.open} x={`${props.x} `} y={`${props.y}`} location={`${props.coor}`} ></LeftDoor>
            </div>);






            // eslint-disable-next-line default-case

            // eslint-disable-next-line no-fallthrough
         
            default: return (<div className={`${props.x} ${props.color} room ${props.y}`}></div>)


        }
    }





    return (<>

        {props.open ? <><div className='playerHolder' > {pickRoom()} </div> </> : <></>}
    </>)
}

export default Room