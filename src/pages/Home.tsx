import React from "react";
import Header from "../components/Header";
import Tweet from "../components/Tweet";
import TweetForm from "../components/TweetForm";
import { getTweets } from "../actions/tweetActions";
import { useEffect } from "react";
import { useAppSelector } from "../utilities/typedReduxHooks";
import { useDispatch } from "react-redux";

const Home = () => {
  const state = useAppSelector((state) => state.tweets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTweets());
  }, [dispatch]);

  return (
    <>
      {console.log(state)}
      <Header />
      <div className="home">
        <div className="home__head">
          <h1 className="home__title">Home</h1>
          <TweetForm />
        </div>
        {state.isLoading ? (
          <p>Loading</p>
        ) : state.error ? (
          <p>{state.error}</p>
        ) : null}

        <div className="feed">
          {state.items.map((tweet: any) => {
            return <Tweet tweet={tweet} key={tweet.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
