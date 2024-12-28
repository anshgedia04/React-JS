# Using `useState` in React

The `useState` hook is a fundamental part of React that allows you to add state to functional components. Here's an example of how to use `useState` to manage a name input field.

## Example: Managing Name State

```jsx
import React, { useState } from 'react';

function NameComponent() {
    // Declare a state variable named 'name' with an initial value of an empty string
    const [name, setName] = useState('');

    // Function to handle input change
    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div>
            <h1>Hello, {name}!</h1>
            <input 
                type="text" 
                value={name} 
                onChange={handleChange} 
                placeholder="Enter your name" 
            />
        </div>
    );
}

export default NameComponent;
```

### Explanation

1. **Import `useState`**: First, import the `useState` hook from React.
2. **Declare State Variable**: Use `useState` to declare a state variable `name` and a function `setName` to update it. The initial value is an empty string.
3. **Handle Input Change**: Create a function `handleChange` that updates the state with the input's current value.
4. **Render**: In the JSX, bind the input's value to the `name` state and set up an `onChange` event to call `handleChange`.

This example demonstrates how to use `useState` to manage and update the state in a functional component.

# 5