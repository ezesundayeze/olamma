// Define the error mappings
module.exports = {
  /**
   * Maps error types to their corresponding status codes and error messages.
   * @type {Object.<string, { statusCode?: number, message: string }>}
   */
  SyntaxError: { statusCode: 500, message: "Something went wrong. We are working on it!" },
  TypeError: { statusCode: 500, message: "Something went wrong. We are working on it!" },
  ReferenceError: { statusCode: 500, message: "Something went wrong. We are working on it!" },
  RangeError: { statusCode: 500, message: "Something went wrong. We are working on it!" },
  ValidationError: { statusCode: 400, message: "Validation failed" },
  MongoError: { statusCode: 500, message: "Something went wrong. We are working on it!" },
  AuthenticationError: { statusCode: 401, message: "Something went wrong. We are working on it!" },
  MySQLError: { statusCode: 500, message: "Something went wrong. We are working on it!" },
  MongoDBError: { statusCode: 500, message: "Something went wrong. We are working on it!" },
  PostgreSQLError: { statusCode: 500, message: "Something went wrong. We are working on it!" },
  ConnectionError: { statusCode: 500, message: "Something went wrong. We are working on it!" },
  QueryError: { statusCode: 500, message: "Something went wrong. We are working on it!" },
  DuplicateKeyError: { statusCode: 500, message: "Something went wrong. We are working on it!" },
  DocumentNotFoundError: { statusCode: 500, message: "Something went wrong. We are working on it!" },
  WriteError: { statusCode: 500, message: "Something went wrong. We are working on it!" },
  UniqueConstraintError: {
    statusCode: 500,
    message: "Something went wrong. We are working on it!",
  },
  TransactionError: { statusCode: 500, message: "Something went wrong. We are working on it!" },
  ForeignKeyConstraintError: {
    statusCode: 500,
    message: "Something went wrong. We are working on it!",
  },
  CastError: { statusCode: 500, message: "Something went wrong. We are working on it!" },
  IndexError: { statusCode: 500, message: "Something went wrong. We are working on it!" },
  NotNullConstraintError: {
    statusCode: 500,
    message: "Something went wrong. We are working on it!",
  },
  TimeoutError: { statusCode: 500, message: "Something went wrong. We are working on it!" },
  PoolError: { statusCode: 500, message: "Something went wrong. We are working on it!" },
  ConcurrencyError: { statusCode: 500, message: "Something went wrong. We are working on it!" },
  ExecutionError: { statusCode: 500, message: "Something went wrong. We are working on it!" },
  AccessDeniedError: { statusCode: 403, message: "Access denied" },
  ConnectionLostError: { statusCode: 500, message: "Something went wrong. We are working on it!" },
  CursorNotFoundError: { statusCode: 500, message: "Something went wrong. We are working on it!" },
  ChangeStreamError: { statusCode: 500, message: "Something went wrong. We are working on it!" },
  QueryCanceledError: { statusCode: 500, message: "Something went wrong. We are working on it!" },
  BulkWriteError: { statusCode: 500, message: "Something went wrong. We are working on it!" },
  WriteConcernError: { statusCode: 500, message: "Something went wrong. We are working on it!" },
  ExceededMemoryLimitError: {
    statusCode: 500,
    message: "Something went wrong. We are working on it!",
  },
  Error: { statusCode: 500, message: "Something went wrong. We are working on it!" }
};
