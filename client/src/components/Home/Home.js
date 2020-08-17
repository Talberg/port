import React from 'react'
import './Home.scss'
import AddFriend from '../AddFriend/AddFriend'
import RequestBox from '../RequestBox/RequestBox'
import FriendsList from '../FriendsList/FriendsList'
import StartGame from '../StartGame/StartGame'
import GameDisplay from '../GameDisplay/GameDisplay'

function Home(props){
    console.log(props)
return(<>{props.user.loggedIn ? <div className='home'>
<p>HEllO : {props.user.user.username}</p>

<GameDisplay user={props.user}></GameDisplay>
<FriendsList user={props.user}  ></FriendsList>
<RequestBox user={props.user.user}></RequestBox>



</div> :<div className='home'><p>Add in a link to the sign up page here</p></div> }</>)
}
export default Home