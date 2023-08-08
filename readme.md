# Olamma - Error Handling middleware middleware for your Express API

![Test](https://github.com/ezesundayeze/olamma/actions/workflows/test.yml/badge.svg)

The purpose of this project is to ensure that you have control over the HTTP errors your API sends out to consumers


## Goal
The eventual goal is to allow you to build applications with better user experience. 

## Perspective
The unique perspective for this project is to allow you to start handling and providing useful error messages from day of your project.

## Practical use case

Your system throws a system error or an unexpected error like:

```js
new SyntaxError("Invalid or unexpected token");
```

With Olamma, instead users seeing this error, they'll see `something went wrong` and you can also change this message by setting the default error message by passing `setError` into your express middleware.

## Installation

```shell
npm install olamma
```

## Usage

Once you have installed the package, you can start using it in your Express API.

## Importing the Middleware

In your application server file, require `olamma` like so:

```js
const { errorHandler, CustomError } = require("olamma");
```

## Using the Middleware

`olamma` errorHandler function should be used as middleware in your Express application to handle errors. Here's an example of how to use it:

```js
app.use(errorHandler);
```

## Error Loggin

By default errors with 500 or > error codes are logged in the logs directory. However, you can decide to log other errors by setting the log value to true while throwing the error like so:

```js
throw new CustomError("Message", 400, true)
```

The third variable is the log settings.

## Example

Here's an example of how to use the error handling middleware in an Express application:

```js
const express = require("express");
const {
  errorHandler,
  CustomError,
} = require("olamma");

const app = express();

// Define your routes and middleware...

// Custom error example
app.get("/custom-error", (req, res, next) => {
  try {
    // Throw a custom error. Setting the log=true means you want to log message and stack trace. So, however, by default statusCode > 500 are all logged.
    throw new CustomError("This is a custom error message", 400, true);
  } catch (error) {
    next(error);
  }
});

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

## License
This package is licensed under the MIT license

## Contributions
Feel free to fork the project and add your contributions. Make sure to run `npm run test` and be sure all tests are passing before making a pull request. 
