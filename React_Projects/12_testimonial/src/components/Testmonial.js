import React, { useState } from 'react';
import Card from './Card';

export default function Testimonial(props) {
  const reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function leftHandler() {
    setIndex(index - 1 < 0 ? reviews.length - 1 : index - 1);
  }

  function rightHandler() {
    setIndex(index + 1 >= reviews.length ? 0 : index + 1);
  }

  function surpriseHandler() {
    setIndex(Math.floor(Math.random() * reviews.length));
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg text-center">
      <Card reviews={reviews[index]} />
      <div className="mt-4 flex justify-around">
        <button
          onClick={leftHandler}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
          Left
        </button>
        <button
          onClick={rightHandler}
          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">
          Right
        </button>
        <button
          onClick={surpriseHandler}
          className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition">
          Surprise Me
        </button>
      </div>
    </div>
  );
}
