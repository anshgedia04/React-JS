import React from 'react';
import './Loader.css';

export default function Loader() {
  return (
    <div className="flex justify-center items-center">
      <div className="loader">
        <span className="loader-text">Loading...</span>
        <span className="load"></span>
      </div>
    </div>
  );
}
