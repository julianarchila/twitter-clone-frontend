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
          id="explore"
          placeholder="SEARCH"
          value={searchName}
          onChange={handleChange}
        />
        <FaSearch className="explore-aside__search-icon" />
      </div>

      <div className="scroll">
        {searchName === "" ?
          <div className="explore-aside__users scroll">
            <label htmlFor="explore">Who to follow ?</label>
          </div>
        :
          users.length < 1 ?
            <div className="explore-aside__users scroll">
              <h4>@{searchName}</h4>
              <p>No match found</p>
            </div>
          :
            <>
              <h3>@{searchName}</h3>
              <div className="explore-aside__users scroll">
                {users.map((user: any, i: number) => {
                  return(
                    <SearchResults key={i} user={user} />
                  )
                })}
              </div>
            </>
        }
      </div>
    </div>
  );
};

export default ExploreAside;
