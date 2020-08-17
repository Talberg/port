import React from 'react'
import './FriendsList.scss'
import AddFriend from '../AddFriend/AddFriend'
import FriendName from '../FriendName/FriendName'



function FriendsList(props){
 let friends = props.user.user.friends
    console.log(friends)
    return(<div className='friendsList'>
        <h4>Friends</h4>
        <hr></hr>
        
        <AddFriend user={props.user} ></AddFriend>
        {/* map throught te friends here so that each friend is displayed  */}
        {friends.map(friend=>{
            return(
                <li> {friend} </li>
            )
        })}
        
        <FriendName  ></FriendName>



    </div>)
}
export default FriendsList