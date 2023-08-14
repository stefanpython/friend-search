import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Post.css";

function Post() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    fetch("http://localhost:3000/", {})
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
      {users.map((user) => (
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
            <span className="text-description">
              {user.description.length > 100
                ? `${user.description.substring(0, 100)}...`
                : user.description}
            </span>
            {user.description.length > 100 && (
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
      ))}
    </div>
  );
}

export default Post;
