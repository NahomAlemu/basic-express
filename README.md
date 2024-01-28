# basic-express

This project is a simple web server built using Express in Node.js. It demonstrates basic routing and error handling in an Express application.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To run this project, you will need Node.js and npm installed on your system. You can download and install them from [Node.js official website](https://nodejs.org/).

### Installing

First, clone the repository to your local machine:

```
https://github.com/NahomAlemu/basic-express
```
```
cd basic-express
```

## Then, install the required dependencies:
```
npm install
```
### Running the Server

To start the server, run:
```
npm start
```
The server will start on http://localhost:3000. 

You can access the following routes:

GET / - Displays a "Hello World" message.


GET /about - Shows the "About page" message.

Regular expression route for admin/user - The server includes a route that uses a regular expression to match URLs like `/admin/settings` and `/user/profile`. It responds with the role (admin or user) and the path.

Use a browser or a tool like Postman to send requests to URLs like `http://localhost:3000/admin/settings` or `http://localhost:3000/user/profile`.


GET /get - Receives query string data and logs it to the console. You can test this route by accessing `http://localhost:3000/get?param1=value1&param2=value2`, replacing `param1`, `param2`, `value1`, and `value2` with your own query parameters.
Any other route will display a "404 - Not Found" message.

### Testing Query String Functionality

To test the query string functionality:
1. Start the server as described above.
2. Use a browser or a tool like Postman to send a GET request to `http://localhost:3000/get` with query parameters, such as `http://localhost:3000/get?name=John&age=30`.
3. Check the server console to see the output of the query parameters.

### Conditional Routing

The server implements conditional routing on the `/foo` route. When a request is sent to this route, the server randomly chooses between two responses:

1. "sometimes this" - Served directly by the first route handler for `/foo`.
2. "and sometimes that" - Served by a second route handler for `/foo`, which is reached when the first handler calls `next()`.

To test this route, repeatedly send GET requests to `http://localhost:3000/foo` and observe the alternating responses.


Screenshot of ESLint displaying its version

<img width="806" alt="eslint" src="https://github.com/NahomAlemu/basic-express/assets/55855783/ae8b2aa7-c5bf-4b48-9af5-9295cc91e6b4">


## License
This project is licensed under the ISC License.

