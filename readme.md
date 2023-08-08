# Olamma - Express API Error Handling Middleware

![Test](https://github.com/ezesundayeze/olamma/actions/workflows/test.yml/badge.svg)

The Olamma project focuses on empowering you with control over the HTTP error responses your API delivers to consumers.

## Goal
The ultimate objective of this project is to enable you to create applications that provide enhanced user experiences.

## Unique Approach
Olamma takes a distinctive approach by allowing you to immediately start managing and delivering meaningful error messages from the very beginning of your project.

## Practical Scenario

Imagine your system encounters an unexpected error, such as:

```js
new SyntaxError("Invalid or unexpected token");
```

With Olamma, instead of users encountering this technical message, they will receive a user-friendly "something went wrong" error message. Moreover, you can effortlessly modify this message by using the `setError` function within your Express middleware.

## Installation

```shell
npm install olamma
```

## Usage

After installing the package, you can seamlessly integrate it into your Express API.

## Importing the Middleware

In your application's server file, import `olamma` as follows:

```js
const { errorHandler, CustomError, setError } = require("olamma");
```

## Implementing the Middleware

Use the `errorHandler` function from `olamma` as middleware in your Express application for error handling. Here's an example of its usage:

```js
setError("Your Default Error message"); // This is optional. If not set, the default error message will be "something went wrong".
// Implement the error handling middleware
app.use(errorHandler);
```

## Error Logging

By default, errors with status codes of 500 or greater are logged in the "logs" directory. However, you can customize the logging behavior by setting the log parameter to `true` when throwing an error, as shown below:

```js
throw new CustomError("Message", 400, true);
```

In this case, the third argument, `true`, enables logging.

## Example

Here's an example of utilizing the error handling middleware within an Express application:

```js
const express = require("express");
const {
  errorHandler,
  CustomError,
  setError
} = require("olamma");

const app = express();

// Define your routes and middleware...

// Example of using custom error
app.get("/custom-error", (req, res, next) => {
  try {
    // Throw a custom error. Setting the log=true indicates you wish to log the message and stack trace. By default, all status codes above 500 are logged.
    throw new CustomError("This is a custom error message", 400, true);
  } catch (error) {
    next(error);
  }
});

setError("Your Default Error message"); // This is optional. If not set, the default error message will be "something went wrong".

// Implement the error handling middleware
app.use(errorHandler);

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

## License
This package is licensed under the MIT license.

## Contributions
You're welcome to fork the project and contribute. Ensure that all tests pass by running `npm run test` before submitting a pull request.