import React from 'react';
import { FaTrash, FaCopy } from 'react-icons/fa';

interface Props {
    tweet: any;
    isOpen: boolean;
}

const TweetMenu: React.FC<Props> = (props) => {
    const { tweet, isOpen } = props;
    if (!isOpen){
        return null;
    }
    console.log(tweet);
    return (
        <div className="tweet-menu__items">
            {/* if the author is the property for the tweet the button is delete other person is Denunciar */}
            <div className="tweet-menu__item"><FaCopy className="icon"/>Copy</div>
            <div className="tweet-menu__item"><FaTrash className="icon"/>Delete</div>
        </div>
    )
}

export default TweetMenu;