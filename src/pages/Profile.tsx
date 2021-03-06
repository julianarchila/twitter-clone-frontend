import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTweets } from "../actions/tweetActions";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Explore from "../components/ExploreAside";
import ProfileHead from "../components/ProfileHead";
import Hamburger from "../components/Hamburger";
import { FaArrowCircleLeft } from "react-icons/fa"
import { getApiUrl, get } from "../services/config";
import { useAppSelector } from "../utilities/typedReduxHooks";

import "../styles/Profile.css";
import { AxiosError } from "axios";
import ProfileFeed from "../components/ProfileFeed";

function Profile(props: any) {
  const auth = useAppSelector((state) => state.auth);
  const username = props.match.params.username;
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<any>("");
  const [loadingUser, setLoadingUser] = useState(true);
  const dispatch = useDispatch();

  // Fetch user data
  useEffect(() => {
    setLoadingUser(true);
    get(getApiUrl(`users/${username}/`))
      .then((response) => {
        setUser(response.data);
        setLoadingUser(false);
      })
      .catch((err: AxiosError) => {
        setLoadingUser(false);
        if (err.response?.status === 404) {
          setError("User not found");
        }
        console.log(err.response?.status);
        setError(err);
      });
  }, [username]);

  useEffect(() => {
    dispatch(getTweets());
  }, [dispatch]);

  if (loadingUser || auth.isLoading) {
    return <Loading />;
  }
  if (error) {
    console.log(error);
    return <p>{`${error}`}</p>;
  }
  if (!user) {
    return <p>User not found</p>;
  }
  return (
    <>
      <Header />
      <div className="profile">
        <div className="profile__head-nav">
          <div className="profile__head-back">
            <i onClick={()=> window.history.go(-1)}>
              <FaArrowCircleLeft />
            </i>
            <strong>
              {user.first_name}
            </strong>
          </div>
          <Hamburger />
        </div>
        <ProfileHead user={user} setUser={setUser} auth={auth} />

        <ProfileFeed username={username} />
      </div>
      <Explore />
    </>
  );
}

export default Profile;
