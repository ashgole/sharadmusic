import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Link to={"/sharadmusic/"}>
        <button className="w-auto bg-blue-500 text-white px-4 py-2 rounded">
          Pgae not found... Go to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
