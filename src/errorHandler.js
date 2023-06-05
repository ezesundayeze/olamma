const logger = require("./logger");
let errorMappings = require("./errorMappings");

/**
 * Centralized error handling middleware.
 * @param {Error} err - The error object.
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @param {import('express').NextFunction} next - The next middleware function.
 */
function errorHandler(err, req, res, next) {
  this.name = err.constructor.name;

  const { statusCode = err.statusCode || 500, message = err.message } =
    errorMappings[this.name] || {};

  if (statusCode >= 500) {
    logger({ filename: "errors" }).error(
      JSON.stringify({ message: err.message, stack: err.stack })
    );
  }

  res.status(statusCode).json({ error: message });
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

/**
 * Set custom error mappings.
 * @param {Object} mappings - The custom error mappings to add or override.
 * @example
 * // Add custom error mapping
 * setErrorMappings({
 *   CustomError: {
 *     statusCode: 404,
 *     message: 'Not found',
 *   },
 * });
 */
function setErrorMappings(mappings) {
  errorMappings = { ...errorMappings, ...mappings };
}

module.exports = { errorHandler, CustomError, setErrorMappings };
