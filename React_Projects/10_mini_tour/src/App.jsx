import { useState } from "react";
import data from "./data";
import Tour from "./components/Tour";

function App() {
  const [Tours, setTours] = useState(data);

  function removeTours(id) {
    setTours(Tours.filter((tour) => tour.id !== id));
  }

  if (Tours.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl font-semibold mb-4">No tours left</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setTours(data)}
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Tour Tours={Tours} removeTours={removeTours}></Tour>
    </div>
  );
}

export default App;