import React from "react";
import Header from "../components/Header";
import Tweet from "../components/Tweet";
import TweetForm from "../components/TweetForm";
import Explore from "../components/ExploreAside";
import Loading from '../components/Loading';
import { getTweets } from "../actions/tweetActions";
import { useEffect } from "react";
import { useAppSelector } from "../utilities/typedReduxHooks";
import { useDispatch } from "react-redux";

import '../styles/app/home.css';
import '../styles/app/header.css';
import '../styles/app/explore.css';

const Home = () => {
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
          <h1 className="home__title">Home</h1>
          <TweetForm />
        </div>
        {state.isLoading ? (
          <Loading />
        ) : state.error ? (
          <p>{state.error}</p>
        ) : null}

        <div className="feed">
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
