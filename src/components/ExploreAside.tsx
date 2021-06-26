import React from 'react';
import { FaSearch } from "react-icons/fa"

function ExploreAside() {
    return (
        <div className="explore-aside">
            <div className="explore-aside__container-search">
                <input type="text" className="explore-aside__search" placeholder="SEARCH"/>
                <FaSearch className="explore-aside__search-icon"/>
            </div>

            <div className="explore-aside__users scroll">
                <h3>Who to follow</h3>
                <div className="explore-aside__users-item">
                        <div>
                            <figure>
                                <img src="https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDIvMmE3ODAzYzUtMWM5MC00ZDk4LWJmOTQtNTVjMDcxOWZmYjc5LmpwZw==.jpg"
                                    alt="test image" />
                            </figure>
                            <p>Name</p>
                        </div>
                        <button className="button">Follow</button>
                    </div><div className="explore-aside__users-item">
                        <div>
                            <figure>
                                <img src="https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDIvMmE3ODAzYzUtMWM5MC00ZDk4LWJmOTQtNTVjMDcxOWZmYjc5LmpwZw==.jpg"
                                    alt="test image" />
                            </figure>
                            <p>Name</p>
                        </div>
                        <button className="button">Follow</button>
                    </div><div className="explore-aside__users-item">
                        <div>
                            <figure>
                                <img src="https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDIvMmE3ODAzYzUtMWM5MC00ZDk4LWJmOTQtNTVjMDcxOWZmYjc5LmpwZw==.jpg"
                                    alt="test image" />
                            </figure>
                            <p>Name</p>
                        </div>
                        <button className="button">Follow</button>
                    </div><div className="explore-aside__users-item">
                        <div>
                            <figure>
                                <img src="https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDIvMmE3ODAzYzUtMWM5MC00ZDk4LWJmOTQtNTVjMDcxOWZmYjc5LmpwZw==.jpg"
                                    alt="test image" />
                            </figure>
                            <p>Name</p>
                        </div>
                        <button className="button">Follow</button>
                    </div><div className="explore-aside__users-item">
                        <div>
                            <figure>
                                <img src="https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDIvMmE3ODAzYzUtMWM5MC00ZDk4LWJmOTQtNTVjMDcxOWZmYjc5LmpwZw==.jpg"
                                    alt="test image" />
                            </figure>
                            <p>Name</p>
                        </div>
                        <button className="button">Follow</button>
                    </div><div className="explore-aside__users-item">
                        <div>
                            <figure>
                                <img src="https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDIvMmE3ODAzYzUtMWM5MC00ZDk4LWJmOTQtNTVjMDcxOWZmYjc5LmpwZw==.jpg"
                                    alt="test image" />
                            </figure>
                            <p>Name</p>
                        </div>
                        <button className="button">Follow</button>
                    </div>
            </div>
        </div>
    )
}

export default ExploreAside
