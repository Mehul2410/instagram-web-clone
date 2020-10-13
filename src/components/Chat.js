import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import "./css/Chat.css"
import UserChat from './UserChat'
import OpenInNewRoundedIcon from '@material-ui/icons/OpenInNewRounded';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import ChatBox from "./ChatBox"
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import InsertEmoticonSharpIcon from '@material-ui/icons/InsertEmoticonSharp';
import ImageRoundedIcon from '@material-ui/icons/ImageRounded';

const Chat = () => {
    const [input, setInput] = useState("");
    // const [ option , setOption] = useState(false); 
     console.log(input)
     const sendMessage = (event) => {
        event.preventDefault();
        setInput("");
      };
    return (
        <>
        <div className="chat">
            <div className="chat__box">
                <div className="chat__sidebar">
                    <div className="chat__sidebarTop" >
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
                {/* chat__message  */}
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
                            <InsertEmoticonSharpIcon />
                            <input 
                            type="text" 
                            placeholder="Message..." 
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                             />
                            <button type="submit" onClick={sendMessage} ></button>
                            
                            <ImageRoundedIcon />
                            <FavoriteBorderRoundedIcon />
                       </div>   
                </div>
                    <div className="chat__view ">
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
            </>
    )
}

export default Chat
