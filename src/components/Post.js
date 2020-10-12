import { Avatar } from '@material-ui/core'
import React from 'react'
import'./css/Post.css'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

const Post = () => {
    return (
        <div className="post">
            <div className="post__top">
            <div className='post__topLeft'>
            <Avatar />
            <h3>vallabh2920</h3>
            </div>
            <div className="post__topRight">
            <MoreHorizIcon />
            </div> 
            </div>
<div className='post__center'>
                <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
            </div>
        <div className="post__bottom">
            <div className="post__bottomLeft">
                <FavoriteBorderRoundedIcon className="post__header"/>
                <ChatBubbleOutlineIcon />
                <SendRoundedIcon className="post__send"/>
            </div>
            <div className="post__bottomRight">
                <BookmarkBorderIcon />
            </div>
        </div>
            
            
        </div>
    )
}

export default Post
