import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Post.css";

function Post({ searchQuery }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, [searchQuery]);

  const fetchPosts = () => {
    const queryParams = searchQuery
      ? `?search=${encodeURIComponent(searchQuery)}`
      : "";

    fetch(`http://localhost:3000/${queryParams}`, {})
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Unauthorized");
        }
      })
      .then((data) => {
        setUsers(data.posts);
      })
      .catch((err) => {
        console.log("Error retrieving posts:", err);
      });
  };

  return (
    <div className="post-container">
      {users
        .map((user) => (
          <div key={user._id} className="user-container">
            <div className="user-image">
              <img
                className="post-image"
                src={`http://localhost:3000/images/${user.image}`}
                alt="userimage"
              />
            </div>

            <hr />

            <div className="user-name">
              <span className="posted-by"> Posted by:</span> {user.firstName}{" "}
              {user.lastName}
            </div>

            <br />

            <div className="user-description">
              {user.description.length > 70
                ? `${user.description.substring(0, 70)}...`
                : user.description}
              {user.description.length > 70 && (
                <Link
                  className="read-more"
                  key={user._id}
                  to={`/user/${user._id}`}
                >
                  Read more
                </Link>
              )}
            </div>
          </div>
        ))
        .reverse()}
    </div>
  );
}

export default Post;
