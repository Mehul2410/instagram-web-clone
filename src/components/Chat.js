import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import "./css/Chat.css"
import UserChat from './UserChat'
import OpenInNewRoundedIcon from '@material-ui/icons/OpenInNewRounded';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import ChatBox from "./ChatBox"

const Chat = () => {
    return (
        <div className="chat">
            <div className="chat__box">
                <div className="chat__sidebar">
                    <div className="chat__sidebarTop">
                        <h4>Direct</h4>
                            <OpenInNewRoundedIcon />
                           
                    </div>
                    <UserChat />
                    <UserChat />
                    <UserChat />
                    <UserChat />
                    <UserChat />
                    <UserChat />
                    <UserChat /><UserChat />
                    <UserChat />
                    <UserChat /><UserChat />
                    <UserChat />
                    <UserChat />
                    <UserChat />
                    <UserChat />
                    <UserChat />
                    <UserChat /><UserChat />
                    <UserChat />
                    <UserChat />
                </div>
                
                <div className="chat__message">
                    <div className="chat__messageTop">
            <Avatar />
            <div className="chat__messageInfo">
                <h4>Mehul1824</h4>
                <p>Active Now</p>
                
            </div>
            <HelpOutlineRoundedIcon />
                    </div>
                    <div className="chat__center">
                        <ChatBox />
                    </div>
                        <div className="chat__bottom">
                            <input type="text" placeholder="Message..." />
                        </div>
                </div>
                    <div className="chat__view">
                    <div className="chat__screen">   
                    <div className="fa fa-send-o"></div>
                    <div className="chat__front">
                    <h2>Your Messages</h2>
                    <p>Send private photos and messages to a friend or group.</p>
                    <button>Send Message</button>
                    </div>
                    
                    </div>
                    </div>
                  
                
                     
            
                </div>
                   
            </div>
        
    )
}

export default Chat
