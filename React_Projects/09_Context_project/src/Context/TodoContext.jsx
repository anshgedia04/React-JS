import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const todos = localStorage.getItem('todo');
        if (todos && todos.length > 0) {
            setTodos(JSON.parse(todos));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (todo) => {
        setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
    };

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((prev)=> prev.id !== id)) ;
    }
    const updataTodo = (id , todo) => {
        setTodos((prev)=> prev.map((prev)=> prev.id === id ? todo : prev)) ;
    }
    return (
        <TodoContext.Provider value={{ todos, addTodo , deleteTodo , updataTodo }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;