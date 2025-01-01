import { useContext } from "react";
import { TodoContext } from "./Context/TodoContext";
import Form_input from "./Components/Form_input";
import Form_output from "./Components/Form_output";


function App() {
  const { todos } = useContext(TodoContext);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Todo List</h2>
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-4">
        <Form_input />
        <hr className="my-4" />
        <Form_output />
      </div>
    </div>
  );
}

export default App;
