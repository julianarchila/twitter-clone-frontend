import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTweets } from "../actions/tweetActions";
import Header from "../components/Header";
import Tweet from "../components/Tweet";
import "../styles/Profile.css";
import { useAppSelector } from "../utilities/typedReduxHooks";

function Profile() {
  const tweets = useAppSelector((state) => state.tweets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTweets());
  }, [dispatch]);
  return (
    <>
      <Header />
      <div className="profile">
        <div className="profile__head-nav">
          <small>Go Back</small>
          User's Name
        </div>
        <div className="profile__head">
          <img src="#" alt="header" />
          <img src="#" alt="profile" />
          <p>Name</p>
          <p>@username</p>
          <small>#followgin</small>
          <small>#followers</small>
        </div>
        <div className="profile__feed">
          {tweets.items.map((tweet: any) => {
            return <Tweet tweet={tweet} key={tweet.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Profile;
