import React , { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase"; 

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    // const [tweetImage, setTweetImage] = useState('');

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: "Luisa Luna",
            username: "luisaLu",
            verified: true,
            text: tweetMessage,
            // image: tweetImage,
            avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQHqBza5afsKwg/profile-displayphoto-shrink_800_800/0/1585851680521?e=1623888000&v=beta&t=f4ZKHlol3KMEZj36zWGumeSC071ptmKUQi6c3Rt6de8",
        });

        setTweetMessage('');
        // setTweetImage('');
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQHqBza5afsKwg/profile-displayphoto-shrink_800_800/0/1585851680521?e=1623888000&v=beta&t=f4ZKHlol3KMEZj36zWGumeSC071ptmKUQi6c3Rt6de8" />
                    <input
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        type="text"
                        placeholder="What's happening?"
                    />
                </div>
                {/* <input
                    value={tweetImage}
                     onChange={e => setTweetImage(e.target.value)}
                    type="text"
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                /> */}
                <Button
                    onClick={sendTweet}
                    type="submit"
                    className="tweetBox__tweetButton"
                >
                    Tweet
                </Button>
            </form>
        </div>
    )
}

export default TweetBox
