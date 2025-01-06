import './App.css';
import AddTodo from './Components/AddTodo';
import Todos from './Components/Todos';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center py-10">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Modern Todo App</h1>
        <p className="text-gray-600 mt-2">Organize your tasks beautifully</p>
      </header>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
