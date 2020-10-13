import { Avatar } from '@material-ui/core'
import React from 'react'
import "./css/UserChat.css"

const UserChat = () => {
    return (
        <div className="userChat">
            <Avatar />
            <div className="userChat__Info">
                <h4>Mehul1824</h4>
                <p>Active Now</p>
            </div>
        </div>
    )
}

export default UserChat
