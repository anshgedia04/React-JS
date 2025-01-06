# Context API Steps

1. **Create Context**: 
    - Create a new context using `React.createContext()`.

2. **Provide Context**: 
    - Wrap the component tree with `Context.Provider` and pass the value.

3. **Consume Context**: 
    - Use `useContext(Context)` to access the context value in any component.

4. **Update Context**: 
    - Update the context value using state or any other method within the provider.

Example:
```jsx
// Create Context
const MyContext = React.createContext();

// Provide Context
const MyProvider = ({ children }) => {
  const [value, setValue] = useState(initialValue);
  return (
     <MyContext.Provider value={{ value, setValue }}>
        {children}
     </MyContext.Provider>
  );
};

// Consume Context
const MyComponent = () => {
  const { value, setValue } = useContext(MyContext);
  // Use the context value
};
```