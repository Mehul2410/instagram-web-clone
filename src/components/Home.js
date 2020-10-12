import React from 'react'
import Post from './Post'
import "./css/Home.css"
import Stories from './Stories'

const Home = () => {
    return (
        <div className="home">
            <Stories />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            
        </div>
    )
}

export default Home
