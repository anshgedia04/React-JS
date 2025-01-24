import React, { useState } from "react";
import "./Single_card.css";

export default function Single_card(props) {
  const { details, removeTours } = props;
  const [readmore, setReadmore] = useState(false);
  const description = readmore
    ? details.info
    : `${details.info.substring(0, 200)}...`;

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img
        src={details.image}
        alt="Not found"
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <p className="text-lg font-bold mb-2">{details.name}</p>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <button
        className="text-blue-500 hover:underline"
        onClick={() => setReadmore(!readmore)}
      >
        {readmore ? "Show less" : "Read more"}
      </button>
      <div className="mt-4">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => removeTours(details.id)}
        >
          Remove Tour
        </button>
      </div>
    </div>
  );
}
