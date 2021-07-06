import React, { useState } from "react";
import Header from "../components/Header";
import Tweet from "../components/Tweet";
import TweetForm from "../components/TweetForm";
import Explore from "../components/ExploreAside";
import Loading from "../components/Loading";
import Hamburger from "../components/Hamburger";
import { getTweets } from "../actions/tweetActions";
import { useEffect } from "react";
import { useAppSelector } from "../utilities/typedReduxHooks";
import { useDispatch } from "react-redux";
import { GiFeather } from "react-icons/gi";

import "../styles/app/home.css";
import "../styles/app/header.css";
import "../styles/app/explore.css";

const Home = () => {
  const [toggleSeeForm, setToggleSeeForm] = useState(false);
  const state = useAppSelector((state) => state.tweets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTweets());
  }, [dispatch]);

  return (
    <div className="home__page">
      <Header />
      <div className="home">
        <div className="home__head">
          <div className="home__title">
            <Hamburger />
            <h1 className="home__title-title">Home</h1>
          </div>
          {toggleSeeForm && <TweetForm />}
        </div>
        <i
          className="icon-feather"
          onClick={() => setToggleSeeForm(!toggleSeeForm)}
        >
          <GiFeather />
        </i>
        {state.isLoading ? (
          <Loading />
        ) : state.error && (
          <p>{state.error}</p>
        )}

        <div className="feed scroll">
          {state.items.map((tweet: any) => {
            return <Tweet tweet={tweet} key={tweet.id} />;
          })}
        </div>
      </div>
      <Explore />
    </div>
  );
};

export default Home;
