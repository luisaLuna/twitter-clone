import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQHqBza5afsKwg/profile-displayphoto-shrink_800_800/0/1585851680521?e=1623888000&v=beta&t=f4ZKHlol3KMEZj36zWGumeSC071ptmKUQi6c3Rt6de8" />
                <input type="text" placeholder="What's happening?"/>
                </div>
                <input type="text" className="tweetBox__imageInput" placeholder="Optional: Enter image URL"/>
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
