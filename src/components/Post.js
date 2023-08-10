import React, { useState, useEffect } from "react";
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
          <div className="user-name">
            {user.firstName} {user.lastName}
          </div>

          <div className="user-image">
            <img
              src={`http://localhost:3000/images/${user.image}`}
              alt="userimage"
            />
          </div>

          <div className="user-description">{user.description}</div>
        </div>
      ))}
    </div>
  );
}

export default Post;
