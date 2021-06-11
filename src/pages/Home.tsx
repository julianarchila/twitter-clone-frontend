import React from "react";
import Header from "../components/Header";
import Tweet from "../components/Tweet";
import TweetForm from "../components/TweetForm";
import { listTweets } from "../actions/tweetActions";
import { useEffect } from "react";
import { useAppSelector } from "../utilities/typedReduxHooks";
import { useDispatch } from "react-redux";

const Home = () => {
  const state = useAppSelector((state) => state.tweets);
  const items = state.items;
  const dispatch = useDispatch();
  useEffect(() => {
    if (items.length < 1) {
      dispatch(listTweets());
    }
  }, [dispatch, items]);

  return (
    <>
      {console.log(state)}
      <Header />
      <div className="home">
        <div className="home__head">
          <h1 className="home__title">Home</h1>
          <TweetForm />
        </div>
        {state.isLoading ? <p>Loading</p> : null}
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
