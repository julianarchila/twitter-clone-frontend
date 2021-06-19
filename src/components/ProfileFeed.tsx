import { AxiosError } from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { get, getApiUrl } from "../services/config";
import Tweet from "./Tweet";

interface Props {
  username: string;
}

const ProfileFeed: React.FC<Props> = (props) => {
  const [tweets, setTweets] = useState<any>([]);
  const { username } = props;
  useEffect(() => {
    get(getApiUrl(`feed/profile/?u=${username}`))
      .then((response) => {
        setTweets(response.data);
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  }, [username]);
  return (
    <div className="profile__feed">
      {tweets.map((tweet: any) => {
        return <Tweet tweet={tweet} key={tweet.id} />;
      })}
    </div>
  );
};

export default ProfileFeed;
