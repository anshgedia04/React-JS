import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from './Loader';

export default function Random() {
  const [Gif, setGif] = useState('');
  const [loader, setLoader] = useState(false);

  async function fetchData() {
    setLoader(true);
    let url = `https://api.giphy.com/v1/gifs/random?api_key=kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S`;
    const output = await axios.get(url);
    const image_source = output.data.data.images.downsized_large.url;
    setGif(image_source);
    setLoader(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {
    fetchData();
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        {
          loader ? (
            <Loader />
          ) : (
            <img src={Gif} alt="Random GIF" className="rounded-lg shadow-xl" width="230" height="230" />
          )
        }
      </div>
      <button
        onClick={clickHandler}
        className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
      >
        Generate
      </button>
    </div>
  );
}
