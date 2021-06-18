import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTweets } from "../actions/tweetActions";
import Header from "../components/Header";
import Tweet from "../components/Tweet";
import { getApiUrl, get, post } from "../services/config";
import { useAppSelector } from "../utilities/typedReduxHooks";

import "../styles/Profile.css";
const defaultHeader =
  "https://i.pinimg.com/originals/39/81/be/3981be23abfd0d5951fe32ba9ae37945.jpg";

function Profile(props: any) {
  const tweets = useAppSelector((state) => state.tweets);
  const auth = useAppSelector((state) => state.auth);
  const username = props.match.params.username;
  const [user, setUser] = useState<any>(null);
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

  const handleFollow = async () => {
    const response = await post(getApiUrl("users/follow_toogle/"), {
      user: user.username,
    });
    const data = response.data;
    setUser({ ...user, following: data.following });
    console.log(response.data);
  };

  if (loadingUser || auth.isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.log(error);
    return <p>Something is broken</p>;
  }
  if (!user) {
    return <p>User not found</p>;
  }
  return (
    <>
      <Header />
      <div className="profile">
        <div className="profile__head-nav">
          <small>Go Back</small> ------ User's Name
        </div>
        <div className="profile__head">
          <img
            className="profile__header-img"
            src={user.profile.header || defaultHeader}
            alt="header"
          />
          <div className="profile__head__top">
            <img
              className="profile__user-picture"
              src={user.profile.picture}
              alt="profile"
            />
            <div className="profile__head__actions">
              {auth.isAuthenticated ? (
                auth.user.username !== user.username ? (
                  <button
                    onClick={handleFollow}
                    className="btn btn-primary mr-3"
                  >
                    {user.following ? "Unfollow" : "Follow"}
                  </button>
                ) : null
              ) : null}
            </div>
          </div>
          <div className="profile__head__info">
            <div className="font-weight-bold">
              {user.first_name} {user.last_name}
            </div>
            <p>@{user.username}</p>
            <small>{user.following_count} following</small>
            <small>{user.followers_count} followers</small>
          </div>
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
