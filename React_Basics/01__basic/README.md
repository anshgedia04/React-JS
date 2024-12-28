# Project Title

how react works 

## DOM Creation:

React uses a lightweight Virtual DOM to represent the actual DOM. When you call ReactDOM.createRoot(), it sets up a root for React to manage within the actual DOM.

## Rendering to the Root Node

After creating the Virtual DOM, React uses the render() method to render the React components to the root DOM node (the div or other element specified in your HTML, often with an id like root)

## Integration with HTML

The React app is then displayed within the designated root element of the HTML file, providing a seamless user experience

## Single Page Rendering

React is designed to render a single page application (SPA). This means that the entire application is loaded on a single HTML page, and React manages the updates and rendering of components dynamically. When a user interacts with the app, React updates only the necessary parts of the DOM, providing a fast and responsive user experience without the need to reload the entire page.

#1,2,3