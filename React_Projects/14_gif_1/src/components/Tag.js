import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from './Loader';

export default function Tag() {
  const [Gif, setGif] = useState('');
  const [loader, setLoader] = useState(false);
  const [tag, setTag] = useState('');

  function memeHandler(event) {
    setTag(event.target.value);
  }

  async function fetchData() {
    setLoader(true);
    let url = `https://api.giphy.com/v1/gifs/random?api_key=kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S&tag=${tag}`;
    const output = await axios.get(url);
    const image_source = output.data.data.images.downsized_large.url;
    setGif(image_source);
    setLoader(false);
  }

  useEffect(() => {
    fetchData();
  }, [tag]);

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
            <img src={Gif} alt="Tag GIF" className="rounded-lg shadow-xl" width="230" height="230" />
          )
        }
      </div>
      <input
        type="text"
        value={tag}
        onChange={memeHandler}
        placeholder="Enter tag"
        className="mb-4 px-4 py-3 rounded-lg border-2 border-gray-300 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 shadow-md transition-all duration-300"
      />
      <button
        onClick={clickHandler}
        className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
      >
        Generate
      </button>
    </div>
  );
}
