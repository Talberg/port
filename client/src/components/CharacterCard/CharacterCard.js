import React from 'react'
import './CharacterCard.scss'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'

function CharacterCard(props) {
    let nope
    let player
    let playersObj = props.rooms.players
    function ready(userEmail) {
        player = userEmail
        console.log(player)
    }
    //add in more players until there is enough for 6 players 
    // { playersObj.player1.email.toString() === props.user.user.email.toString() ? ready('player1') :
    //     playersObj.player2.email.toString() === props.user.user.email.toString() ? ready('player2'):
    //      playersObj.player3.email === props.user.user.email ? ready('player3') : 
    //      playersObj.player4.email === props.user.user.email ? ready('player4') : nope ="nope"  }



    //make a function that will check if all the players are ready with a map through the keys 

    function allReady() {
        let keyArray = Object.keys(props.rooms.players)
        keyArray.map(player => {
            let playerEmail = playersObj[player].email
            let userEmail = props.user.user.email
            if (playerEmail === userEmail) {
                ready(player)
            }


            return (console.log(playersObj[player]))
        })
    }




    function saveCharacter(event) {
        event.preventDefault()
        let character = event.target.value
        console.log(character)

        // could map the CharacterArray and if the character === then set a variable to 
        event.preventDefault()
        let Array = [...props.rooms.CharacterArray]
        // this works

        let newCharacterArray = Array.filter(data => data !== Array[character])
        console.log(newCharacterArray)



        console.log(Array[character])
















        let characterObj = { ...props.rooms.CharacterArray }
        console.log(characterObj)
        console.log({ ...props.rooms.CharacterArray[character] })
        let playerObj = { ...props.rooms.players[player] }
        console.log()

        console.log(character)
        console.log(player)

        //save the character and set the ready on that player and the chosen on that character to true and false respectively 






        props.changeState({
            ...props.rooms,
            CharacterArray: newCharacterArray,


            players: {
                ...props.rooms.players,

                //if the players email is === the 
                [player]: {
                    ...props.rooms.players[player],
                    character: Array[character],
                    ready: true
                }

            }

        })
    }
    let index = 0
    allReady()


    // eslint-disable-next-line no-lone-blocks
    return (<>
        {
            props.rooms.CharacterArray.map(character => {

                console.log(character)
                let characterName = Object.keys(character)[0]
                let characterObj = Object.values(character)[0]
                console.log(characterObj)


                if (!character.chosen) {
                    return (
                        <>  <br></br>
                            <hr></hr>
                            <div>


                                <Card className='card'>

                                    <CardBody className={`characterCard ${character.color} `} >
                                        <CardTitle><h3>{character.name}</h3></CardTitle>
                                        <hr></hr>

                                        <hr></hr>
                                        <h3>Stats</h3>
                                        <hr></hr>
                                        <div className='stats'>
                                            <div className='statsP'>
                                                <CardText><strong><u>Starting Speed:</u></strong> {character.speed[character.speedIndex]} Dice ||||||||   Speed Array:{character.speed.toString()}  </CardText>
                                                <CardText><strong><u>Starting Might:</u></strong> {character.might[character.mightIndex]} Dice |||||||| Might Array:{character.might.toString()}</CardText>
                                                <CardText><strong><u>Starting Sanity:</u></strong> {character.sanity[character.sanityIndex]} Dice ||||||||| Sanity Array:{character.sanity.toString()}</CardText>
                                                <CardText><strong><u>Starting Knowledge:</u></strong> {character.sanity[character.knowledgeIndex]} Dice |||||||||  Knowledge Array:{character.knowledge.toString()}</CardText>
                                            </div>
                                        </div>
                                        <Button value={index} onClick={saveCharacter}>Select This Character</Button>
                                    </CardBody>
                                </Card>
                            </div>

                            { index++}  
                        </>
                       
                    )
                   
                }
              

            })
        }
    </>)
}

export default CharacterCard
