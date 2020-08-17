import React from 'react'
import './RequestBox.scss'
import Request from '../Request/Request'

function RequestBox (props){
    return(<div className='requestBox'>
        <h4>Requests</h4>
        
        <hr></hr>
{props.user.request.map(request=>{
    return(
        <Request friend={request} user={props.user} email={request.email} username={request.username} ></Request>
    )
})}
    </div>)
}
export default RequestBox