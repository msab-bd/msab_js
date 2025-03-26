
// Express.js router for handling GET requests
const express = require('express');
const app = express();
const blogRouter = require('./blogRouter'); // assuming this file is named blogRouter.js

app.use('/api/blogs', blogRouter); // mount the router at /api/blogs

// ... other app setup and middleware ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});