
import Testimonial from "./components/Testmonial";
import reviews from "./data";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <Testimonial reviews={reviews} />
    </div>
  );
}

export default App;
