import { AxiosError } from "axios";
import React, { ChangeEvent } from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { get, getApiUrl } from "../services/config";
import SearchResults from "./SearchResults";

const ExploreAside: React.FC = () => {
  const [searchName, setSearchName] = useState("");
  const [users, setUsers] = useState<any>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    var newValue = e.target.value;
    setSearchName(newValue);
    if (newValue !== "") {
      get(getApiUrl(`users/?search=${newValue}`))
        .then((response) => {
          setUsers(response.data.results);
        })
        .catch((err: AxiosError) => {
          console.error(err);
        });
    } else {
      setUsers([]);
    }
  };
  return (
    <div className="explore-aside">
      <div className="explore-aside__container-search">
        <input
          type="text"
          className="explore-aside__search"
          placeholder="SEARCH"
          value={searchName}
          onChange={handleChange}
        />
        <FaSearch className="explore-aside__search-icon" />
      </div>

      <SearchResults searchName={searchName} users={users} />

      <div className="explore-aside__users scroll">
        <h3>Who to follow</h3>
        {[...Array(10)].map((x, i) => {
          return (
            <div key={i} className="explore-aside__users-item">
              <div>
                <figure>
                  <img
                    src="https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDIvMmE3ODAzYzUtMWM5MC00ZDk4LWJmOTQtNTVjMDcxOWZmYjc5LmpwZw==.jpg"
                    alt="test"
                  />
                </figure>
                <p>Name</p>
              </div>
              <button className="button">Follow</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreAside;
