import React from "react";
import Header from "../components/Header";
import Tweet from "../components/Tweet";
import TweetForm from "../components/TweetForm";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <div className="home__head">
          <h1 className="home__title">Home</h1>
          <TweetForm />
        </div>
        <div className="feed">
          <Tweet />
        </div>
      </div>
    </>
  );
};

export default Home;
