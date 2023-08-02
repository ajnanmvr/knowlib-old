import React, { useState } from "react";
import Axios from "../../Axios";

const AddCategory = ({ apiUrl }) => {
  const [name, setName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your Express.js backend using Axios
      const response = await Axios.post("/category", { name });
      console.log(response.data);

      // Reset form fields
      setName("");

      // Display success message
      setSuccessMessage("Category added successfully.");
      setErrorMessage(""); // Clear any previous error message
    } catch (error) {
      console.error(error.response);
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
      default:
        break;
    }
  };

  return (
    <div className="">
      <h1 className="form-header-addcategory">Add New Category</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            placeholder="Enter category name"
          />
        </label>
        <br />

        <button type="submit">Add Category</button>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default AddCategory;
