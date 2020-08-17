import React from 'react'   
import './Request.scss'
import API from '../../utils/API'


function Request(props){

 

//need to update friend list 
function removeFriendRequest(props){
    const user = props.user
    const friend= props.friend
    const newRequests = props.user.request
 
    // fliters out the clicked friends 
    let Requests = newRequests.filter(data=> data.email !== props.email)


    console.log(Requests)
    let data = {
        userEmail:props.user.email,
        newArr: Requests
    }
        API.removeFromRequest(data)
}
function AddFriend(props){
    let data = {
        myEmail:props.user.email,
        friendEmail:props.email

    }
    let data2 = {
        myEmail:props.email,
        friendEmail:props.user.email
    }
    API.addByEmail(data)
    API.addByEmail(data2)

}
function allTogetherNow(props){
    AddFriend(props)    
    removeFriendRequest(props)
    window.location.reload()
}



return( <div className={` request`} ><span className='friendRequest' >{props.username}</span>
       <button onClick={()=>allTogetherNow(props)}   className='button'>ADD</button>
   </div>
   ) }
export default Request