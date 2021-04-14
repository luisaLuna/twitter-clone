import React from 'react';
import './Post.css';
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                 <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQHqBza5afsKwg/profile-displayphoto-shrink_800_800/0/1585851680521?e=1623888000&v=beta&t=f4ZKHlol3KMEZj36zWGumeSC071ptmKUQi6c3Rt6de8"/>
            </div>

            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Luisa Luna {" "}
                            <span className="post__headerSpecial">
                             <VerifiedUserIcon className="post__badge" /> @luisaLuna
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Post a Tweet to try the app</p>
                    </div>
                </div>
                <img src="https://media.giphy.com/media/XbxZ41fWLeRECPsGIJ/giphy.gif" alt=""/>
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
}

export default Post
