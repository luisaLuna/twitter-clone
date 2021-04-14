import React from 'react';
import './Post.css';
import { Avatar } from "@material-ui/core";

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
                            Luisa Luna <span>
                             <VerifiedUserIcon className="post__badge" />
                            </span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
