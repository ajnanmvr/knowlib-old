import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWebsite, faList, faAdd } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Card 1 */}
      <div className="card bg-white shadow-md rounded-md p-6 m-4">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white">
          <FontAwesomeIcon icon={faAdd} size="lg" />
        </div>
        <h2 className="text-xl font-semibold mt-4">Add Website</h2>
        <p className="text-gray-600 mt-2">
          Click here to add a new website to the list.
        </p>
        <Link
          to={`/admin/add`}
          className="mt-4 text-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
        >
          Add Website
        </Link>
      </div>

      {/* Card 2 */}
      <div className="card bg-white shadow-md rounded-md p-6 m-4">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-500 text-white">
          <FontAwesomeIcon icon={faList} size="lg" />
        </div>
        <h2 className="text-xl font-semibold mt-4">All Websites</h2>
        <p className="text-gray-600 mt-2">
          Click here to show website list.
        </p>
        <Link
          to={`/admin/add-category`}
          className="mt-4 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded"
        >
          View
        </Link>
      </div>
      <div className="card bg-white shadow-md rounded-md p-6 m-4">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-500 text-white">
          <FontAwesomeIcon icon={faList} size="lg" />
        </div>
        <h2 className="text-xl font-semibold mt-4">Add Category</h2>
        <p className="text-gray-600 mt-2">
          Click here to add a new category to the list.
        </p>
        <Link
          to={`/admin/add-category`}
          className="mt-4 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded"
        >
          Add Category
        </Link>
      </div>
      <div className="card bg-white shadow-md rounded-md p-6 m-4">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-500 text-white">
          <FontAwesomeIcon icon={faList} size="lg" />
        </div>
        <h2 className="text-xl font-semibold mt-4">Add Category</h2>
        <p className="text-gray-600 mt-2">
          Click here to add a new category to the list.
        </p>
        <Link
          to={`/admin/add-category`}
          className="mt-4 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded"
        >
          Add Category
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
