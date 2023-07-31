import React, { useState } from "react";
import Axios from "../../Axios";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      image,
      description,
      url,
    };

    try {
      // Send a POST request to your Express.js backend using Axios
      const response = await Axios.post("/data", data);
      console.log(response.data);

      // Reset form fields
      setName("");
      setImage("");
      setDescription("");
      setUrl("");

      // Display success message
      setSuccessMessage("Post completed successfully.");
      setErrorMessage(""); // Clear any previous error message
    } catch (error) {
      console.error(error);
      // Display error message
      setErrorMessage("An error occurred. Please try again.");
      setSuccessMessage(""); // Clear any previous success message
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update the corresponding state variable based on the input field's name
    switch (name) {
      case "name":
        setName(value);
        break;
      case "image":
        setImage(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "url":
        setUrl(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="addItem">
      <h1 className="form-header-addproduct">Add New Website</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <label>
          Website Link:
          <input
            type="url"
            name="url"
            value={url}
            onChange={handleInputChange}
            placeholder="Enter URL"
            />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            placeholder="Enter name"
          />
        </label>
        <br />

        <label>
          Description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleInputChange}
            placeholder="Enter description"
            />
        </label>
        <br />
        <label>
          Image URL <i style={{ fontSize: "10px", color: "red" }}>(Optional)</i>{" "}
          :
          <input
            type="url"
            name="image"
            value={image}
            onChange={handleInputChange}
            placeholder="Enter image URL (Optional"
            />
        </label>
        <br />
        <button type="submit">Submit</button>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default FormComponent;
