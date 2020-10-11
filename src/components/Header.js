import { SearchRounded } from '@material-ui/icons'
import React from 'react'
import "./css/Header.css"
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import ExploreRoundedIcon from '@material-ui/icons/ExploreRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import Avatar from '@material-ui/core/Avatar';


const Header = () => {
    return (
        <div className="header">
            <div className="header__body">
            <div className="header__left">
            <img src="https://fontmeme.com/images/instagram-new-logo.png" alt="insta-logo"/>
            </div>
            <div className="header__center">
                <SearchRounded />
                <input type="text" placeholder="Search" />
            </div>
            <div className="header__right">
            <HomeRoundedIcon />
            <SendRoundedIcon className="header__send"/>
            <ExploreRoundedIcon />
            <FavoriteBorderRoundedIcon />
            <div className="header__avatar"><Avatar /></div>
            </div>
            </div>
            
        </div>

    )
}

export default Header
