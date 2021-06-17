import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTweets } from "../actions/tweetActions";
import Header from "../components/Header";
import Tweet from "../components/Tweet";
import { getApiUrl, get } from "../services/config";
import "../styles/Profile.css";
import { useAppSelector } from "../utilities/typedReduxHooks";

function Profile(props: any) {
  const tweets = useAppSelector((state) => state.tweets);
  const username = props.match.params.username;
  const [user, setUser] = useState<any>();
  const [error, setError] = useState("");
  const [loadingUser, setLoadingUser] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoadingUser(true);
    get(getApiUrl(`users/${username}/`))
      .then((response) => {
        setUser(response.data);
        setLoadingUser(false);
      })
      .catch((err) => {
        setLoadingUser(false);
        setError(err);
      });
  }, [username]);

  useEffect(() => {
    dispatch(getTweets());
  }, [dispatch]);

  if (loadingUser) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.log(error);
    return <p>Something is broken</p>;
  }
  return (
    <>
      <Header />
      <div className="profile">
        <div className="profile__head-nav">
          <small>Go Back</small>
          User's Name
        </div>
        <div className="profile__head">
          <img src={user.profile.header} alt="header" />
          <img src={user.profile.picture} alt="profile" />
          <p>{user.username}</p>
          <p>@{user.username}</p>
          <small>{user.following_count} following</small>
          <small>{user.followers_count} followers</small>
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
