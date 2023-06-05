# Olamma - Error Handling Middleware

This package provides a centralized error handling middleware for Express applications. It includes an error handler function and a custom error class that can be used to create and handle custom errors.

## Installation

```shell
npm install olamma
```

## Usage

Once you have installed the package, you can start using it in your Express application.

## Importing the Middleware

In your application file, require the error handling middleware:

```js
const { errorHandler, CustomError } = require("olamma");
```

## Using the Middleware

The errorHandler function should be used as middleware in your Express application to handle errors. Here's an example of how to use it:

```js
app.use(errorHandler);
```

## Error Mappings

This project includes a predefined set of error mappings that map common error types to their corresponding HTTP status codes and error messages. These mappings are used by the errorHandler function to send a consistent response for known error types.

You can modify or extend the error mappings as needed for your application. The mappings are defined in the errorMappings object and can be customized according to your requirements.

To add or override error mappings, you can use the setErrorMappings function provided by the package. Here's an example:

```js
setErrorMappings({
  SyntaxError: {
    statusCode: 404,
    message: "Not found",
  },
});
```

Here is also how the errorMappings object look like

```js
{
  SyntaxError: { statusCode: 500, message: "Internal server error" },
  TypeError: { statusCode: 500, message: "Internal server error" },
  ReferenceError: { statusCode: 500, message: "Reference error" },
  RangeError: { statusCode: 500, message: "Invalid input range" },
  ValidationError: { statusCode: 400, message: "Validation failed" },
  MongoError: { statusCode: 500, message: "Database error" },
  AuthenticationError: { statusCode: 401, message: "Authentication failed" },
  MySQLError: { statusCode: 500, message: "MySQL database error" },
  MongoDBError: { statusCode: 500, message: "MongoDB database error" },
  PostgreSQLError: { statusCode: 500, message: "PostgreSQL database error" }
  }
```

In the example above, we add a custom error mapping for the SyntaxError class, setting a status code of 404 and an error message of "Not found". This allows you to customize the response for specific error types.

## Example

Here's an example of how to use the error handling middleware in an Express application:

```js
const express = require("express");
const {
  errorHandler,
  CustomError,
  setErrorMappings,
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

// Set custom error mappings. You can have this in a separate file
setErrorMappings({
  CustomError: {
    statusCode: 404,
    message: "Not found",
  },
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
Feel free to fork the project and add your contributions
