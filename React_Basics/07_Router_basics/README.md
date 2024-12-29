# Router, Link, and NavLink in React Router

React Router is a popular library for routing in React applications. It enables seamless navigation between different views or pages without a full page reload, ensuring a smooth user experience.

## 1. Router
The `Router` component is the core of React Router. It wraps your application and provides the routing context, enabling components like `Route`, `Link`, and `NavLink` to work correctly.

### Example:
```jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

export default App;
```

## 2. Link
The `Link` component is used to create navigation links that allow users to move between different routes in your application. It replaces traditional anchor tags (`<a>`), ensuring smooth transitions without reloading the page.

### Example:
```jsx
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navigation;
```

## 3. NavLink
The `NavLink` component is similar to `Link`, but it provides additional styling capabilities for the active route. It allows you to apply styles or classes dynamically based on the active route.

### Example:
```jsx
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
        Home
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
        About
      </NavLink>
    </nav>
  );
}

export default Navigation;

/* CSS Example */
/* Add this to your CSS file */
.active {
  font-weight: bold;
  color: blue;
}
```

## Summary
- **Router**: Wraps your application and provides routing context.
- **Link**: Creates navigational links for routing.
- **NavLink**: Enhances `Link` with styling for the active route.

By combining these components, you can build a dynamic and user-friendly navigation system for your React application.

