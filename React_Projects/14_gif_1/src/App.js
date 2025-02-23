import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center p-4">
      <div className="w-full sm:w-96 h-[450px] rounded-xl bg-orange-500 shadow-lg flex flex-col justify-center items-center space-y-8 p-6">
        <Random />
      </div>
      <div className="w-full sm:w-96 h-[450px] rounded-xl bg-orange-500 shadow-lg flex flex-col justify-center items-center space-y-8 p-6 mt-8">
        <Tag />
      </div>
    </div>
  );
}

export default App;
