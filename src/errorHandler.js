const logger = require("./logger");
let defaultErrorMessage = null;

/**
 * Centralized error handling middleware.
 * @param {Error} err - The error object.
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @param {import('express').NextFunction} next - The next middleware function.
 */
const errorHandler = (err, req, res, next) => {
  // Default values for the error response
  let statusCode = err.statusCode || 500;
  let message = err.message

  // Check if it's an unknown error (statusCode does not exist or is not 4xx or 5xx)
  if (!err.statusCode || (err.statusCode >= 600 || err.statusCode < 400)) {
    statusCode = 500;
  }

  // Log the stack trace for unknown errors (status code outside 4xx and 5xx range)
  if (statusCode >= 500) {

    logger({ filename: "errors" }).error(
      JSON.stringify({ message: err.message, stack: err.stack })
    );

    const error = getError();
    message = error || "Something went wrong";
  }


  // Respond to the client with the error information
  res.status(statusCode).json({ error: { message } });
};

const setError = (message) => {
  defaultErrorMessage = message;
}

const getError = () => {
  return defaultErrorMessage;
}


/**
 * Custom Error class with additional properties and logging functionality.
 * @extends Error
 */
class CustomError extends Error {
  /**
   * Create a new instance of CustomError.
   * @param {string} message - The error message.
   * @param {number} [statusCode=500] - The HTTP status code associated with the error.
   * @param {boolean} [log=false] - Whether to log the error stack trace.
   */
  constructor(message, statusCode = 500, log = false) {
    super(message);

    /**
     * The HTTP status code associated with the error.
     * @type {number}
     */
    this.statusCode = statusCode;

    /**
     * The name of the error class.
     * @type {string}
     */
    this.name = this.constructor.name;

    if (log) {
      /**
       * Log the error stack trace using a logger.
       * @param {string} filename - The filename to associate with the log entry.
       */
      logger({ filename: "errors" }).error(JSON.stringify(this.stack));
    }
  }
}

module.exports = { errorHandler, CustomError, setError };
