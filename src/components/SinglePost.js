import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SinglePost.css";
import { useNavigate } from "react-router-dom";

function SinglePost() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line
  }, []);

  const fetchUser = () => {
    fetch(`http://localhost:3000/user/${userId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Response failed");
        }
      })
      .then((data) => {
        setUser(data.user);
      })
      .catch((err) => {
        console.log("Error retrieving user info:", err);
      });
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="single-user-container">
      <div className="single-user-image">
        <img
          className="single-post-image"
          src={`http://localhost:3000/images/${user.image}`}
          alt="userimage"
        />
      </div>

      <hr />

      <div className="single-user-name">
        <span className="posted-by"> Posted by:</span> {user.firstName}{" "}
        {user.lastName}
      </div>

      <br />

      <div className="single-user-description">{user.description}</div>

      <button className="back-button" onClick={() => navigate("/")}>
        &#x21b5; Back
      </button>
    </div>
  );
}

export default SinglePost;
