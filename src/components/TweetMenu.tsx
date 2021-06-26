import React from 'react';
import { FaTrash, FaCopy, FaFlag } from 'react-icons/fa';
import { useAppSelector } from "../utilities/typedReduxHooks";
import { getApiUrl, remove } from "../services/config";
import { removeTweet } from "../actions/tweetActions";
import { useDispatch } from 'react-redux';

interface Props {
    tweet: any;
    isOpen: boolean;
    setOpen: any;
}

const TweetMenu: React.FC<Props> = (props) => {
    const auth = useAppSelector((state) => state.auth);
    const { tweet, isOpen, setOpen } = props;
    const dispatch = useDispatch();

    const handleRemove = async () => {
        const confirm: boolean = window.confirm(`Are you sure you want delete this tweet: ${tweet.content} ?`);
        if(confirm){
            dispatch(removeTweet(tweet.id));
            setOpen(false);
        }
    }
    const handleCopy = () => {
        let aux = document.createElement("input");
        aux.setAttribute('value', tweet.content);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
        setOpen(false);
    }
    const handleReport = () => {
        setOpen(false);
    }

    if (!isOpen){
        return null;
    }
    return (
        <div className="tweet-menu__items">
            <div className="tweet-menu__item" onClick={handleCopy}><FaCopy className="icon"/>Copy</div>
            {tweet.user.username === auth.user.username
                ? <div className="tweet-menu__item" onClick={ handleRemove }><FaTrash className="icon"/>Delete</div>
                : <div className="tweet-menu__item" onClick={handleReport}><FaFlag className="icon"/>Report</div>
            }
        </div>
    )
}

export default TweetMenu;