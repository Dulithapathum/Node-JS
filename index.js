// Import the 'createServer' function from the 'http' module
import { createServer } from "node:http";

// Create a new HTTP server
createServer((req, res) => {
  // Create a URL object to parse the request URL with a base URL of 'http://localhost:4000'
  const urlParams = new URL(`http://localhost:4000${req.url}`);

  // Log the search parameters from the request URL to the console
  console.log(urlParams.searchParams);

  // Check the request URL and respond with different content based on the path
  if (req.url === "/") {
    // Respond with a simple HTML message for the home page
    res.end(`<h1>Home</h1>`);
  } else if (req.url === "/about") {
    // Respond with a simple HTML message for the about page
    res.end(`<h1>About</h1>`);
  } else if (req.url === "/Blog") {
    // Respond with a simple HTML message for the blog page
    res.end(`<h1>Blog</h1>`);
  }
  // Add more routes if needed, or handle 404 (Not Found) if no matching route
}).listen(4000, () => {
  // Log a message to the console when the server starts listening on port 4000
  console.log("Server is running");
});
