import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreatePost.css";

function CreatePost() {
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (!firstName || !lastname || !description || !image) {
      setError("Please fill in all fields");
      return;
    }

    // Create new FromData instance
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastname);
    formData.append("description", description);
    formData.append("image", image);

    fetch("http://localhost:3000/create", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to add data");
        }
      })
      .then((data) => {
        navigate("/");
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        setError("An unexpected error occured");
      });
  };

  return (
    <div className="form-container">
      {error && <p className="create-error">{error}</p>}

      <form onSubmit={handleSubmit} className="create-form">
        <h2>Share your experience</h2>
        <input
          type="text"
          placeholder="First Name"
          className="create-input"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Last Name"
          className="create-input"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
        />

        <textarea
          className="create-input"
          name="description"
          id="description"
          placeholder="Describe your experience here..."
          cols="30"
          rows="10"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="image">
          Upload image
          <br />
          <br />
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>

        <button className="create-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
