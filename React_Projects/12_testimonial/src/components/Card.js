import React from 'react';

export default function Card(props) {
  const reviews = props.reviews;
  return (
    <div className="text-gray-800">
      <h2 className="text-xl font-bold mb-2">{reviews.name}</h2>
      <h3 className="text-lg text-gray-500 mb-4">{reviews.job}</h3>
      <div className="mb-4">
        <img
          src={reviews.image}
          alt={`${reviews.name}`}
          className="w-32 h-32 mx-auto rounded-full border-4 border-gray-200 shadow-sm"
        />
      </div>
      <p className="text-sm text-gray-600 italic">{reviews.text}</p>
    </div>
  );
}
